import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CountriesComponent } from './countries.component';
import { Country } from './definitions';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatToolbarModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        CdkTableModule,
        MatSliderModule,
        MatPaginatorModule,
      ],
      declarations: [CountriesComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xdescribe('filter', () => {
    it('should return an array', (done) => {
      const result = Array.isArray(component.filter([]));
      expect(result).toBe(true);
      done();
    });

    it('should allow empty data', (done) => {
      const result = component.filter([]);
      expect(result).toEqual([]);
      done();
    });

    it('should filter out incorrect names', (done) => {
      const result = component.filter([
        { name: 'Algeria', population: 100000000 },
      ] as Country[]);
      expect(result).toEqual([]);
      done();
    });

    it('should filter out incorrect populations', (done) => {
      const result = component.filter([
        { name: 'Belgium', population: 100 },
      ] as Country[]);
      expect(result).toEqual([]);
      done();
    });

    it('should keep matching elements', (done) => {
      const result = component.filter([
        { name: 'Ghana', population: 100000000 },
      ] as Country[]).length;
      expect(result).toBe(1);
      // And not be case sensitive
      const result2 = component.filter([
        { name: 'ghana', population: 100000000 },
      ] as Country[]).length;
      expect(result2).toBe(1);
      done();
    });
  });
});
