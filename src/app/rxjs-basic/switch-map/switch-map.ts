import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-map',
  imports: [FormsModule],
  templateUrl: './switch-map.html',
  styleUrl: './switch-map.css',
})
export class SwitchMap implements OnInit {
  ngOnInit() {}
}
