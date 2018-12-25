import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlTree } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {
  MockFlexList,
  FlexItem,
  MockHeader,
  HeaderLink
} from '../mock/lists.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  placeholderImgURL = 'https://placeimg.com';
  placeholderImgList: string[] = [];
  headerLink = {
    url: 'location',
    buttonText: 'Search Locations',
    icon: 'location_on'
  };
  headerTitle =
    `Location. Weather. Done.`;
  placeholderFlexList: FlexItem[] = MockFlexList;
  constructor(private router: Router) {}

  ngOnInit() {
  }

  buildFakeImgList(len: number, size = [100, 100], category = 'any') {
    const results = [];
    let count = 0;
    for (count; count < len; count++) {
      const newImage = this.getPlaceholderImage(
        `${this.placeholderImgURL}`,
        `${size[0]}`,
        `${size[1]}`,
        `${category}`
      );
      results.push(newImage);
    }
    return results;
  }

  getPlaceholderImage(
    root: string,
    width: string,
    height: string,
    category = 'any'
  ) {
    return `${root}/${width}/${height}/${category}`;
  }

  navigateTo(url: string | UrlTree) {
    return this.router.navigateByUrl(url);
  }
}
