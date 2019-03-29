import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { url } from 'src/app/app.const';
import { User } from 'src/app/interfaces/partials/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  role: string = null;
  user: User = null;

  constructor(private http: HttpClient, private router: Router) { 
    if(localStorage.getItem('token')){
      this.setUser();
    }
  }

  login(form: FormGroup): Observable<any> {
    return this.http.post(`${url}/login`, form.value);
  }

  setToken(token: string){
    localStorage.setItem('token', token)
  }

  getUserObservable(): Observable<User> {
      return this.http.get<User>(`${url}/user`);
  }

  setUser() {
    this.getUserObservable().subscribe(result => this.user = result, error => this.logout())
  }

  getUser(): User | null {
    return this.user;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
