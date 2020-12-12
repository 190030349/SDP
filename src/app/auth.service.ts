import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public usersid ;

  // tslint:disable-next-line: typedef
  getToken() {
    throw new Error('Method not implemented.');
  }
  // tslint:disable-next-line: member-ordering
  private base =  'http://localhost:3000/api/data'
  // tslint:disable-next-line: member-ordering
  private signinurl = 'http://localhost:3000/api/register' ;
  // tslint:disable-next-line: member-ordering
  private loginurl = 'http://localhost:3000/api/login' ;
  // tslint:disable-next-line: member-ordering
  readonly baseurl = 'http://localhost:3000/product';

  constructor(private http: HttpClient ,  private router: Router) { }

   // tslint:disable-next-line: typedef
   registerUser(user) {
     return this.http.post<any>(this.signinurl, user) ;
   }

   // tslint:disable-next-line: typedef
   loginUser(user) {
     return this.http.post<any>(this.loginurl, user ) ;
   }

   // tslint:disable-next-line: typedef
   loggedIn() {
    return !!localStorage.getItem('token') ;
  }


// tslint:disable-next-line: typedef
etToken() {
    return localStorage.getItem('token');
  }

  // tslint:disable-next-line: typedef
  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['../']);
  }
  // tslint:disable-next-line: typedef
  getProducts(){
    return this.http.get<any>(this.baseurl);
  }
  // tslint:disable-next-line: typedef
  putProduct(usersid) {
    return this.http.put(this.base + `/${usersid._id}`, usersid);
  }

}