import { ISpaceship } from "./spaceship.interface";

export interface IShuttleVehicle extends ISpaceship {
    push: number;
    capacityLoad: number;
    power: number;
}
