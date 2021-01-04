import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IChemicalServiceResponse } from './models/IChemicalServiceResponse';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ChemicalService {
  constructor(private _http: HttpClient) {}

  getChemicals(value = '') : Observable<IChemicalServiceResponse> {
    return this._http.get<IChemicalServiceResponse>(`${environment.apiUrl}/chemical?q=${value}`);
  }
}

