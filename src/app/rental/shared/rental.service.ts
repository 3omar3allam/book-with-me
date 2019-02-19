import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Rental } from './rental.model';

const RENTAL_URL = environment.API_URL + 'rentals/'

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(
    private http: HttpClient
  ) { }

  public getRentals(): Observable<Rental[]> {
    return <Observable<Rental[]>>this.http.get(RENTAL_URL);
  }

  public getRentalById(rentalId: string): Observable<Rental> {
    return <Observable<Rental>>this.http.get(RENTAL_URL + rentalId);
  }
}
