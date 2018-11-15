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
exports.__esModule = true;
var NatDeleguantEtat_1 = require("./NatDeleguantEtat");
var IntPositif_1 = require("./IntPositif");
var NatCalculantAvecDesInts = /** @class */ (function (_super) {
    __extends(NatCalculantAvecDesInts, _super);
    function NatCalculantAvecDesInts(etat) {
        return _super.call(this, etat) || this;
    }
    NatCalculantAvecDesInts.prototype.creerNatAvecEtat = function (e) {
        return new NatCalculantAvecDesInts(e);
    };
    NatCalculantAvecDesInts.prototype.somme = function (x) {
        return this.creerNatAvecValeur(this.val() + x.val());
    };
    NatCalculantAvecDesInts.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    NatCalculantAvecDesInts.prototype.produit = function (x) {
        return this.creerNatAvecValeur(this.val() * x.val());
    };
    NatCalculantAvecDesInts.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    NatCalculantAvecDesInts.prototype.div = function (x) {
        return this.creerNatAvecValeur(this.val() / x.val());
    };
    NatCalculantAvecDesInts.prototype.zero = function () {
        return this.creerNatAvecValeur(0);
    };
    NatCalculantAvecDesInts.prototype.toString = function () {
        return "" + this.etat();
    };
    NatCalculantAvecDesInts.prototype.equals = function (obj) {
        return this.val() == obj.val();
    };
    NatCalculantAvecDesInts.FAB = new NatCalculantAvecDesInts(new IntPositif_1.IntPositif(1));
    return NatCalculantAvecDesInts;
}(NatDeleguantEtat_1.NatDeleguantEtat));
exports.NatCalculantAvecDesInts = NatCalculantAvecDesInts;
