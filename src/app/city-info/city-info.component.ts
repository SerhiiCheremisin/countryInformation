import { Component } from '@angular/core';
import { ISingleCounrtyInfo, tooltipType } from '../services/types';
import { AppService } from '../app.service';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.scss']
})

export class CityInfoComponent {
  constructor ( public appService: AppService) {

  }
  isAdditionalInfoNeeded : boolean = false;
  toolpitInformation : string = '';
  keys: string [] = [];
  values: any [] = [];

  ngOnInit() {
  
  }

  mouseInfoEnter = (infoType: tooltipType, info:any) => {
    switch(infoType) {
      case "currency" : {
        this.appService.fetchAllData(`currency/${info}`)
        .then( (data:ISingleCounrtyInfo[]) => data[0].currencies)
        .then( currency =>  {
          this.toolpitInformation = "The currency of this country is: ";
          for ( const [key, value] of Object.entries(currency) ) {
            this.keys.push(key);
            this.values.push(value);
          }
        }) 
        .then( () => {
          let symbolRenderLogic = this.values[0].symbol === undefined ? "" : this.values[0].symbol
          this.toolpitInformation = `The currency of this country is: ${symbolRenderLogic} ${this.values[0].name}`;
        })
        break;
      }
      case "country" : {
        this.appService.fetchByAlpha(info)
        .then(( data:ISingleCounrtyInfo[]) => { 
          this.toolpitInformation = `This is: ${data[0].name.common} `;
        })
        break;
      }
    }
    this.isAdditionalInfoNeeded = true;
  }

  mouseInfoLeave = () => {
    this.isAdditionalInfoNeeded = false;
    this.keys = [...[]];
    this.values = [...[]];
  }
  
  choseCountryFromBorder = (country:string) => {
   this.appService.fetchByAlpha(country)
   .then( (data:ISingleCounrtyInfo[]) => {
    this.appService.chosenCountry = data[0].name.common;
    this.appService.singleCountryData = data;
    this.isAdditionalInfoNeeded = false;
    this.toolpitInformation = "";
    this.keys = [...[]];
    this.values = [...[]];
   })
  }
}


