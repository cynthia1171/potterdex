import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {
  constructor(private http: HttpClient) {

  }
  getPeople(): Observable<any> {
    return this.http.get('http://hp-api.herokuapp.com/api/characters');
  }
}
