import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalSummayCardComponent } from './chemical-summay-card.component';

describe('ChemicalSummayCardComponent', () => {
  let component: ChemicalSummayCardComponent;
  let fixture: ComponentFixture<ChemicalSummayCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemicalSummayCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalSummayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
