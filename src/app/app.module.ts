import { BrowserModule }                    from '@angular/platform-browser';
import { RouterModule }                     from '@angular/router';
import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';

import { routes, AppRoutingModule }         from './app-routing.module';
import { AppComponent }                     from './app.component';
import { UIModule }                         from './ui/ui.module';
import { NiComponentsModule }               from './ni-components/ni-components.module';
import { PagesModule }                      from './pages/pages.module';

import { DefaultLayoutComponent }           from './layouts/default/default.component';
import { ExtraLayoutComponent }             from './layouts/extra/extra.component';

@NgModule({
  declarations : [
    AppComponent,
    DefaultLayoutComponent,
    ExtraLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: true }),

    AppRoutingModule,
    UIModule,
    NiComponentsModule,
    PagesModule
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
