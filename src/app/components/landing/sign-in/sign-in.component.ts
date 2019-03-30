import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BuildFormService} from '../../../services/build-form/build-form.service';
import {LandingForm} from '../../../interfaces/landing-form';
import {Button} from 'src/app/interfaces/button';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  data: LandingForm[] = [];
  buttons: Button[] = [];
  linkSubmit = '/sign-in';

  constructor(private buildFormService: BuildFormService) {
    this.buildData();
    this.buildButtons();
  }

  ngOnInit() {
    this.form = this.buildFormService.buildFormService(this.data);
  }

  buildData() {
    this.data.push({
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
      {type: 'submit', text: 'Sign in', color: 'primary'},
      {type: 'button', text: 'Sign up', routerLink: '/sign-up'}
    );
  }

}
