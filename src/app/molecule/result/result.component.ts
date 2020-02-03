import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

  static PORCENT = 100;
  static PRECISION = 10;

  public floor = Math.floor;

  @Input()
  public pro = 0;

  @Input()
  public contra = 0;

  @Input()
  public me = 0;

  public get proPercent(): number {
    return Math.floor(
      ((( this.pro
        + ( this.me >= 0 ? this.vote : 0 ) )
      * ResultComponent.PORCENT )
    / this.total ) * ResultComponent.PRECISION ) / ResultComponent.PRECISION;
  }

  public get contraPercent(): number {
    return Math.floor(
      ((( this.contra
        + ( this.me < 0 ? this.vote : 0 ) )
      * ResultComponent.PORCENT )
    / this.total ) * ResultComponent.PRECISION ) / ResultComponent.PRECISION;
  }

  public get total(): number {
    return this.contra + this.pro + this.vote;
  }

  public get vote(): number {
    return ( this.me * Math.sign(this.me) ) || 0;
  }
}
