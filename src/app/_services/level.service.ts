import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LevelService {
    constructor(private http: Http) { }

    getProgress(data) {
        return this.http.post('/level/get-progress', data);
    }
}
