import { IChemicalType } from './IChemicalType';

export interface IChemical {
  _id: string;
  name: string;
  chemicalTypes: IChemicalType[];
}
