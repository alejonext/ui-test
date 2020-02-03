import { Injectable } from '@angular/core';
import { Router, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { StorageService } from './storage.service';
import { Person } from './person.type';

@Injectable()
export class PersonService {

  static KEY = '_person';

  public persons: Person[] = (this.storage.get(PersonService.KEY) || [] );

  constructor(
    private storage: StorageService,
    private http: HttpClient
  ) {}

  public view(): Observable<Person[]> {
    return this.http.get<Person[]>('/assets/api/person.json')
      .pipe(
        tap((per: Person[] = []) => {
          this.storage.set(PersonService.KEY, per);
          this.persons = per;
        })
      );
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any|Person[]> {
    if (this.persons && this.persons.length) {
      return of<Person[]>(this.persons);
    }

    return this.view();
  }
}
