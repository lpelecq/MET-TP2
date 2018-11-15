package session2.td.heritageMultiple;

import session1.td.FabriqueNaturels;
import session1.td.Nat;



public class SuccRecursif extends EtatSucc implements AlgebreNatRecursifSuccesseur {

    public static final FabriqueNaturels<Nat> FAB = new SuccRecursif(new ZeroRecursif());

    public SuccRecursif(Nat predecesseur) {
        super(predecesseur);
    }


    @Override
    public Nat creerZero() {
        return new ZeroRecursif();
    }

    @Override
    public Nat creerSuccesseur(Nat predecesseur) {
        return new SuccRecursif(predecesseur);
    }

    @Override
    public String toString() {
        return ""+this.val();
    }

    public boolean equals(Object o) {
        if(!(o instanceof Nat)) return false;
        Nat n = (Nat)o;
        return this.toString().equals(n.toString());
    }

}
