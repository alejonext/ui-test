import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  exportAs: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Output()
  public status: EventEmitter<any> = new EventEmitter<any>();

  constructor( private router: Router ) {}

  close( $event ) {
    this.router.navigate([{outlets: {modal: null}}]);
    this.status.next($event);
  }

}
