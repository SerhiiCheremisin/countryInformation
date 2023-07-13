import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CityInfoComponent } from './city-info/city-info.component';
import { BlankCityComponent } from './city-info/blank-city/blank-city.component';
import { AppService } from './app.service';
import { RouterModule, Routes } from '@angular/router';
import { RatingsComponent } from './ratings/ratings.component';
import { FlagsComponent } from './flags/flags.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CityInfoComponent,
    BlankCityComponent,
    RatingsComponent,
    FlagsComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
