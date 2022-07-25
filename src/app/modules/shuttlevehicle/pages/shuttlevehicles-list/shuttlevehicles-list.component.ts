import { Component, OnInit } from '@angular/core';

import { IShuttleVehicle } from '@data/interfaces';
import { ShuttleVehicleApiService } from '@modules/shuttlevehicle/services/shuttle-vehicle-api.service';

@Component({
  selector: 'app-shuttlevehicles-list',
  templateUrl: './shuttlevehicles-list.component.html',
  styleUrls: ['./shuttlevehicles-list.component.css']
})
export class ShuttlevehiclesListComponent implements OnInit {

  public shuttlevehicles: IShuttleVehicle[] = [];
  public shuttlevehiclesCopy: IShuttleVehicle[] = [];

  constructor(
    private shuttleVehicleApiService: ShuttleVehicleApiService
  ) { }

  ngOnInit(): void {
    this.shuttleVehicleApiService.getShuttleVehicles().subscribe((data: IShuttleVehicle[]) => {
      this.shuttlevehicles = data.map((item: IShuttleVehicle) => {
        return {
          id: item.id,
          name: item.name,
          img: "/assets/img/vehiculo-lanzadera.jpg",
          country: item.country,
          launchDate: new Date(item.launchDate).toLocaleDateString(),
          speed: item.speed,
          fuelType: item.fuelType,
          weight: item.weight,
          height: item.height,
          push: item.push,
          capacityLoad: item.capacityLoad,
          power: item.power
        };
      });
      this.shuttlevehiclesCopy = this.shuttlevehicles;
    });
  }

  public filterCharacters(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.shuttlevehicles = this.shuttlevehiclesCopy.filter(({ name, country }) => {
      return name.toLowerCase().includes(filterValue.toLowerCase()) || country.toLowerCase().includes(filterValue.toLowerCase());
    });
  }

}
