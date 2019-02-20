/// <reference types="@types/googlemaps" />
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private geocoder: google.maps.Geocoder;
  private locationCache: any = {};

  constructor(){
  }

  public geocodeAddress(address: string): Promise<any>{
    return new Promise((resolve, reject) => {
      let cachedAddress = this.locationCache[address];
      if(cachedAddress) {
        resolve(cachedAddress)
      }
      else{
        this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({'address': address},(result,status)=>{
          if(status == google.maps.GeocoderStatus.OK){
            this.locationCache[address] = result[0].geometry.location;
            resolve(result[0].geometry.location);
          }
          else{
            reject("Failed to load map.");
          }
        });
      }
    });
  }
}
