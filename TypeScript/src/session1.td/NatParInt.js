"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NatParInt = /** @class */ (function () {
    function NatParInt(val) {
        if (val < 0)
            throw new Error("Pas de Nat à patir d'un int négatif.");
        this._val = val;
    }
    NatParInt.prototype.creerNatAvecValeur = function (val) {
        return new NatParInt(val);
    };
    NatParInt.prototype.creerZero = function () {
        return this.creerNatAvecValeur(0);
    };
    NatParInt.prototype.creerSuccesseur = function (predecesseur) {
        return this.creerNatAvecValeur(predecesseur.val() + 1);
    };
    NatParInt.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(+repDecimale);
    };
    NatParInt.prototype.val = function () {
        return this._val;
    };
    NatParInt.prototype.estNul = function () {
        return this.val() == 0;
    };
    NatParInt.prototype.predecesseur = function () {
        if (this.estNul())
            throw new Error("Pas de prédécesseur.");
        return this.creerNatAvecValeur(this.val() - 1);
    };
    NatParInt.prototype.chiffre = function (i) {
        return (i == 0) ? this.val() % 10 : (new NatParInt(this.val() / 10)).chiffre(i - 1);
    };
    NatParInt.prototype.taille = function () {
        return (this.val() < 10) ? 1 : 1 + (new NatParInt(this.val() / 10)).taille();
    };
    NatParInt.prototype.zero = function () {
        return this.creerNatAvecValeur(0);
    };
    NatParInt.prototype.somme = function (x) {
        return this.creerNatAvecValeur(this.val() + x.val());
    };
    NatParInt.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    NatParInt.prototype.produit = function (x) {
        return this.creerNatAvecValeur(this.val() * x.val());
    };
    NatParInt.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    NatParInt.prototype.div = function (x) {
        return this.creerNatAvecValeur(this.val() / x.val());
    };
    NatParInt.prototype.toString = function () {
        return this.val().toString();
    };
    NatParInt.prototype.equals = function (x) {
        return this.val() == x.val();
    };
    NatParInt.FAB = new NatParInt(0);
    return NatParInt;
}());
exports.NatParInt = NatParInt;
