import {FabriqueNaturels} from "../../session1.td/FabriqueNaturels";
import {Outils} from "../../session1.td/Outils";
import {Nat} from "./Nat";
import {NatCalculantAvecDesInts} from "./NatCalculantAvecDesInts";
import {NatCalculantRecursivement} from "./NatCalculantRecursivement";
import {NatCalculantAvecDesNombresDecimaux} from "./NatCalculantAvecDesNombresDecimaux";

export class Test {

    public static test(fab : FabriqueNaturels<Nat>) : void {
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


        let zero : Nat = fab.creerNatAvecValeur(0);
        console.log("0 ? " + zero);
        console.log("true ? " + zero.equals(zero.zero()));
        let un : Nat = fab.creerSuccesseur(zero);
        console.log("1 ? " + un);
        zero = un.predecesseur();
        console.log("0 ? " + zero);
        console.log("true ? " + un.equals(un.un()));

        let cinq : Nat = fab.creerNatAvecValeur(5);
        console.log("5 ? " + cinq);
        let six : Nat = fab.creerNatAvecValeur(6);
        console.log("11 ? " + cinq.somme(six));
        /*console.log("30 ? " + cinq.produit(six));
        console.log("3 ? "+ cinq.produit(six).somme(six.div(un.somme(un))).modulo(six));
        console.log("5 ? " + cinq.produit(six).somme(six.div(un.somme(un))).div(six));
        
        //console.log("30 ? " + Outils.produitRusse(cinq, six, cinq.somme(cinq)));*/
    }


}

Test.test(NatCalculantAvecDesInts.FAB);
Test.test(NatCalculantAvecDesNombresDecimaux.FAB);
Test.test(NatCalculantRecursivement.FAB);
