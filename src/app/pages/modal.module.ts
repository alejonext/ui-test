import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PipeModule } from '../pipe/pipe.module';
import { ModalModule } from '../organism/modal/modal.module';

import { UserService } from '../api/user.service';

import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    LoginComponent,
    SearchComponent
  ],
  imports: [
    PipeModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent,
        canActivate : [ UserService ]
      },
      {
        path: 'search',
        component: SearchComponent
      }
    ] as Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModalsModule {}
