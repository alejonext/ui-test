import { Component, OnInit, Input, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';
import { Vote } from '../../api/vote.type';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent {

  @Input()
  @HostBinding('class.select')
  public active = false;

  @Input()
  public value: Vote = 1;

  @Input()
  public opacity = 1;

  @Input()
  public me = 0;

  @Output()
  public vote: EventEmitter<Vote | null> = new EventEmitter();

  @HostBinding('style.backgroundColor')
  public get onBackground(): string {
    return this.value >= 0
        ? `rgba(28, 187, 180, ${this.opacity})`
        : `rgba(255, 173, 29, ${this.opacity})`;
  }

  @HostListener('click', ['$event.target'])
  public onClick(btn) {
    this.vote.emit(!this.active ? this.value : null);
  }

  public get voteMe(): number {
    return ( this.me * Math.sign(this.me) ) || 0;
  }
}


