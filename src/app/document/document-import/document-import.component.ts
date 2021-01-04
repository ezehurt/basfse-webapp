import { Component, OnInit } from "@angular/core";
import { Papa } from "ngx-papaparse";
import { DocumentService } from "../document.service";
import { IImportDocumentAPI } from "../models/IImportDocumentAPI";
import { IImportDocument } from "../models/IImportDocument";

@Component({
  selector: "app-document-import",
  templateUrl: "./document-import.component.html",
  styleUrls: ["./document-import.component.scss"],
})
export class DocumentImportComponent implements OnInit {
  documentsToUpload: IImportDocumentAPI;
  constructor(
    private _papaParse: Papa,
    private _documentService: DocumentService
  ) {}

  ngOnInit(): void {}
  onFileInput(event, chemicalType) {
    const files = event.srcElement.files;
    this.parse(files)
      .then((data: IImportDocument[]) => {
        this.documentsToUpload = {
          chemicalType: chemicalType,
          documents: data,
        };
        this._documentService.uploadData(this.documentsToUpload).subscribe(
          (response) => {
            console.log(response);
          },
          (err) => {
            console.error(err);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  parse(files: FileList) {
    return new Promise((resolve, reject) => {
      const file: File = files[0];
      const reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv = reader.result;
        csv.slice(1);
        this._papaParse.parse(csv.toString(), {
          header: true,
          transformHeader: (header:string)=>{
            if(header.includes('no')){
              return 'patentNo'
            }
            if(header.includes('title')){
              return 'patentTitle'
            }
            if(header.includes('chemical')){
              return 'chemicalName'
            }
          }
          ,
          complete: (results) => {
            console.log("Parsed", results, file);
            this.documentsToUpload = results.data;
            // TO CHECK : csv file has some corrupts rows
            // if(results.errors){
            //   reject()
            // }
            resolve(results.data);
          },
        });
      };
    });
  }
}
