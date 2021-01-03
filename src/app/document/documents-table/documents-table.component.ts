import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IDocument } from '../models/IDocument';

@Component({
  selector: 'app-documents-table',
  templateUrl: './documents-table.component.html',
  styleUrls: ['./documents-table.component.scss']
})
export class DocumentsTableComponent implements OnInit {
  displayedColumns: string[] = ["patentNo", "title", "action"];

  @Input() documentData: IDocument[] = [];
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

  constructor() { }

  ngOnInit() {
  }

  getPage(event) {
    this.pagingEvent.emit(event);
  }
  sortData(event) {
    this.sortingEvent.emit(event);
  }
  navigateToGooglePatents(){}
}
