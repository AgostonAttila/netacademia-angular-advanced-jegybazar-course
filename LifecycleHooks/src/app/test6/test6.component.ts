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
  selector: 'app-test6',
  templateUrl: './test6.component.html',
  styleUrls: ['./test6.component.css']
})
export class Test6Component implements OnInit, OnDestroy, DoCheck, OnChanges, AfterViewInit,
  AfterViewChecked, AfterContentInit, AfterContentChecked {
  @Input() testData;
  @Input() notModified;

  logger = Log.create('Test6');

  constructor() {
    this.logger.color = 'red';
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
