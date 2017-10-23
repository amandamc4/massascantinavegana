"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dobra_service_1 = require("./dobra.service");
var DobraListComponent = (function () {
    function DobraListComponent(dobraService) {
        this.dobraService = dobraService;
    }
    DobraListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dobraService.getDobras()
            .subscribe(function (dobras) {
            _this.dobras = dobras;
            console.log(_this.dobras);
        });
    };
    return DobraListComponent;
}());
DobraListComponent = __decorate([
    core_1.Component({
        selector: 'app-dobra-list',
        template: "\n        <div class=\"col-md-8 col-md-offset-2\">\n            <app-dobra  *ngFor=\"let dobra of dobras\"\n            [dobra]=\"dobra\">                   \n            </app-dobra>\n        </div>    \n    ",
    }),
    __metadata("design:paramtypes", [dobra_service_1.DobraService])
], DobraListComponent);
exports.DobraListComponent = DobraListComponent;
//# sourceMappingURL=dobra-list.component.js.map