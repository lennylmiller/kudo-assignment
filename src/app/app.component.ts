import { Component, ErrorHandler, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { AppState } from './reducers/';
import { isLoggedIn, isLoggedOut, loggedInUser } from './auth/auth.selectors';
import { login, logout } from './store/auth/auth.actions';
import { User } from './auth/model/user.model';
import { UsersDataService } from './users/services/users-data.service';
import { AuthState } from './auth/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading = true;

  isLoggedIn$: Observable<boolean>;

  isLoggedOut$: Observable<boolean>;

  loggedInUser$: Observable<AuthState>;

  @Output()
  currentUser: User;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private usersService: UsersDataService,
    private errorHandler: ErrorHandler
  ) {}

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    const userProfile = localStorage.getItem('user');
    this.currentUser = JSON.parse(userProfile);

    if (userProfile) {
      this.store.dispatch(login({ user: this.currentUser }));
    }

    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });

    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));

    this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));

    this.loggedInUser$ = this.store.pipe(select(loggedInUser));

    this.loggedInUser$.subscribe((res) => (this.currentUser = res.user));

  }

  logout() {
    this.store.dispatch(logout());
  }
}
