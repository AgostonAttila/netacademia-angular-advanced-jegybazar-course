import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Log } from 'ng2-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, DoCheck, OnChanges, AfterViewInit,
  AfterViewChecked, AfterContentInit, AfterContentChecked {
  visibleButton = true;
  notModified = 'haUgyanazAkkorNemValtozik';
  testData: string = new Date().toTimeString();

  logger = Log.create('AppComponent');

  constructor() {
    this.logger.color = 'black';
    this.logger.data('constructor');
  }

  changeInputTestData() {
    this.testData = new Date().toTimeString();
  }

  changeInputNotModified() {
    this.notModified = 'haUgyanazAkkorNemValtozik';
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
    this.logger.data('onInit, testData: ');
  }

  ngOnDestroy(): void {
    this.logger.data('onDestroy');
  }
}
