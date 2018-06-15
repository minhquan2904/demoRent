import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  API_URL =  'http://localhost:3000/';

  constructor(public http: HttpClient) { }
  // read method
  public get(path) {

    const endpoint = this.API_URL + path;
    return this.http.get(endpoint);

  }

  // create method
  public post(path: String, body: any) {

    const endpoint = this.API_URL + path;
    return this.http.post(endpoint, body);

  }
  // delete method
  public delete(path: String) {

  const endpoint = this.API_URL + path;
  return this.http.delete(endpoint);

  }
  // update method
  public update(path: String, body: any) {
  const endpoint = this.API_URL + path;
  return this.http.put(endpoint, body);
  }
}
