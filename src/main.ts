import { Component, inject, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RxjsBasic } from './app/rxjs-basic/rxjs-basic';
import { AsyncPipe } from '@angular/common';
import { provideRouter, RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { routes } from './app/routes';

import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RxjsBasic, AsyncPipe, RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <br>
    <ul>
      @for (user of users$ | async; track user.id) {
        <li>{{user.firstName}} {{user.lastName}}</li> 
      }
    </ul>
    <a routerLink="/home" routerLinkActive="active">HOME</a> | <a routerLink="/rxjs-basic" routerLinkActive="active">RX JS</a> | 
    <router-outlet />
    <!-- <app-rxjs-basic/> -->

  `,
})
export class App implements OnInit {
  name = 'Angular';
  http = inject(HttpClient);

  users$!: Observable<any[]>;

  ngOnInit() {
    // this.getUsersList();
  }

  getUsersList() {
    this.users$ = this.http
      .get('https://dummyjson.com/users')
      .pipe(map((response: any) => response.users));
  }
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
  ],
});
