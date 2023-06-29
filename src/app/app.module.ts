import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CityInfoComponent } from './city-info/city-info.component';
import { BlankCityComponent } from './city-info/blank-city/blank-city.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CityInfoComponent,
    BlankCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
