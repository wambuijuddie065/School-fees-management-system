import { TestBed } from '@angular/core/testing';

import { StudentsGuardService } from './students-guard.service';

describe('StudentsGuardService', () => {
  let service: StudentsGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
