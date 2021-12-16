import { TestBed } from '@angular/core/testing';

import { CadeauHTTPServiceService } from './cadeau-httpservice.service';

describe('CadeauHTTPServiceService', () => {
  let service: CadeauHTTPServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadeauHTTPServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
