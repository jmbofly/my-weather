import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { LocationSearchComponent } from './location-search/location-search.component';

@NgModule({
  declarations: [LocationComponent, LocationSearchComponent],
  imports: [
    SharedModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
