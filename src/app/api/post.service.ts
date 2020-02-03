import { Injectable } from '@angular/core';
import { Router, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { StorageService } from './storage.service';
import { Post } from './post.type';

@Injectable()
export class PostService {

  static KEY = '_post';

  public posts: Post[] = (this.storage.get(PostService.KEY) || [] );

  constructor(
    private storage: StorageService,
    private http: HttpClient
  ) {}

  public view(): Observable<Post[]> {
    return this.http.get<Post[]>('/assets/api/post.json')
      .pipe(
        tap((per: Post[] = []) => {
          this.storage.set(PostService.KEY, per);
          this.posts = per;
        })
      );
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any|Post[]> {
    if (this.posts && this.posts.length) {
      return of<Post>(this.posts.find((post: Post) => post.slug === route.data.slug));
    }

    return this.view()
      .pipe(map((e: Post[]) => e.find((post: Post) => post.slug === route.data.slug )));
  }
}
