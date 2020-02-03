import { Component, OnChanges, Input, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';

import { Vote, Votes } from '../../api/vote.type';
import { Person } from '../../api/person.type';
import { VotesService } from '../../api/vote.service';

@Component({
  selector: 'app-person-summary',
  templateUrl: './person-summary.component.html',
  styleUrls: ['./person-summary.component.scss']
})
export class PersonSummaryComponent implements OnChanges {

  @Input()
  public person: Person;

  @HostBinding('style.backgroundImage')
  public get image(): string {
    return `url('./assets/image/${this.person.id}.png')`;
  }

  public votes$: Observable<Votes>;
  public select: Vote | null = null;

  constructor(
    private votes: VotesService
  ) { }

  ngOnChanges() {
    if (this.person.id) {
      this.votes$ = this.votes.id(this.person.id);
    }
  }

  doVote(type: boolean) {
    if (type) {
      this.votes.set(this.person.id, this.select);
    } else {
      this.votes.remove(this.person.id);
    }

    this.votes$ = this.votes.id(this.person.id);
    this.select = null;
  }

}
