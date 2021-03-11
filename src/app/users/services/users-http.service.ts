import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { map } from 'rxjs/operators';
@Injectable()
export class UsersHttpService {
  constructor(private http: HttpClient) {}

  findAllUsers(): Observable<User[]> {
    return this.http.get('/api/Users').pipe(map((res) => res['payload']));
  }

  findUserByUrl(UserUrl: string): Observable<User> {
    return this.http.get<User>(`/api/users/${UserUrl}`);
  }

  saveUser(UserId: string | number, changes: Partial<User>) {
    return this.http.put('/api/User/' + UserId, changes);
  }
}
