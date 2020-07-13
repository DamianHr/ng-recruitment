import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './definitions';
import { CountriesService, RequestTypes } from './countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html'
})
export class CountriesComponent implements OnInit {

  public countries$: Observable<Array<Country>> | Observable<Array<Partial<Country>>>;

  constructor(private readonly countriesService: CountriesService) {
  }

  ngOnInit() {
    // this.countries$ = this.countriesService.getAll();
    this.countries$ = this.countriesService.getByParam(RequestTypes.NAME, '');
  }
}
