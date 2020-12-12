import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { SigninComponent } from '../signin/signin.component';

const routes: Routes = [
    { path: 'home', component : HomeComponent,canActivate: [AuthGuard]},
       { path: ' ', component:  LoginComponent},
       { path: 'signin', component:  SigninComponent},
       

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent, LoginComponent,SigninComponent]