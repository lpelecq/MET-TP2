import { Nat } from "./Nat";

export class Outils {
	/*
	 * Calcul du produit reposant sur l'identité suivante :
	 * - x * y = x * (y/base) * base + x * y%base)
	 * Elle est valable dans un semi-anneau unitaire euclidien puisque la division euclidienne
	 * vérifie :
	 * - y = (y/z)*z + y%z.
	 * Elle est dite russe lorsque la base vaut deux ; c'est aussi la méthode habituelle 
	 * de calcul en base 10, lorsqu'on réalise manuellement le calcul.
	 */
	public static produitRusse (x : Nat, y : Nat, base : Nat) : Nat {
		let zero : Nat = x.zero();
		let resultat : Nat = zero;

		while (!(y.val() == zero.val())) {
			let reste : Nat = y.modulo(base);
			if (!(reste.val() == zero.val())) {
				resultat = resultat.somme(x.produit(reste));
			}
			x = x.produit(base);
			y = y.div(base);
		}
		return resultat;
	}
}
