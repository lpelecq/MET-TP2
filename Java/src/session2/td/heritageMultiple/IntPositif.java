package session2.td.heritageMultiple;

import session1.td.Nat;



public abstract class IntPositif implements Nat {

    private int val;

    public IntPositif(int val) {
        this.val = val;
    }

    @Override
    public boolean estNul() {
        return this.val() == 0;
    }

    @Override
    public Nat predecesseur() {

        if(this.estNul()){
            return this.creerZero();
        }
        return this.creerNatAvecValeur(this.val -1) ;
    }

    @Override
    public int chiffre(int i) {
        int temp = 0;
        if (i == 0) {
            return this.val()%10;
        } else {

            for(int j=i; j>0; j--)
            {
                temp = this.val /= 10;
                j--;
            }
            return temp;
        }

       // return (i == 0) ? this.val()%10 : (this.val()/10).chiffre(i-1);
    }

    @Override
    public int taille() {
        return String.valueOf(this.val()).length();
    }

    @Override
    public int val() {
        return this.val;
    }

    @Override
    public Nat creerZero() {
        return this.creerNatAvecValeur(0);
    }

    @Override
    public Nat creerSuccesseur(Nat predecesseur) {
        return this.creerNatAvecValeur(predecesseur.val() + 1);
    }

    @Override
    public Nat creerNatAvecValeur(int val) {
        if(val == 0)
            return this.creerZero();
        return this.creerSuccesseur(this.creerNatAvecValeur(val -1));
    }
    @Override
    public Nat creerNatAvecRepresentation(String repDecimale) {
        return this.creerNatAvecValeur(Integer.parseInt(repDecimale));
    }
}
