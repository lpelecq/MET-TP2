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
Object.defineProperty(exports, "__esModule", { value: true });
var Succ_1 = require("./Succ");
var ZeroRec_1 = require("./ZeroRec");
var NatParInt_1 = require("./NatParInt");
var SuccRec = /** @class */ (function (_super) {
    __extends(SuccRec, _super);
    function SuccRec(predecesseur) {
        return _super.call(this, predecesseur) || this;
    }
    SuccRec.prototype.creerZero = function () {
        return new ZeroRec_1.ZeroRec();
    };
    SuccRec.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccRec(predecesseur);
    };
    // Remplacement du code copié-collé par du code récursif
    SuccRec.prototype.somme = function (x) {
        return this.creerSuccesseur(this.predecesseur().somme(x));
    };
    SuccRec.prototype.produit = function (x) {
        return x.somme(this.predecesseur().produit(x));
    };
    SuccRec.prototype.modulo = function (x) {
        var r = this.predecesseur().modulo(x);
        return this.creerSuccesseur(r).val() == x.val() ? this.creerZero() : this.creerSuccesseur(r);
    };
    SuccRec.prototype.div = function (x) {
        var r = this.predecesseur().modulo(x);
        var q = this.predecesseur().div(x);
        return this.creerSuccesseur(r).val() == x.val() ? this.creerSuccesseur(q) : q;
    };
    SuccRec.prototype.toString = function () {
        return "S^" + this.val() + "(0)";
    };
    SuccRec.prototype.equals = function (x) {
        return this.val() == x.val();
    };
    SuccRec.FAB = new NatParInt_1.NatParInt(0);
    return SuccRec;
}(Succ_1.Succ));
exports.SuccRec = SuccRec;
