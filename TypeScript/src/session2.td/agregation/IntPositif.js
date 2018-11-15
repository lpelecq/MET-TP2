"use strict";
exports.__esModule = true;
var ZeroInductif_1 = require("./ZeroInductif");
var SuccInductif_1 = require("./SuccInductif");
var IntPositif = /** @class */ (function () {
    function IntPositif(val) {
        this._val = val;
    }
    IntPositif.prototype.creerNatAvecValeur = function (val) {
        return new IntPositif(val);
    };
    IntPositif.prototype.val = function () {
        return this._val;
    };
    IntPositif.prototype.estNul = function () {
        return this._val == 0;
    };
    IntPositif.prototype.predecesseur = function () {
        if (this.estNul())
            throw new Error("Pas de predecesseur.");
        return this.creerNatAvecValeur(this.val() - 1);
    };
    IntPositif.prototype.chiffre = function (i) {
        return (i == 0) ? this.val() % 10 : (this.creerNatAvecValeur(this.val() / 10)).chiffre(i - 1);
    };
    IntPositif.prototype.taille = function () {
        return (this.val() < 10) ? 1 : 1 + (this.creerNatAvecValeur(this.val() / 10)).taille();
    };
    IntPositif.prototype.toString = function () {
        return "" + this._val;
    };
    IntPositif.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(+repDecimale);
    };
    IntPositif.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccInductif_1.SuccInductif(predecesseur);
    };
    IntPositif.prototype.creerZero = function () {
        return new ZeroInductif_1.ZeroInductif();
    };
    return IntPositif;
}());
exports.IntPositif = IntPositif;
