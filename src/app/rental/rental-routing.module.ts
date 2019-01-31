import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalDetailsComponent } from './rental-details/rental-details.component';

const routes: Routes = [
  {
    path: "rentals",
    component:RentalComponent,
    children: [
      { path: "", component: RentalListComponent},
      { path: ":rentalId", component: RentalDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalRoutingModule {}
