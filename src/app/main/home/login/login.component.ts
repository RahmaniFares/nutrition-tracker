import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;
  router = inject(Router);
  authService  = inject(AuthenticationService);
  isConnected = this.authService.isUserConnected;

  login() {
    const isLoggedIn = this.authService.login(this.username, this.password);
    if (isLoggedIn) {
      this.loginError = false;
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = true;
    }
  }

  logout() {
    this.authService.logout();
    this.username = '';
    this.password = '';
    this.loginError = false;
  }

}


