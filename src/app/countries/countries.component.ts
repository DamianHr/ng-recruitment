import { Component, OnDestroy, ViewChild } from '@angular/core';
import { CountriesService, RequestTypes } from './countries.service';
import { Country } from './definitions';
import { MatTable } from '@angular/material/table';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['countries.component.scss'],
})
export class CountriesComponent implements OnDestroy {
  @ViewChild(MatTable) table: MatTable<Country>;
  displayedColumns: string[] = [
    'flag',
    'name',
    'region',
    'population',
    'alpha3Code',
  ];
  data: Readonly<Country[]> = [];

  destroyer: Subject<any> = new Subject<any>();

  constructor(private readonly countriesService: CountriesService) {}

  public onFilterUpdate(parameter: string) {
    this.filterUpdate(parameter)
      .pipe(takeUntil(this.destroyer))
      .subscribe((countries) => (this.data = countries));
  }

  public filterUpdate(parameter: string) {
    return this.countriesService
      .getByParam(RequestTypes.NAME, parameter)
      .pipe(map((countries) => this.sort(countries, 'region', true)));
  }

  ngOnDestroy(): void {
    this.destroyer.next();
    this.destroyer.unsubscribe();
  }

  /**
   * Sorts given data by provided property with respecitve order.
   * @param data The array of countries.
   * @param property The property of country object.
   * @param ascending Defines the soring order.
   */
  private sort(
    data: Readonly<Country[]>,
    property: keyof Country,
    ascending = false
  ): Readonly<Country[]> {
    return data;
  }

  /**
   * Filters given data by countries that have population higher
   * than 2M and its name starts with `t` or finishes with `o`.
   * @param data The array of countries.
   */
  private filter(data: Readonly<Country[]>): Readonly<Country[]> {
    return data;
  }
}
