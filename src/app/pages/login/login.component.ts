import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../api/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm = this.formBuilder.group({
    email: [ '', [Validators.required, Validators.minLength(1), Validators.email] ],
    password: [ '', [Validators.required, Validators.minLength(8)] ]
  });

  constructor(
    public user: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  public onSubmit() {
    if (this.loginForm.valid) {
      this.user
        .login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
        .then(e => this.router.navigate([{outlets: {modal: null}}]));
    }
  }

}
