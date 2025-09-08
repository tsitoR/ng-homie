import { Component, Input } from '@angular/core';
import { CardComponent, CardListItemDirective } from "../../shared/components/card/card.component";
import { RouterModule } from '@angular/router';
import { CardItemComponent } from "../../shared/components/card-item/card-item.component";
import { Appliance } from '../../data/schema/appliance';
import { Room } from '../../data/schema/room';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard-appliance',
  imports: [CardComponent, RouterModule, CardItemComponent, CardListItemDirective],
  template: `
    <app-card [title]="'Room Appliances'" [list]="room?.appliances">
      <div card-header class="font-bold text-lg mb-2">
        <span>Room Appliances</span>
        <button mat-button class="nav-button" [routerLink]="['/appliances/add']"
              routerLinkActive="active">
              Add Room Appliance
        </button>
      </div>
      <ng-template card-list-item let-item>
        <app-card-item (details)="onDetails(item)">
          <div class="p-4 border border-gray-300 rounded mb-2">
            <h3 class="text-xl font-semibold mb-2">{{ item.name }}</h3>
            <p class="text-gray-600">{{ item.applianceType.description }}</p>
          </div>
        </app-card-item>
      </ng-template>
    </app-card>
  `,
  standalone: true
})
export class DashboardApplianceComponent {
  room: Room | undefined;
  constructor(private location: Location) {
    const state = location.getState() as { room?: Room };
    this.room = state.room;
  }
  onDetails(item: Appliance) {
    console.log('Details for', item.name);
  }
}
