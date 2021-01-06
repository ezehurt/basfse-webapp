import { Component, OnInit } from '@angular/core';
import { IDocument } from '../models/IDocument';
import { DocumentService, IFilter } from '../document.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PAGING } from '../../consts/api.consts';
import { Store } from '@ngrx/store';
import * as fromUI from '../../../store/ui/ui.actions';
import { AppState } from '../../../root.reducer';

@Component({
  selector: 'app-document-window',
  templateUrl: './document-window.component.html',
  styleUrls: ['./document-window.component.scss']
})
export class DocumentWindowComponent implements OnInit {
  chemicalID: string = null;
  documentsCount: number;
  documentData: IDocument[];
  filter: IFilter = {
    offset: PAGING.DEFAULT_OFFSET,
    limit: PAGING.DEFAULT_PAGE_SIZE,
    sortBy: 'patentNo',
    sortOrder: -1
  }

  constructor(
    private _documentService: DocumentService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.chemicalID = this._activatedRoute.snapshot.paramMap.get('id');
    if(this.chemicalID){
      this.getDocumentsByChemicalId(this.chemicalID,this.filter);
    }
  }
  getDocumentsByChemicalId(chemicalID, filter){
    this.store.dispatch(new fromUI.ActivateLoadingAction());
    this._documentService.getDocumentsByChemicalId(chemicalID,filter)
    .subscribe((response:any)=>{
      this.store.dispatch(new fromUI.DeactivateLoadingAction());
      this.documentsCount = response.paging.total;
      this.documentData = response.documents;
    }, err => {
      //TO DO MANAGE ERROR
      this.store.dispatch(new fromUI.DeactivateLoadingAction());

    })
  }
  onPagingEvent(event){
    this.filter.limit = PAGING.DEFAULT_PAGE_SIZE;
    this.filter.offset = event.pageIndex * event.pageSize;
    this.getDocumentsByChemicalId(this.chemicalID,this.filter)
  }
  onSortingEvent(event){
    this.filter.limit = PAGING.DEFAULT_PAGE_SIZE;
    this.filter.offset = PAGING.DEFAULT_OFFSET;
    this.filter.sortBy = event.active;
    this.filter.sortOrder = this._mapSortOrder(event.direction);
    this.getDocumentsByChemicalId(this.chemicalID,this.filter);
  }

  navigateBack(){
    this._route.navigate(['/']);
  }

  private _mapSortOrder(sortOrder:string){
    if(sortOrder === 'asc') return 1;
    if(sortOrder === 'desc') return -1;
  }
}
