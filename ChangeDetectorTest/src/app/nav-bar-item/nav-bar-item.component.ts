import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Log } from 'ng2-logger';

@Component({
  selector: 'app-nav-bar-item',
  templateUrl: './nav-bar-item.component.html',
  styleUrls: ['./nav-bar-item.component.css']
})
export class NavBarItemComponent implements DoCheck, OnChanges {
  @Input() url: string;
  private logger = Log.create('NavBarItemComponent');

  constructor() {
    this.logger.color = 'burlywood';
  }

  ngDoCheck(): void {
    this.logger.data('DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.data('OnChanges', changes);
  }

}
