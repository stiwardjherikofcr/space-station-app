import { ISpaceship } from "./spaceship.interface";
import { PurposeType } from "@data/enums/purpose-type.enum";

export interface IMannedSpaceship extends ISpaceship {
    passengersCapacity: number;
    purpose: PurposeType;
}
