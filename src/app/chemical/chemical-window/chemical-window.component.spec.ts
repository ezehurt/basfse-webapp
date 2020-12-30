import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalWindowComponent } from './chemical-window.component';

describe('ChemicalWindowComponent', () => {
  let component: ChemicalWindowComponent;
  let fixture: ComponentFixture<ChemicalWindowComponent>;

  beforeEach(async(() => {
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
