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
var AlgebreNatRecursifSuccesseur_1 = require("./AlgebreNatRecursifSuccesseur");
var ZeroRecursif_1 = require("./ZeroRecursif");
var heritageInterfacesconcretes_1 = require("./heritageInterfacesconcretes");
var SuccRecursif = /** @class */ (function (_super) {
    __extends(SuccRecursif, _super);
    function SuccRecursif(predecesseur) {
        return _super.call(this, predecesseur) || this;
    }
    SuccRecursif.prototype.creerZero = function () {
        return new ZeroRecursif_1.ZeroRecursif();
    };
    SuccRecursif.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccRecursif(predecesseur);
    };
    SuccRecursif.prototype.toString = function () {
        return this.val().toString();
    };
    SuccRecursif.prototype.equals = function (x) {
        return this.val() == x.val();
    };
    SuccRecursif.prototype.div = function (x) {
        return undefined;
    };
    SuccRecursif.prototype.modulo = function (x) {
        return undefined;
    };
    SuccRecursif.prototype.produit = function (x) {
        return undefined;
    };
    SuccRecursif.prototype.somme = function (x) {
        return undefined;
    };
    SuccRecursif.prototype.un = function () {
        return undefined;
    };
    SuccRecursif.prototype.zero = function () {
        return undefined;
    };
    SuccRecursif.FAB = new SuccRecursif(new ZeroRecursif_1.ZeroRecursif());
    return SuccRecursif;
}(EtatSucc_1.EtatSucc));
exports.SuccRecursif = SuccRecursif;
heritageInterfacesconcretes_1.heriterInterfacesConcretes(SuccRecursif, [EtatSucc_1.EtatSucc, AlgebreNatRecursifSuccesseur_1.AlgebreNatRecursifSuccesseur_default]);
