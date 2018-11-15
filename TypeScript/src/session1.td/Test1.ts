import { FabriqueNaturels } from "./FabriqueNaturels";
import { Nat } from "./Nat";
import { NatParInt } from "./NatParInt";
import { NatDecimal } from "./NatDecimal";
import { Zero } from "./Zero";
import { Succ } from "./Succ";
import { SuccRec } from "./SuccRec";
import { ZeroRec } from "./ZeroRec";
import { Outils } from "./Outils";

export class Test1 {

    public static main(args : string[]) : void {
        Test1.test(NatParInt.FAB);
        Test1.test(Zero.FAB);
        Test1.test(Succ.FAB);
        Test1.test(ZeroRec.FAB);
        Test1.test(SuccRec.FAB);
        Test1.test(NatDecimal.FAB);
    }

	private static test(fab : FabriqueNaturels<Nat>) : void {
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
