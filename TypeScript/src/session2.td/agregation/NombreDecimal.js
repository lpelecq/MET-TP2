"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NombreDecimal = /** @class */ (function () {
    function NombreDecimal() {
    }
    NombreDecimal.prototype.NombreDecimal = function (chiffres) {
        this.chiffres = chiffres;
    };
    NombreDecimal.prototype.creerNatAvecValeur = function (val) {
        return this.creerNatAvecRepresentation(String(val));
    };
    NombreDecimal.prototype.creerZero = function () {
        return this.creerNatAvecValeur(0);
    };
    NombreDecimal.prototype.creerSuccesseur = function (e) {
        return this.creerNatAvecValeur(e.val());
    };
    NombreDecimal.prototype.creerNatAvecRepresentation = function (s) {
        return this.creerNatAvecValeur(+s);
    };
    NombreDecimal.prototype.val = function () {
        return +this.chiffres;
    };
    NombreDecimal.prototype.estNul = function () {
        for (var i = 0; i < this.taille(); i++) {
            if (this.chiffre(i) != 0) {
                return false;
            }
        }
        return true;
    };
    NombreDecimal.prototype.predecesseur = function () {
        if (this.estNul()) {
            throw new Error();
        }
        var t = this.taille();
        var rep = "";
        var retenue = -1;
        for (var i = 0; i < t; i++) {
            var chiffre = this.chiffre(i) + retenue;
            if (chiffre == -1) {
                chiffre = 9;
                retenue = -1;
            }
            else {
                retenue = 0;
            }
            rep += +chiffre;
        }
        return this.creerNatAvecRepresentation(rep.split('').reverse().join(''));
    };
    NombreDecimal.prototype.chiffre = function (i) {
        if (i < this.taille())
            return Character.getNumericValue(chiffres.charAt(chiffres.length() - 1 - i));
        return 0;
    };
    NombreDecimal.prototype.taille = function () {
        return this.chiffres.length();
    };
    return NombreDecimal;
}());
exports.NombreDecimal = NombreDecimal;
