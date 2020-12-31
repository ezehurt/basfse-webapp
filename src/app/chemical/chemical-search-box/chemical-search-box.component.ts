import { Component, OnInit,EventEmitter, ElementRef, ViewChild, OnDestroy, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import { Subject } from "rxjs";
import { ChemicalService } from "../chemical.service";
import { IChemical } from "../models/IChemical";
import { IChemicalServiceResponse } from "../models/IChemicalServiceResponse";

@Component({
  selector: "app-chemical-search-box",
  templateUrl: "./chemical-search-box.component.html",
  styleUrls: ["./chemical-search-box.component.scss"],
})
export class ChemicalSearchBoxComponent implements OnInit,OnDestroy {

  visible = true;
  selectable = true;
  removable = true;
  chemicalCtrl = new FormControl();
  chemicalChipList: string[] = [];
  hideInput = false;
  chemicalList: IChemical[] = [];

  @ViewChild("chemicalInput") chemicalInput: ElementRef<HTMLInputElement>;
  @ViewChild("auto") matAutocomplete: MatAutocomplete;

  @Output() chemicalSelected = new EventEmitter<IChemical>();

  private _destroyed$ = new Subject();

  constructor(private _chemicalService: ChemicalService) {}

  ngOnInit() {
    this.chemicalCtrl.valueChanges.subscribe((value) => {
      this.getChemicals(value);
    });
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if (input) {
      input.value = "";
    }
    this.chemicalChipList.push(value);
    this.chemicalCtrl.setValue(null);
    this.hideInput = true;
  }

  remove(chemical: string): void {
    this.hideInput = false;
    const index = this.chemicalChipList.indexOf(chemical);
    if (index >= 0) {
      this.chemicalChipList.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.chemicalChipList.push(event.option.viewValue);
    this.chemicalSelected.emit(this.getChemical(event.option.value));
    this.chemicalInput.nativeElement.value = "";
    this.chemicalCtrl.setValue(null);
    this.hideInput = true;
  }

  getChemicals(searchTerm) {
    this._chemicalService.getChemicals(searchTerm).subscribe(
      (response: IChemicalServiceResponse) => {
        this.chemicalList = response.chemicals;
      },
      (err) => {
        //TO DO Manage error
        console.log(err);
      }
    );
  }
  onSearchIconClicked() {
    const value = this.chemicalInput.nativeElement.value;
    if (value) {
      this.chemicalChipList.push(value);
      this.chemicalCtrl.setValue(null);
      this.hideInput = true;
      this.chemicalInput.nativeElement.value = "";
    }
  }
  getChemical(chemicalId:string): IChemical{
      return this.chemicalList.find(chemical => chemical._id === chemicalId);
  }
  ngOnDestroy(){
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
