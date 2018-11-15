"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NatDecimal = /** @class */ (function () {
    function NatDecimal(rep) {
        this._chiffres = rep;
    }
    NatDecimal.prototype.creerNatAvecValeur = function (x) {
        return new NatDecimal(x.toString());
    };
    NatDecimal.nettoyer = function (s) {
        var debut = 0;
        var fin = 0;
        while ((fin < s.length) && +(s.charAt(fin)) == 0) {
            fin++;
        }
        s.replace(s.substring(debut, fin), "");
    };
    NatDecimal.prototype.creerNatAvecRepresentation = function (repDecimalecimale) {
        var repMutable = repDecimalecimale;
        NatDecimal.nettoyer(repMutable);
        repDecimalecimale = repMutable;
        if (repDecimalecimale == "") {
            repDecimalecimale = "0";
        }
        var min = "0";
        var max = "9";
        for (var i = 0; i < repDecimalecimale.length; i++) {
            var c = repDecimalecimale.charAt(i);
            if (c < min)
                throw new Error();
            if (c > max)
                throw new Error();
        }
        return new NatDecimal(repDecimalecimale);
    };
    NatDecimal.prototype.creerZero = function () {
        return new NatDecimal("0");
    };
    NatDecimal.prototype.creerSuccesseur = function (predecesseur) {
        // somme simplifiée : 1 + predecesseur
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
        return new NatDecimal(rep.split('').reverse().join(''));
    };
    NatDecimal.prototype.chiffre = function (i) {
        if (i < this.taille())
            return +(this._chiffres.charAt(this._chiffres.length - 1 - i));
        return 0;
    };
    NatDecimal.prototype.taille = function () {
        return this._chiffres.length;
    };
    NatDecimal.prototype.val = function () {
        return +(this._chiffres);
    };
    NatDecimal.prototype.estNul = function () {
        // Peut être simplifié du fait du nettoyage ("0" pour zéro)
        for (var i = 0; i < this.taille(); i++) {
            if (this.chiffre(i) != 0) {
                return false;
            }
        }
        return true;
    };
    NatDecimal.prototype.predecesseur = function () {
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
    NatDecimal.prototype.somme = function (x) {
        var t = this.taille() < x.taille() ? x.taille() : this.taille();
        var rep = "";
        var retenue = 0;
        for (var i = 0; i < t; i++) {
            var chiffre = this.chiffre(i) + x.chiffre(i) + retenue;
            if (chiffre > 9) {
                chiffre = chiffre - 10;
                retenue = 1;
            }
            else {
                retenue = 0;
            }
            rep += +chiffre;
        }
        rep = retenue == 0 ? rep : rep += +1;
        return this.creerNatAvecRepresentation(rep.split('').reverse().join(''));
    };
    NatDecimal.prototype.zero = function () {
        return this.creerZero();
    };
    NatDecimal.prototype.produit = function (x) {
        if (x.val() == NatDecimal.DIX.val()) {
            return this.creerNatAvecRepresentation(this.toString() + "0");
        }
        var res = this.zero();
        var index = this.zero();
        while (!(index.val() == x.val())) {
            res = res.somme(this);
            index = this.creerSuccesseur(index);
        }
        return res;
    };
    NatDecimal.prototype.un = function () {
        return this.creerNatAvecRepresentation("1");
    };
    NatDecimal.prototype.modulo = function (x) {
        if (x.val() == NatDecimal.DIX.val()) {
            return this.creerNatAvecValeur(this.chiffre(0));
        }
        var courant = this.zero();
        var r = this.zero();
        while (!(courant.val() == this.val())) {
            r = this.creerSuccesseur(r);
            if (r.val() == x.val()) {
                r = this.zero();
            }
            courant = this.creerSuccesseur(courant);
        }
        return r;
    };
    NatDecimal.prototype.div = function (x) {
        if (x.val() == NatDecimal.DIX.val()) {
            if (this.taille() == 1)
                return this.zero();
            return this.creerNatAvecRepresentation(this.toString().substring(0, this.taille() - 1));
        }
        var courant = this.zero();
        var q = this.zero();
        var r = this.zero();
        while (!(courant.val() == this.val())) {
            r = this.creerSuccesseur(r);
            if (r.val() == x.val()) {
                r = this.zero();
                q = this.creerSuccesseur(q);
            }
            courant = this.creerSuccesseur(courant);
        }
        return q;
    };
    NatDecimal.prototype.equals = function (x) {
        return this.val() == x.val();
    };
    NatDecimal.prototype.toString = function () {
        return this._chiffres;
    };
    NatDecimal.FAB = new NatDecimal("");
    NatDecimal.DIX = NatDecimal.FAB.creerNatAvecRepresentation("10");
    return NatDecimal;
}());
exports.NatDecimal = NatDecimal;
