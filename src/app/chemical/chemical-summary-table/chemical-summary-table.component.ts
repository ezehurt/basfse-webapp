import { Component, Input, OnInit } from "@angular/core";
import { IRelatedChemicalDocumentsSummary } from "../models/IRelatedChemicalDocumentsSummary";
import { Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-chemical-summary-table",
  templateUrl: "./chemical-summary-table.component.html",
  styleUrls: ["./chemical-summary-table.component.scss"],
})
export class ChemicalSummaryTableComponent implements OnInit {
  displayedColumns: string[] = ["name", "count", "action"];

  @Input() chemicalData: IRelatedChemicalDocumentsSummary[] = [];
  @Input() resultsLength: number = 0;
  @Input() pageSize: number = 5;

  @Output() pagingEvent = new EventEmitter<{
    previousPageIndex: number;
    pageIndex: number;
    pageSize: number;
    length: number;
  }>();
  @Output() sortingEvent = new EventEmitter<{
    active: string;
    direction: string;
  }>();

  constructor(private _router: Router) {}

  ngOnInit() {}

  getPage(event) {
    this.pagingEvent.emit(event);
  }
  sortData(event) {
    this.sortingEvent.emit(event);
  }
  rowClick(chemical: IRelatedChemicalDocumentsSummary) {
    this._router.navigate(["/document", chemical._id]);
  }
}
