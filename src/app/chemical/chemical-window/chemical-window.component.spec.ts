import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChemicalWindowComponent } from './chemical-window.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import * as fromRoot from '../../../root.reducer'


describe('ChemicalWindowComponent', () => {
  let component: ChemicalWindowComponent;
  let fixture: ComponentFixture<ChemicalWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,
        StoreModule.forRoot(fromRoot.reducers),
      ],
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
