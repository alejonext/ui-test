import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ResultComponent } from './result.component';

@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,
  ],
  exports : [
    ResultComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ResultModule { }
