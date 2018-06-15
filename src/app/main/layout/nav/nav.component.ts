import { Component, OnInit, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() colorStyle: String;
  data: any = {};
  loginStatus: Boolean;
  constructor(public translate: TranslateService) { }

  ngOnInit() {
    console.log(this.colorStyle);
    this.loginStatus = localStorage.getItem('currentUser') ? true : false;
  }
}
