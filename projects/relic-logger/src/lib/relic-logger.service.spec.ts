import { TestBed } from '@angular/core/testing';

import { RelicLoggerService } from './relic-logger.service';

describe('RelicLoggerService', () => {
  let service: RelicLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelicLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
