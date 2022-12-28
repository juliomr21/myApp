import { TestBed } from '@angular/core/testing';

import { VigilaCriarLoginGuard } from './vigila-criar-login.guard';

describe('VigilaCriarLoginGuard', () => {
  let guard: VigilaCriarLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilaCriarLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
