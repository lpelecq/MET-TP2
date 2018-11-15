package session2.td.agregation;

public interface NaturelInductif extends EtatNaturelPur {

    EtatNaturelPur creerZero();
    EtatNaturelPur creerSuccesseur(EtatNaturelPur e);
    EtatNaturelPur creerNatAvecValeur(int n);

}
