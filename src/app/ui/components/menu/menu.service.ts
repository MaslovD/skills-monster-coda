import {Injectable} from '@angular/core';

import {IMenuItem} from './menu-item';
import {MENUITEMS} from './mock-menu-items';
import {MENU} from '../../../../settings/menu';
import {DataService} from '../../../service/data.service';

@Injectable()
export class MenuService {
  public myItems: IMenuItem [];

  constructor(private _dataService: DataService) {
  }

  getMenuItems(): Promise<IMenuItem[]> {


    this._dataService.GetAll()
      .subscribe((data: IMenuItem[]) => {
        this.myItems = data;
        console.log(data);

        },
        error => console.log(error), () => console.log('Get all Items complete'));

    //return Promise.resolve(this.myItems);
  }

  /*getMenuItems(): Promise<IMenuItem[]> {
   console.log(MENUITEMS);
   return Promise.resolve(MENUITEMS);*/


}
