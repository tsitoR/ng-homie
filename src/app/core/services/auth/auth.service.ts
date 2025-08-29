import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../../../data/schema/user';

interface LoginContextInterface {
  username: string;
  password: string;
  token: string;
}

const defaultUser: User = {
  username: 'TestUser',
  password: '12345',
  token: '12345'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    // this.currentUserSubject = new BehaviorSubject<any>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(credentials: User): Observable<any> {
    if (credentials.username === defaultUser.username && credentials.password === defaultUser.password) {
      const user: LoginContextInterface = {
        username: credentials.username,
        password: credentials.password,
        token: defaultUser.token
      };
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return new Observable((observer) => {
        observer.next(user);
        observer.complete();
      });
    } else {
      return new Observable((observer) => {
        observer.error('Invalid username or password');
        observer.complete();
      });
    }
    // return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
    //   tap(user => {
    //     localStorage.setItem('currentUser', JSON.stringify(user));
    //     this.currentUserSubject.next(user);
    //   })
    // );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
}