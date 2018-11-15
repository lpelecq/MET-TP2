"use strict";
exports.__esModule = true;
var SuccInductif_1 = require("./SuccInductif");
var ZeroInductif = /** @class */ (function () {
    function ZeroInductif() {
    }
    ZeroInductif.prototype.creerZero = function () {
        return new ZeroInductif();
    };
    ZeroInductif.prototype.creerSuccesseur = function (e) {
        return new SuccInductif_1.SuccInductif(e);
    };
    ZeroInductif.prototype.creerNatAvecValeur = function (n) {
        if (n == 0) {
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(n - 1));
    };
    ZeroInductif.prototype.val = function () {
        return 0;
    };
    ZeroInductif.prototype.estNul = function () {
        return this.val() == 0;
    };
    ZeroInductif.prototype.predecesseur = function () {
        if (this.estNul())
            throw new Error("Pas de predecesseur.");
        return this.creerNatAvecValeur(this.val() - 1);
    };
    ZeroInductif.prototype.chiffre = function (i) {
        return (i == 0) ? this.val() % 10 : (this.creerNatAvecValeur(this.val() / 10)).chiffre(i - 1);
    };
    ZeroInductif.prototype.taille = function () {
        return (this.val() < 10) ? 1 : 1 + (this.creerNatAvecValeur(this.val() / 10)).taille();
    };
    ZeroInductif.prototype.toString = function () {
        return String(this.val());
    };
    ZeroInductif.prototype.equals = function (o) {
        return this.val() == o.val();
    };
    ZeroInductif.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(+repDecimale);
    };
    return ZeroInductif;
}());
exports.ZeroInductif = ZeroInductif;
