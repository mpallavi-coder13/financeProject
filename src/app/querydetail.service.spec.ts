import { TestBed } from '@angular/core/testing';

import { QuerydetailService } from './querydetail.service';

describe('QuerydetailService', () => {
  let service: QuerydetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuerydetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
