import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { ChemicalSearchBoxComponent } from "./chemical-search-box.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { StoreModule } from "@ngrx/store";
import * as fromRoot from "../../../root.reducer";
import { MatAutocompleteModule } from '@angular/material';

describe("ChemicalSearchBoxComponent", () => {
  let component: ChemicalSearchBoxComponent;
  let fixture: ComponentFixture<ChemicalSearchBoxComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          StoreModule.forRoot(fromRoot.reducers),
          MatAutocompleteModule
        ],
        declarations: [ChemicalSearchBoxComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
