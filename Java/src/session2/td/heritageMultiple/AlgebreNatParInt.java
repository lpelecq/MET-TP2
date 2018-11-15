package session2.td.heritageMultiple;

import session1.td.Nat;

public interface AlgebreNatParInt extends Nat{

    default Nat somme(Nat pNat) {
        return this.creerNatAvecValeur(this.val() + pNat.val());
    }
    default Nat zero() {
        return this.creerNatAvecValeur(0);
    }
    default Nat produit(Nat pNat) {
        return this.creerNatAvecValeur(this.val() * pNat.val());
    }
    default Nat un() {
        return this.creerNatAvecValeur(1);
    }
    default Nat modulo(Nat pNat) {
        return this.creerNatAvecValeur(this.val() % pNat.val());
    }
    default Nat div(Nat pNat) {
        return this.creerNatAvecValeur(this.val() / pNat.val());
    }
    default Boolean estEgal(Object o) {
        if(!(o instanceof Nat))
            return false;
        Nat x = (Nat)o;
        if(x.estNul())
            return false;
        return this.predecesseur().equals(x.predecesseur());
    }
    default String representer() {
        return Integer.toString(this.val());
    }
}
