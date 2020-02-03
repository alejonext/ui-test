import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mechanics',
  templateUrl: './mechanics.component.html',
  styleUrls: ['./mechanics.component.scss']
})
export class MechanicsComponent implements OnInit {

  public cards = [{
    title : 'Vote and speak out',
    image : '/assets/vote.png',
    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius euismod tellus et porta. Vivamus nec metus rutrum ipsum interdum fermentum a in ipsum.',
  }, {
    title : 'Vote and speak out',
    image : '/assets/vote.png',
    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius euismod tellus et porta. Vivamus nec metus rutrum ipsum interdum fermentum a in ipsum.',
  }, {
    title : 'Vote and speak out',
    image : '/assets/vote.png',
    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius euismod tellus et porta. Vivamus nec metus rutrum ipsum interdum fermentum a in ipsum.',
  }];

  constructor() { }

  ngOnInit() {
  }

}
