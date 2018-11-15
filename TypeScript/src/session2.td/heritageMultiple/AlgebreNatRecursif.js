"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgebreNatRecursif_default = /** @class */ (function () {
    function AlgebreNatRecursif_default() {
    }
    AlgebreNatRecursif_default.prototype.div = function (n) {
        var r = this.predecesseur().modulo(n);
        var q = this.predecesseur().div(n);
        return this.creerSuccesseur(r).equals(n) ? this.creerSuccesseur(q) : q;
    };
    AlgebreNatRecursif_default.prototype.equals = function (o) {
        return this.val() == o.val();
    };
    AlgebreNatRecursif_default.prototype.modulo = function (n) {
        var r = this.predecesseur().modulo(n);
        return this.creerSuccesseur(r).equals(n) ? this.creerZero() : this.creerSuccesseur(r);
    };
    AlgebreNatRecursif_default.prototype.produit = function (n) {
        if (n.estNul() || this.estNul())
            return this.creerZero();
        else
            return n.somme(this.predecesseur().produit(n));
    };
    AlgebreNatRecursif_default.prototype.somme = function (n) {
        if (this.equals(this.zero())) {
            return n;
        }
        return this.creerSuccesseur(this.predecesseur().somme(n));
    };
    AlgebreNatRecursif_default.prototype.un = function () {
        return this.creerNatAvecRepresentation("1");
    };
    AlgebreNatRecursif_default.prototype.zero = function () {
        return this.creerNatAvecRepresentation("0");
    };
    return AlgebreNatRecursif_default;
}());
exports.AlgebreNatRecursif_default = AlgebreNatRecursif_default;
