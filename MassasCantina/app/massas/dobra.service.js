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
var dobra_model_1 = require("./dobra.model");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/Rx");
var Rx_1 = require("rxjs/Rx");
var error_service_1 = require("../error/error.service");
var DobraService = (function () {
    function DobraService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.dobras = [];
        this.dobraIsEdit = new core_1.EventEmitter();
    }
    DobraService.prototype.getDobras = function () {
        var _this = this;
        return this.http.get('http://localhost:24151/api/dobras')
            .map(function (response) {
            var dobras = response.json();
            var transformedDobras = [];
            for (var _i = 0, dobras_1 = dobras; _i < dobras_1.length; _i++) {
                var dobra = dobras_1[_i];
                transformedDobras.push(new dobra_model_1.Dobra(dobra.Nome, dobra.Descricao, dobra.Id));
            }
            _this.dobras = transformedDobras;
            return transformedDobras;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Rx_1.Observable.throw(error.json());
        });
    };
    DobraService.prototype.addDobra = function (dobra) {
        var _this = this;
        var body = JSON.stringify(dobra);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('http://localhost:24151/api/dobras' + token, body, { headers: headers })
            .map(function (response) {
            var result = response.json();
            var dobra = new dobra_model_1.Dobra(result.obj.Nome, result.obj.Descricao, result.obj.Id);
            _this.dobras.push(dobra);
            return dobra;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Rx_1.Observable.throw(error.json());
        });
    };
    DobraService.prototype.editDobra = function (dobra) {
        //get message from messageComponent and send it
        // to the message-input component to be edited
        this.dobraIsEdit.emit(dobra);
    };
    DobraService.prototype.updateMessage = function (dobra) {
        var _this = this;
        var body = JSON.stringify(dobra);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.patch('http://localhost:24151/api/dobras/' + dobra.dobraId + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Rx_1.Observable.throw(error.json());
        });
    };
    DobraService.prototype.deleteDobra = function (dobra) {
        var _this = this;
        this.dobras.splice(this.dobras.indexOf(dobra), 1);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.delete('http://localhost:24151/api/dobras/' + dobra.dobraId + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Rx_1.Observable.throw(error.json());
        });
    };
    return DobraService;
}());
DobraService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, error_service_1.ErrorService])
], DobraService);
exports.DobraService = DobraService;
//# sourceMappingURL=dobra.service.js.map