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
var AlgebreNatParInt_1 = require("./AlgebreNatParInt");
var heritageInterfacesconcretes_1 = require("./heritageInterfacesconcretes");
var NatParInt = /** @class */ (function (_super) {
    __extends(NatParInt, _super);
    function NatParInt(val) {
        return _super.call(this, val) || this;
    }
    NatParInt.prototype.creerNatAvecValeur = function (val) {
        return new NatParInt(val);
    };
    NatParInt.prototype.toString = function () {
        return this.val().toString();
    };
    NatParInt.prototype.equals = function (x) {
        return this.val() == x.val();
    };
    NatParInt.prototype.div = function (x) {
        return undefined;
    };
    NatParInt.prototype.modulo = function (x) {
        return undefined;
    };
    NatParInt.prototype.produit = function (x) {
        return undefined;
    };
    NatParInt.prototype.somme = function (x) {
        return undefined;
    };
    NatParInt.prototype.un = function () {
        return undefined;
    };
    NatParInt.prototype.zero = function () {
        return undefined;
    };
    NatParInt.FAB = new NatParInt(0);
    return NatParInt;
}(IntPositif_1.IntPositif));
exports.NatParInt = NatParInt;
heritageInterfacesconcretes_1.heriterInterfacesConcretes(NatParInt, [IntPositif_1.IntPositif, AlgebreNatParInt_1.AlgebreNatParInt_default]);
