import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityInfoComponent } from './city-info/city-info.component';
import { RatingsComponent } from './ratings/ratings.component';
import { FlagsComponent } from './flags/flags.component';

const routes : Routes = [
  {
    path: '',
    component: CityInfoComponent,
  },
  {
    path: 'ratings',
    component: RatingsComponent,
  },
  {
    path: 'flags',
    component: FlagsComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
