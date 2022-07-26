import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FuelTypeApiService } from '@core/services/fuel-type-api.service';
import { IFuelType, IShuttleVehicle, IMannedSpaceship, IUnmannedSpaceship } from '@data/interfaces';
import { ShuttleVehicleApiService } from '@modules/shuttlevehicle/services/shuttle-vehicle-api.service';
import { MannedSpaceshipApiService } from '@modules/mannedspaceship/services/manned-spaceship-api.service';
import { UnmannedSpaceshipApiService } from '@modules/unmannedspaceship/services/unmanned-spaceship-api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalTitle!: string;
  public showModal!: boolean;
  public spaceship: any = {} as any;
  public typeSpaceship: number = 1;
  public fuelTypes: IFuelType[] = [];

  constructor(
    private router: Router,
    private fuelTypeApiService: FuelTypeApiService,
    private shuttleVehicleApiService: ShuttleVehicleApiService,
    private mannedSpaceshipApiService: MannedSpaceshipApiService,
    private unmannedSpaceshipApiService: UnmannedSpaceshipApiService
  ) { }

  ngOnInit(): void {
    this.fuelTypeApiService.getFuelTypes().subscribe((data: IFuelType[]) => {
      this.fuelTypes = data;
    });
  }

  public show(): void {
    this.showModal = true;
  }

  public hide(): void {
    this.showModal = false;
  }

  public selectFuelType(): void {
    let idFuelType = (document.getElementById('fuelType') as HTMLSelectElement).value;
    this.spaceship.fuelType = { id: +idFuelType, name: '' };
  }

  public selectTypeSpaceship() {
    let idTypeSpaceship = (document.getElementById('typeSpaceship') as HTMLSelectElement).value;
    this.typeSpaceship = +idTypeSpaceship;
  }

  public selectPurposeType() {
    let purposeSpaceship = (document.getElementById('purposeType') as HTMLSelectElement).value;
    this.spaceship.purpose = purposeSpaceship;
  }

  public save(): void {
    if (this.typeSpaceship === 1) {
      this.createShuttleVehicle();
    }
    if (this.typeSpaceship === 2) {
      this.createMannedSpaceship();
    }
    if (this.typeSpaceship === 3) {
      this.createUnmannedSpaceship();
    }
    this.hide();
    this.reset();
  }

  public reset(): void {
    this.spaceship = {} as any;
  }

  public createShuttleVehicle() {
    let spaceship: IShuttleVehicle = {
      name: this.spaceship.name,
      country: this.spaceship.country,
      launchDate: this.spaceship.launchDate,
      speed: this.spaceship.speed,
      fuelType: this.spaceship.fuelType,
      weight: this.spaceship.weight,
      height: this.spaceship.height,
      capacityLoad: this.spaceship.capacityLoad,
      power: this.spaceship.power,
      push: this.spaceship.push
    } as IShuttleVehicle;

    this.shuttleVehicleApiService.createShuttleVehicle(spaceship).subscribe((data: IShuttleVehicle) => {
      console.log(data);
    });

    this.router.navigate(['/shuttlevehicle']);

  }

  public createMannedSpaceship() {
    let spaceship: IMannedSpaceship = {
      name: this.spaceship.name,
      country: this.spaceship.country,
      launchDate: this.spaceship.launchDate,
      speed: this.spaceship.speed,
      fuelType: this.spaceship.fuelType,
      weight: this.spaceship.weight,
      height: this.spaceship.height,
      passengersCapacity: this.spaceship.passengersCapacity,
      purpose: this.spaceship.purpose,
    } as IMannedSpaceship;

    this.mannedSpaceshipApiService.createMannedSpaceship(spaceship).subscribe((data: IMannedSpaceship) => {
      console.log(data);
    });

    this.router.navigate(['/mannedspaceship']);
  }

  public createUnmannedSpaceship() {
    let spaceship: IUnmannedSpaceship = {
      name: this.spaceship.name,
      country: this.spaceship.country,
      launchDate: this.spaceship.launchDate,
      speed: this.spaceship.speed,
      fuelType: this.spaceship.fuelType,
      weight: this.spaceship.weight,
      height: this.spaceship.height,
      destination: this.spaceship.destination,
      quantityMotors: this.spaceship.quantityMotors,
      push: this.spaceship.push
    } as IUnmannedSpaceship;

    this.unmannedSpaceshipApiService.createUnmannedSpaceship(spaceship).subscribe((data: IUnmannedSpaceship) => {
      console.log(data);
    });

    this.router.navigate(['/unmannedspaceship']);
  }

}
