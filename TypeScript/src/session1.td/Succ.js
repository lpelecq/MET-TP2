"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NatParInt_1 = require("./NatParInt");
var Zero_1 = require("./Zero");
var Succ = /** @class */ (function () {
    function Succ(predecesseur) {
        this._predecesseur = predecesseur;
    }
    Succ.prototype.val = function () {
        return 1 + this.predecesseur().val();
    };
    Succ.prototype.estNul = function () {
        return false;
    };
    Succ.prototype.predecesseur = function () {
        return this._predecesseur;
    };
    // Précondition : i >=0
    Succ.prototype.chiffre = function (i) {
        if (i < this.taille()) {
            return +(this.val().toString().charAt(this.taille() - 1 - i));
        }
        return 0;
    };
    Succ.prototype.taille = function () {
        return this.val().toString().length;
    };
    Succ.prototype.creerNatAvecValeur = function (val) {
        if (val == 0)
            return this.creerZero();
        return this.creerSuccesseur(this.creerNatAvecValeur(val - 1));
    };
    Succ.prototype.creerZero = function () {
        return new Zero_1.Zero();
    };
    Succ.prototype.creerSuccesseur = function (predecesseur) {
        return new Succ(predecesseur);
    };
    Succ.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(+repDecimale);
    };
    // Code copié-collé
    Succ.prototype.zero = function () {
        return this.creerNatAvecValeur(0);
    };
    Succ.prototype.somme = function (x) {
        return this.creerNatAvecValeur(this.val() + x.val());
    };
    Succ.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    Succ.prototype.produit = function (x) {
        return this.creerNatAvecValeur(this.val() * x.val());
    };
    Succ.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    Succ.prototype.div = function (x) {
        return this.creerNatAvecValeur(this.val() / x.val());
    };
    Succ.prototype.toString = function () {
        return String(this.val());
    };
    Succ.prototype.equals = function (x) {
        return this.val() == x.val();
    };
    Succ.FAB = new NatParInt_1.NatParInt(0);
    return Succ;
}());
exports.Succ = Succ;
