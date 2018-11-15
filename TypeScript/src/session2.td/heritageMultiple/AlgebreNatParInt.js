"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgebreNatParInt_default = /** @class */ (function () {
    function AlgebreNatParInt_default() {
    }
    AlgebreNatParInt_default.prototype.div = function (n) {
        return this.creerNatAvecValeur(this.val() / n.val());
    };
    AlgebreNatParInt_default.prototype.equals = function (o) {
        return this.val() == o.val();
    };
    AlgebreNatParInt_default.prototype.modulo = function (n) {
        return this.creerNatAvecValeur(this.val() % n.val());
    };
    AlgebreNatParInt_default.prototype.produit = function (n) {
        return this.creerNatAvecValeur(this.val() * n.val());
    };
    AlgebreNatParInt_default.prototype.somme = function (n) {
        return this.creerNatAvecValeur(this.val() + n.val());
    };
    AlgebreNatParInt_default.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    AlgebreNatParInt_default.prototype.zero = function () {
        return this.creerNatAvecValeur(0);
    };
    return AlgebreNatParInt_default;
}());
exports.AlgebreNatParInt_default = AlgebreNatParInt_default;
