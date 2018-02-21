import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Log } from 'ng2-logger';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component implements DoCheck, OnChanges, AfterViewInit, AfterViewChecked {
  @Input() buttonText: { text: string };
  private logger = Log.create('Test1Component');

  constructor(private cdr: ChangeDetectorRef) {
    this.logger.color = 'aquamarine';
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }

  ngDoCheck(): void {
    this.logger.data('DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.data('OnChanges', changes);
    if (changes['buttonText'] != null) {
      this.cdr.detectChanges();
    }
  }

  changeButtonText() {
    // this.buttonText.text = new Date().toTimeString();
    this.buttonText = { text: new Date().toTimeString() };
    this.cdr.detectChanges();
  }

  ngAfterViewChecked(): void {
    this.logger.data('afterViewChecked');
  }

}
