"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlgebreNatRecursifZero_default = /** @class */ (function () {
    function AlgebreNatRecursifZero_default() {
    }
    AlgebreNatRecursifZero_default.prototype.zero = function () {
        return this.creerZero();
    };
    AlgebreNatRecursifZero_default.prototype.un = function () {
        return this.creerSuccesseur(this.creerZero());
    };
    AlgebreNatRecursifZero_default.prototype.somme = function (x) {
        return x;
    };
    AlgebreNatRecursifZero_default.prototype.produit = function (x) {
        return this.creerZero();
    };
    AlgebreNatRecursifZero_default.prototype.modulo = function (x) {
        return this.creerZero();
    };
    AlgebreNatRecursifZero_default.prototype.div = function (x) {
        return this.creerZero();
    };
    AlgebreNatRecursifZero_default.prototype.equals = function (o) {
        return this.val() == o.val();
    };
    return AlgebreNatRecursifZero_default;
}());
exports.AlgebreNatRecursifZero_default = AlgebreNatRecursifZero_default;
