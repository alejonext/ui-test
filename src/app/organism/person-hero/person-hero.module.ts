import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PipeModule } from '../../pipe/pipe.module';
import { VoteModule } from '../../molecule/vote/vote.module';
import { ResultModule } from '../../molecule/result/result.module';

import { UserService } from '../../api/user.service';
import { VotesService } from '../../api/vote.service';

import { PersonHeroComponent } from './person-hero.component';

@NgModule({
  declarations: [
    PersonHeroComponent
  ],
  imports: [
    CommonModule,
    VoteModule,
    ResultModule,
    PipeModule
  ],
  exports : [
    PersonHeroComponent
  ],
  providers: [
    UserService,
    VotesService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class PersonHeroModule { }
