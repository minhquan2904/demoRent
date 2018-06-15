import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../_models/user.model';
import { UserInfoComponent } from '../main/layout/user-info/user-info.component';
@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getUser(lim): Observable<User[]> {
        return this.http.get('/users/' + lim)
            .map(res => {
                return res.json().map(item => {
                    return new User(
                        item.username,
                        item.email,
                        item.firstname,
                        item.lastname,
                        item.rating,
                        item.created_at
                    );
                });
            });
    }
}
