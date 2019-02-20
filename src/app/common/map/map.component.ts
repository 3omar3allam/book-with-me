/// <reference types="@types/googlemaps" />
import { Component, ViewChild, ChangeDetectorRef, Input, OnChanges } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {

  @Input()address;

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  mapFailed = false;

  constructor(
    private cdRef: ChangeDetectorRef,
    private mapService:MapService
  ) { }

  ngOnChanges() {
    if(this.address){
      this.mapService.geocodeAddress(this.address)
      .then(location => {
        var mapProp = {
          center: location,
          zoom: 13,
          mapTypeId : google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement,mapProp);
        new google.maps.Marker({
          map: this.map,
          position: mapProp.center
        });
        let circle = new google.maps.Circle({
          center: location,
          radius: 800,
          strokeWeight: 0,
          fillColor: 'red'
        });
        circle.setMap(this.map);
      })
      .catch(_ => {
        console.log('catched');
        var mapProp = {
          center: new google.maps.LatLng(0,0),
          zoom: 13,
          mapTypeId : google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement,mapProp);
        let marker = new google.maps.Marker({
          map: this.map,
          position: new google.maps.LatLng(0,0)
        });
        let info = new google.maps.InfoWindow({
          content: "<p>OOPS! it seems map couldn't load now</p><p>we will fix that soon</p>",
        });
        info.open(this.map, marker);
      });
    }
    this.cdRef.detectChanges();
  }

}
