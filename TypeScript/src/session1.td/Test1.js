"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NatParInt_1 = require("./NatParInt");
var NatDecimal_1 = require("./NatDecimal");
var Zero_1 = require("./Zero");
var Succ_1 = require("./Succ");
var SuccRec_1 = require("./SuccRec");
var ZeroRec_1 = require("./ZeroRec");
var Test1 = /** @class */ (function () {
    function Test1() {
    }
    Test1.main = function (args) {
        Test1.test(NatParInt_1.NatParInt.FAB);
        Test1.test(Zero_1.Zero.FAB);
        Test1.test(Succ_1.Succ.FAB);
        Test1.test(ZeroRec_1.ZeroRec.FAB);
        Test1.test(SuccRec_1.SuccRec.FAB);
        Test1.test(NatDecimal_1.NatDecimal.FAB);
    };
    Test1.test = function (fab) {
        console.log("************************************************");
        console.log(typeof fab);
        console.log("************************************************");
        /*
         * - Créer l'entier zéro à partir de la fabrique et l'affecter à une
         * variable *zero*.
         * - Afficher sa valeur.
         * - Tester l'égalité entre *zero* et *zero.zero()*.
         * - Créer l'entier un à partir de la fabrique et l'affecter à une variable *un*.
         * - Afficher sa valeur.
         * - Tester l'égalité entre *un* et *un.un()*.
         * - Créer l'entier cinq à partir de la fabrique et l'affecter à une variable *cinq*.
         * - Afficher sa valeur.
         * - Créer l'entier six à partir de la fabrique et l'affecter à une variable *six*.
         * - Calculer la somme de cinq et six et afficher le
         * résultat.
         * - Calculer le produit de cinq et six et afficher le
         * résultat.
         */
        var zero = fab.creerZero();
        console.log("0 ? " + zero);
        console.log("true ? " + zero.equals(zero.zero()));
        var un = fab.creerSuccesseur(zero);
        console.log("1 ? " + un);
        console.log("true ? " + un.equals(un.un()));
        var cinq = fab.creerNatAvecValeur(5);
        console.log("5 ? " + cinq);
        console.log("4 ? " + cinq.predecesseur());
        var six = fab.creerNatAvecValeur(6);
        console.log("11 ? " + cinq.somme(six));
        console.log("30 ? " + cinq.produit(six));
    };
    return Test1;
}());
exports.Test1 = Test1;
