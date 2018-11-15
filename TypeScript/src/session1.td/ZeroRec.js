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
var Zero_1 = require("./Zero");
var SuccRec_1 = require("./SuccRec");
var ZeroRec = /** @class */ (function (_super) {
    __extends(ZeroRec, _super);
    function ZeroRec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZeroRec.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccRec_1.SuccRec(predecesseur);
    };
    // Remplacement du code copié-collé par du code récursif
    ZeroRec.prototype.zero = function () {
        return this.creerZero();
    };
    ZeroRec.prototype.somme = function (x) {
        return x;
    };
    ZeroRec.prototype.un = function () {
        return this.creerSuccesseur(this.creerZero());
    };
    ZeroRec.prototype.produit = function (x) {
        return this.creerZero();
    };
    ZeroRec.prototype.modulo = function (x) {
        return this.creerZero();
    };
    ZeroRec.prototype.div = function (x) {
        return this.creerZero();
    };
    ZeroRec.prototype.toString = function () {
        return "0";
    };
    ZeroRec.prototype.equals = function (x) {
        return this.val() == x.val();
    };
    ZeroRec.FAB = new ZeroRec();
    return ZeroRec;
}(Zero_1.Zero));
exports.ZeroRec = ZeroRec;
