import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import { RentalRoutingModule } from './rental-routing.module';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { MapComponent } from '../common/map/map.component';
import { MaterialModule } from '../common/material.module';

@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailsComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    RentalRoutingModule,
    MaterialModule,
  ]
})
export class RentalModule { }
