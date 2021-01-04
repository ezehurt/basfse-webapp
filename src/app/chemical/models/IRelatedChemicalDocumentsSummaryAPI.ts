import { IRelatedChemicalDocumentsSummary } from './IRelatedChemicalDocumentsSummary';
export interface IRelatedChemicalDocumentsSummaryAPI
{
  paging?: {total: number,}
  chemicalList: IRelatedChemicalDocumentsSummary[],
}
