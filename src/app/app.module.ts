import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DepartureListComponent } from './components/departure-list/departure-list.component';
import { DepartureItemComponent } from './components/departure-item/departure-item.component';

@NgModule({
  declarations: [AppComponent, DepartureListComponent, DepartureItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
