import { Injectable } from '@angular/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TestService {
  data = { text: new Date().toTimeString() };
  data$ = new BehaviorSubject<{ text: string }>(this.data);

  constructor() {
    const intervalTime = 10000;
    new TimerObservable(intervalTime, intervalTime).subscribe(
      () => {
        // this.data.text = new Date().toTimeString();
        this.data = { text: new Date().toTimeString() };
        this.data$.next(this.data);
      }
    );
  }
}
