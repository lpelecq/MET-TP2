package session2.td.agregation;

import session1.td.FabriqueNaturels;

public class NatCalculantRecursivement extends NatDeleguantEtat {

    public static final FabriqueNaturels<Nat> FAB =new NatCalculantRecursivement(new ZeroInductif()) ;

    public NatCalculantRecursivement(EtatNaturelPur etat) {
        super(etat);
    }

    @Override
    public Nat creerNatAvecEtat(EtatNaturelPur e) {
        return new NatCalculantRecursivement(e);
    }


    @Override
    public Nat somme(Nat x) {
        if (this.equals(this.zero())) {
            return x;
        }
        return this.creerSuccesseur(this.predecesseur().somme(x));
    }
    @Override
    public  Nat produit(Nat x) {
        if (x.estNul() || this.estNul())
            return this.creerZero();
        else
            return x.somme(this.predecesseur().produit(x));
    }
    @Override
    public Nat modulo(Nat x) {
        if (this.estNul())
            return this.zero();
        else {
            Nat r = this.predecesseur().modulo(x);
            return this.creerSuccesseur(r).equals(x) ? this.creerZero() : this.creerSuccesseur(r);
        }
    }
    @Override
    public  Nat div(Nat x) {
        if (this.estNul())
            return this.zero();
        else {
            Nat r = this.predecesseur().modulo(x);
            Nat q = this.predecesseur().div(x);
            return this.creerSuccesseur(r).equals(x) ? this.creerSuccesseur(q) : q;
        }
    }

    @Override
    public Nat zero() {
        return this.creerZero();
    }

    @Override
    public Nat un() {
        return this.creerSuccesseur(this.creerZero());
    }

    @Override
    public String toString() {
        return ""+this.etat();
    }
    @Override
    public boolean equals(Object o) {
        if(!(o instanceof Nat)) return false;
        Nat n = (Nat)o;
        return this.toString().equals(n.toString());
    }
}
