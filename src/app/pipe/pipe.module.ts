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
import { DatesPipe } from './dates.pipe';
import { RelativeTimePipe } from './relative-time.pipe';

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
  exports :  [ ...EXPORT, ErrorsPipe, DatesPipe, RelativeTimePipe],
  declarations: [ ErrorsPipe, DatesPipe, RelativeTimePipe ]
})
export class PipeModule {

}
