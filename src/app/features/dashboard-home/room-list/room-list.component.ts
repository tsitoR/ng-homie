import { NgFor } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Room } from '../../../data/schema/room';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-room-list',
  imports: [NgFor, RouterModule],
  template: `
    <div class="p-4 border border-gray-300 rounded">
      <h2 class="text-2xl font-bold mb-4">Room List</h2>
      <ul>
        <li *ngFor="let room of rooms" class="mb-2">
          <strong>{{ room.roomtype.code }}</strong> - {{ room.roomtype.description }}
          <button mat-button class="nav-button" (click)="details(room)">
                View Appliances
          </button>
          <!-- <span class="ml-2 text-sm" [class.text-green-500]="room.isactive" [class.text-red-500]="!room.isactive">
            ({{ room.isactive ? 'Active' : 'Inactive' }})
          </span> -->
        </li>
      </ul>
    </div>
  `,
  standalone: true
})
export class RoomListComponent {
  @Input() rooms: Room[] = [];
  constructor(private router: Router) {

  }
  details(room: Room) {
    this.router.navigate(['/homes/rooms/appliances'], { state: { room: room } });
  }
}
