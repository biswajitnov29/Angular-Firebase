import { TestBed, inject } from '@angular/core/testing';

import { ContactService } from './Contact-service.service';

describe('ContactServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService]
    });
  });

  it('should be created', inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));
});
