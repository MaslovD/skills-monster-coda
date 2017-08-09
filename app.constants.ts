import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  public Server = 'http://localhost:8088/';
  public ApiUrl = 'api/v1/app/';
  public ServerWithApiUrl = this.Server + this.ApiUrl;
}
