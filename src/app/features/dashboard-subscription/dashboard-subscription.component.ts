import { Component } from '@angular/core';
import { CardComponent, CardListItemDirective } from "../../shared/components/card/card.component";
import { CardItemComponent } from "../../shared/components/card-item/card-item.component";

@Component({
  selector: 'app-dashboard-subscription',
  imports: [CardComponent, CardItemComponent, CardListItemDirective],
  template: `
    <app-card [list]="['Subscription 1', 'Subscription 2', 'Subscription 3']">
      <div card-header class="font-bold text-lg mb-2">Dashboard</div>
      <ng-template card-list-item let-item>
        <app-card-item class="p-2 border border-gray-300 mb-1 rounded" (details)="details(item)">
          {{ item }}
        </app-card-item>
      </ng-template>
    </app-card>`,
    standalone: true
})
export class DashboardSubscriptionComponent {
  details(item: string) {
    console.log('Details button clicked for:', item);
  }
}
