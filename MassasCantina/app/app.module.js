"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
// Components
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var error_component_1 = require("./error/error.component");
var error_service_1 = require("./error/error.service");
var dobra_component_1 = require("./massas/dobra.component");
var dobra_service_1 = require("./massas/dobra.service");
var dobra_list_component_1 = require("./massas/dobra-list.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, error_component_1.ErrorComponent, dobra_component_1.DobraComponent, dobra_list_component_1.DobraListComponent],
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routing_1.routing],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }, error_service_1.ErrorService, dobra_service_1.DobraService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map