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
var AlgebreNatRecursif_1 = require("./AlgebreNatRecursif");
var heritageInterfacesconcretes_1 = require("./heritageInterfacesconcretes");
var NatDecimalRecursif = /** @class */ (function (_super) {
    __extends(NatDecimalRecursif, _super);
    function NatDecimalRecursif(chiffres) {
        return _super.call(this, chiffres) || this;
    }
    NatDecimalRecursif.nettoyer = function (s) {
        var debut = 0;
        var fin = 0;
        while ((fin < s.length) && +(s.charAt(fin)) == 0) {
            fin++;
        }
        s.replace(s.substring(debut, fin), "");
    };
    NatDecimalRecursif.prototype.toString = function () {
        return String(this.val());
    };
    NatDecimalRecursif.prototype.equals = function (x) {
        return this.toString() == x.toString();
    };
    NatDecimalRecursif.prototype.creerNatAvecRepresentation = function (repDecimalecimale) {
        var repMutable = repDecimalecimale;
        NatDecimalRecursif.nettoyer(repMutable);
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
        return new NatDecimalRecursif(repDecimalecimale);
    };
    NatDecimalRecursif.prototype.div = function (x) {
        return undefined;
    };
    NatDecimalRecursif.prototype.modulo = function (x) {
        return undefined;
    };
    NatDecimalRecursif.prototype.produit = function (x) {
        return undefined;
    };
    NatDecimalRecursif.prototype.somme = function (x) {
        return undefined;
    };
    NatDecimalRecursif.prototype.un = function () {
        return undefined;
    };
    NatDecimalRecursif.prototype.zero = function () {
        return undefined;
    };
    NatDecimalRecursif.FAB = new NatDecimalRecursif("0");
    return NatDecimalRecursif;
}(NombreDecimal_1.NombreDecimal));
exports.NatDecimalRecursif = NatDecimalRecursif;
heritageInterfacesconcretes_1.heriterInterfacesConcretes(NatDecimalRecursif, [NombreDecimal_1.NombreDecimal, AlgebreNatRecursif_1.AlgebreNatRecursif_default]);
