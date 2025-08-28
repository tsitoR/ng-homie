import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-item',
  imports: [],
  template: `
    <div class="border border-grey-300 py-1 px-2 flex justify-between">
      <ng-content />
      <button (click)="details.emit()">
        Details
      </button>
    </div>
  `,
  standalone: true
})
export class CardItemComponent {
  @Output() details = new EventEmitter<void>();
}
