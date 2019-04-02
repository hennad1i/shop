import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  role: string = null;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    if (this.authService.currentUser()) {
      this.role = this.authService.currentUser().role;
    }
  }
}
