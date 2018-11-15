"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NatInductif = /** @class */ (function () {
    function NatInductif() {
    }
    NatInductif.prototype.creerNatAvecValeur = function (val) {
        if (val == 0)
            return this.creerZero();
        return this.creerSuccesseur(this.creerNatAvecValeur(val - 1));
    };
    NatInductif.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(+repDecimale);
    };
    return NatInductif;
}());
exports.NatInductif = NatInductif;
