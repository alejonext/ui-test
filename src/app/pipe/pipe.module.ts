import { NgModule } from '@angular/core';
import {
  DebounceTimeModule,
  DelayModule,
  DistinctUntilChangedModule,
  FirstModule,
  GetModule,
  LastModule,
  LengthModule,
  LogModule,
  MapToModule,
  NotModule,
  PairwiseModule,
  SkipLastModule,
  SkipModule,
  TakeLastModule,
  TakeModule,
  ThrottleModule
} from 'ngx-async-pipeline';
import { ErrorsPipe } from './errors.pipe';

const EXPORT = [
  DebounceTimeModule,
  DelayModule,
  DistinctUntilChangedModule,
  FirstModule,
  GetModule,
  LastModule,
  LengthModule,
  LogModule,
  MapToModule,
  NotModule,
  PairwiseModule,
  SkipLastModule,
  SkipModule,
  TakeLastModule,
  TakeModule,
  ThrottleModule
];

@NgModule({
  imports: EXPORT,
  exports :  [ ...EXPORT, ErrorsPipe],
  declarations: [ErrorsPipe]
})
export class PipeModule { }
