import { TestBed, inject } from '@angular/core/testing';

import { ScrollTopServiceService } from './scroll-top-service.service';

describe('ScrollTopServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollTopServiceService]
    });
  });

  it('should be created', inject([ScrollTopServiceService], (service: ScrollTopServiceService) => {
    expect(service).toBeTruthy();
  }));
});
