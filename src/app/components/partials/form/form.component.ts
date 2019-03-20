import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input('data') fields: Array<any>;
  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
