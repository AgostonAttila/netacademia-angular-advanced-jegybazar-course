import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Log } from 'ng2-logger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements DoCheck, OnChanges {
  private logger = Log.create('HomeComponent');

  constructor() {
    this.logger.color = 'silver';
  }

  ngDoCheck(): void {
    this.logger.data('DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.data('OnChanges', changes);
  }

}
