import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private noSupport = {};

  private get isSupport(): boolean {
    return isPlatformBrowser(this.plataform)
        && !!this.doc
        && !!this.doc.defaultView
        && !!this.doc.defaultView.localStorage;
  }

  constructor(
    @Inject(PLATFORM_ID) private plataform,
    @Inject(DOCUMENT) private doc
  ) {}

  public get(type: string = ''): any {
    return JSON.parse( ( this.isSupport
          ? this.doc.defaultView.localStorage.getItem(type)
          : this.noSupport[type] ) || 'null');
  }

  public set(type: string = '', value: any): any {
    const data = JSON.stringify(value);
    return this.isSupport
          ? this.doc.defaultView.localStorage.setItem(type, data)
          : this.noSupport[type] = data;
  }

  public remove(type: string = ''): any {
    return this.isSupport
          ? this.doc.defaultView.localStorage.removeItem(type)
          : this.noSupport[type] = null;
  }

  public clear(): any {
    return this.isSupport
          ? this.doc.defaultView.localStorage.clear()
          : this.noSupport = {};
  }
}
