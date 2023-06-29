import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output() city: string = '';
  @Output() info: any[] = [];

spreadCityData(event: any) {
  this.city = event.name;
  this.info = event.info;
}


}
