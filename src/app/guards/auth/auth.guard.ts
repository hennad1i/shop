import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService){
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // GET CURRENT ROUTER;
    
      if(localStorage.getItem('token')){
        this.authService.getUserObservable().subscribe(
          result => {
            console.log(result.role);
            if(result.role !== 'user'){
              this.router.navigate(['/admin'])
            }
            this.router.navigate(['/user'])
          },
          error => {
            this.authService.logout();
          }
        );
      }

      if(localStorage.getItem('token'))

      this.router.navigate(['/']);
      return false;
  }
  
}
