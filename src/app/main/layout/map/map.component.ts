import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ElementRef, NgZone, ViewChild } from '@angular/core';

import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Output() locationChild: EventEmitter<any> = new EventEmitter<any>();
  @Output() latlngChild: EventEmitter<any> = new EventEmitter<any>();

  data: any = {};
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  checkCurrentPage = true;
  @Input() myData;
  @ViewChild("search")
  public searchElementRef: ElementRef;
  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {
    // set google maps defaults
    this.zoom = 12;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
    // set current position
      this.setCurrentPosition();
    // create search FormControl
    this.searchControl = new FormControl();
    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          localStorage.setItem('lat', place.geometry.location.lat().toString() );
          localStorage.setItem('lng', place.geometry.location.lng().toString() );
          this.data.lat = this.latitude = place.geometry.location.lat();
          this.data.lng =  this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          this.latlngChild.emit(this.data);
          this.locationChild.emit(autocomplete.getPlace().address_components);
        });
      });
    });
  }
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
         // set latitude, longitude and zoom
         this.data.lat = this.latitude = position.coords.latitude;
         this.data.lng =  this.longitude = position.coords.longitude;
         this.zoom = 12;
         this.latlngChild.emit(this.data);
      });
    }

  }

}