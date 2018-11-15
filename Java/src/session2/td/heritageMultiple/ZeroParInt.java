package session2.td.heritageMultiple;

import session1.td.FabriqueNaturels;
import session1.td.Nat;

public class ZeroParInt extends EtatZero implements AlgebreNatParInt {

    public static final FabriqueNaturels<Nat> FAB = new ZeroParInt();

    public ZeroParInt() {
    }

    @Override
    public Nat creerZero() {
        return new ZeroParInt();
    }

    @Override
    public Nat creerSuccesseur(Nat predecesseur) {
        return new SuccDecimal(predecesseur);
    }

    @Override
    public String toString() {
        return ""+this.val();
    }

    @Override
    public boolean equals(Object obj) {
        if(!(obj instanceof Nat))
            return false;
        Nat x = (Nat)obj;
        return this.val() == x.val();
    }
}
