import { Component, Input } from '@angular/core';
import { Home } from '../../../data/schema/home';
import { Location } from '@angular/common';
import { RoomListComponent } from "../room-list/room-list.component";

@Component({
  selector: 'app-home-details',
  imports: [RoomListComponent],
  template: `
    <div class="p-4 border border-gray-300 rounded">
      <h2 class="text-2xl font-bold mb-4">{{home?.code}} Details</h2>
      <p class="">subscription:{{home?.subscription?.code}}</p>
      <p class="">isactive:{{home?.subscription?.isactive}}</p>
    </div>
    <app-room-list [rooms]="home?.rooms || []"></app-room-list>`,
    standalone: true
})
export class HomeDetailsComponent {
  home: Home | undefined;
  constructor(private location: Location) {
    const state = this.location.getState() as { home?: Home };
    this.home = state.home;
  }
}
