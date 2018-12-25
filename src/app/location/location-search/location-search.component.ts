import { Component, OnInit, Input, Output } from '@angular/core';
export interface LocationSearchQuery {
  queryString?: string;
  searchType: 'city'|'zipcode'|'auto';
  results?: any;
}

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent implements OnInit {
  @Input() query: LocationSearchQuery;
  constructor() { }

  ngOnInit() {
  }

}
