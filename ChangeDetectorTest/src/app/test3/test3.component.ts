import { AfterViewChecked, Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Log } from 'ng2-logger';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements DoCheck, OnChanges, AfterViewChecked {
  private logger = Log.create('Test3Component');

  constructor() {
    this.logger.color = 'blue';
  }

  ngDoCheck(): void {
    this.logger.data('DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.data('OnChanges', changes);
  }

  ngAfterViewChecked(): void {
    this.logger.data('afterViewChecked');
  }

}
