import { Pipe, PipeTransform } from '@angular/core';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

type Relative = 'from' | 'fromNow' | 'to' | 'toNow';

@Pipe({
  name: 'relative'
})
export class RelativeTimePipe implements PipeTransform {
  constructor(
    @Inject(DOCUMENT) private doc
  ) {
    this.doc.defaultView.dayjs.extend(this.doc.defaultView.dayjs_plugin_relativeTime);
    //this.doc.defaultView.dayjs.locale(this.doc.defaultView.dayjs_locale_en);
  }

  public transform(date: any, type: Relative, ...arg): string {
    return this.doc.defaultView.dayjs(date)[type](...arg);
  }
}
