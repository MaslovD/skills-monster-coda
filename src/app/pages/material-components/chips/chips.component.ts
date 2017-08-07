import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

@Component({
  moduleId: module.id,
  selector: 'page-chips',
  templateUrl: 'chips.component.html',
  styleUrls: ['chips.component.scss']
})
export class PageChipsComponent implements OnInit {
  pageTitle: string = 'Chips';
  color: string;
  availableColors = [
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warning', color: 'warn' }
  ];

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}