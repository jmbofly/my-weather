import { Component, OnInit } from '@angular/core';

export declare type SearchType = 'city' | 'zipcode' | 'auto';
export declare type SearchResultsDisplayMode = 'basic' | 'detailed';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  /** @type {string} title of the header component instance */
  headerTitle = 'Location Search';
  heroBackgroundImage = ''
  location: any = {
    query: ''
  };

  
  /**
   * @description
   * Shows or Hides search panel
   *
   * @default true
   */
  searchLocation = {};

  searchPanelVisible = true;
  searchBy: SearchType = 'zipcode';
  query = '43056';
  results: any = {};
  displayType: SearchResultsDisplayMode = 'basic';
  constructor() {}

  ngOnInit() {}

}
