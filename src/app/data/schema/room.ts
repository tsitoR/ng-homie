import { App } from "../../app";
import { Appliance } from "./appliance";
import { RoomType } from "./room-type";

export interface Room {
  roomtype: RoomType;
  appliances?: Appliance[];
}
