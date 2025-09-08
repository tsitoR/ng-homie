import { Room } from "./room";
import { Subscription } from "./subscription";

export interface Home {
  subscription: Subscription;
  code: string;
  rooms?: Room[];
}
