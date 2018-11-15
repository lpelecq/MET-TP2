"use strict";
exports.__esModule = true;
var EtatNaturelPur_default = /** @class */ (function () {
    function EtatNaturelPur_default() {
    }
    EtatNaturelPur_default.prototype.creerNatAvecValeur = function (val) {
        return this.creerNatAvecRepresentation(String(val));
    };
    EtatNaturelPur_default.prototype.creerZero = function () {
        return this.creerNatAvecValeur(0);
    };
    EtatNaturelPur_default.prototype.creerSuccesseur = function (predecesseur) {
        return this.creerNatAvecValeur(predecesseur.val());
    };
    EtatNaturelPur_default.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(+repDecimale);
    };
    return EtatNaturelPur_default;
}());
exports.EtatNaturelPur_default = EtatNaturelPur_default;
