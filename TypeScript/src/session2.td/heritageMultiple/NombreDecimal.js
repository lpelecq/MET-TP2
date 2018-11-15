"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NombreDecimal = /** @class */ (function () {
    function NombreDecimal(chiffres) {
        this._chiffres = chiffres;
    }
    NombreDecimal.prototype.estNul = function () {
        // Peut être simplifié du fait du nettoyage ("0" pour zéro)
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
            return +(this._chiffres.charAt(this._chiffres.length - 1 - i));
        return 0;
    };
    NombreDecimal.prototype.taille = function () {
        return this._chiffres.length;
    };
    NombreDecimal.prototype.val = function () {
        return +this._chiffres;
    };
    NombreDecimal.prototype.creerNatAvecValeur = function (val) {
        return this.creerNatAvecRepresentation(String(val));
    };
    NombreDecimal.prototype.creerZero = function () {
        return this.creerNatAvecValeur(0);
    };
    NombreDecimal.prototype.creerSuccesseur = function (predecesseur) {
        var t = predecesseur.taille();
        var rep = "";
        var retenue = 1;
        for (var i = 0; i < t; i++) {
            var chiffre = predecesseur.chiffre(i) + retenue;
            if (chiffre > 9) {
                chiffre = chiffre - 10;
                retenue = 1;
            }
            else {
                retenue = 0;
            }
            rep += +chiffre;
        }
        rep = retenue == 0 ? rep : rep += +(1);
        return this.creerNatAvecRepresentation(rep.split('').reverse().join(''));
    };
    return NombreDecimal;
}());
exports.NombreDecimal = NombreDecimal;
