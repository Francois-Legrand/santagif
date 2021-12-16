import { TestBed } from '@angular/core/testing';

import { CadeauHTTPService } from './cadeau-http.service';

describe('CadeauHTTPService', () => {
  let service: CadeauHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadeauHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
