import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable, of, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './core/auth.service';
import { Router, ActivatedRoute, UrlTree, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**Current page set by Router
   */
  currentLocation: any;
  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isFullscreen$: Observable<boolean>;

  navList = [
    {name: 'Home', url: 'home'},
    {name: 'Location', url: 'location'},
  ];
  constructor(
    public breakpointObserver: BreakpointObserver,
    public activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const setHandsetLayout = breakpointObserver
      .observe('(max-width: 760px)')
      .subscribe((result: BreakpointState) => {
        // console.log(
        //   `${
        //     result.matches
        //       ? 'layout set => handset'
        //       : 'layout hidden => handset'
        //   }`
        // );
        this.isHandset$ = of(result.matches);
      });

    const setTabletLayout = breakpointObserver
      .observe(['(min-width: 760px)', '(max-width: 1060)'])
      .subscribe((result: BreakpointState) => {
        // console.log(
        //   `${
        //     result.matches ? 'layout set => tablet' : 'layout hidden => tablet'
        //   }`
        // );
        this.isTablet$ = of(result.matches);
      });

    const setFullscreenLayout = breakpointObserver
      .observe('(min-width: 960px)')
      .subscribe((result: BreakpointState) => {
        // console.log(
        //   `${
        //     result.matches
        //       ? 'layout set => fullscreen'
        //       : 'layout hidden => fullscreen'
        //   }`
        // );
        this.isFullscreen$ = of(result.matches);
      });
  }

  ngOnInit() {}

  navigateTo(url: string | UrlTree, extras?: NavigationExtras, element?: any) {
    if (element && element.opened) {
      element.close();
    }
    return this.router.navigateByUrl(url);
  }
}
