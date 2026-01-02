import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, exhaustMap, Subject, switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exhaust-map',
  imports: [FormsModule],
  templateUrl: './exhaust-map.html',
  styleUrl: './exhaust-map.css',
})
export class ExhaustMap implements OnInit {
  searchInput = signal<string>('');
  http = inject(HttpClient);

  searchSubject: Subject<any> = new Subject();

  ngOnInit() {
    this.searchSubject
      .pipe(exhaustMap(() => this.http.get(`https://dummyjson.com/users/1`)))
      .subscribe({
        next: (res) => {
          console.log('EXHAUST MAP RESPONSE DATA:', res);
        },
        error: (err) => {
          console.error('Something went wrong in EXHAUST MAP:', err);
        },
      });
  }

  search() {
    if (!this.searchInput().length) {
      alert('Please enter search value!');
      return;
    }
    this.searchSubject.next('');
  }
}
