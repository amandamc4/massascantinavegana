import { Component, OnInit } from "@angular/core";
import { Dobra } from "./dobra.model";
import { DobraService } from "./dobra.service";

@Component({
    selector: 'app-dobra-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-dobra  *ngFor="let dobra of dobras"
            [dobra]="dobra">                   
            </app-dobra>
        </div>    
    `,
})

export class DobraListComponent implements OnInit {
    dobras: Dobra[];

    constructor(private dobraService: DobraService) { }

    ngOnInit() {
        this.dobraService.getDobras()
            .subscribe(
            (dobras: Dobra[]) => {
                this.dobras = dobras;
                console.log(this.dobras);
            }
            );
    }
}