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
var AlgebreNatDecimal_1 = require("./AlgebreNatDecimal");
var heritageInterfacesconcretes_1 = require("./heritageInterfacesconcretes");
var NatParIntDecimal = /** @class */ (function (_super) {
    __extends(NatParIntDecimal, _super);
    function NatParIntDecimal(val) {
        return _super.call(this, val) || this;
    }
    NatParIntDecimal.prototype.creerNatAvecValeur = function (val) {
        return new NatParIntDecimal(val);
    };
    NatParIntDecimal.prototype.toString = function () {
        return this.val().toString();
    };
    NatParIntDecimal.prototype.equals = function (x) {
        return this.val() == x.val();
    };
    NatParIntDecimal.prototype.div = function (x) {
        return undefined;
    };
    NatParIntDecimal.prototype.modulo = function (x) {
        return undefined;
    };
    NatParIntDecimal.prototype.produit = function (x) {
        return undefined;
    };
    NatParIntDecimal.prototype.somme = function (x) {
        return undefined;
    };
    NatParIntDecimal.prototype.un = function () {
        return undefined;
    };
    NatParIntDecimal.prototype.zero = function () {
        return undefined;
    };
    NatParIntDecimal.FAB = new NatParIntDecimal(0);
    return NatParIntDecimal;
}(IntPositif_1.IntPositif));
exports.NatParIntDecimal = NatParIntDecimal;
heritageInterfacesconcretes_1.heriterInterfacesConcretes(NatParIntDecimal, [IntPositif_1.IntPositif, AlgebreNatDecimal_1.AlgebreNatDecimal_default]);
