import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../interfaces/user';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user = this.authService.currentUser()
  }

  logout() {
    this.authService.logout();
  }

}
