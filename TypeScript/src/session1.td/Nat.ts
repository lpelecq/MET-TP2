import { FabriqueNaturels } from './FabriqueNaturels';
import { SemiAnneauUnitaireEuclidien } from '../hierarchie/SemiAnneauUnitaireEuclidien';

export interface Nat extends FabriqueNaturels<Nat>, SemiAnneauUnitaireEuclidien<Nat> {
	/*
	 * Sélecteur pour la définition par récurrence.
	 */
	estNul() : boolean;
	/*
	 * Décomposition d'un successeur.
	 */
	predecesseur() : Nat;
	/*
	 * Unités en 0, dizaines en un, etc.
	 */
 	chiffre(i : number) : number;
	/*
	 * Nombre de chiffres (aucun 0 superflu en tête). 
	 */
	taille() : number;

	/*
	 * Représentation par un int.
	 */
	val() : number;

	equals(x : Nat) : boolean;
}
