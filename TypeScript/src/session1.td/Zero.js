"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Succ_1 = require("./Succ");
var Zero = /** @class */ (function () {
    function Zero() {
    }
    Zero.prototype.val = function () {
        return 0;
    };
    Zero.prototype.estNul = function () {
        return true;
    };
    Zero.prototype.predecesseur = function () {
        throw new Error("Pas de prédécesseur.");
    };
    Zero.prototype.chiffre = function (i) {
        return 0;
    };
    Zero.prototype.taille = function () {
        return 1;
    };
    Zero.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(+repDecimale);
    };
    Zero.prototype.creerNatAvecValeur = function (val) {
        if (val == 0)
            return this.creerZero();
        return this.creerSuccesseur(this.creerNatAvecValeur(val - 1));
    };
    Zero.prototype.creerZero = function () {
        return this;
    };
    Zero.prototype.creerSuccesseur = function (predecesseur) {
        return new Succ_1.Succ(predecesseur);
    };
    // Code copié-collé
    Zero.prototype.zero = function () {
        return this.creerNatAvecValeur(0);
    };
    Zero.prototype.somme = function (x) {
        return this.creerNatAvecValeur(this.val() + x.val());
    };
    Zero.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    Zero.prototype.produit = function (x) {
        return this.creerNatAvecValeur(this.val() * x.val());
    };
    Zero.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    Zero.prototype.div = function (x) {
        return this.creerNatAvecValeur(this.val() / x.val());
    };
    Zero.prototype.toString = function () {
        return this.val().toString();
    };
    Zero.prototype.equals = function (x) {
        return this.val() == x.val();
    };
    Zero.FAB = new Zero();
    return Zero;
}());
exports.Zero = Zero;
