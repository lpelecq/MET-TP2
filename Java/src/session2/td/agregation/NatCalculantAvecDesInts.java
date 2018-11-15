package session2.td.agregation;

import session1.td.FabriqueNaturels;

public class NatCalculantAvecDesInts extends NatDeleguantEtat {

    public static final FabriqueNaturels<Nat> FAB = new NatCalculantAvecDesInts(new IntPositif(1)) ;

    public NatCalculantAvecDesInts(EtatNaturelPur etat) {
        super(etat);
    }

    @Override
    public Nat creerNatAvecEtat(EtatNaturelPur e) {
        return new NatCalculantAvecDesInts(e);
    }

    @Override
    public Nat somme(Nat x) {
        return this.creerNatAvecValeur(this.val() + x.val());
    }

    @Override
    public Nat un() {
        return this.creerNatAvecValeur(1);
    }

    @Override
    public Nat produit(Nat x) {
        return this.creerNatAvecValeur(this.val() * x.val());
    }


    @Override
    public Nat modulo(Nat x) {
        return this.creerNatAvecValeur(this.val()%x.val());
    }

    @Override
    public Nat div(Nat x) {
        return this.creerNatAvecValeur(this.val()/x.val());
    }

    @Override
    public Nat zero() {
        return this.creerZero();
    }

    @Override
    public String toString() {
        return ""+this.etat().toString();
    }
    @Override
    public boolean equals(Object obj) {
        if(!(obj instanceof Nat))
            return false;
        Nat x = (Nat)obj;
        return this.val() == x.val();
    }
}
