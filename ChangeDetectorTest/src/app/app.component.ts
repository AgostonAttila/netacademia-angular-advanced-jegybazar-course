import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Log } from 'ng2-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnChanges {
  navBarItems: { name: string, url: string }[] = [{ name: 'home', url: 'home' }, { name: 'one', url: 'one' }];
  private logger = Log.create('AppComponent');

  constructor() {
    this.logger.color = 'black';
  }

  ngDoCheck(): void {
    this.logger.data('DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.data('OnChanges', changes);
  }

  changeMenu() {
    this.navBarItems[0] = { name: new Date().toTimeString(), url: this.navBarItems[0].url };
  }
}
