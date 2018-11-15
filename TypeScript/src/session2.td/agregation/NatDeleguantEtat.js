"use strict";
exports.__esModule = true;
var NatDeleguantEtat = /** @class */ (function () {
    function NatDeleguantEtat(etat) {
        this._etat = etat;
    }
    NatDeleguantEtat.prototype.etat = function () {
        return this._etat;
    };
    NatDeleguantEtat.prototype.val = function () {
        return this._etat.val();
    };
    NatDeleguantEtat.prototype.estNul = function () {
        return this._etat.val() == 0;
    };
    NatDeleguantEtat.prototype.predecesseur = function () {
        return this.creerNatAvecEtat(this.etat().predecesseur());
    };
    NatDeleguantEtat.prototype.chiffre = function (n) {
        return this._etat.chiffre(n);
    };
    NatDeleguantEtat.prototype.taille = function () {
        return this._etat.taille();
    };
    NatDeleguantEtat.prototype.creerNatAvecValeur = function (n) {
        return this.creerNatAvecEtat(this._etat.creerNatAvecValeur(n));
    };
    NatDeleguantEtat.prototype.creerZero = function () {
        return this.creerNatAvecEtat(this._etat.creerZero());
    };
    NatDeleguantEtat.prototype.creerSuccesseur = function (predecesseur) {
        return this.creerNatAvecValeur(predecesseur.val() + 1);
    };
    NatDeleguantEtat.prototype.creerNatAvecRepresentation = function (s) {
        return this.creerNatAvecEtat(this._etat.creerNatAvecRepresentation(s));
    };
    return NatDeleguantEtat;
}());
exports.NatDeleguantEtat = NatDeleguantEtat;
