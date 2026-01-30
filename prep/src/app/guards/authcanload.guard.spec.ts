import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { authcanloadGuard } from './authcanload.guard';

describe('authcanloadGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authcanloadGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
