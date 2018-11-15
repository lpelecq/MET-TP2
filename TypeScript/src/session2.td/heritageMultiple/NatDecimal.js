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
var AlgebreNatDecimal_1 = require("./AlgebreNatDecimal");
var heritageInterfacesConcretes_1 = require("./heritageInterfacesConcretes");
var NatDecimal = /** @class */ (function (_super) {
    __extends(NatDecimal, _super);
    function NatDecimal(rep) {
        return _super.call(this, rep) || this;
    }
    NatDecimal.nettoyer = function (s) {
        var debut = 0;
        var fin = 0;
        while ((fin < s.length) && +(s.charAt(fin)) == 0) {
            fin++;
        }
        s.replace(s.substring(debut, fin), "");
    };
    NatDecimal.prototype.creerNatAvecRepresentation = function (repDecimalecimale) {
        var repMutable = repDecimalecimale;
        NatDecimal.nettoyer(repMutable);
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
        return new NatDecimal(repDecimalecimale);
    };
    NatDecimal.prototype.equals = function (x) {
        return this.val() == x.val();
    };
    NatDecimal.prototype.toString = function () {
        return this._chiffres;
    };
    NatDecimal.prototype.div = function (x) {
        return undefined;
    };
    NatDecimal.prototype.modulo = function (x) {
        return undefined;
    };
    NatDecimal.prototype.produit = function (x) {
        return undefined;
    };
    NatDecimal.prototype.somme = function (x) {
        return undefined;
    };
    NatDecimal.prototype.un = function () {
        return undefined;
    };
    NatDecimal.prototype.zero = function () {
        return undefined;
    };
    NatDecimal.FAB = new NatDecimal("0");
    return NatDecimal;
}(NombreDecimal_1.NombreDecimal));
exports.NatDecimal = NatDecimal;
heritageInterfacesConcretes_1.heriterInterfacesConcretes(NatDecimal, [NombreDecimal_1.NombreDecimal, AlgebreNatDecimal_1.AlgebreNatDecimal_default]);
