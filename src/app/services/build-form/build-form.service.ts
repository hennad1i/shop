import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BuildFormService {

  constructor() {
  }

  buildFormService(fields: any): FormGroup {
    const group: any = {};

    fields.forEach(field => {
      const validation = [];

      if (field.required) {
        validation.push(Validators.required);
      }
      if (field.email) {
        validation.push(Validators.email);
      }
      if (field.length) {
        validation.push(Validators.minLength(field.length));
      }
      group[field.key] = new FormControl(field.value || '', validation);
    });

    return new FormGroup(group);
  }
}
