import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ISingleCounrtyInfo } from '../services/types';
import { sortType } from '../services/types';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent {

  countries :ISingleCounrtyInfo[] = [];
  defaultCityLimitation:number = 10;
  defaultAreaLimitation:number = 10;
  mostPopulatedCountries : ISingleCounrtyInfo[] = [];
  mostLargerArea : ISingleCounrtyInfo[] = [];

  constructor (public appService : AppService,  
               private router:Router) {

  }

  ngOnInit() {
    this.countries = this.appService.allCities;
    this.sortToLesser('population', this.defaultCityLimitation);
    this.sortToLesser('area', this.defaultAreaLimitation);
  }
  sortToLesser (type: sortType, limitation: number):void  {

    if (type === 'population') {
      this.mostPopulatedCountries = [...this.countries].sort((a, b) => {
        if(a.population < b.population) return 1;
        if(a.population > b.population) return -1;
        return 0;
      } ).slice(0 , limitation);
    }
   if (type === 'area') {
    this.mostLargerArea = [...this.countries].sort((a, b) => {
      if(a.area < b.area) return 1;
      if(a.area > b.area) return -1;
      return 0;
    } ).slice(0 , limitation);
    }
  }

setPopulation(event:any):void {
  const limit = event.target.value;
  this.sortToLesser('population', limit);
}

setArea(event:any):void {
  const limit = event.target.value;
  this.sortToLesser('area', limit);
}

getNewData (name:string) {
  console.log(name)
  this.appService.fetchSingleCountry(name).then(
    (data:ISingleCounrtyInfo[]) => {
      this.appService.singleCountryData = data;
      this.router.navigate(['/']); 
      this.appService.isCountryChosen = true;
      this.appService.chosenCountry = name;
    }
  )
}
}
