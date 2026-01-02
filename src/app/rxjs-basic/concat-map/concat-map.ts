import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, concatMap } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  imports: [],
  templateUrl: './concat-map.html',
  styleUrl: './concat-map.css',
})
export class ConcatMap implements OnInit {
  http = inject(HttpClient);

  ngOnInit() {
    this.useConcatMap();
  }

  useConcatMap() {
    from([1, 20000, 3, 4, 5])
      .pipe(
        concatMap((id: number) =>
          this.http.get(`https://dummyjson.com/users/${id}`)
        )
      )
      .subscribe({
        next: (res: any) => {
          console.log('CONCAT MAP RESPONSE:', res);
        },
        error: (err) => {
          console.error('Error in CONCAT MAP:', err);
        },
      });
  }
}
