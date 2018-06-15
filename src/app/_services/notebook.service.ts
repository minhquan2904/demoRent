import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class NoteBookService {
    constructor(private http: Http) { }

   search(param)
   {
       return this.http.post('/notebook/search',param)
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let notebook = response.json();
           
            return notebook;
        }) 
       ;
   }

   update(id, data)
   {
    return this.http.put('/notebook/'+id,data);
   }

   _delte(id)
   {
       return this.http.delete('/notebook/' +id);
   }
        
}