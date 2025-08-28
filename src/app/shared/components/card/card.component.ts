import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: 'ng-template [card-list-item]',
  standalone: true,
})
export class CardListItemDirective {}
@Component({
  selector: 'app-card',
  imports: [NgFor,  NgTemplateOutlet],
  template:  `
    <ng-content select="[card-header]" />

    <section>
      <ng-container *ngFor="let item of list">
        <ng-template
          *ngTemplateOutlet="row ?? empty; context: { $implicit: item }" />
        <ng-template #empty>
          <div>No template</div>
        </ng-template>
      </ng-container>
    </section>
  `,
  standalone: true,
})
export class CardComponent<T> {
  @Input({ required: true }) list: T[] = [];
  @ContentChild(CardListItemDirective, { read: TemplateRef }) row: TemplateRef<{
    $implicit: T;
  }> | undefined;
  @Output() details = new EventEmitter<void>();
}
