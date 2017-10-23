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
var dobra_model_1 = require("./dobra.model");
var dobra_service_1 = require("./dobra.service");
var DobraComponent = (function () {
    function DobraComponent(dobraService) {
        this.dobraService = dobraService;
    }
    DobraComponent.prototype.onEdit = function () {
        this.dobraService.editDobra(this.dobra);
    };
    DobraComponent.prototype.onDelete = function () {
        this.dobraService.deleteDobra(this.dobra)
            .subscribe(function (result) { return console.log(result); });
    };
    return DobraComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", dobra_model_1.Dobra)
], DobraComponent.prototype, "dobra", void 0);
DobraComponent = __decorate([
    core_1.Component({
        selector: 'app-dobra',
        templateUrl: 'app/massas/dobra.component.html'
    }),
    __metadata("design:paramtypes", [dobra_service_1.DobraService])
], DobraComponent);
exports.DobraComponent = DobraComponent;
//# sourceMappingURL=dobra.component.js.map