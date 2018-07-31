import { TestBed, inject } from '@angular/core/testing';

import { QuadrinhosService } from './quadrinhos.service';

describe('QuadrinhosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuadrinhosService]
    });
  });

  it('should be created', inject([QuadrinhosService], (service: QuadrinhosService) => {
    expect(service).toBeTruthy();
  }));
});
