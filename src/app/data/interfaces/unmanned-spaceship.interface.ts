import { ISpaceship } from "./spaceship.interface";

export interface IUnmannedSpaceship extends ISpaceship {
    destination: string;
    quantityMotors: number;
    push: number;
}
