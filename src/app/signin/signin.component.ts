import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder , private auth: AuthService , private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      UserName: '',
      FirstName: '',
      LastName: '',
      Password : '',
      email: '',
      phone: null ,
    });
  }



  // tslint:disable-next-line: typedef
  registerUser(){
   this.auth.registerUser(this.myForm.value).subscribe (
    res => {
      console.log(res);
      localStorage.setItem('token', res.token ) ;
      this.router.navigate(['/home']) ;

    },
    err => {
      console.log(err);
      if (err instanceof HttpErrorResponse){
           if (err.status === 401) {
             this.router.navigate(['/login']) ;
           }
      }
    }
  ); }

}