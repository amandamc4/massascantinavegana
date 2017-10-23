import { Component, Input } from '@angular/core';
import { Dobra } from "./dobra.model";
import { DobraService } from "./dobra.service";

@Component({
    selector: 'app-dobra',
    templateUrl: 'app/massas/dobra.component.html'
})

export class DobraComponent {
    @Input() dobra: Dobra;

    constructor(private dobraService: DobraService) { }

    onEdit() {
        this.dobraService.editDobra(this.dobra);
    }

    onDelete() {
        this.dobraService.deleteDobra(this.dobra)
            .subscribe(
            result => console.log(result)
            );
    }
}