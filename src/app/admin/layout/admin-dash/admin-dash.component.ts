import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StatisticSerivce, AlertService, UserService } from '../../../_services/index';
import { User } from '../../../_models/index';
@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css'],
  providers: [UserService]
})
export class AdminDashComponent implements OnInit {
  static: any = {};
  userArray: Observable<User[]>;
  constructor(
              private alertService: AlertService,
              private userService: UserService) {}
  ngOnInit() {
    // this.userService.getUser(10).subscribe(
    //   res => {
    //     this.userArray = res;
    //   },
    //   err => {
    //     this.alertService.error(err);
    //   }
    // );
    this.userArray = this.userService.getUser(10);
  }

}
