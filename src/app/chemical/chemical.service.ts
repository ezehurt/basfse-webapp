import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CORE } from "../consts/api.consts";
import { IChemicalServiceResponse } from './models/IChemicalServiceResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class ChemicalService {
  constructor(private _http: HttpClient) {}

  getChemicals(value = '') : Observable<IChemicalServiceResponse> {
    return this._http.get<IChemicalServiceResponse>(`${CORE.apiURL}/chemical?q=${value}`);
  }
}

