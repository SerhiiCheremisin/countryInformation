import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent {
  constructor( public appService: AppService ) {

  }
  ngOnInit(): void {
    
  }

}
