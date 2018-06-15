import { Injectable } from '@angular/core';
import {
  Router, Resolve, ActivatedRoute,
  ActivatedRouteSnapshot
} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { } from 'googlemaps';
import { MotelService} from './motel.service';
@Injectable()
export class LocationService implements Resolve<any>  {
  public list: any = [];
  constructor(private motelService: MotelService, private router: Router, private routeActive: ActivatedRoute) { }

  resolve(route: ActivatedRouteSnapshot): Promise<any> | boolean {
    let lat = +route.queryParams['lat'];
    let lng = +route.queryParams['lng'];
    let dis = +route.queryParams['dis'];
    if (!dis) {
      dis = 10;
    }
  //  console.log(lat + '...' + lng);
    return this.motelService.resolveNearBy(lat, lng, dis).then(res => {
      if (res) {
        return res;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }, (err) => {
      this.router.navigate(['/fail'], {queryParams: {error: 'No result found, choose another distance!'}});
    });
  }
}
