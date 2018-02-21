import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  IterableDiffer,
  IterableDiffers,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Log } from 'ng2-logger';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements DoCheck, OnChanges, AfterViewInit {
  @Input() items: { name: string, url: string }[];
  private logger = Log.create('NavBarComponent');
  private differ: IterableDiffer<any>;

  constructor(
    private cdr: ChangeDetectorRef,
    private iterableDiffers: IterableDiffers
  ) {
    this.logger.color = 'brown';
    this.differ = this.iterableDiffers.find([]).create(null);
  }

  ngAfterViewInit(): void {
    this.logger.data('AfterViewInit');
    this.cdr.detach();
  }

  ngDoCheck(): void {
    this.logger.data('DoCheck');
    if (this.differ != null) {
      const changes = this.differ.diff(this.items);
      if (changes) {
        console.log(changes);
        changes.forEachItem(item => console.log('maybe changed item: ', item));
        this.cdr.detectChanges();
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.data('OnChanges', changes);
  }

}
