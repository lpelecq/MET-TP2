package session2.td.agregation;

public class ZeroInductif implements NaturelInductif {

    public ZeroInductif() {
    }

    @Override
    public EtatNaturelPur creerZero() {
        return new ZeroInductif();
    }

    @Override
    public EtatNaturelPur creerSuccesseur(EtatNaturelPur e) {
        return new SuccInductif(e);
    }

    @Override
    public EtatNaturelPur creerNatAvecValeur(int n) {
        if (n == 0){
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(n-1));
    }


    @Override
    public int val() {
        return 0;
    }

    @Override
    public boolean estNul() {
        return this.val() == 0;
    }

    @Override
    public EtatNaturelPur predecesseur() {
        if(this.estNul())
            throw new UnsupportedOperationException("Pas de predecesseur.");
        return this.creerNatAvecValeur(this.val() - 1);
    }

    @Override
    public int chiffre(int i) {
        return (i == 0) ? this.val()%10 : (this.creerNatAvecValeur(this.val()/10)).chiffre(i-1);
    }
    @Override
    public int taille() {
        return (this.val() < 10) ? 1 : 1 + (this.creerNatAvecValeur(this.val() / 10)).taille();
    }

    @Override
    public String toString() {
        return Integer.toString(this.val());
    }
    public boolean equals(Object o) {
        if(!(o instanceof EtatNaturelPur)) return false;
        EtatNaturelPur n = (EtatNaturelPur)o;
        return this.toString().equals(n.toString());
    }
}
