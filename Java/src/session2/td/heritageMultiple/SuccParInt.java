package session2.td.heritageMultiple;

import session1.td.FabriqueNaturels;
import session1.td.Nat;

public class SuccParInt extends EtatSucc implements AlgebreNatParInt {
    public static final FabriqueNaturels<Nat> FAB = new SuccParInt(new ZeroParInt()) ;

    public SuccParInt(Nat predecesseur) {
        super(predecesseur);
    }


    @Override
    public Nat creerZero() {
        return new ZeroParInt();
    }

    @Override
    public Nat creerSuccesseur(Nat predecesseur) {
        return new SuccParInt(predecesseur);
    }

    @Override
    public String toString() {
        return ""+this.val();
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof Nat))
            return false;
        Nat x = (Nat) obj;
        return this.val() == x.val();
    }
}
