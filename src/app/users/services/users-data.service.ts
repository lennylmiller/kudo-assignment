import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersDataService extends DefaultDataService<User> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('User', http, httpUrlGenerator);
  }
  getBll(): Observable<User[]> {
    return super.getAll().pipe(map(heroes => heroes.map(hero => this.mapUser(hero))));
  }

  getById(id: string | number): Observable<User> {
    return super.getById(id).pipe(map(user => this.mapUser(user)));
  }

  private mapUser(user: User): User {
    return user;
  }

  getAll(): Observable<User[]> {
    return this.http.get('/api/users')
      .pipe(
        map((res) => {
          console.log(res);
          return res['payload']
        })
      );
  }
}
