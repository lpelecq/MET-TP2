package session2.td.heritageMultiple;

import session1.td.FabriqueNaturels;
import session1.td.Nat;

public class NatParInt extends IntPositif implements AlgebreNatParInt {

    public static FabriqueNaturels<Nat> FAB = new NatParInt(0);

    public NatParInt(int val) {
        super(val);
    }

    @Override
    public String toString() {
        return ""+this.val();
    }

    @Override
    public Nat creerNatAvecValeur(int val) {
        return new NatParInt(val);
    }

    @Override
    public Nat creerNatAvecRepresentation(String repDecimale) {
        return this.creerNatAvecValeur(Integer.parseInt(repDecimale));
    }

    @Override
    public boolean equals(Object obj) {
        if(!(obj instanceof Nat))
            return false;
        Nat x = (Nat)obj;
        return this.val() == x.val();
    }


}
