"use strict";
exports.__esModule = true;
var IntPositif = /** @class */ (function () {
    function IntPositif(val) {
        this._val = val;
    }
    IntPositif.prototype.estNul = function () {
        return this.val() == 0;
    };
    IntPositif.prototype.predecesseur = function () {
        if (this.estNul()) {
            return this.creerZero();
        }
        return this.creerNatAvecValeur(this.val() - 1);
    };
    IntPositif.prototype.chiffre = function (i) {
        /*if (i == 0) {
            return this.val()%10;
        } else {
            let v : number = this.val();
            for(let j : number = i ; j>0 ; j--)
            {
                v /= 10;
                j--;
            }
            return v;
        }*/
        return (i == 0) ? this.val() % 10 : (this.creerNatAvecValeur(this.val() / 10)).chiffre(i - 1);
    };
    IntPositif.prototype.taille = function () {
        return String(this.val()).length;
    };
    IntPositif.prototype.val = function () {
        return this._val;
    };
    IntPositif.prototype.creerZero = function () {
        return this.creerNatAvecValeur(0);
    };
    IntPositif.prototype.creerSuccesseur = function (predecesseur) {
        return this.creerNatAvecValeur(predecesseur.val() + 1);
    };
    IntPositif.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(+repDecimale);
    };
    return IntPositif;
}());
exports.IntPositif = IntPositif;
