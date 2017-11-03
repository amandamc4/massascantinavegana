"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        template: "\n    <header>\n      <div class=\"header\">\n        <div class=\"headerLogo\">\n            <img src=\"../../Images/MassasCantinaLogo.png\">\n        </div>\n        <div class=\"headerMenu\">\n            <ul class=\"nav nav-pills\">\n                <li routerLinkActive=\"active\"><a [routerLink]=\"['/home']\">Home</a></li>\n                <li routerLinkActive=\"active\" class=\"dropdown\"><a [routerLink]=\"['#']\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Produtos\n                    <span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                      <li routerLinkActive=\"active\"><a [routerLink]=\"['/massa']\">Massas</a></li>\n                      <li><a href=\"#\">Submenu 1-2</a></li>\n                      <li><a href=\"#\">Submenu 1-3</a></li> \n                    </ul>\n                </li>\n                <li routerLinkActive=\"active\"><a [routerLink]=\"['/auth']\">Contato</a></li>\n                <li routerLinkActive=\"active\"><a [routerLink]=\"['/auth']\">Sobre</a></li>\n            </ul>\n        </div>\n    </div>\n    </header>\n    "
    })
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map