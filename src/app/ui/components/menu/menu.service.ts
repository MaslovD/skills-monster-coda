import {Injectable} from '@angular/core';

import {IMenuItem} from './menu-item';
import {MENUITEMS} from './mock-menu-items';
import {MENU} from '../../../../settings/menu';
import {DataService} from '../../../service/data.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MenuService {
  public myItems: IMenuItem [];

  constructor(private _dataService: DataService) {
  }

  getMenuItems(): Observable<IMenuItem[]> {
      return this._dataService.GetAll()
          // .catch((err) => {
          //   this.messageService.addMsg({
          //     severity: 'error', summary: 'Ошибка сервера', detail: 'Не удалось получить список меню'
          //   });
          //   return err
          // })

  }


  /*getMenuItems(): Promise<IMenuItem[]> {
   console.log(MENUITEMS);
   return Promise.resolve(MENUITEMS);*/


}

