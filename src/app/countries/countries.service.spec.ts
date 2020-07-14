import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  let service: CountriesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountriesService],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(CountriesService);
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });
});
