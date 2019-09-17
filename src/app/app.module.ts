import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PrincipalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
