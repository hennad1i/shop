import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from 'src/app/services/auth/auth.service';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let find;
    const currentUrl = state.url.substring(1);
    const guardUrls = ['admin', 'user'];

    if (!localStorage.getItem('token')) {
      find = guardUrls.find(item => currentUrl.indexOf(item) > -1);

      if (find) {
        this.router.navigate(['/']);
      } else {
        return true;
      }

      return false;
    }

    if (localStorage.getItem('token')) {
      return this.authService.getUser()
        .pipe(
          map(result => {
            this.authService.setUser(result);
            if (currentUrl.indexOf(result.role) > -1 && result.role === 'user') {
              return true;
            } else if (currentUrl.indexOf(result.role) > -1 && result.role !== 'user') {
              return true;
            } else {
              if (result.role === 'user') {
                this.router.navigate(['/user']);
              } else {
                this.router.navigate(['/admin']);
              }
              return false;
            }
          }),
          catchError(error => {
            this.authService.logout();
            return of(false);
          })
        );
    }

  }
}
