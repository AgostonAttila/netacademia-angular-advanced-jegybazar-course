import { AfterViewChecked, Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Log } from 'ng2-logger';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements DoCheck, OnChanges, AfterViewChecked {
  @Input() buttonText: { text: string };
  private logger = Log.create('Test2Component');

  constructor() {
    this.logger.color = 'cornflowerblue';
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

  ngAfterViewChecked(): void {
    this.logger.data('afterViewChecked');
  }

}
