import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ElementRef, NgZone, ViewChild } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { Observable } from 'rxjs';

declare var google: any;
@Component({
  selector: 'app-map-service',
  templateUrl: './map-service.component.html',
  styleUrls: ['./map-service.component.css']
})
export class MapServiceComponent implements OnInit {

  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  // variable
  data: any = {};
  public latitude: Number; // lat of motel, receive from parents and dont change
  public longitude: Number; // lat of motel, receive from parents and dont change

  public zoom: number; // map zoom value
  public radius: Number = 500; // radius to search nearby and draw circle

  // circle properties
  public circleProps = {
    fillColor : '#FF0000',
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillOpacity: 0.35,
  };

  // config marker's icon url
  url = 'assets/'; // config url
  icon = {
      'bus_station' : this.url + 'bus_station.png',
      'hospital': this.url + 'hospital.png',
      'lodging': this.url + 'lodging.png',
      'school': this.url + 'school.png',
      'store': this.url + 'store.png',
      'restaurant': this.url + 'restaurant.png',
      'health': this.url + 'health.png',
      'local_government_office': this.url + 'local_government_office.png',
      'other': this.url + 'other.png'
  };

  // list of service , store nearby service item
  listService: any  = new Array();
  // fix map not show in tab
  @ViewChild(AgmMap)
  public agmMap: AgmMap;
  @Input() myData; // data receive from parent


  // init array types
  checkboxGroup = new FormGroup({});
  checkboxTypes = ['store', 'school', 'hospital', 'health',
                  'restaurant', 'bus_station', 'lodging', 'local_government_office'];
  types = ['school', 'hospital', 'store']; // types selected
  ngOnInit() {
    this.agmMap.triggerResize(true);
    // set google maps defaults
    this.zoom = 16;
    this.latitude = 10.822082;
    this.longitude = 106.763504;
    // when map loaded
    this.mapsAPILoader.load().then(() => {
      // ADD DATA from parent
      this.latitude = Number.parseFloat(this.myData.lat);
      this.longitude = Number.parseFloat(this.myData.lng);

      // config lat lng
      const latlng = new google.maps.LatLng(this.latitude, this.longitude);
      // get map
      const map = new google.maps.Map(document.createElement('div'));
      // config place service
      const placesService = new google.maps.places.PlacesService(map);
      const place: any = placesService.nearbySearch;
      // search service nearby by types
      for (let i = 0; i < this.types.length; i++) {
        placesService.nearbySearch({
          location: latlng,
          radius: this.radius,
          type: this.types[i]
        }, (results, status) => {
            this.callback(results, status);
        }); // end nearby search
      }

    }); // end map api load
  } // end ng on init

  // call back function
  callback(results, status) {
    this.zoom = 16;
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for ( let i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
        }

    }
  }

  createMarker(place) {
    // url to load icon
    let iconURL = this.icon.other;
    // check type of place to set marker's marker
    for (const i in this.icon) {
        if (place.types[0].match(new RegExp(i))) {
            iconURL = this.icon[i];
        }
    }
    // create a model to store info (lat,lng,name)
    const item: any = {};
    item.name = place.name;
    item.lat = place.geometry.location.lat();
    item.lng = place.geometry.location.lng();
    item.icon = iconURL;

    // push to array
    this.listService.push(item);
  }

  onChange(event) {
    if (event.checked) {
      this.types.push(event.source.value);
      // this.agmMap.triggerResize(true);
    } else {
      const index = this.types.indexOf(event.source.value, 0);
      if (index > -1) {
        this.types.splice(index, 1);
      }
    }
    console.log(this.types);
    this.listService = [];
    this.ngOnInit();
  }
}
