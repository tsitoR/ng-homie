import { ApplianceType } from "./appliance-type";

export interface Appliance {
  applianceType: ApplianceType;
  name: string;
  description: string;
}
