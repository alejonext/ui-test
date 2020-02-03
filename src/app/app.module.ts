import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PipeModule } from './pipe/pipe.module';

import { UserService } from './api/user.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipeModule,
    RouterModule.forRoot([
      {
        path : '',
        loadChildren : () => import('./pages/pages.module').then(mod => mod.PagesModule),
      },
      {
        path : 'modal',
        loadChildren : () => import('./pages/modal.module').then(mod => mod.ModalsModule),
        outlet: 'modal',
      }
    ] as Routes)
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
