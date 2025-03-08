import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DepartureListComponent } from './components/departure-list/departure-list.component';
import { DepartureItemComponent } from './components/departure-item/departure-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartureListComponent,
    DepartureItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
