import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  headers_object = new HttpHeaders()
  .set('Authorization', `Token ${localStorage.getItem("token")}`)
  httpOptions = {
  headers: this.headers_object,
  };

  constructor(private http: HttpClient) { }

  getMovieData(url: string): Observable<any> {
    return this.http.get(`${url}`,this.httpOptions)
  }

  getAvatar(data: string): Observable<any> {
    return this.http.get(`https://ui-avatars.com/api/?background=random&name=${data}`)
  }
}
