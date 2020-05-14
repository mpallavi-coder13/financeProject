import { TestBed } from '@angular/core/testing';

import { LoanmasterService } from './loanmaster.service';

describe('LoanmasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanmasterService = TestBed.get(LoanmasterService);
    expect(service).toBeTruthy();
  });
});
