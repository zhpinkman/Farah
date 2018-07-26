import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { HttpClientModule } from '@angular/common/http';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: '', component: HomeComponent},
//   { path: '**', component: LoginComponent}
// ]
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    LoginComponent,
    HomeComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
