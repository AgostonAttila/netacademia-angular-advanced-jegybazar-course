import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarItemComponent } from './nav-bar-item/nav-bar-item.component';
import { OnePageComponent } from './one-page/one-page.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { HomeComponent } from './home/home.component';
import { Test3Component } from './test3/test3.component';
import { TestService } from './test.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarItemComponent,
    OnePageComponent,
    Test1Component,
    Test2Component,
    HomeComponent,
    Test3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
