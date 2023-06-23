import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth/auth.service';
import { ToasterService } from '../core/services/toastr/toaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  constructor(private authAPI: AuthService, private toatser: ToasterService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.authAPI.login(this.loginForm.value).subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('type', res.data.type)
        this.toatser.success("Logged In")
        this.router.navigateByUrl('/admin/cat')
      }
    }, err => {
      console.log(err);
      if (err) this, this.toatser.error('Invalid Username/password !')
    })
  }
}
