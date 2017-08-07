import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { Item } from './item';

const breadcrumb: Item[] = [
  {
    title: 'Home',
    link: 'dashboard',
    icon: ''
  },
  {
    title: 'UI Elements',
    link: 'dashboard',
    icon: ''
  },
  {
    title: 'Components',
    link: 'dashboard',
    icon: ''
  },
  {
    title: 'Breadcrumb',
    link: '',
    icon: ''
  }
];
const breadcrumbIcon: Item[] = [
  {
    title: 'Home',
    link: 'dashboard',
    icon: 'fa fa-home'
  },
  {
    title: 'UI Elements',
    link: 'dashboard',
    icon: 'fa fa-paper-plane'
  },
  {
    title: 'Components',
    link: 'dashboard',
    icon: 'fa fa-shopping-bag'
  },
  {
    title: 'Breadcrumb',
    link: '',
    icon: 'fa fa-diamond'
  }
];

@Component({
  selector: 'page-ni-breadcrumbs',
  templateUrl: 'breadcrumb.component.html',
  styleUrls: ['breadcrumb.component.scss']
})
export class PageNiBreadcrumbsComponent implements OnInit {
  pageTitle: string = 'Breadcrumbs';
  breadcrumb: Item[] = breadcrumb;
  breadcrumbIcon: Item[] = breadcrumbIcon;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}