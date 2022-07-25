import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IFuelType } from '@data/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class FuelTypeApiService {

  private readonly URL = `${environment.apiUrl}/${environment.apiEndpoints.fuelTypes}`;

  constructor(
    private http: HttpClient
  ) { }

  getFuelTypes(): Observable<IFuelType[]> {
    return this.http.get<IFuelType[]>(this.URL);
  }

}
