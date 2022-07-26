import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IMannedSpaceship } from '@data/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class MannedSpaceshipApiService {

  private readonly URL = `${environment.apiUrl}/${environment.apiEndpoints.mannedSpaceships}`;

  constructor(
    private http: HttpClient
  ) { }

  getMannedSpaceships(): Observable<IMannedSpaceship[]> {
    return this.http.get<IMannedSpaceship[]>(this.URL);
  }

  createMannedSpaceship(mannedSpaceship: IMannedSpaceship): Observable<IMannedSpaceship> {
    return this.http.post<IMannedSpaceship>(this.URL, mannedSpaceship);
  }

}
