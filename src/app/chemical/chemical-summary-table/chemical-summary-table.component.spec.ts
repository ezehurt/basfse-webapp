import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChemicalSummaryTableComponent } from './chemical-summary-table.component';

describe('ChemicalSummaryTableComponent', () => {
  let component: ChemicalSummaryTableComponent;
  let fixture: ComponentFixture<ChemicalSummaryTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemicalSummaryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalSummaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
