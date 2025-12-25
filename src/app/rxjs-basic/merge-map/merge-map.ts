import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, tap, from, mergeMap } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  imports: [],
  templateUrl: './merge-map.html',
  styleUrl: './merge-map.css',
})
export class MergeMap implements OnInit {
  http = inject(HttpClient);

  ngOnInit() {
    this.useMergeMap();
  }

  useMergeMap() {
    from([11452, 2, 3, 4])
      .pipe(
        mergeMap((id: number) =>
          this.http.get(`https://dummyjson.com/users/${id}`)
        )
      )
      .subscribe({
        next: (res) => {
          console.log('RESPONSE OF MERGE MAP:', res);
        },
        error: (err) => {
          console.error('Something weng wrong in merge map:', err);
        },
      });
  }
}
