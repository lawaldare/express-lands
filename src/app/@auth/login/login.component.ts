import { AuthService } from './../../@core/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  username: string;
  password: string;
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService,) { }

  ngOnInit() {
  }


  login(form: NgForm) {
    this.loading = true;
    this.authService.login(form.value).subscribe(data => {
      this.loading = false;
      if (data.verification_status) {
        this.router.navigate(['portal/dashboard']);
      } else {
        this.toastr.warning('Please verify your account');
      }
    }, error => {
      this.toastr.error(error.error);
      this.loading = false;
    })

  }

}
