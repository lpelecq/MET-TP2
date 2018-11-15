import {SemiAnneauUnitaireEuclidien } from '../../hierarchie/semianneauunitaireeuclidien';
import {FabriqueNaturels} from '../../session1.td/fabriquenaturels';
import {EtatNaturel} from './etatnaturel';
import {EtatNaturelPur} from "./EtatNaturelPur";

export interface Nat extends FabriqueNaturels<Nat>, SemiAnneauUnitaireEuclidien<Nat>, EtatNaturel<Nat> {

	creerNatAvecEtat(e : EtatNaturelPur) : Nat;
	etat() : EtatNaturelPur;

	equals(o : Nat) : boolean;
}
