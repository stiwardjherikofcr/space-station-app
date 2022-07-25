import { Component, OnInit } from '@angular/core';

import { IUnmannedSpaceship } from '@data/interfaces';
import { UnmannedSpaceshipApiService } from '@modules/unmannedspaceship/services/unmanned-spaceship-api.service';

@Component({
  selector: 'app-unmannedspaceships-list',
  templateUrl: './unmannedspaceships-list.component.html',
  styleUrls: ['./unmannedspaceships-list.component.css']
})
export class UnmannedspaceshipsListComponent implements OnInit {

  public unmannedspaceships: IUnmannedSpaceship[] = [];
  public unmannedspaceshipsCopy: IUnmannedSpaceship[] = [];

  constructor(
    private unmannedSpaceshipApiService: UnmannedSpaceshipApiService
  ) { }

  ngOnInit(): void {
    this.unmannedSpaceshipApiService.getUnmannedSpaceships().subscribe((data: IUnmannedSpaceship[]) => {
      this.unmannedspaceships = data.map((item: IUnmannedSpaceship) => {
        return {
          id: item.id,
          name: item.name,
          img: "/assets/img/nave-espacial-no-tripulada.jpg",
          country: item.country,
          launchDate: new Date(item.launchDate).toLocaleDateString(),
          speed: item.speed,
          fuelType: item.fuelType,
          weight: item.weight,
          height: item.height,
          destination: item.destination,
          quantityMotors: item.quantityMotors,
          push: item.push
        };
      });
    });
  }

  public filterCharacters(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.unmannedspaceships = this.unmannedspaceshipsCopy.filter(({ name, country }) => {
      return name.toLowerCase().includes(filterValue.toLowerCase()) || country.toLowerCase().includes(filterValue.toLowerCase());
    });
  }

}
