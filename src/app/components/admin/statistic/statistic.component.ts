import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  user: User;
  screenWidth;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private authService: AuthService) { }

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
