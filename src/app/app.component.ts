import { Component } from '@angular/core';
import { UserService } from './api/user.service';

@Component({
  selector: 'app-rules',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public user: UserService
  ) {}

}
