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
var AlgebreNatRecursifZero_1 = require("./AlgebreNatRecursifZero");
var SuccRecursif_1 = require("./SuccRecursif");
var heritageInterfacesconcretes_1 = require("./heritageInterfacesconcretes");
var ZeroRecursif = /** @class */ (function (_super) {
    __extends(ZeroRecursif, _super);
    function ZeroRecursif() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZeroRecursif.prototype.creerZero = function () {
        return new ZeroRecursif();
    };
    ZeroRecursif.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccRecursif_1.SuccRecursif(predecesseur);
    };
    ZeroRecursif.prototype.toString = function () {
        return this.val().toString();
    };
    ZeroRecursif.prototype.equals = function (x) {
        return this.val() == x.val();
    };
    ZeroRecursif.prototype.div = function (x) {
        return undefined;
    };
    ZeroRecursif.prototype.modulo = function (x) {
        return undefined;
    };
    ZeroRecursif.prototype.produit = function (x) {
        return undefined;
    };
    ZeroRecursif.prototype.somme = function (x) {
        return undefined;
    };
    ZeroRecursif.prototype.un = function () {
        return undefined;
    };
    ZeroRecursif.prototype.zero = function () {
        return undefined;
    };
    ZeroRecursif.FAB = new ZeroRecursif();
    return ZeroRecursif;
}(EtatZero_1.EtatZero));
exports.ZeroRecursif = ZeroRecursif;
heritageInterfacesconcretes_1.heriterInterfacesConcretes(ZeroRecursif, [EtatZero_1.EtatZero, AlgebreNatRecursifZero_1.AlgebreNatRecursifZero_default]);
