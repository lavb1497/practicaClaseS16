import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    HomeComponent,
    LoginComponent
  ]
})
export class PagesModule { }
