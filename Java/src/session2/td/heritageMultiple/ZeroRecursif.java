package session2.td.heritageMultiple;

import session1.td.FabriqueNaturels;
import session1.td.Nat;
import session2.td.agregation.EtatNaturelPur;


public class ZeroRecursif extends EtatZero implements AlgebreNatRecursifZero {

    public static final FabriqueNaturels<Nat> FAB = new ZeroRecursif() ;

    public ZeroRecursif() {
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
    public boolean equals(Object o) {
        if(!(o instanceof Nat)) return false;
        Nat n = (Nat)o;
        return this.toString().equals(n.toString());
    }
    @Override
    public String toString() {
        return "0";
    }
}
