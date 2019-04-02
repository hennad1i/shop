import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../interfaces/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() user: User;

  constructor() {
  }

  ngOnInit() {
  }

  getRole() {
    if (this.user) {
      return this.user.role;
    }
    return null;
  }

}
