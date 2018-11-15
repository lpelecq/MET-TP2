import { FabriqueNaturels } from "./FabriqueNaturels";
import { Nat } from "./Nat";
import { NatParInt } from "./NatParInt";
import { NatDecimal } from "./NatDecimal";
import { Zero } from "./Zero";
import { Succ } from "./Succ";
import { SuccRec } from "./SuccRec";
import { ZeroRec } from "./ZeroRec";
import { Outils } from "./Outils";


function test(fab : FabriqueNaturels<Nat>) : void {
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
	console.log("************************************************");
	console.log(typeof fab);
	console.log("************************************************");
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
	console.log("30 ? " + cinq.produit(six));
	console.log("3 ? " + cinq.produit(six).somme(six.div(un.somme(un))).modulo(six));
	console.log("5 ? " + cinq.produit(six).somme(six.div(un.somme(un))).div(six));
	console.log("30 ? " + Outils.produitRusse(cinq, six, cinq.somme(cinq)));

}

function test1(fab : FabriqueNaturels<Nat>) : void {
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

/*
test(NatParInt.FAB);
test(Zero.FAB);
test(Succ.FAB);
test(ZeroRec.FAB);
test(SuccRec.FAB);
test(NatDecimal.FAB);
/**/

test1(NatParInt.FAB);
test1(Zero.FAB);
test1(Succ.FAB);
test1(ZeroRec.FAB);
test1(SuccRec.FAB);
test1(NatDecimal.FAB);