import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, UrlTree } from '@angular/router';
import { MockHeader, HeaderLink } from '../../mock/lists.data';
@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent implements OnInit {
  @Input() hasCTO = false;
  @Input() heroBG: string;
  @Input() link: HeaderLink;
  @Input() title: string;

  constructor(public router: Router) {}

  ngOnInit() {}

  navigateTo(url: string | UrlTree) {
   this.router.navigateByUrl(url)
    .then(() => console.log(`Route to ${url}`))
    .catch(err => console.log('error navigationg from hero-header', err));
  }
}
