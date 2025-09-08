import { Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { NgFor, NgTemplateOutlet } from '@angular/common';

@Directive({
  selector: 'ng-template [form-field]',
  standalone: true,
})
export class FormFieldDirective {}
@Component({
  selector: 'app-form',
  imports: [NgTemplateOutlet, NgFor],
  template: `
    <form>
      <h2>
        <ng-content></ng-content>
      </h2>
      <ng-container *ngFor="let field of list">
        <ng-template
          *ngTemplateOutlet="row ?? empty; context: { $implicit: field }" />
        <ng-template #empty>
          <div>No template</div>
        </ng-template>
      </ng-container>
      <button (click)="submit.emit()">Submit</button>
    </form>
  `,
  standalone: true
})
export class FormComponent<T> {
  @Input({ required: true }) list: T[] = [];
  @ContentChild(FormFieldDirective, { read: TemplateRef }) row: TemplateRef<{
    $implicit: T;
  }> | undefined;
  @Output() submit = new EventEmitter<void>();
}
