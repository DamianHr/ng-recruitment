
// For more information refer to https://restcountries.eu/#api-endpoints-all

import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map, catchError } from "rxjs/operators" 
import { Observable, EMPTY } from "rxjs";
import { Country } from "./definitions";

const ApiUrl = 'https://restcountries.eu/rest/v2';

export enum RequestTypes {
  NAME = 'name',
  ALPHA = 'alpha',
  CURRENCY = 'currency',
  CAPITAL = 'capital',
  CALLINGCODE = 'callingcode',
  REGION = 'region'
};

export enum Regions {
  AFRICA = 'africa',
  AMERICAS = 'americas',
  ASIA = 'asia',
  EUROPE = 'europe',
  OCEANIA = 'oceania'
};

@Injectable({providedIn: 'root'})
export class CountriesService {

  constructor(private readonly http: HttpClient) {}

  public getAll(): Observable<Array<Country>> {
    return this.http.get(`${ApiUrl}/all`).pipe(
      map(response => <Array<Country>>response),
      catchError(e => console.error)
    );
  }

  public getByParam(requestType: RequestTypes, parameter: string | Regions): Observable<Array<Partial<Country>>> {
    let url = `${ApiUrl}/${requestType}`;
    if(parameter) {
      url += '/' + parameter;
    }
    return this.http.get(url).pipe(
      map(response => <Array<Partial<Country>>>response),
      catchError(() => EMPTY)
    );
  }
}
