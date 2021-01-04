import { TestBed } from '@angular/core/testing';

import { ChemicalService } from './chemical.service';

describe('ChemicalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChemicalService = TestBed.get(ChemicalService);
    expect(service).toBeTruthy();
  });
});
