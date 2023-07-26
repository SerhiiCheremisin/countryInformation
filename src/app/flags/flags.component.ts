import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ISingleCounrtyInfo } from '../services/types';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent {
  constructor( private appService: AppService ) {

  }

  shuffeledCountries : ISingleCounrtyInfo[] = [];
  shuffeledAnswers : ISingleCounrtyInfo[] = [];
  counter : number = 0;
  correctAnswers: number = 0;
  incorrectAnswers:number = 0;
  doShuffle(array: ISingleCounrtyInfo[]) :void {
    const countriesCopy = [...array].sort(() => Math.random() - 0.5);
    this.shuffeledCountries = [...countriesCopy].slice( 0, 51);
  }
  createAnswers (array :ISingleCounrtyInfo[]):void {
    const filteredArray : ISingleCounrtyInfo[] = [...array].sort( ( ) => Math.random() - 0.5).filter( (el :ISingleCounrtyInfo) => el.name.common !== this.shuffeledCountries[this.counter].name.common).slice(0 , 3);
    filteredArray.push(this.shuffeledCountries[this.counter]);
    filteredArray.sort( ( ) => Math.random() - 0.5);
    this.shuffeledAnswers = [...filteredArray];
  }
  onAnswerClick(event:any):void {
   
    if (event.target.value === this.shuffeledCountries[this.counter].name.common) {
      event.target.style.backgroundColor = "green";
      setTimeout( () => {
        this.counter = this.counter + 1;
        this.correctAnswers = this.correctAnswers + 1;
        this.createAnswers(this.appService.allCities);
        event.target.style.backgroundColor = "white";
      }, 500)
      return
    } else {
      event.target.style.backgroundColor = "red";
      setTimeout( () => {
        this.counter = this.counter + 1;
        this.incorrectAnswers = this.incorrectAnswers + 1;
        this.createAnswers(this.appService.allCities);
      }, 500)
      return
    }
  }
     
  ngOnInit(): void {
  this.doShuffle(this.appService.allCities);
  this.createAnswers(this.appService.allCities);
  }

ngDoCheck(): void {
  console.log(this.shuffeledAnswers)
 if (this.counter === 51) {
   setTimeout ( () => {
    alert("the gami is over and about to be restarted");
    this.counter = 0;
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.doShuffle(this.appService.allCities);
    this.createAnswers(this.appService.allCities);
   }, 500)
 }
}
}
