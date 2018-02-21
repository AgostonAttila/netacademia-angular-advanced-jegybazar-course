import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Log } from 'ng2-logger';
import { TestService } from '../test.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.component.html',
  styleUrls: ['./one-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnePageComponent implements DoCheck, OnChanges, AfterViewChecked {
  buttonText = { text: 'gomb' };
  buttonText$: Observable<{ text: string }>;
  streamMode = false;
  private logger = Log.create('OnePageComponent');

  constructor(
    private testService: TestService,
    private cdr: ChangeDetectorRef
  ) {
    this.logger.color = 'aqua';

    this.buttonText$ = this.testService.data$;
    this.testService.data$.subscribe(
      buttonText => {
        this.buttonText = buttonText;
        // create new reference with ES6
        // this.buttonText = Object.assign({}, buttonText);
        // this.buttonText = {...buttonText};
        this.cdr.markForCheck();
      }
    );
  }

  ngAfterViewChecked(): void {
    this.logger.data('afterViewChecked');
  }

  ngDoCheck(): void {
    this.logger.data('DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.data('OnChanges', changes);
  }

  clicButton() {
    this.logger.data('click test button');
  }

  changeButtonText() {
    this.buttonText = { text: new Date().toTimeString() };
  }

  setStreamMode($event, value) {
    $event.preventDefault();
    this.streamMode = value;
  }
}
