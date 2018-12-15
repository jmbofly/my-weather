import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyWeather';
  isHandset$: Observable<boolean>;

  constructor(public breakpointObserver: BreakpointObserver) {
    this.isHandset$ = breakpointObserver
      .observe('max-width: 760px')
      .pipe(map(res => res.matches));
  }
}
