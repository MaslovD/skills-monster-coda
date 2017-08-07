import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

@Component({
  moduleId: module.id,
  selector: 'page-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss']
})
export class PageCardComponent implements OnInit {
  pageTitle: string = 'Cards';

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}