import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, UrlTree } from '@angular/router';
import { MockFlexList, FlexItem, Action } from '../../mock/lists.data';

@Component({
  selector: 'app-flex-container',
  templateUrl: './flex-container.component.html',
  styleUrls: ['./flex-container.component.scss']
})
export class FlexContainerComponent implements OnInit {
  @Input() dir: 'row' | 'column' = 'row';
  @Input() isFlat = false;
  @Input() headline?: string;
  @Input() list?: FlexItem[];
  constructor(public router: Router) { }

  ngOnInit() { }

  clickAction(name: Action['name'], args: any) {
    if (name === 'log') {
      console.log(args);
    }
    if (name === 'navigate') {
      this.navigateTo(args);
      console.log(`Going to ${args} page`);

    }
    if (name === 'save') {
      console.log(args);
    }
    if (name === 'delete') {
      console.log(args);
    }
  }

  navigateTo(url: string | UrlTree) {
    this.router.navigateByUrl(url);
  }
}
