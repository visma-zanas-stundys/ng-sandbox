import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IUser {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUser(): Observable<IUser> {
    return this.httpClient.get<IUser>('http://localhost:3000/user');
  }
}
