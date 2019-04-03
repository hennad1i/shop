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
  screenWidth;

  constructor(private authService: AuthService) {
    this.responsive();
  }

  ngOnInit() {
    this.user = this.authService.currentUser()
  }

  logout() {
    this.authService.logout();
  }

  responsive() {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }

}
