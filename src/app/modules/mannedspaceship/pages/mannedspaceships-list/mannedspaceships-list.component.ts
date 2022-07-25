import { Component, OnInit } from '@angular/core';

import { IMannedSpaceship } from '@data/interfaces';
import { MannedSpaceshipApiService } from '@modules/mannedspaceship/services/manned-spaceship-api.service';

@Component({
  selector: 'app-mannedspaceships-list',
  templateUrl: './mannedspaceships-list.component.html',
  styleUrls: ['./mannedspaceships-list.component.css']
})
export class MannedspaceshipsListComponent implements OnInit {

  public showModal: boolean = true;
  public mannedspaceships: IMannedSpaceship[] = [];
  public mannedspaceshipsCopy: IMannedSpaceship[] = [];

  constructor(
    private mannedspaceshipApiService: MannedSpaceshipApiService
  ) { }

  ngOnInit(): void {
    this.mannedspaceshipApiService.getMannedSpaceships().subscribe((data: IMannedSpaceship[]) => {
      this.mannedspaceships = data.map((item: IMannedSpaceship) => {
        return {
          id: item.id,
          name: item.name,
          img: "/assets/img/nave-espacial-tripulada.png",
          country: item.country,
          launchDate: new Date(item.launchDate).toLocaleDateString(),
          speed: item.speed,
          fuelType: item.fuelType,
          weight: item.weight,
          height: item.height,
          passengersCapacity: item.passengersCapacity,
          purpose: item.purpose
        };
      });
      this.mannedspaceshipsCopy = this.mannedspaceships;
    });
  }

  public filterCharacters(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.mannedspaceships = this.mannedspaceshipsCopy.filter(({ name, country }) => {
      return name.toLowerCase().includes(filterValue.toLowerCase()) || country.toLowerCase().includes(filterValue.toLowerCase());
    });
  }

}
