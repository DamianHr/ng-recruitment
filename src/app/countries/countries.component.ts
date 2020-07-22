import { Component, OnDestroy, ViewChild } from '@angular/core';

import { Country } from './definitions';
import { MatTable } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['countries.component.scss'],
})
export class CountriesComponent implements OnDestroy {
  @ViewChild(MatTable) table: MatTable<Country>;
  displayedColumns: string[] = ['name', 'region', 'population', 'alpha3Code'];
  data: Readonly<Country[]> = [];

  private destroyer: Subject<void> = new Subject();

  constructor(private readonly countriesService: CountriesService) { }

  ngOnDestroy(): void {
    this.destroyer.next();
    this.destroyer.unsubscribe();
  }

  public onSearchUpdate(searchTerm: string): void {
    this.getData(searchTerm)
      .pipe(takeUntil(this.destroyer))
      .subscribe((countries) => (this.data = countries));
  }

  /**
   *   !!! YOUR CHANGES START HERE !!!
   */

  public getData(parameter: string): Observable<ReadonlyArray<Country>> {
    return this.countriesService
      .getByParameter(parameter);
  }

  /**
   * Sorts given data based on provided property and order.
   * @param data The array of countries.
   * @param property The property to sort on.
   * @param ascending Defines the soring order.
   */
  public sort(
    data: Readonly<Country[]>,
    property: keyof Country,
    ascending = false
  ): Readonly<Country[]> {
    return undefined;
  }

  /**
   * Filters given data to keep only countries with a population higher or equal
   * to 20M people and a name starting with one of those letters ['b', 'g', 'l'].
   * @param data The array of countries.
   */
  public filter(data: Readonly<Country[]>): Readonly<Country[]> {
    return undefined;
  }
}
