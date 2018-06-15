import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentService {
    constructor(private http: Http) { }

    findByMotel(id) {
       return new Promise((resolve, reject) => {
            this.http.get('/comment/find-by-motel/' + id)
              .map(res => res.json())
              .subscribe(res => {
                resolve(res);
            }, (err) => {
              reject(err);
            });
        });
    }

    comment(data) {
        return this.http.post('/comment/insert', data);
    }
    _delete(id) {
        return this.http.delete('/comment/' + id);
    }
}
