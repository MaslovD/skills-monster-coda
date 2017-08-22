// import { Configuration } from './app.constants';
// import { Injectable } from '@angular/core';
// @Injectable()
// export class Configuration {
//   public Server = 'http://localhost:8088/';
//   public ApiUrl = 'api/v1/app/';
//   public ServerWithApiUrl = this.Server + this.ApiUrl;
// }

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8088/',
  /*apiVersion: 'api/v1/app/'*/
  apiVersion: 'api/v1/'
};

