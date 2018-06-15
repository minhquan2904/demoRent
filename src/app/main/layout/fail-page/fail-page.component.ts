import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-fail-page',
  templateUrl: './fail-page.component.html',
  styleUrls: ['./fail-page.component.css']
})
export class FailPageComponent implements OnInit {

  error: String;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .filter(params => params.error)
      .subscribe(params => {
        this.error = params.error;
      });
  }

}
