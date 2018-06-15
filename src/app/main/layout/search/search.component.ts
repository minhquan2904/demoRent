import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MotelService } from '../../../_services/index';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private motelService: MotelService) { }
  encapsulation: ViewEncapsulation.None;
  query: any;
  ngOnInit() {
  }
  onSearchClick() {
    this.motelService.fullSearch(this.query).subscribe( res => {
        console.log(res.json());
    }, err => {
      console.log('err: ' + err);
    });
  }

}
