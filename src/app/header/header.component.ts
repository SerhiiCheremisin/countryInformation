import { Component } from '@angular/core';
import { ISingleCounrtyInfo } from '../services/types';
import { AppService } from '../app.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   constructor( public appService: AppService) {

  }

  searchParams:string = '';
  filteredCities : ISingleCounrtyInfo[] = [];

  ngOnInit() {
    this.appService.fetchAllData("all").then( data => this.appService.allCities = [...data] );
  }

  sendData (data : ISingleCounrtyInfo[]) {
    this.appService.chosenCountry = data[0].name.common;
    this.appService.singleCountryData = data;
    this.appService.isCountryChosen = true;
  }

  setCountry (event: any) {
   const name:string = event.target.value;
   this.appService.fetchSingleCountry(name)
       .then( (data:ISingleCounrtyInfo[]) => {
        this.sendData(data);
   });
   
  }
 searchCountry (event:any) {
  this.searchParams = event.target.value;
  this.filteredCities = this.appService.allCities.filter( (city:ISingleCounrtyInfo) => city.name.common.toLocaleLowerCase().includes(this.searchParams.toLocaleLowerCase()) );
  }

  cityClick(city:string) {
    this.appService.fetchSingleCountry(city).then( (data:ISingleCounrtyInfo[]) => {
      this.sendData(data);
     });
    this.searchParams = ''
  }
}
