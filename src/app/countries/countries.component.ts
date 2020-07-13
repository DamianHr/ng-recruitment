import {Component, OnDestroy, ViewChild} from '@angular/core';
import {CountriesService, RequestTypes} from './countries.service';
import {Country} from './definitions';
import {MatTable} from '@angular/material/table';
import {Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['countries.component.scss']
})
export class CountriesComponent implements OnDestroy {
    @ViewChild(MatTable) table: MatTable<Country>;
    displayedColumns: string[] = ['flag', 'name', 'region', 'population', 'alpha3Code'];
    data: Country[] = [];

    destroyer: Subject<any> = new Subject<any>();

    constructor(private readonly countriesService: CountriesService) {
    }

    public onFilterUpdate(filter: string) {
        this.countriesService.getByParam(RequestTypes.NAME, filter)
            .pipe(
                map(countries => this.sort(countries, 'region', true)),
                takeUntil(this.destroyer)
            )
            .subscribe(countries => this.data = countries)
    }

    ngOnDestroy(): void {
        this.destroyer.next()
        this.destroyer.unsubscribe()
    }

    /**
     * TODO this can be the function to create by the candidate based on existing tests
     */
    private sort(data: Country[], property: keyof Country, ascending = false): Country[] {
        return data.sort((a,b ) => compare(a[property], b[property], ascending))
    }
}

function compare(a: string | number, b: string | number, ascending: boolean) {
    return (a < b ? -1 : 1) * (ascending ? 1 : -1);
}
