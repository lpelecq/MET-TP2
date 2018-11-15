import {Nat} from "../../session1.td/Nat";
import {FabriqueNaturels} from "../../session1.td/FabriqueNaturels";
import {NatDecimal} from "./NatDecimal";
import {NatParIntDecimal} from "./NatParIntDecimal";
import {SuccDecimal} from "./SuccDecimal";
import {ZeroDecimal} from "./ZeroDecimal";
import {NatDecimalParInt} from "./NatDecimalParInt";
import {NatParInt} from "./NatParInt";
import {SuccParInt} from "./SuccParInt";
import {ZeroParInt} from "./ZeroParInt";
import {NatDecimalRecursif} from "./NatDecimalRecursif";
import {NatParIntRecursif} from "./NatParIntRecursif";
import {SuccRecursif} from "./SuccRecursif";
import {ZeroRecursif} from "./ZeroRecursif";


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
         */

        let zero : Nat = fab.creerZero();
        console.log("0 ? " + zero);
        console.log("true ? " + zero.equals(zero.zero()));
        let un : Nat = fab.creerSuccesseur(zero);
        console.log("1 ? " + un);
        console.log("true ? " + un.equals(un.un()));
        let cinq : Nat = fab.creerNatAvecValeur(5);
        console.log("5 ? " + cinq);
        console.log("4 ? " + cinq.predecesseur());
        let six : Nat = fab.creerNatAvecValeur(6);
        console.log("11 ? " + cinq.somme(six));
        console.log("30 ? " + cinq.produit(six));
    }

}

Test.test(NatDecimal.FAB);
Test.test(NatParIntDecimal.FAB);
Test.test(SuccDecimal.FAB);
Test.test(ZeroDecimal.FAB);

Test.test(NatDecimalParInt.FAB);
Test.test(NatParInt.FAB);
Test.test(SuccParInt.FAB);
Test.test(ZeroParInt.FAB);

Test.test(NatDecimalRecursif.FAB);
Test.test(NatParIntRecursif.FAB);
Test.test(SuccRecursif.FAB);
Test.test(ZeroRecursif.FAB);