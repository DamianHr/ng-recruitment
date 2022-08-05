import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  let service: CountriesService;

  beforeEach(waitForAsync(() => {
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
