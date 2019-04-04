import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../interfaces/user';
import {AuthService} from '../../../services/auth/auth.service';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  user: User;
  screenWidth;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user = this.authService.currentUser();
    this.responsive();
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
