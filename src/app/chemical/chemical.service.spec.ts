import { TestBed } from '@angular/core/testing';

import { ChemicalService } from './chemical.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ChemicalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
  }));

  it('should be created', () => {
    const service: ChemicalService = TestBed.get(ChemicalService);
    expect(service).toBeTruthy();
  });
});
