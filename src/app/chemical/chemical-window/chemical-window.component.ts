import { Component, OnInit } from '@angular/core';
import { IChemical } from '../models/IChemical';
import { DocumentService } from '../../document/document.service';

@Component({
  selector: 'app-chemical-window',
  templateUrl: './chemical-window.component.html',
  styleUrls: ['./chemical-window.component.scss']
})
export class ChemicalWindowComponent implements OnInit {

  chemical: IChemical;
  documentsCount: number;
  constructor(
    private _documentService: DocumentService
  ) { }

  ngOnInit() {
  }
  onChemicalSelected(chemical) {
    //check if chemical exist, may be will empty
    this.chemical = chemical;
    this.getChemicalsDocuments(chemical._id);
  }
  getChemicalsDocuments(chemicalId){
    this._documentService.getDocumentsByChemicalId(chemicalId)
    .subscribe((response:any)=>{
      this.documentsCount = response.paging.total;
    })
  }
}
