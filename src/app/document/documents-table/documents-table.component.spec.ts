import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DocumentsTableComponent } from './documents-table.component';

describe('DocumentsTableComponent', () => {
  let component: DocumentsTableComponent;
  let fixture: ComponentFixture<DocumentsTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
