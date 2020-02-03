import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserService } from '../../api/user.service';
import { VotesService } from '../../api/vote.service';

import { PipeModule } from '../../pipe/pipe.module';
import { VoteModule } from '../../molecule/vote/vote.module';
import { ResultModule } from '../../molecule/result/result.module';

import { PersonSummaryComponent } from './person-summary.component';

@NgModule({
  declarations: [
    PersonSummaryComponent
  ],
  imports: [
    CommonModule,
    VoteModule,
    ResultModule,
    PipeModule
  ],
  exports : [
    PersonSummaryComponent
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
export class PersonSummaryModule { }
