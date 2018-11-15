"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgebreNatDecimal_default = /** @class */ (function () {
    function AlgebreNatDecimal_default() {
    }
    AlgebreNatDecimal_default.prototype.div = function (n) {
        if (n.val() == this.creerNatAvecRepresentation("10").val()) {
            if (this.taille() == 1)
                return this.zero();
            return this.creerNatAvecRepresentation(this.toString().substring(0, this.taille() - 1));
        }
        var courant = this.zero();
        var q = this.zero();
        var r = this.zero();
        while (!(courant.val() == this.val())) {
            r = this.creerSuccesseur(r);
            if (r.val() == n.val()) {
                r = this.zero();
                q = this.creerSuccesseur(q);
            }
            courant = this.creerSuccesseur(courant);
        }
        return q;
    };
    AlgebreNatDecimal_default.prototype.equals = function (o) {
        return this.val() == o.val();
    };
    AlgebreNatDecimal_default.prototype.modulo = function (n) {
        if (n.val() == this.creerNatAvecRepresentation("10").val()) {
            return this.creerNatAvecValeur(this.chiffre(0));
        }
        var courant = this.zero();
        var r = this.zero();
        while (!(courant.val() == this.val())) {
            r = this.creerSuccesseur(r);
            if (r.val() == n.val()) {
                r = this.zero();
            }
            courant = this.creerSuccesseur(courant);
        }
        return r;
    };
    AlgebreNatDecimal_default.prototype.produit = function (n) {
        if (n.val() == this.creerNatAvecRepresentation("10").val()) {
            return this.creerNatAvecRepresentation(this.toString() + "0");
        }
        var res = this.zero();
        var index = this.zero();
        while (!(index.val() == n.val())) {
            res = res.somme(this);
            index = this.creerSuccesseur(index);
        }
        return res;
    };
    AlgebreNatDecimal_default.prototype.somme = function (n) {
        var t = this.taille() < n.taille() ? n.taille() : this.taille();
        var rep = "";
        var retenue = 0;
        for (var i = 0; i < t; i++) {
            var chiffre = this.chiffre(i) + n.chiffre(i) + retenue;
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
    AlgebreNatDecimal_default.prototype.un = function () {
        return this.creerNatAvecRepresentation("1");
    };
    AlgebreNatDecimal_default.prototype.zero = function () {
        return this.creerZero();
    };
    return AlgebreNatDecimal_default;
}());
exports.AlgebreNatDecimal_default = AlgebreNatDecimal_default;
