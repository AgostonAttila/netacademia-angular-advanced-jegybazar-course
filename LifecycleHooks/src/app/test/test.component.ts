import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Log } from 'ng2-logger';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy, DoCheck, OnChanges, AfterViewInit,
  AfterViewChecked, AfterContentInit, AfterContentChecked {
  @Input() testData;
  @Input() notModified;

  logger = Log.create('Test');

  constructor() {
    this.logger.color = 'black';
    this.logger.data('constructor');
  }

  ngAfterContentInit(): void {
    this.logger.data('afterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logger.data('afterContentChecked');
  }

  ngAfterViewChecked(): void {
    this.logger.data('afterViewChecked');
  }

  ngAfterViewInit(): void {
    this.logger.data('afterViewInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.data('onChanges: ', changes);
  }

  ngDoCheck(): void {
    this.logger.data('doCheck');
  }

  ngOnInit() {
    this.logger.data('onInit, testData: ', this.testData);
  }

  ngOnDestroy(): void {
    this.logger.data('onDestroy');
  }
}
