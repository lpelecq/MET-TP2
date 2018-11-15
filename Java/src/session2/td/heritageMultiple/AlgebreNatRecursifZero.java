package session2.td.heritageMultiple;

import session1.td.Nat;

public interface AlgebreNatRecursifZero extends Nat{

    default Nat somme(Nat x) {
        return x;
    }
    default Nat zero() {
        return this;
    }
    default Nat produit(Nat pNat) {
        return this.creerZero();
    }
    default Nat un() {
        return this.creerSuccesseur(this);
    }
    default Nat modulo(Nat pNat) {
        return this.creerZero();
    }
    default Nat div(Nat pNat) {
        return this.creerZero();
    }
    default boolean estEgal(Object o) {
        if (!(o instanceof Nat))
            return false;
        Nat x = (Nat) o;
        return x.estNul();
    }
    default String representer() {
        return "0";
    }
}
