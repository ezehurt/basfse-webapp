import { TestBed } from '@angular/core/testing';

import { DocumentService } from './document.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DocumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
  }));

  it('should be created', () => {
    const service: DocumentService = TestBed.get(DocumentService);
    expect(service).toBeTruthy();
  });
});
