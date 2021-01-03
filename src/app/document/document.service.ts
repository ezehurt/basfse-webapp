import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IChemical } from '../chemical/models/IChemical';

@Injectable({
  providedIn: "root",
})
export class DocumentService {
  constructor(private _http: HttpClient) {}

  getDocumentsByChemicalId(chemicalId: string): Observable<any> {
    return this._http.get<any>(`${environment.apiUrl}/document/${chemicalId}/chemical`);
  }
  getRelatedDocumentsCountByChemicalId(chemicalId:string,chemicalType:number, filter:IFilter): Observable<any> {
    return this._http.get<any>(`${environment.apiUrl}/document/${chemicalId}/related?chemicalType=${chemicalType}&offset=${filter.offset}&limit=${filter.limit}&sortBy=${filter.sortBy}&sortOrder=${filter.sortOrder}`);
  }
}
export interface IFilter{
  offset: number,
  limit:number,
  sortBy: string,
  sortOrder: number
}
