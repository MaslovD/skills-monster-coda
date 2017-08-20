import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../app.constants';
import {IMenuItem} from '../ui/components/menu/menu-item';
import {MENUITEMS} from '../ui/components/menu/mock-menu-items';

const API = environment.apiUrl + environment.apiVersion;

@Injectable()
export class DataService {

  private actionUrl: string;
  private headers: Headers;
  private resp: IMenuItem[];
  private tstMnu: Observable<IMenuItem[]>;

  constructor(private http: Http) {
    // localhost:8088/api/v1/app/menu/

    this.actionUrl = API + 'menu/';
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');

  }

  public GetAll = (): Observable<IMenuItem[]> => {
    /*console.log(this.actionUrl)

     this._http.get(this.actionUrl).subscribe(
     response => this.resp = response.text());*/

    return this.http.get(this.actionUrl)
      .map((response: Response) => <IMenuItem[]>response.json());
  }

  /*
   public GetSingle = (id: number): Observable<MyTypedItem> => {
   return this._http.get(this.actionUrl + id)
   .map((response: Response) => <MyTypedItem>response.json())
   .catch(this.handleError);
   }

   public Add = (itemName: string): Observable<MyTypedItem> => {
   let toAdd = JSON.stringify({ ItemName: itemName });

   return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
   .map((response: Response) => <MyTypedItem>response.json())
   .catch(this.handleError);
   }

   public Update = (id: number, itemToUpdate: MyTypedItem): Observable<MyTypedItem> => {
   return this._http.put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
   .map((response: Response) => <MyTypedItem>response.json())
   .catch(this.handleError);
   }

   public Delete = (id: number): Observable<Response> => {
   return this._http.delete(this.actionUrl + id)
   .catch(this.handleError);
   }
   */
  private handleError(error: Response) {
    //  console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
