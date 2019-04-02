import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {LandingForm} from 'src/app/interfaces/landing-form';
import {AuthService} from 'src/app/services/auth/auth.service';
import {Router} from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input('data') fields: Array<any>;
  @Input() buttons: Array<any>;
  @Input() form: FormGroup;
  @Input() link: string;
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private modalService: ModalService
  ) {
  }

  ngOnInit() {
  }

  isValid(formControl: FormControl, field: LandingForm): boolean {

    if (formControl.errors === null) {
      return false;
    }

    if (formControl.errors.email) {
      this.errorMessage = field.errorMessages.emailMessage;
    }

    if (formControl.errors.required) {
      this.errorMessage = field.errorMessages.requiredMessage;
    }

    if (formControl.errors.minlength) {
      this.errorMessage = field.errorMessages.lengthMessage;
    }

    return true;
  }

  onSubmit() {
    this.authService.loginOrRegister(this.form, this.link).subscribe(result => {
      const {data, status} = result;

      if (status === 'success') {
        localStorage.setItem('token', data.token);

        if (data.user.role === 'manager' || data.user.role === 'admin') {
          this.router.navigate(['/admin']);
        }

        this.router.navigate(['/user']);
      }

      if(status === 'error'){
        this.modalService.openErrorModal(result.message.email);
      }
    },
    error => {
      this.modalService.openErrorModal(error.error.message);
    });
  }

}
