"use strict";
exports.__esModule = true;
var NatCalculantAvecDesInts_1 = require("./NatCalculantAvecDesInts");
var NatCalculantRecursivement_1 = require("./NatCalculantRecursivement");
var NatCalculantAvecDesNombresDecimaux_1 = require("./NatCalculantAvecDesNombresDecimaux");
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
         * - Calculer le quotient et le reste de la division euclidienne de *33* par *6*.
         */
        var zero = fab.creerNatAvecValeur(0);
        console.log("0 ? " + zero);
        console.log("true ? " + zero.equals(zero.zero()));
        var un = fab.creerSuccesseur(zero);
        console.log("1 ? " + un);
        zero = un.predecesseur();
        console.log("0 ? " + zero);
        console.log("true ? " + un.equals(un.un()));
        var cinq = fab.creerNatAvecValeur(5);
        console.log("5 ? " + cinq);
        var six = fab.creerNatAvecValeur(6);
        console.log("11 ? " + cinq.somme(six));
        /*console.log("30 ? " + cinq.produit(six));
        console.log("3 ? "+ cinq.produit(six).somme(six.div(un.somme(un))).modulo(six));
        console.log("5 ? " + cinq.produit(six).somme(six.div(un.somme(un))).div(six));
        
        //console.log("30 ? " + Outils.produitRusse(cinq, six, cinq.somme(cinq)));*/
    };
    return Test;
}());
exports.Test = Test;
Test.test(NatCalculantAvecDesInts_1.NatCalculantAvecDesInts.FAB);
Test.test(NatCalculantAvecDesNombresDecimaux_1.NatCalculantAvecDesNombresDecimaux.FAB);
Test.test(NatCalculantRecursivement_1.NatCalculantRecursivement.FAB);
