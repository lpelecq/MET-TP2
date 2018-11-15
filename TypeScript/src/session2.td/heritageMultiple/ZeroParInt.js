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
var AlgebreNatParInt_1 = require("./AlgebreNatParInt");
var SuccDecimal_1 = require("./SuccDecimal");
var heritageInterfacesconcretes_1 = require("./heritageInterfacesconcretes");
var ZeroParInt = /** @class */ (function (_super) {
    __extends(ZeroParInt, _super);
    function ZeroParInt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZeroParInt.prototype.creerZero = function () {
        return new ZeroParInt();
    };
    ZeroParInt.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccDecimal_1.SuccDecimal(predecesseur);
    };
    ZeroParInt.prototype.toString = function () {
        return String(this.val());
    };
    ZeroParInt.prototype.equals = function (obj) {
        return this.val() == obj.val();
    };
    ZeroParInt.prototype.div = function (x) {
        return undefined;
    };
    ZeroParInt.prototype.modulo = function (x) {
        return undefined;
    };
    ZeroParInt.prototype.produit = function (x) {
        return undefined;
    };
    ZeroParInt.prototype.somme = function (x) {
        return undefined;
    };
    ZeroParInt.prototype.un = function () {
        return undefined;
    };
    ZeroParInt.prototype.zero = function () {
        return undefined;
    };
    ZeroParInt.FAB = new ZeroParInt();
    return ZeroParInt;
}(EtatZero_1.EtatZero));
exports.ZeroParInt = ZeroParInt;
heritageInterfacesconcretes_1.heriterInterfacesConcretes(ZeroParInt, [EtatZero_1.EtatZero, AlgebreNatParInt_1.AlgebreNatParInt_default]);
