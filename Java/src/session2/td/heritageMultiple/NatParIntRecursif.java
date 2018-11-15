package session2.td.heritageMultiple;

import session1.td.FabriqueNaturels;
import session1.td.Nat;

public class NatParIntRecursif extends IntPositif implements AlgebreNatRecursif {

    public static final FabriqueNaturels<Nat> FAB = new NatParIntRecursif(0);

    public NatParIntRecursif(int val) {
        super(val);
    }

    @Override
    public boolean estEgal(Object o) {
        if(!(o instanceof Nat))
            return false;
        Nat x = (Nat)o;
        if(x.estNul())
            return false;
        return this.predecesseur().equals(x.predecesseur());
    }



    @Override
    public String toString() {
        return  "" + this.val();
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
        return new NatParIntRecursif(val);
    }


}
