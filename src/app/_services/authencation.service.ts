import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post('/users/authenticate', { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const user = response.json();
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }
    register(user) {
        return this.http.post('/users/register', user);
    }
    findById(id) {
        const req: any = {};
        req.id = id;
      //  console.log(req);
        return this.http.post('/users/find-by-id', req)
            .map((response: Response) => {
            const user = response.json();
            return user;
        });
    }
    getNewUser() {
        return this.http.get('/users/');
    }
    update(id, user) {
        return this.http.put('/users/' + id, user);
    }
    changePassword(id, password) {
        return this.http.put('/users/change-password/' + id, password);
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
    _delete(id) {
        return this.http.delete('/users/' + id);
    }
}
