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
var AlgebreNatParInt_1 = require("./AlgebreNatParInt");
var ZeroParInt_1 = require("./ZeroParInt");
var heritageInterfacesconcretes_1 = require("./heritageInterfacesconcretes");
var SuccParInt = /** @class */ (function (_super) {
    __extends(SuccParInt, _super);
    function SuccParInt(predecesseur) {
        return _super.call(this, predecesseur) || this;
    }
    SuccParInt.prototype.creerZero = function () {
        return new ZeroParInt_1.ZeroParInt();
    };
    SuccParInt.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccParInt(predecesseur);
    };
    SuccParInt.prototype.toString = function () {
        return String(this.val());
    };
    SuccParInt.prototype.equals = function (obj) {
        return this.val() == obj.val();
    };
    SuccParInt.prototype.div = function (x) {
        return undefined;
    };
    SuccParInt.prototype.modulo = function (x) {
        return undefined;
    };
    SuccParInt.prototype.produit = function (x) {
        return undefined;
    };
    SuccParInt.prototype.somme = function (x) {
        return undefined;
    };
    SuccParInt.prototype.un = function () {
        return undefined;
    };
    SuccParInt.prototype.zero = function () {
        return undefined;
    };
    SuccParInt.FAB = new SuccParInt(new ZeroParInt_1.ZeroParInt());
    return SuccParInt;
}(EtatSucc_1.EtatSucc));
exports.SuccParInt = SuccParInt;
heritageInterfacesconcretes_1.heriterInterfacesConcretes(SuccParInt, [EtatSucc_1.EtatSucc, AlgebreNatParInt_1.AlgebreNatParInt_default]);
