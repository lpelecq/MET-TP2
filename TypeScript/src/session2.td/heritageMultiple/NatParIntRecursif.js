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
var IntPositif_1 = require("./IntPositif");
var AlgebreNatRecursif_1 = require("./AlgebreNatRecursif");
var heritageInterfacesconcretes_1 = require("./heritageInterfacesconcretes");
var NatParIntRecursif = /** @class */ (function (_super) {
    __extends(NatParIntRecursif, _super);
    function NatParIntRecursif(val) {
        return _super.call(this, val) || this;
    }
    NatParIntRecursif.prototype.creerNatAvecValeur = function (val) {
        return new NatParIntRecursif(val);
    };
    NatParIntRecursif.prototype.toString = function () {
        return String(this.val());
    };
    NatParIntRecursif.prototype.equals = function (obj) {
        return this.val() == obj.val();
    };
    NatParIntRecursif.prototype.div = function (x) {
        return undefined;
    };
    NatParIntRecursif.prototype.modulo = function (x) {
        return undefined;
    };
    NatParIntRecursif.prototype.produit = function (x) {
        return undefined;
    };
    NatParIntRecursif.prototype.somme = function (x) {
        return undefined;
    };
    NatParIntRecursif.prototype.un = function () {
        return undefined;
    };
    NatParIntRecursif.prototype.zero = function () {
        return undefined;
    };
    NatParIntRecursif.FAB = new NatParIntRecursif(0);
    return NatParIntRecursif;
}(IntPositif_1.IntPositif));
exports.NatParIntRecursif = NatParIntRecursif;
heritageInterfacesconcretes_1.heriterInterfacesConcretes(NatParIntRecursif, [IntPositif_1.IntPositif, AlgebreNatRecursif_1.AlgebreNatRecursif_default]);
