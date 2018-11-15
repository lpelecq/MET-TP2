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
var EtatSucc = /** @class */ (function (_super) {
    __extends(EtatSucc, _super);
    function EtatSucc(predecesseur) {
        var _this = _super.call(this) || this;
        _this._predecesseur = predecesseur;
        return _this;
    }
    EtatSucc.prototype.estNul = function () {
        return false;
    };
    EtatSucc.prototype.predecesseur = function () {
        return this._predecesseur;
    };
    EtatSucc.prototype.chiffre = function (i) {
        if (i < this.taille()) {
            return +(String(this.val()).charAt(this.taille() - 1 - i));
        }
        return 0;
    };
    EtatSucc.prototype.val = function () {
        return 1 + this.predecesseur().val();
    };
    EtatSucc.prototype.taille = function () {
        return String(this.val()).length;
    };
    return EtatSucc;
}(NatInductif_1.NatInductif));
exports.EtatSucc = EtatSucc;
