import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../api/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(
    private formBuilder: FormBuilder,
    private user: UserService,
    private router: Router) { }

  public signForm = this.formBuilder.group({
    username : [ '', [Validators.required, Validators.minLength(1) ] ],
    password : [ '', [Validators.required, Validators.minLength(4) ] ],
    confirm : [ '', [Validators.required, Validators.minLength(4), SignupComponent.Confirm('password') ] ],
    email : [ '', [Validators.required, Validators.minLength(1), Validators.email] ],
    zip : [ '', [Validators.minLength(1) ] ],
    education : [ '', [ Validators.minLength(1) ] ],
    gender : [ '', [ Validators.minLength(1) ] ],
    icome : [ '', [ Validators.minLength(1) ] ],
    religion : [ '', [ Validators.minLength(1) ] ],
    age : [ '', [ Validators.minLength(1) ] ],
  });

  public static Confirm(
    matchTo: string // name of the control to match to
  ): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : { match : true };
    };
  }

  onSubmit() {
    if (this.signForm.invalid) {
      return false;
    }

    this.user
      .login(this.signForm.value.username, this.signForm.value.password)
      .then(e => this.router.navigate([ '/' ] ));
  }
}
