import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {NavbarComponent} from './component/navbar/navbar.component';
import {JumbotronComponent} from './component/jumbotron/jumbotron.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent , NavbarComponent, JumbotronComponent],
  bootstrap:    [ AppComponent ]

})
export class AppModule { }
