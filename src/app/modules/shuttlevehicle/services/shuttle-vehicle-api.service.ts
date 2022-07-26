import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IShuttleVehicle } from '@data/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ShuttleVehicleApiService {

  private readonly URL = `${environment.apiUrl}/${environment.apiEndpoints.shuttleVehicle}`;

  constructor(
    private http: HttpClient
  ) { }

  getShuttleVehicles(): Observable<IShuttleVehicle[]> {
    return this.http.get<IShuttleVehicle[]>(this.URL);
  }

  createShuttleVehicle(shuttleVehicle: IShuttleVehicle): Observable<IShuttleVehicle> {
    return this.http.post<IShuttleVehicle>(this.URL, shuttleVehicle);
  }

}
