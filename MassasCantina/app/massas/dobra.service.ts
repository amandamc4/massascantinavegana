import { Dobra } from "./dobra.model";
import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx'; 
import { Observable } from "rxjs/Rx";
import { ErrorService } from "../error/error.service";

@Injectable() 
export class DobraService {
    private dobras: Dobra[] = [];
   dobraIsEdit = new EventEmitter<Dobra>();

   constructor(private http: Http, private errorService: ErrorService) { }

   getDobras() {
       return this.http.get('http://localhost:24151/api/dobras')
           .map((response: Response) => {
               const dobras = response.json();
               let transformedDobras: Dobra[] = [];
               for (let dobra of dobras) {
                   transformedDobras.push(new Dobra(dobra.Nome, dobra.Descricao, dobra.Id));
               }
               this.dobras = transformedDobras;
               return transformedDobras;
           })
           .catch((error: Response) => {
               this.errorService.handleError(error.json());
               return Observable.throw(error.json());
           });
   }

   addDobra(dobra: Dobra) {
       const body = JSON.stringify(dobra);
       const headers = new Headers({ 'Content-Type': 'application/json' });
       const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
       return this.http.post('http://localhost:24151/api/dobras' + token, body, { headers: headers })
           .map((response: Response) => {
               const result = response.json();
               const dobra = new Dobra(result.obj.Nome, result.obj.Descricao, result.obj.Id);
               this.dobras.push(dobra);
               return dobra;
           })
           .catch((error: Response) => {
               this.errorService.handleError(error.json());
               return Observable.throw(error.json());
           });
   }

   editDobra(dobra: Dobra) {
       //get message from messageComponent and send it
       // to the message-input component to be edited
       this.dobraIsEdit.emit(dobra);
   }

   updateMessage(dobra: Dobra) {
       const body = JSON.stringify(dobra);
       const headers = new Headers({ 'Content-Type': 'application/json' });
       const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
       return this.http.patch('http://localhost:24151/api/dobras/' + dobra.dobraId + token, body, { headers: headers })
           .map((response: Response) => response.json())
           .catch((error: Response) => {
               this.errorService.handleError(error.json());
               return Observable.throw(error.json());
           });
   }

   deleteDobra(dobra: Dobra) {
       this.dobras.splice(this.dobras.indexOf(dobra), 1);
       const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
       return this.http.delete('http://localhost:24151/api/dobras/' + dobra.dobraId + token)
           .map((response: Response) => response.json())
           .catch((error: Response) => {
               this.errorService.handleError(error.json());
               return Observable.throw(error.json());
           });
   }

}