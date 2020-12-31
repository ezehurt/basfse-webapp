import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalSearchBoxComponent } from './chemical-search-box.component';

describe('ChemicalSearchBoxComponent', () => {
  let component: ChemicalSearchBoxComponent;
  let fixture: ComponentFixture<ChemicalSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemicalSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
