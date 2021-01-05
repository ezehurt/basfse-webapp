import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChemicalSummayCardComponent } from './chemical-summay-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ChemicalSummayCardComponent', () => {
  let component: ChemicalSummayCardComponent;
  let fixture: ComponentFixture<ChemicalSummayCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
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
