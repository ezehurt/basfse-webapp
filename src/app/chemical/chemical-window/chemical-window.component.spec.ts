import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChemicalWindowComponent } from './chemical-window.component';

describe('ChemicalWindowComponent', () => {
  let component: ChemicalWindowComponent;
  let fixture: ComponentFixture<ChemicalWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemicalWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
