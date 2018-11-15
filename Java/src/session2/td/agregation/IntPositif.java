package session2.td.agregation;

public class IntPositif implements EtatNaturelPur {

    private int val;

    public IntPositif(int val) {
        this.val = val;
    }

   /* @Override
    public EtatNaturelPur creerNatAvecValeur(int val) {
        return new IntPositif(val);
    }
*/

    @Override
    public int val() {
        return this.val;
    }

    @Override
    public boolean estNul() {
        return this.val == 0;
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
        return ""+val;
    }
}
