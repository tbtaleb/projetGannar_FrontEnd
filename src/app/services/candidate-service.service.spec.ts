import { TestBed } from '@angular/core/testing';

import { CandidateServiceService } from './candidate-service.service';

describe('CandidateServiceService', () => {
  let service: CandidateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
