package session2.td.heritageMultiple;
import session1.td.Nat;

public interface AlgebreNatRecursif extends AlgebreNatRecursifSuccesseur,AlgebreNatRecursifZero{

    default String representer() {
        return "S^" + this.val() + "(0)";
    }


    default Nat somme(Nat x) {
        if (this.equals(this.zero())) {
            return x;
        }
        return this.creerSuccesseur(this.predecesseur().somme(x));
    }

    default  Nat produit(Nat x) {
        if (x.estNul() || this.estNul())
            return this.creerZero();
        else
            return x.somme(this.predecesseur().produit(x));
    }

    default Nat modulo(Nat x) {
        if (this.estNul())
            return this.zero();
        else {
            Nat r = this.predecesseur().modulo(x);
            return this.creerSuccesseur(r).equals(x) ? this.creerZero() : this.creerSuccesseur(r);
        }
    }

    default  Nat div(Nat x) {
        if (this.estNul())
            return this.zero();
        else {
            Nat r = this.predecesseur().modulo(x);
            Nat q = this.predecesseur().div(x);
            return this.creerSuccesseur(r).equals(x) ? this.creerSuccesseur(q) : q;
        }
    }
    default boolean estEgal(Object o ){
        if(!(o instanceof Nat))
            return false;
        Nat x = (Nat)o;
        return this.val() == x.val();
    }
    default Nat un() {
        return this.creerSuccesseur(this.zero());
    }

    default Nat zero() {
        return this.creerZero();
    }

}
