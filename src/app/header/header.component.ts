import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  chosenCountry :string = '';

  setCountry(event: any) {
   this.chosenCountry = event.target.value;
  }

  
}
