import { Component, inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../../services/authentication.service';
import { User } from '../../../models/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };
  registrationSuccess: boolean | null = null;
  authService = inject(AuthenticationService);
  fb = inject(FormBuilder);
  registerForm : FormGroup= this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      firstname: [''],
      lastname: [''],
      age: ['', [Validators.min(0)]],
      address: [''],
      phone: ['']
    });



  register() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    const user: User = { ...this.registerForm.value };
    this.registrationSuccess = this.authService.register(user);
  }

  get f() {
    return this.registerForm.controls;
  }
}
