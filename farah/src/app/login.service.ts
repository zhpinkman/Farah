import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  userId: string;
  login(username) {
    let url = 'http://localhost:8081/users/login';
    return this.http.post<any>(url, username).pipe(map<any, any>(data => { this.userId = data.id; return data; }));
  }
}
