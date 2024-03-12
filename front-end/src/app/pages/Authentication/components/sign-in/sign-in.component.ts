import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'dem-sign-in',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  constructor(private authService: AuthService, private router: Router) {}

  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  login = (e: Event) => {
    e.preventDefault();
    this.authService
      .login({
        username: this.signInForm.controls['username'].value as string,
        password: this.signInForm.controls['password'].value as string,
      })
      .subscribe({
        next: (response) => {
          if (response && response.message === 'Login Successfully') {
            localStorage.setItem('accessToken', response.accessToken!);
            this.authService.setAuthentication(true);
            this.router.navigate(['/']);
          }
        },
      });
  };
}
