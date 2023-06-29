import { Component, EventEmitter, Input, Output } from '@angular/core';
import { detData, getSingleCountry } from './../services/commonFunctions';
import { ISingleCounrtyInfo } from '../services/types';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  chosenCountry:string = '';
  searchParams:string = '';
  defaultCountries:string[] = ["United Kingdom", "Canada", "Ukraine", "Brazil", "Australia"];
  @Output() singleCountryData: any[] = [];
  @Output("cities") citiesArray : ISingleCounrtyInfo[] = [];
  @Output() cityChosen = new EventEmitter<any>();
  filteredCities : ISingleCounrtyInfo[] = [];

  ngOnInit() {
   detData("all").then( data => this.citiesArray = [...data])
  }

  setCountry (event: any) {
   const name:string = event.target.value;
     getSingleCountry(name).then( (data:any) => {
    this.chosenCountry = data[0].name.common;
    this.singleCountryData = data[0];
    console.log(data[0])
    this.cityChosen.emit({name:this.chosenCountry, info: this.singleCountryData});
   });
   
  }
 searchCountry (event:any) {
  this.searchParams = event.target.value;
  this.filteredCities = this.citiesArray.filter( (city:ISingleCounrtyInfo) => city.name.common.toLocaleLowerCase().includes(this.searchParams.toLocaleLowerCase()) );
  }
  cityClick(city:string) {
    getSingleCountry(city).then( (data:any) => {
      this.chosenCountry = data[0].name.common;
      this.singleCountryData = data[0];
      console.log(data[0])
      this.cityChosen.emit({name:this.chosenCountry, info: this.singleCountryData});
     });
    this.chosenCountry = city;
    this.searchParams = ''

  }
}
