import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

import { StorageService } from './storage.service';
import { Vote, Votes } from './vote.type';

@Injectable()
export class VotesService {

  static KEY = 'votes';

  private req$: any;

  public votes: Votes[] = (this.storage.get(VotesService.KEY) || [] );

  constructor(
    private storage: StorageService,
    private http: HttpClient
  ) {
    this.init();
  }

  private init() {
    if (!this.votes.length) {
      this.req$ = this.http.get<Votes[]>('/assets/api/vote.json')
        .subscribe((votes: Votes[] = []) => {
          this.storage.set(VotesService.KEY, votes);
          this.votes = votes;
        }, err => {
          console.error(err);
        });
    }
  }

  private save() {
    this.storage.set(VotesService.KEY, this.votes);
  }

  public id(id: string): Observable<Votes> {
    const votes: Votes = this.votes.find(vet => (vet.id + '' ) === (id + '') ) || ({ id } as Votes);
    return of<Votes>(votes);
  }

  public set(id: string, user: Vote): Observable<Votes> {
    let index: number = this.votes.findIndex(vet => vet.id === id );

    if (index > -1) {
      this.votes[index].user = user;
    } else {
      this.votes.push({ id, user });
      index = this.votes.length - 1;
    }

    this.save();
    return of<Votes>(this.votes[index]);
  }

  public remove(id: string): Observable<Votes> {
    const index: number = this.votes.findIndex(vet => vet.id === id );

    if (index > -1) {
      this.votes.splice(index, 1);
    }

    this.save();
    return of<Votes>(this.votes[index]);
  }
}
