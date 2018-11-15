"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NatDecimal_1 = require("./NatDecimal");
var NatParIntDecimal_1 = require("./NatParIntDecimal");
var SuccDecimal_1 = require("./SuccDecimal");
var ZeroDecimal_1 = require("./ZeroDecimal");
var NatDecimalParInt_1 = require("./NatDecimalParInt");
var NatParInt_1 = require("./NatParInt");
var SuccParInt_1 = require("./SuccParInt");
var ZeroParInt_1 = require("./ZeroParInt");
var NatDecimalRecursif_1 = require("./NatDecimalRecursif");
var NatParIntRecursif_1 = require("./NatParIntRecursif");
var SuccRecursif_1 = require("./SuccRecursif");
var ZeroRecursif_1 = require("./ZeroRecursif");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.test = function (fab) {
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
    return Test;
}());
exports.Test = Test;
Test.test(NatDecimal_1.NatDecimal.FAB);
Test.test(NatParIntDecimal_1.NatParIntDecimal.FAB);
Test.test(SuccDecimal_1.SuccDecimal.FAB);
Test.test(ZeroDecimal_1.ZeroDecimal.FAB);
Test.test(NatDecimalParInt_1.NatDecimalParInt.FAB);
Test.test(NatParInt_1.NatParInt.FAB);
Test.test(SuccParInt_1.SuccParInt.FAB);
Test.test(ZeroParInt_1.ZeroParInt.FAB);
Test.test(NatDecimalRecursif_1.NatDecimalRecursif.FAB);
Test.test(NatParIntRecursif_1.NatParIntRecursif.FAB);
Test.test(SuccRecursif_1.SuccRecursif.FAB);
Test.test(ZeroRecursif_1.ZeroRecursif.FAB);
