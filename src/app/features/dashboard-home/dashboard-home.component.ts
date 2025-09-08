import { Component } from '@angular/core';
import { CardComponent, CardListItemDirective } from "../../shared/components/card/card.component";
import { CardItemComponent } from "../../shared/components/card-item/card-item.component";

import { RouterModule, Router } from '@angular/router';
import { Home } from '../../data/schema/home';
import { Subscription } from '../../data/schema/subscription';

const defaultHomes: Home[] = [
  {
    code: 'Home1',
    subscription: {
      code: 'Sub1',
      isactive: true
    },
    rooms: [
      {
        roomtype: { code: 'LVNRM', description: 'Main living area' },
        appliances: [
          {
            applianceType: { code: 'AC', description: 'Air Conditioner' }, name: 'Living Room AC',
            description: 'Cools the living room'
          },
          {
            applianceType: { code: 'HTR', description: 'Heater' }, name: 'Living Room Heater',
            description: 'Heats the living room during winter'
          },
          {
            applianceType: { code: 'FAN', description: 'Ceiling Fan' }, name: 'Living Room Fan',
            description: 'Provides air circulation'
          },
          {
            applianceType: { code: 'TV', description: 'Television' }, name: 'Living Room TV',
            description: 'Smart TV with streaming apps'
          }
        ]
      },
      {
        roomtype: { code: 'BEDRM', description: 'Sleeping area' },
        appliances: [
          {
            applianceType: { code: 'AC', description: 'Air Conditioner' }, name: 'Bedroom AC',
            description: 'Keeps bedroom cool'
          },
          {
            applianceType: { code: 'HTR', description: 'Heater' }, name: 'Bedroom Heater',
            description: 'Provides warmth at night'
          },
          {
            applianceType: { code: 'FAN', description: 'Ceiling Fan' }, name: 'Bedroom Fan',
            description: 'Ceiling-mounted fan'
          },
          {
            applianceType: { code: 'TV', description: 'Television' }, name: 'Bedroom TV',
            description: 'Wall-mounted TV'
          },
          {
            applianceType: { code: 'LGT', description: 'Lighting' }, name: 'Bedroom Light',
            description: 'Ceiling LED light'
          }
        ]
      },
      {
        roomtype: { code: 'KTCHN', description: 'Cooking area' },
        appliances: [
          {
            applianceType: { code: 'FRDG', description: 'Refrigerator' }, name: 'Kitchen Fridge',
            description: 'Double-door refrigerator'
          },
          {
            applianceType: { code: 'MWV', description: 'Microwave' }, name: 'Kitchen Microwave',
            description: 'Microwave oven'
          },
          {
            applianceType: { code: 'STOV', description: 'Stove' }, name: 'Gas Stove',
            description: '4-burner gas stove'
          },
          {
            applianceType: { code: 'LGT', description: 'Lighting' }, name: 'Kitchen Light',
            description: 'Overhead fluorescent lighting'
          }
        ]
      }
    ]
  },
  {
    code: 'Home2',
    subscription: {
      code: 'Sub1',
      isactive: true
    },
    rooms: [
      {
        roomtype: { code: 'LVNRM', description: 'Main living area' },
        appliances: [
          {
            applianceType: { code: 'AC', description: 'Air Conditioner' }, name: 'Living Room AC',
            description: 'Cools the living room'
          },
          {
            applianceType: { code: 'TV', description: 'Television' }, name: 'Living Room TV',
            description: 'Smart TV with streaming apps'
          }
        ]
      },
      {
        roomtype: { code: 'BEDRM', description: 'Sleeping area' },
        appliances: [
          {
            applianceType: { code: 'FAN', description: 'Ceiling Fan' }, name: 'Bedroom Fan',
            description: 'Provides airflow while sleeping'
          },
          {
            applianceType: { code: 'LGT', description: 'Lighting' }, name: 'Bedroom Light',
            description: 'Warm LED bulb'
          }
        ]
      },
      {
        roomtype: { code: 'KTCHN', description: 'Cooking area' },
        appliances: [
          {
            applianceType: { code: 'FRDG', description: 'Refrigerator' }, name: 'Kitchen Fridge',
            description: 'Standard refrigerator'
          },
          {
            applianceType: { code: 'STOV', description: 'Stove' }, name: 'Gas Stove',
            description: 'Gas cooking stove'
          }
        ]
      }
    ]
  },
  {
    code: 'Home3',
    subscription: {
      code: 'Sub1',
      isactive: true
    },
    rooms: [
      {
        roomtype: { code: 'LVNRM', description: 'Main living area' },
        appliances: [
          {
            applianceType: { code: 'FAN', description: 'Ceiling Fan' }, name: 'Living Room Fan',
            description: 'Provides air circulation'
          },
          {
            applianceType: { code: 'LGT', description: 'Lighting' }, name: 'Living Room Light',
            description: 'Chandelier lighting'
          }
        ]
      },
      {
        roomtype: { code: 'BEDRM', description: 'Sleeping area' },
        appliances: [
          {
            applianceType: { code: 'AC', description: 'Air Conditioner' }, name: 'Bedroom AC',
            description: 'Portable AC'
          },
          {
            applianceType: { code: 'HTR', description: 'Heater' }, name: 'Bedroom Heater',
            description: 'Space heater'
          }
        ]
      },
      {
        roomtype: { code: 'KTCHN', description: 'Cooking area' },
        appliances: [
          {
            applianceType: { code: 'FRDG', description: 'Refrigerator' }, name: 'Kitchen Fridge',
            description: 'Mini fridge'
          },
          {
            applianceType: { code: 'MWV', description: 'Microwave' }, name: 'Kitchen Microwave',
            description: 'Countertop microwave'
          }
        ]
      }
    ]
  }
]
;

@Component({
  selector: 'app-dashboard-home',
  imports: [CardComponent, CardItemComponent, CardListItemDirective, RouterModule],
  template: `
    <app-card [list]="defaultHomes">
      <div card-header class="font-bold text-lg mb-2">
        <span>Dashboard</span>
        <button mat-button class="nav-button" [routerLink]="['/homes/add']"
              routerLinkActive="active">
              Add Home
        </button>
      </div>
      <ng-template card-list-item let-item>
        <app-card-item class="p-2 border border-gray-300 mb-1 rounded" (details)="details(item)">
          {{ item.code }}
        </app-card-item>
      </ng-template>
    </app-card>`,
    standalone: true
})
export class DashboardHomeComponent {
  defaultHomes = defaultHomes;

  constructor(private router: Router) {}

  details(item: Home) {
    console.log('Details button clicked for:', item);
    this.router.navigate(['/homes/details'], { state: { home: item } });
  }
}
