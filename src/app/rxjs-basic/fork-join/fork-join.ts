import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, tap, from, mergeMap } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  imports: [],
  templateUrl: './fork-join.html',
  styleUrl: './fork-join.css',
})
export class ForkJoin implements OnInit {
  http = inject(HttpClient);

  ngOnInit() {
    this.useForkJoin();
  }

  useForkJoin() {
    forkJoin({
      user1: this.http.get('https://dummyjson.com/users/1'),
      user2: this.http.get('https://dummyjson.com/users/2'),
      user3: this.http.get('https://dummyjson.com/users/3'),
      user4: this.http.get('https://dummyjson.com/users/4'),
    }).subscribe({
      next: (response) => {
        console.log('RESPONE OF FORK JOIN:', response);
      },
      error: (err) => {
        console.error('Something went wrong:', err);
      },
    });
  }
}
