import { Component, OnInit, Input } from '@angular/core';

export interface Query {
  parts?: string | string[];
  filter?: string | string[];
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() sidenav: any;  // mat-sidenav - gives access to sidenav methods and props
  constructor() { }

  ngOnInit() {}
}
