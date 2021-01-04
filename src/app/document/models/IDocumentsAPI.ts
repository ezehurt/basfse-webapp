import { IDocument } from './IDocument';
export interface IDocumentAPI
{
  paging?: {total: number, offset: number, limit:number}
  documentList: IDocument[],
}
