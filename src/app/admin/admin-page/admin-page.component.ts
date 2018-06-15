import { Component, OnInit } from '@angular/core';

import { StatisticSerivce, AlertService} from '../../_services/index';
import { Statistic } from '../../_models/index';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  static: Statistic;
  constructor(private statisticService: StatisticSerivce,
      private alertService: AlertService ) { }

  ngOnInit() {
    this.statisticService.getInfo().subscribe( res => {
      this.static = res.json();
    }, err => {
      this.alertService.error(err);
    });
  }

}

