import { Component } from '@angular/core';

@Component({
  selector: 'app-form-field',
  imports: [],
  template: `
  <div class="form-field">
    <ng-content></ng-content>
  </div>`,
  standalone: true
})
export class FormFieldComponent {}
