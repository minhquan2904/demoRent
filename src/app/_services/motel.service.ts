import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment'
import { Motel } from '../_models/motel.model';
@Injectable()
export class MotelService {
    apiUrl = environment.token_auth_config.apiBase;
    constructor(private http: Http) { }


    resolveNearBy(lat, lng, dis): Promise<Array<any>> {
        const data: any = {};
        data.lat = lat;
        data.lng = lng;
        data.distance = dis;
        // return this.http.get('/motels')
        //     .toPromise()
        //     .then( res => {
        //         return res.json();
        //     }).catch(this.handleError);

        return this.http.post('/motel/get-list-nearby', data)
            .toPromise()
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .catch(this.handleError);
    }
    create(param)  {
        return this.http.post('/motel/insert', param).toPromise().then( res => {
            return res;
        }).catch(this.handleError);
    }
    vote(param)    {
        return this.http.post('/vote/like', param);
    }
   findByUser(param)   {
       const data = {
           id: String
       } ;
       data.id = param;
       return this.http.post('/motel/find-by-user', data)
        .map((response: Response) => {
            const motel = response.json();
            return motel;
        });
   }
   findById(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/motel/find-by-id/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res); }, (err) => {
          reject(err);
        });
    });
   }
   findByStatus(status): Observable<Motel[]> {
       console.log(this.apiUrl + '/motel/find-by-status/' + status);
       return this.http.get('/motel/find-by-status/' + status)
        .map( res => {
            return res.json().map(item => {
                return new Motel(
                    item._id,
                    item.title,
                    item.category,
                    item.customer,
                    item.description,
                    item.price,
                    item.area,
                    item.city,
                    item.district,
                    item.street,
                    item.ward,
                    item.add,
                    item.address,
                    item.lat,
                    item.lng,
                    item.img,
                    item.contact,
                    item.status,
                    item.created_at
                );
            });
        });
   }
   getTotalVote(id)    {
       return new Promise((resolve, reject) => {
        this.http.get('/vote/count/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res); }, (err) => {
          reject(err);
        });
    });
   }
   update(id, data) {
    return this.http.put('/motel/' + id, data);
   }

   _delte(id) {
       return this.http.delete('/motel/' + id);
   }
   getListNearBy(data) {
    return this.http.post('/motel/get-list-nearby', data)
    .map((response: Response) => {
        const motel = response.json();
        return motel;
    });
   }
   search(data) {
       return this.http.post('/motel/search', data);
   }
   fullSearch(data) {
       return this.http.get('/motel/full-search/' + data);
   }
   findLtPrice(data) {
    return this.http.post('/motel/find-lt-price', data)
    .map((response: Response) => {
        const motel = response.json();
        return motel;
    });
   }

   getLatLng(data) {
        return this.http.post('/motel/get-lat-lng', data)
        .map(res => res.json());
   }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}