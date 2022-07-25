import { IFuelType } from "./fuel-type.interface";

export interface ISpaceship {
    id: number;
    name: string;
    country: string;
    launchDate: string;
    speed: number;
    fuelType: IFuelType;
    weight: number;
    height: number;
}
