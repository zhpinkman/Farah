import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username: FormControl;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.username = new FormControl();
    this.loginForm = new FormGroup({
      username: this.username
    });
  }
  onSubmit(){
    this.loginService.login(this.username.value)
      .subscribe(
        // res => {this.router.navigate(['/home'])},
        error => console.error(error)
      );
  }

}
