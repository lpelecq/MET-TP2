package session2.td.agregation;

import hierarchie.SemiAnneauUnitaireEuclidien;
import session1.td.FabriqueNaturels;

public interface Nat extends FabriqueNaturels<Nat>, SemiAnneauUnitaireEuclidien<Nat>, EtatNaturel<Nat> {

	Nat creerNatAvecEtat(EtatNaturelPur e);
	EtatNaturelPur etat() ;

}
