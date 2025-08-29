import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../data/schema/user';

import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-white p-6 shadow rounded w-80">
      <h1 class="text-xl font-semibold mb-4">Login</h1>
      <form (ngSubmit)="onSubmit()">
        <input class="border w-full p-2 mb-2" type="text" placeholder="Username" [(ngModel)]="username" name="username">
        <input class="border w-full p-2 mb-4" type="password" placeholder="Password" [(ngModel)]="password" name="password" required>
        <button class="bg-blue-600 text-white px-4 py-2 w-full">Login</button>
      </form>
    </div>
  `,
  standalone: true
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const user: User = {
      username: this.username,
      password: this.password,
      token: ''
    };
    this.authService.login(user).subscribe({
      next: (user) => {
        console.log('Login successful:', user);
        this.router.navigate(['/homes']);
      },
      error: (err) => {
        console.error('Login failed:', err);
      }
    });
  }
}
