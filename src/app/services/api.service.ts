import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  prod: string = "https://hello-expertus-api.herokuapp.com/";
  dev: string = "http://localhost:8080/";
  url = this.dev;

  constructor(
    private http: Http,
  ) {
  }

  getMessage(language) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + 'api/message?language='+language, {headers: headers}).pipe(map(res => res.json()));
  }
}
