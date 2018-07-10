import { TestBed, inject } from '@angular/core/testing';

import { ZastitaService } from './zastita.service';

describe('ZastitaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZastitaService]
    });
  });

  it('should be created', inject([ZastitaService], (service: ZastitaService) => {
    expect(service).toBeTruthy();
  }));
});
