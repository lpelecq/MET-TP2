package session2.td.agregation;

public abstract class NatDeleguantEtat  implements Nat{

    protected EtatNaturelPur etat;

    public NatDeleguantEtat(EtatNaturelPur etat) {
        this.etat = etat;
    }

    public EtatNaturelPur etat(){
        return this.etat;
    }
    public int val(){
        return this.etat.val();
    }

    public boolean estNul(){
        return this.etat.val() == 0;
    }

    public Nat predecesseur(){
        return this.creerNatAvecEtat(this.etat().predecesseur());
    }

    @Override
    public int chiffre(int n) {
        return this.etat.chiffre(n);
    }

    @Override
    public int taille() {
        return this.etat.taille();
    }
    @Override
    public Nat creerNatAvecValeur(int n) {
        return this.creerNatAvecEtat(this.etat.creerNatAvecValeur(n));
    }
    @Override
    public Nat creerZero() {
        return this.creerNatAvecEtat(this.etat.creerZero());
    }
    @Override
    public Nat creerSuccesseur(Nat predecesseur) {
        return this.creerNatAvecValeur(predecesseur.val() + 1);
    }
    @Override
    public Nat creerNatAvecRepresentation(String s) {
        return this.creerNatAvecEtat(this.etat.creerNatAvecRepresentation(s));
    }



}
