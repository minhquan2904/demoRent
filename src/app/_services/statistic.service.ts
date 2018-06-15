import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Statistic} from '../_models/index';
@Injectable()
export class StatisticSerivce {
    constructor(private http: Http) { }

    getInfo() {
        return this.http.get('/statistic/get-info');
            // .map(res => {
            //     return res.json().map( item => {
            //         return new Statistic(
            //             item.num_motels,
            //             item.num_users,
            //             item.visitors,
            //             item.created_at,
            //             item.stopped_at
            //         );
            //     });
            // });
    }
}
