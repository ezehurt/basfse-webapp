import { Component, OnInit } from '@angular/core';
import { IChemical } from '../models/IChemical';
import { DocumentService, IFilter } from '../../document/document.service';
import { IRelatedChemicalDocumentsSummary } from '../models/IRelatedChemicalDocumentsSummary';
import { PAGING } from '../../consts/api.consts';
import { CHEMICAL_TYPE_1, CHEMICAL_TYPE_2 } from '../../consts/model.consts';

@Component({
  selector: 'app-chemical-window',
  templateUrl: './chemical-window.component.html',
  styleUrls: ['./chemical-window.component.scss']
})
export class ChemicalWindowComponent implements OnInit {

  chemical: IChemical;
  documentsCount: number;
  chemicalTypeOne: number = CHEMICAL_TYPE_1;
  chemicalTypeTwo: number = CHEMICAL_TYPE_2;

  relatedChemicalTypeOneData: IRelatedChemicalDocumentsSummary[];
  relatedChemicalTypeOneDataResultLength = 0;
  relatedChemicalTypeTwoData: IRelatedChemicalDocumentsSummary[];
  relatedChemicalTypeTwoDataResultLength = 0;


  filter: IFilter = {
    offset: PAGING.DEFAULT_OFFSET,
    limit: PAGING.DEFAULT_PAGE_SIZE,
    sortBy: 'count',
    sortOrder: -1
  }

  constructor(
    private _documentService: DocumentService
  ) { }

  ngOnInit() {
  }
  onChemicalSelected(chemical) {
    //check if chemical exist, may be will empty
    this.chemical = chemical;
    this.getChemicalsDocuments(chemical._id);
    this.getRelatedChemicalsDocuments(chemical._id, this.chemicalTypeOne, this.filter);
    this.getRelatedChemicalsDocuments(chemical._id, this.chemicalTypeTwo, this.filter);

  }
  getChemicalsDocuments(chemicalId){
    this._documentService.getDocumentsByChemicalId(chemicalId)
    .subscribe((response:any)=>{
      this.documentsCount = response.paging.total;
    })
  }
  getRelatedChemicalsDocuments(chemicalId: string, chemicalType: number,filter){
    this._documentService.getRelatedDocumentsCountByChemicalId(chemicalId, chemicalType, filter)
    .subscribe((response:any)=>{
      switch(chemicalType){
        case this.chemicalTypeOne:{
          this.relatedChemicalTypeOneData = response.chemicalList;
          this.relatedChemicalTypeOneDataResultLength = response.paging.total;
          break;
        };
        case this.chemicalTypeTwo: {
          this.relatedChemicalTypeTwoData = response.chemicalList;
          this.relatedChemicalTypeTwoDataResultLength = response.paging.total;
          break;
        }
        default:{
          return;
        }
      }
    })
  }
  doPagination(event,chemicalType){
    this.filter.limit = PAGING.DEFAULT_PAGE_SIZE;
    this.filter.offset = event.pageIndex * event.pageSize;
    this.getRelatedChemicalsDocuments(this.chemical._id, chemicalType,this.filter)
  }
  doSorting(event,chemicalType){
    this.filter.limit = PAGING.DEFAULT_PAGE_SIZE;
    this.filter.offset = PAGING.DEFAULT_OFFSET;
    this.filter.sortBy = event.active;
    this.filter.sortOrder = this._mapSortOrder(event.direction);
    this.getRelatedChemicalsDocuments(this.chemical._id, chemicalType,this.filter)
  }

  onTypeOnePagingEvent(event) {
    this.doPagination(event,this.chemicalTypeOne)
  }
  onTypeOneSortingEvent(event) {
    this.doSorting(event, this.chemicalTypeOne)
  }
  onTypeTwoPagingEvent(event) {
    this.doPagination(event,this.chemicalTypeTwo)
  }
  onTypeTwoSortingEvent(event) {
      this.doSorting(event, this.chemicalTypeTwo)
  }

  private _mapSortOrder(sortOrder:string){
    if(sortOrder === 'asc') return 1;
    if(sortOrder === 'desc') return -1;
  }
}
