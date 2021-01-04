import { IChemical } from './IChemical';
export interface IChemicalServiceResponse {
  paging: {
    limit: number;
    offset: number;
    total: number;
  };
  chemicals: IChemical[];
}
