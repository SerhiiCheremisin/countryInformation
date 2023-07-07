import { Injectable } from '@angular/core';
import { ISingleCounrtyInfo } from './services/types';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  defaultCountries : string[] = ["United Kingdom", "Canada", "Ukraine", "Brazil", "Australia"];
  singleCountryData : ISingleCounrtyInfo [] = [];
  isCountryChosen : boolean = false;
  allCities : ISingleCounrtyInfo [] = [];
  chosenCountry: string = "";

  fetchAllData = async function (URL: string):Promise<any> {
    if ( URL === "all") {
      try {
       const request = await fetch(`https://restcountries.com/v3.1/${URL}`);
       const respond = await request.json();
       return respond
      }
      catch (e) {
       console.log(e)
      }
     } else {
       try {
         const request = await fetch(`https://restcountries.com/v3.1/${URL}`);
         const respond = await request.json();
         return respond
       } catch (e) {
         console.log(e)
        }
       }
   }

  //  setSingleCountry = function (array: ISingleCounrtyInfo[] ) {
  //   this.singleCountryData = array;
  //  }
  
   fetchByAlpha = async function (alpha:string) {
    try {
      const request = await fetch(`https://restcountries.com/v3.1/alpha/${alpha}`);
      const respond = await request.json();
      return respond
     }
     catch (e) {
      console.log(e)
     }
   }
   fetchSingleCountry = async function (name:string):Promise<any> {
    try {
      const request = await fetch(`https://restcountries.com/v3.1/name/${name.replaceAll(" ", "%20")}`);
      const respond = await request.json();
      return respond
     }
     catch (e) {
      console.log(e)
     }
   }
}
