import { TestBed, inject } from '@angular/core/testing';

import { CompanyService } from './company-service.service';

describe('CompanyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyService]
    });
  });

  it('should be created', inject([CompanyService], (service: CompanyService) => {
    expect(service).toBeTruthy();
  }));
});
