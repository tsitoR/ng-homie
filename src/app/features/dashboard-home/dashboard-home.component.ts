import { Component } from '@angular/core';
import { CardComponent, CardListItemDirective } from "../../shared/components/card/card.component";
import { CardItemComponent } from "../../shared/components/card-item/card-item.component";

@Component({
  selector: 'app-dashboard-home',
  imports: [CardComponent, CardItemComponent, CardListItemDirective],
  template: `
    <app-card [list]="['Home 1', 'Home 2', 'Home 3']">
      <div card-header class="font-bold text-lg mb-2">Dashboard</div>
      <ng-template card-list-item let-item>
        <app-card-item class="p-2 border border-gray-300 mb-1 rounded" (details)="details(item)">
          {{ item }}
        </app-card-item>
      </ng-template>
    </app-card>`,
    standalone: true
})
export class DashboardHomeComponent {
  details(item: string) {
    console.log('Details button clicked for:', item);
  }
}
