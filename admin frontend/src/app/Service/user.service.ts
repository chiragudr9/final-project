import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../model/user-data';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly url = 'http://localhost:8084/';

  constructor(private http: HttpClient) { }

  public getAllUsers() {
    return this.http.get<any[]>(this.url + 'user/all');
  }
}
