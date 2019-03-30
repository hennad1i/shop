import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {LandingForm} from 'src/app/interfaces/landing-form';
import {Button} from 'src/app/interfaces/button';
import {BuildFormService} from 'src/app/services/build-form/build-form.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  data: LandingForm[] = [];
  buttons: Button[] = [];
  linkSubmit = '/sign-up';

  constructor(private buildFormService: BuildFormService) {
    this.buildData();
    this.buildButtons();
  }

  ngOnInit() {
    this.form = this.buildFormService.buildFormService(this.data);
  }

  buildData() {
    this.data.push(
      {
        type: 'text',
        key: 'name',
        required: true,
        placeholder: 'Enter your name',
        errorMessages: {
          requiredMessage: 'You must enter a value'
        }
      },
      {
        type: 'email',
        key: 'email',
        email: true,
        required: true,
        placeholder: 'Enter your email',
        errorMessages: {
          emailMessage: 'Not a valid email',
          requiredMessage: 'You must enter a value'
        }
      },
      {
        type: 'password',
        key: 'password',
        length: 6,
        required: true,
        placeholder: 'Enter your password',
        errorMessages: {
          lengthMessage: 'Minlength 6 symbols',
          requiredMessage: 'You must enter a value'
        }
      }
    );
  }

  buildButtons() {
    this.buttons.push(
      {type: 'submit', text: 'Sign up', color: 'primary'},
      {type: 'button', text: 'Sign in', routerLink: '/sign-in'}
    );
  }

}
