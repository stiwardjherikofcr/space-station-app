import { Component, Input, OnInit } from '@angular/core';

import { FuelTypeApiService } from '@core/services/fuel-type-api.service';
import { IFuelType } from '@data/interfaces';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalTitle!: string;
  @Input() showModal!: boolean;
  public fuelTypes: IFuelType[] = [];

  constructor(
    private fuelTypeApiService: FuelTypeApiService
  ) { }

  ngOnInit(): void {
    this.fuelTypeApiService.getFuelTypes().subscribe((data: IFuelType[]) => {
      this.fuelTypes = data;
    });
  }

}
