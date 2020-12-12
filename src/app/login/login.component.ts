import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder , private auth: AuthService , private router: Router) { }

  ngOnInit(): void {

  this.myForm = this.fb.group({
    UserName: '',
    Password : '',
  }) ;
  }

  // tslint:disable-next-line: typedef
  loginUser(){
    this.auth.loginUser(this.myForm.value).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token) ;
        this.router.navigate(['/home']) ;

      },
      err => console.log(err)
    )
    ;
   }
}