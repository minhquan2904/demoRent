import { Component, OnInit } from '@angular/core';
import { MotelService, AlertService } from '../../../_services/index';
@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.css']
})
export class RecentPostComponent implements OnInit {

  public latitude: number;
  public longitude: number;

  // list motel
  motels: any = {};
  data: any = {};
  // map : MapComponent;
  currentUser: any = {};
  moderator: boolean;
  constructor(private motelSerivce: MotelService, private alertSerivce: AlertService) { }

  ngOnInit() {
    this.getCurrentPosition();
  }

  getCurrentPosition()  {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.data.lat = position.coords.latitude;
        this.data.lng = position.coords.longitude;
        this.getListNearBy();
      });
    }
  }
  getListNearBy()  {
    this.motelSerivce.getListNearBy(this.data).subscribe(res => {
      this.motels = res; }, err => {this.alertSerivce.error(err); });
  }

  _delete(id) {
    this.motelSerivce._delte(id).subscribe(res => {
      this.alertSerivce.success('delete ok'); }, err => {this.alertSerivce.error(err); });
  }
}
