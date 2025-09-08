import { Component } from '@angular/core';
import { FormComponent, FormFieldDirective } from "../../../shared/components/form/form.component";
import { FormFieldComponent } from "../../../shared/components/form-field/form-field.component";

@Component({
  selector: 'app-home-form',
  imports: [FormComponent, FormFieldComponent, FormFieldDirective],
  template: `
  <app-form [list]="['Field 1', 'Field 2', 'Field 3'] " (submit)="onSubmit()">
    <ng-template form-field let-field>
      <app-form-field>
        <input placeholder={{field}} />
      </app-form-field>
    </ng-template>
    Home Form
  </app-form>`,
  standalone: true
})
export class HomeFormComponent {
  onSubmit() {
    console.log('Form submitted');
  }
}
