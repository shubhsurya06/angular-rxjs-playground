import { Routes } from '@angular/router';
import { ForkJoin } from './rxjs-basic/fork-join/fork-join';
import { MergeMap } from './rxjs-basic/merge-map/merge-map';
import { RxjsBasic } from './rxjs-basic/rxjs-basic';
import { ConcatMap } from './rxjs-basic/concat-map/concat-map';
import { SwitchMap } from './rxjs-basic/switch-map/switch-map';
import { ExhaustMap } from './rxjs-basic/exhaust-map/exhaust-map';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home' },
  { path: 'rxjs-basic', component: RxjsBasic,
    children: [
      // { path: 'rxjs-basic', component: RxjsBasic, title: 'RxJS Basic' },
      { path: 'fork-join', component: ForkJoin, title: 'Fork Join' },
      { path: 'merge-map', component: MergeMap, title: 'Merge Map' },
      { path: 'concat-map', component: ConcatMap, title: 'Concat Map' },
      { path: 'switch-map', component: SwitchMap, title: 'Switch Map' },
      { path: 'exhaust-map', component: ExhaustMap, title: 'Switch Map' },
    ]
  },
];
