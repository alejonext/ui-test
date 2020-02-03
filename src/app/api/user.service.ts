import { Injectable, Inject, PLATFORM_ID, EventEmitter } from '@angular/core';
import { Router, Routes, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';

import { StorageService } from './storage.service';

@Injectable()
export class UserService implements CanActivate {

  static KEY = '_login';

  public login$: EventEmitter<boolean> = new EventEmitter<boolean>();

  public get isLogin(): boolean {
    const log = this.storage.get(UserService.KEY);
    return log && typeof log === 'string' && log.length > 3;
  }

  constructor(
    @Inject(DOCUMENT) private doc,
    private storage: StorageService
  ) {
    this.login$.emit(this.isLogin);
  }

  login(user: string, pass: string): Promise<boolean> {
    this.storage.set(UserService.KEY, this.doc.defaultView.btoa(`${user}:${pass}`));
    this.login$.emit(this.isLogin);

    return Promise.resolve(true);
  }

  logout(): Promise<boolean> {
    this.storage.remove(UserService.KEY);
    this.login$.emit(this.isLogin);

    return Promise.resolve(true);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.isLogin) {

    }


    return !this.isLogin;
  }
}
