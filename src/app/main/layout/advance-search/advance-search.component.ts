import { Component, OnInit} from '@angular/core';
import { appConfig } from '../../../app.config';
import { MotelService, AlertService } from '../../../_services/index';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.css']
})
export class AdvanceSearchComponent implements OnInit {

  constructor(private motelService: MotelService, private alertService: AlertService) { }
  location = appConfig.vn;
  resultArray: any; // array to city list
  districtArray: any = []; // array to district
  query: any = {
    city: '',
    district: '',
    ward: '',
    street: ''
  };
  motelArray: any = []; // data recceive after search
  city: any = {};
  ngOnInit() {
    this.resultArray = Object.keys(this.location).map( res => {
      const city = this.location[res];
      return city;
    });
  }
  onCityChange() {
    this.query.city = this.resultArray[this.city.id].name;
    this.districtArray = Object.keys(this.resultArray[this.city.id].districts).map( res => {
      const name = this.resultArray[this.city.id].districts[res];
      return name;
    });
  }



  onAdvanceSearch() {
  //  this.query.district = this.query.district.substr(this.query.district.indexOf(' ') + 1);
  //   console.log(this.query);
    if (this.wordCount(this.query.district) > 2) {
      this.query.district = this.query.district.substr(this.query.district.indexOf(' ') + 1);
    }
    this.motelService.search(this.query).subscribe( res => {
      this.motelArray = Array.of(res.json());
      console.log(this.motelArray);
    }, err => {
      this.alertService.error(err);
    });
  }

  wordCount(str) {
    return str.split(' ').length;
  }
}
