import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BuildFormService} from '../../../services/build-form/build-form.service';
import {SignInForm} from '../../../interfaces/landing/sign-in-form';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  data: Array<SignInForm> = [];

  constructor(private buildFormService: BuildFormService) {
    this.buildData();
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
}
