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
var EtatZero_1 = require("./EtatZero");
var AlgebreNatDecimal_1 = require("./AlgebreNatDecimal");
var SuccDecimal_1 = require("./SuccDecimal");
var heritageInterfacesconcretes_1 = require("./heritageInterfacesconcretes");
var ZeroDecimal = /** @class */ (function (_super) {
    __extends(ZeroDecimal, _super);
    function ZeroDecimal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZeroDecimal.prototype.creerZero = function () {
        return this;
    };
    ZeroDecimal.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccDecimal_1.SuccDecimal(predecesseur);
    };
    ZeroDecimal.prototype.toString = function () {
        return String(this.val());
    };
    ZeroDecimal.prototype.equals = function (obj) {
        return this.val() == obj.val();
    };
    ZeroDecimal.prototype.div = function (x) {
        return undefined;
    };
    ZeroDecimal.prototype.modulo = function (x) {
        return undefined;
    };
    ZeroDecimal.prototype.produit = function (x) {
        return undefined;
    };
    ZeroDecimal.prototype.somme = function (x) {
        return undefined;
    };
    ZeroDecimal.prototype.un = function () {
        return undefined;
    };
    ZeroDecimal.prototype.zero = function () {
        return undefined;
    };
    ZeroDecimal.FAB = new ZeroDecimal();
    return ZeroDecimal;
}(EtatZero_1.EtatZero));
exports.ZeroDecimal = ZeroDecimal;
heritageInterfacesconcretes_1.heriterInterfacesConcretes(ZeroDecimal, [EtatZero_1.EtatZero, AlgebreNatDecimal_1.AlgebreNatDecimal_default]);
