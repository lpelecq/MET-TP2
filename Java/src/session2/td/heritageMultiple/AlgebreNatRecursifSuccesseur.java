package session2.td.heritageMultiple;

import session1.td.Nat;

public interface AlgebreNatRecursifSuccesseur extends Nat {

    default Nat zero() {
        return this.creerNatAvecValeur(0);
    }

    default Nat un() {
        return this.creerNatAvecValeur(1);
    }

    default boolean estEgal(Object o) {
        if(!(o instanceof Nat))
            return false;
        Nat x = (Nat)o;
        if(x.estNul())
            return false;
        return this.predecesseur().equals(x.predecesseur());
    }
    default String  representer(){
        return "S^" + this.val() + "(0)";
    }
    default Nat somme(Nat x) {
        return this.creerSuccesseur(this.predecesseur().somme(x));
    }

    default Nat produit(Nat x) {
        return x.somme(this.predecesseur().produit(x));
    }

    default Nat modulo(Nat x) {
        Nat r = this.predecesseur().modulo(x);
        return this.creerSuccesseur(r).equals(x) ? this.creerZero() : this.creerSuccesseur(r);
    }
    default Nat div(Nat x) {
        Nat r = this.predecesseur().modulo(x);
        Nat q = this.predecesseur().div(x);
        return this.creerSuccesseur(r).equals(x) ? this.creerSuccesseur(q) : q;
    }
}
