import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {url} from 'src/app/app.const';
import {User} from 'src/app/interfaces/user';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = null;

  constructor(private http: HttpClient, private router: Router) {
  }

  loginOrRegister(form: FormGroup, link: string): Observable<any> {
    if (link === '/sign-in') {
      return this.http.post(`${url}/login`, form.value);
    } else {
      return this.http.post(`${url}/register`, form.value);
    }
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${url}/user`);
  }

  setUser(user: User) {
    this.user = user;
  }

  currentUser(): User {
    return this.user;
  }

  logout() {
    this.user = null;
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
