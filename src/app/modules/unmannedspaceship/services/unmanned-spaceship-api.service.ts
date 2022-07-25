import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUnmannedSpaceship } from '@data/interfaces';
import { environment } from '@env/environment';


@Injectable({
  providedIn: 'root'
})
export class UnmannedSpaceshipApiService {

  private readonly URL = `${environment.apiUrl}/${environment.apiEndpoints.unmannedSpaceships}`;

  constructor(
    private http: HttpClient
  ) { }

  getUnmannedSpaceships(): Observable<IUnmannedSpaceship[]> {
    return this.http.get<IUnmannedSpaceship[]>(this.URL);
  }

}
