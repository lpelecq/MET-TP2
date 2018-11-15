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
var ZeroInductif_1 = require("./ZeroInductif");
var NatCalculantRecursivement = /** @class */ (function (_super) {
    __extends(NatCalculantRecursivement, _super);
    function NatCalculantRecursivement(etat) {
        return _super.call(this, etat) || this;
    }
    NatCalculantRecursivement.prototype.creerNatAvecEtat = function (e) {
        return new NatCalculantRecursivement(e);
    };
    NatCalculantRecursivement.prototype.somme = function (x) {
        if (this.equals(this.zero())) {
            return x;
        }
        return this.creerSuccesseur(this.predecesseur().somme(x));
    };
    NatCalculantRecursivement.prototype.produit = function (x) {
        if (x.estNul() || this.estNul())
            return this.creerZero();
        else
            return x.somme(this.predecesseur().produit(x));
    };
    NatCalculantRecursivement.prototype.modulo = function (x) {
        if (this.estNul())
            return this.zero();
        else {
            var r = this.predecesseur().modulo(x);
            return this.creerSuccesseur(r).equals(x) ? this.creerZero() : this.creerSuccesseur(r);
        }
    };
    NatCalculantRecursivement.prototype.div = function (x) {
        if (this.estNul())
            return this.zero();
        else {
            var r = this.predecesseur().modulo(x);
            var q = this.predecesseur().div(x);
            return this.creerSuccesseur(r).equals(x) ? this.creerSuccesseur(q) : q;
        }
    };
    NatCalculantRecursivement.prototype.zero = function () {
        return this.creerZero();
    };
    NatCalculantRecursivement.prototype.un = function () {
        return this.creerSuccesseur(this.creerZero());
    };
    NatCalculantRecursivement.prototype.toString = function () {
        return "" + this.etat();
    };
    NatCalculantRecursivement.prototype.equals = function (o) {
        return this.val() == o.val();
    };
    NatCalculantRecursivement.FAB = new NatCalculantRecursivement(new ZeroInductif_1.ZeroInductif());
    return NatCalculantRecursivement;
}(NatDeleguantEtat_1.NatDeleguantEtat));
exports.NatCalculantRecursivement = NatCalculantRecursivement;
