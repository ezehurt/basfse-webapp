import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentImportComponent } from './document-import.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DocumentImportComponent', () => {
  let component: DocumentImportComponent;
  let fixture: ComponentFixture<DocumentImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ DocumentImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
