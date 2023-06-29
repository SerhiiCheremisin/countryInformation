import { Component, Input, Output } from '@angular/core';
import { ISingleCounrtyInfo } from '../services/types';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.scss']
})

export class CityInfoComponent {

  @Input() cityArray: any;
  @Input() cityName: any;
  ngOnInit() {
  
  }
  constructor () {

  }


}


