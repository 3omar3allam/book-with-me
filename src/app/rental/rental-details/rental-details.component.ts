import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bwm-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.scss']
})
export class RentalDetailsComponent implements OnInit, OnDestroy {

  rental: Rental;
  rentalByIdSub: Subscription;
  loading: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _rentalService: RentalService  ) { }

  ngOnInit() {
    this.loading = true;
    this.rental = new Rental();
    this._route.params.subscribe(
      (params: Params) => {
        this.getRental(params.rentalId);
      }
    );
  }

  ngOnDestroy() {
    this.rentalByIdSub.unsubscribe();
  }


  getRental(rentalId: string) {
    this.rentalByIdSub = this._rentalService.getRentalById(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental;
        this.loading = false;
      }
    );
  }

}
