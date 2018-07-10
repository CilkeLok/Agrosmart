import { TestBed, inject } from '@angular/core/testing';

import { AutentifikacijaService } from './autentifikacija.service';

describe('AutentifikacijaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutentifikacijaService]
    });
  });

  it('should be created', inject([AutentifikacijaService], (service: AutentifikacijaService) => {
    expect(service).toBeTruthy();
  }));
});
