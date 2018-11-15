package session2.td.heritageMultiple;

import session1.td.FabriqueNaturels;
import session1.td.Nat;

public class NatParIntDecimal extends IntPositif implements AlgebreNatDecimal  {

    public static final FabriqueNaturels<Nat> FAB = new NatParIntDecimal(0) ;

    public NatParIntDecimal(int val) {
        super(val);
    }



    @Override
    public boolean equals(Object obj) {
        if(!(obj instanceof Nat))
            return false;
        Nat x = (Nat)obj;
        return this.val() == x.val();
    }

    @Override
    public Nat creerNatAvecValeur(int val) {

        return new NatParInt(val);
    }
    @Override
    public String toString() {
        return ""+this.val();
    }

}
