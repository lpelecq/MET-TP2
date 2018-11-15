"use strict";
exports.__esModule = true;
var ZeroInductif_1 = require("./ZeroInductif");
var SuccInductif = /** @class */ (function () {
    function SuccInductif(predecesseur) {
        this._predecesseur = predecesseur;
    }
    SuccInductif.prototype.creerZero = function () {
        return new ZeroInductif_1.ZeroInductif();
    };
    SuccInductif.prototype.creerSuccesseur = function (e) {
        return new SuccInductif(e);
    };
    SuccInductif.prototype.creerNatAvecValeur = function (n) {
        if (n == 0) {
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(n - 1));
    };
    SuccInductif.prototype.val = function () {
        return this._predecesseur.val() + 1;
    };
    SuccInductif.prototype.estNul = function () {
        return this.val() == 0;
    };
    SuccInductif.prototype.predecesseur = function () {
        if (this.estNul())
            throw new Error("Pas de predecesseur.");
        return this.creerNatAvecValeur(this.val() - 1);
    };
    SuccInductif.prototype.chiffre = function (i) {
        return (i == 0) ? this.val() % 10 : (this.creerNatAvecValeur(this.val() / 10)).chiffre(i - 1);
    };
    SuccInductif.prototype.taille = function () {
        return (this.val() < 10) ? 1 : 1 + (this.creerNatAvecValeur(this.val() / 10)).taille();
    };
    SuccInductif.prototype.toString = function () {
        return "" + this.val();
    };
    SuccInductif.prototype.equals = function (o) {
        return this.val() == o.val();
    };
    SuccInductif.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(+repDecimale);
    };
    return SuccInductif;
}());
exports.SuccInductif = SuccInductif;
