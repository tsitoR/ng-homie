import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  template: `
    <div class="bg-white p-6 shadow rounded w-80">
      <h1 class="text-xl font-semibold mb-4">Login</h1>
      <form>
        <input class="border w-full p-2 mb-2" type="text" placeholder="Username">
        <input class="border w-full p-2 mb-4" type="password" placeholder="Password">
        <button class="bg-blue-600 text-white px-4 py-2 w-full">Login</button>
      </form>
    </div>
  `,
  standalone: true
})
export class LoginComponent {

}
