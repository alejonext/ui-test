import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { VoteComponent } from './vote.component';

@NgModule({
  declarations: [
    VoteComponent
  ],
  imports: [
    CommonModule,
  ],
  exports : [
    VoteComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class VoteModule { }
