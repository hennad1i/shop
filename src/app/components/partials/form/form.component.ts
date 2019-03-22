import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {LandingForm} from 'src/app/interfaces/landing/landing-form';

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

  constructor() {
  }

  ngOnInit() {
  }

  isValid(formControl: FormControl, field: LandingForm): boolean{

    if(formControl.errors === null) return false;

    if(formControl.errors.email){
      this.errorMessage = field.errorMessages.emailMessage
    }

    if(formControl.errors.required){
      this.errorMessage = field.errorMessages.requiredMessage
    }

    if(formControl.errors.minlength){
      this.errorMessage = field.errorMessages.lengthMessage
    }

    return true;
  }

  onSubmit(){
    console.log(this.form.value);
    console.log(this.link);
  }

}
