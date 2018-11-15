package session2.td.heritageMultiple;

import session1.td.FabriqueNaturels;
import session1.td.Nat;


public class ZeroDecimal extends EtatZero implements AlgebreNatDecimal {

    public static final FabriqueNaturels<Nat> FAB = new ZeroDecimal();

    public ZeroDecimal() {
    }


    @Override
    public String toString() {
        return ""+this.val();
    }

    @Override
    public Nat creerZero() {
        return this;
    }

    @Override
    public Nat creerSuccesseur(Nat predecesseur) {
        return new SuccDecimal(predecesseur);
    }

    @Override
    public boolean equals(Object obj) {
        if(!(obj instanceof Nat))
            return false;
        Nat x = (Nat)obj;
        return this.val() == x.val();
    }


}
