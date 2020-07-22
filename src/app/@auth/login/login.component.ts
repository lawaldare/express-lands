import { AuthService } from './../../@core/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  username: string;
  password: string;
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }


  login(form: NgForm) {
    this.loading = true;
    console.log(form.value);
    this.authService.login(form.value).subscribe(data => {
      this.loading = false;
      this.router.navigate(['portal/dashboard']);
    })

  }

}
