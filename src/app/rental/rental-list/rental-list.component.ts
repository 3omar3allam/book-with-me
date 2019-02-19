import { Component, OnInit, OnDestroy } from '@angular/core';
import { RentalService } from '../shared/rental.service';
import { Subscription } from 'rxjs';
import { Rental } from '../shared/rental.model';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit, OnDestroy {

  rentals: Rental[];
  rentalsSub: Subscription;
  refreshSub: Subscription;
  loading: boolean;

  constructor(
    private _rentalService: RentalService,
    private _commonService: CommonService
  ) { }
  ngOnInit() {
    this.loading = true;
    this.rentalsSub = this._rentalService.getRentals()
      .subscribe(
        (rentals: Rental[]) => {
          this.rentals = rentals;
          this.loading = false;
        }
      );

    this.refreshSub = this._commonService.getRefreshListener()
      .subscribe(_ => {
        this.ngOnInit();
      });
  }
  ngOnDestroy() {
    this.rentalsSub.unsubscribe();
    this.refreshSub.unsubscribe();
  }
}
