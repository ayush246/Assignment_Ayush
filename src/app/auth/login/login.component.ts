import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  disableButton: boolean = false

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  onLogin() {
    this.disableButton = true
    let loginDetails = this.loginForm.getRawValue()
    this.authService.loginUser(loginDetails).subscribe(
      (res: any) => {
        if (res && res.is_success) {
          localStorage.setItem("token",res.data.token)
          this.toastr.success('Logged in successfully!');
          this.router.navigate(['movies'])
        } else if (!res?.is_success) {
          this.toastr.error(res?.error?.message);
        }
        this.disableButton = false
      },
      (error) => {
        this.disableButton = false
        this.toastr.error(error?.error?.error?.message);
      }
    );
  }
}
