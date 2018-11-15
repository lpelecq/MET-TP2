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
var NombreDecimal_1 = require("./NombreDecimal");
var AlgebreNatParInt_1 = require("./AlgebreNatParInt");
var heritageInterfacesconcretes_1 = require("./heritageInterfacesconcretes");
var NatDecimalParInt = /** @class */ (function (_super) {
    __extends(NatDecimalParInt, _super);
    function NatDecimalParInt(chiffres) {
        return _super.call(this, chiffres) || this;
    }
    NatDecimalParInt.nettoyer = function (s) {
        var debut = 0;
        var fin = 0;
        while ((fin < s.length) && +(s.charAt(fin)) == 0) {
            fin++;
        }
        s.replace(s.substring(debut, fin), "");
    };
    NatDecimalParInt.prototype.creerNatAvecRepresentation = function (repDecimalecimale) {
        var repMutable = repDecimalecimale;
        NatDecimalParInt.nettoyer(repMutable);
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
        return new NatDecimalParInt(repDecimalecimale);
    };
    NatDecimalParInt.prototype.equals = function (x) {
        return this.val() == x.val();
    };
    NatDecimalParInt.prototype.toString = function () {
        return this._chiffres;
    };
    NatDecimalParInt.prototype.div = function (x) {
        return undefined;
    };
    NatDecimalParInt.prototype.modulo = function (x) {
        return undefined;
    };
    NatDecimalParInt.prototype.produit = function (x) {
        return undefined;
    };
    NatDecimalParInt.prototype.somme = function (x) {
        return undefined;
    };
    NatDecimalParInt.prototype.un = function () {
        return undefined;
    };
    NatDecimalParInt.prototype.zero = function () {
        return undefined;
    };
    NatDecimalParInt.FAB = new NatDecimalParInt("0");
    return NatDecimalParInt;
}(NombreDecimal_1.NombreDecimal));
exports.NatDecimalParInt = NatDecimalParInt;
heritageInterfacesconcretes_1.heriterInterfacesConcretes(NatDecimalParInt, [NombreDecimal_1.NombreDecimal, AlgebreNatParInt_1.AlgebreNatParInt_default]);
