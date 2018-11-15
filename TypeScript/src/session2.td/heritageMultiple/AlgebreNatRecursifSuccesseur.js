"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgebreNatRecursifSuccesseur_default = /** @class */ (function () {
    function AlgebreNatRecursifSuccesseur_default() {
    }
    AlgebreNatRecursifSuccesseur_default.prototype.zero = function () {
        return this.creerNatAvecValeur(0);
    };
    AlgebreNatRecursifSuccesseur_default.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    AlgebreNatRecursifSuccesseur_default.prototype.somme = function (x) {
        if (this.equals(this.zero())) {
            return x;
        }
        return this.creerSuccesseur(this.predecesseur().somme(x));
    };
    AlgebreNatRecursifSuccesseur_default.prototype.produit = function (x) {
        if (x.estNul() || this.estNul())
            return this.creerZero();
        else
            return x.somme(this.predecesseur().produit(x));
    };
    AlgebreNatRecursifSuccesseur_default.prototype.modulo = function (x) {
        if (this.estNul())
            return this.zero();
        else {
            var r = this.predecesseur().modulo(x);
            return this.creerSuccesseur(r).equals(x) ? this.creerZero() : this.creerSuccesseur(r);
        }
    };
    AlgebreNatRecursifSuccesseur_default.prototype.div = function (x) {
        if (this.estNul())
            return this.zero();
        else {
            var r = this.predecesseur().modulo(x);
            var q = this.predecesseur().div(x);
            return this.creerSuccesseur(r).equals(x) ? this.creerSuccesseur(q) : q;
        }
    };
    AlgebreNatRecursifSuccesseur_default.prototype.toString = function () {
        return this.val().toString();
    };
    AlgebreNatRecursifSuccesseur_default.prototype.equals = function (x) {
        return this.val() == x.val();
    };
    return AlgebreNatRecursifSuccesseur_default;
}());
exports.AlgebreNatRecursifSuccesseur_default = AlgebreNatRecursifSuccesseur_default;
