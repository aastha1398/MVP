import { TestBed } from '@angular/core/testing';

import { DynamicPresenterService } from './dynamic-presenter.service';

describe('DynamicPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicPresenterService = TestBed.get(DynamicPresenterService);
    expect(service).toBeTruthy();
  });
});
