import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource} from '@angular/material';

import { MotelService } from '../../../_services/index';
import { Motel} from '../../../_models/index';
@Component({
  selector: 'app-admin-table-motel',
  templateUrl: './admin-table-motel.component.html',
  styleUrls: ['./admin-table-motel.component.css']
})
export class AdminTableMotelComponent implements OnInit {
  viewAccepted = false;
  listMotel: any;
  displayedColumns= ['position', 'created', 'address', 'action'];
  // displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;  // = new MatTableDataSource(ELEMENT_DATA);
  constructor(private motelService: MotelService) { }

  ngOnInit() {
    this.motelService.findByStatus(0).subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      console.log(this.dataSource);
    }, err => {
      console.log(err);
    });

  }
  handleAccepted() {
    this.viewAccepted = !this.viewAccepted;
  }
}
