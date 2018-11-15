package session2.td.agregation;

import session1.td.FabriqueNaturels;

public interface EtatNaturelPur extends EtatNaturel<EtatNaturelPur>, FabriqueNaturels<EtatNaturelPur> {

    @Override
    default EtatNaturelPur creerNatAvecValeur(int val) {
        if(val == 0)
            return new ZeroInductif();
        return this.creerSuccesseur(this.creerNatAvecValeur(val -1));
    }
    default EtatNaturelPur creerZero() {
        return this.creerNatAvecValeur(0);
    }
    default EtatNaturelPur creerSuccesseur(EtatNaturelPur predecesseur) {
        return new IntPositif(predecesseur.val() + 1);
    }
    default EtatNaturelPur creerNatAvecRepresentation(String repDecimale) {
        return this.creerNatAvecValeur(Integer.parseInt(repDecimale));
    }
}
