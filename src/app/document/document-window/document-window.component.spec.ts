import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DocumentWindowComponent } from './document-window.component';

describe('DocumentWindowComponent', () => {
  let component: DocumentWindowComponent;
  let fixture: ComponentFixture<DocumentWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
