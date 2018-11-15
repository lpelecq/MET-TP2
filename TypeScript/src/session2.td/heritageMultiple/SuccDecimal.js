"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EtatSucc_1 = require("./EtatSucc");
var AlgebreNatDecimal_1 = require("./AlgebreNatDecimal");
var ZeroDecimal_1 = require("./ZeroDecimal");
var heritageInterfacesconcretes_1 = require("./heritageInterfacesconcretes");
var SuccDecimal = /** @class */ (function (_super) {
    __extends(SuccDecimal, _super);
    function SuccDecimal(predecesseur) {
        return _super.call(this, predecesseur) || this;
    }
    SuccDecimal.prototype.creerZero = function () {
        return new ZeroDecimal_1.ZeroDecimal();
    };
    SuccDecimal.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccDecimal(predecesseur);
    };
    SuccDecimal.prototype.toString = function () {
        return String(this.val());
    };
    SuccDecimal.prototype.equals = function (obj) {
        return this.val() == obj.val();
    };
    SuccDecimal.prototype.div = function (x) {
        return undefined;
    };
    SuccDecimal.prototype.modulo = function (x) {
        return undefined;
    };
    SuccDecimal.prototype.produit = function (x) {
        return undefined;
    };
    SuccDecimal.prototype.somme = function (x) {
        return undefined;
    };
    SuccDecimal.prototype.un = function () {
        return undefined;
    };
    SuccDecimal.prototype.zero = function () {
        return undefined;
    };
    SuccDecimal.FAB = new SuccDecimal(new ZeroDecimal_1.ZeroDecimal());
    return SuccDecimal;
}(EtatSucc_1.EtatSucc));
exports.SuccDecimal = SuccDecimal;
heritageInterfacesconcretes_1.heriterInterfacesConcretes(SuccDecimal, [EtatSucc_1.EtatSucc, AlgebreNatDecimal_1.AlgebreNatDecimal_default]);
