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
var NatInductif_1 = require("../heritageAscendant/NatInductif");
var EtatZero = /** @class */ (function (_super) {
    __extends(EtatZero, _super);
    function EtatZero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EtatZero.prototype.estNul = function () {
        return true;
    };
    EtatZero.prototype.predecesseur = function () {
        throw new Error("Pas de prédécesseur.");
    };
    EtatZero.prototype.chiffre = function (i) {
        return 0;
    };
    EtatZero.prototype.taille = function () {
        return 0;
    };
    EtatZero.prototype.val = function () {
        return 0;
    };
    return EtatZero;
}(NatInductif_1.NatInductif));
exports.EtatZero = EtatZero;
