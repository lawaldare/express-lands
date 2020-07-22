import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }




  login(auth: any): Observable<any> {
    return this.http.post(environment.loginURL, auth) as Observable<any>;
  }
}
