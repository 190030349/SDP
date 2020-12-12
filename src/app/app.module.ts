import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule, routingComponent } from './app-routing/app-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { ApiService } from './core/api.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { WeekStatusComponent } from './weekstatus/weekstatus.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetailsComponent,
    WeekStatusComponent,
    FooterComponent,
    SigninComponent,
    LoginComponent,
    routingComponent,
    ConfirmComponent,
  
    ],

  imports: [
    BrowserAnimationsModule, 
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatSnackBarModule,
    MatDialogModule,

    // Routes
    RouterModule.forRoot([
      { // /
        path: '',
        component: LoginComponent
      },
      { // home
        path: 'home',
        component: HomeComponent,canActivate: [AuthGuard]
      },
      { // details
        path: 'details',
        component: DetailsComponent
      },
      { // details with params
        path: 'details/:location/:start_date',
        component: DetailsComponent
      },
      { path: '../', component:  LoginComponent},
      { path: 'signin', component:  SigninComponent},
      {path : '' , redirectTo: '/home', pathMatch: 'full'},

    ], { useHash: false })
  ],

  providers: [
    ApiService,
    AuthGuard ,
     {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  

  bootstrap: [AppComponent]
})
export class AppModule { }
