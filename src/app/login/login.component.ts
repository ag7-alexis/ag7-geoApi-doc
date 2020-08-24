import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../shared/token-storage.service';
import { Credentials } from '../shared/credentials';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  credentials: Credentials = { username: '', password: '' };

  constructor(private formBuilder: FormBuilder, private authService: AuthService, public tokenStorage: TokenStorageService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: [''],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  public login() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.credentials.username = this.f.username.value;
    this.credentials.password = this.f.password.value;

    this.authService.login(this.credentials).subscribe(
      value => {
        this.tokenStorage.saveToken(value.headers.get('Authorization'));
        this.tokenStorage.saveUser(this.credentials.username);
        this.router.navigateByUrl('/home');
      },
      error => {
        document.getElementById('echec-conn').style.display = 'block';
      });
  }
}
