import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IChemical } from '../models/IChemical';

@Component({
  selector: 'app-chemical-summay-card',
  templateUrl: './chemical-summay-card.component.html',
  styleUrls: ['./chemical-summay-card.component.scss']
})
export class ChemicalSummayCardComponent implements OnInit {

  @Input() chemical: IChemical;
  @Input() documentsCount: number = null;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }
  navigateToDocumentsPage(){
    this._router.navigate(['/document', this.chemical._id]);
  }
}
