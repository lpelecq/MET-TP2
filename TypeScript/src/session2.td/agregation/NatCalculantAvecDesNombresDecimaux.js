"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var NatDeleguantEtat_1 = require("./NatDeleguantEtat");
var ZeroInductif_1 = require("./ZeroInductif");
var NatCalculantAvecDesNombresDecimaux = /** @class */ (function (_super) {
    __extends(NatCalculantAvecDesNombresDecimaux, _super);
    function NatCalculantAvecDesNombresDecimaux(etat) {
        return _super.call(this, etat) || this;
    }
    NatCalculantAvecDesNombresDecimaux.prototype.creerNatAvecEtat = function (e) {
        return new NatCalculantAvecDesNombresDecimaux(e);
    };
    NatCalculantAvecDesNombresDecimaux.prototype.modulo = function (n) {
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
    NatCalculantAvecDesNombresDecimaux.prototype.div = function (n) {
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
    NatCalculantAvecDesNombresDecimaux.prototype.somme = function (n) {
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
    NatCalculantAvecDesNombresDecimaux.prototype.produit = function (n) {
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
    NatCalculantAvecDesNombresDecimaux.prototype.zero = function () {
        return this.creerZero();
    };
    NatCalculantAvecDesNombresDecimaux.prototype.un = function () {
        return this.creerNatAvecRepresentation("1");
    };
    NatCalculantAvecDesNombresDecimaux.prototype.equals = function (o) {
        return this.val() == o.val();
    };
    NatCalculantAvecDesNombresDecimaux.prototype.toString = function () {
        return "" + this.etat();
    };
    NatCalculantAvecDesNombresDecimaux.FAB = new NatCalculantAvecDesNombresDecimaux(new ZeroInductif_1.ZeroInductif());
    return NatCalculantAvecDesNombresDecimaux;
}(NatDeleguantEtat_1.NatDeleguantEtat));
exports.NatCalculantAvecDesNombresDecimaux = NatCalculantAvecDesNombresDecimaux;
