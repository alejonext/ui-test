import { Pipe, PipeTransform } from '@angular/core';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Pipe({
  name: 'dates'
})
export class DatesPipe implements PipeTransform {
  constructor(
    @Inject(DOCUMENT) private doc) {}

  public transform(date: any, ...arg): string {
    return this.doc.defaultView.dayjs(date).format(...arg);
  }
}
