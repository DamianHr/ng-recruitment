// For more information refer to https://restcountries.eu/#api-endpoints-all

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { Country } from './definitions';

const ApiUrl = 'https://restcountries.eu/rest/v2';

export enum RequestTypes {
  NAME = 'name',
  ALPHA = 'alpha',
  CURRENCY = 'currency',
  CAPITAL = 'capital',
  CALLINGCODE = 'callingcode',
  REGION = 'region',
}

export enum Regions {
  AFRICA = 'africa',
  AMERICAS = 'americas',
  ASIA = 'asia',
  EUROPE = 'europe',
  OCEANIA = 'oceania',
}

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private readonly http: HttpClient) {}

  public getAll(): Observable<Array<Country>> {
    return this.http
      .get<Array<Country>>(`${ApiUrl}/all`)
      .pipe(catchError(() => EMPTY));
  }

  public getByParam(
    requestType: RequestTypes,
    parameter: string | Regions
  ): Observable<Country[]> {
    let url = `${ApiUrl}/${requestType}`;
    if (parameter) {
      url += '/' + parameter;
    }
    return this.http.get<Array<Country> | Country>(url).pipe(
      map((response) => (Array.isArray(response) ? response : [response])),
      catchError(() => EMPTY)
    );
  }
}
