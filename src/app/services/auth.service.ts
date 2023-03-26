import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(userDetails: object): Observable<any> {
    return this.http.post(`https://demo.credy.in/api/v1/usermodule/login/`, userDetails)
  }
}
