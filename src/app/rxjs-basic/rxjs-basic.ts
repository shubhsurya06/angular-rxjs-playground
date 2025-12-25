import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { map, Observable, tap, from, mergeMap } from 'rxjs';
import { ForkJoin } from './fork-join/fork-join';

@Component({
  selector: 'app-rxjs-basic',
  imports: [AsyncPipe, RouterOutlet, ForkJoin, RouterLink],
  templateUrl: './rxjs-basic.html',
  styleUrl: './rxjs-basic.css',
})
export class RxjsBasic implements OnInit {
  http = inject(HttpClient);
  posts$!: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.getPostData();
  }

  getPostData() {
    this.posts$ = this.http
      .get('https://dummyjson.com/posts')
      .pipe(map((response: any) => response.posts.slice(0, 5)));
  }
}
