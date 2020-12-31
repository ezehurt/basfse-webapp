import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CORE } from "../consts/api.consts";

@Injectable({
  providedIn: "root",
})
export class DocumentService {
  constructor(private _http: HttpClient) {}

  getDocumentsByChemicalId(chemicalId: string): Observable<any> {
    return this._http.get<any>(`${CORE.apiURL}/document/${chemicalId}/chemical`);
  }
}
