import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { DocumentWindowComponent } from "./document-window.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("DocumentWindowComponent", () => {
  let component: DocumentWindowComponent;
  let fixture: ComponentFixture<DocumentWindowComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, HttpClientTestingModule],
        declarations: [DocumentWindowComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
