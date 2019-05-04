import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  private BaseUrl = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) {}

  getWord(): Observable<string> {
    // TODO: send the message _after_ fetching the heroes
    return this.http.get<string>('/find');
  }
}
