package session2.td.agregation;

import session1.td.FabriqueNaturels;

public class NatCalculantAvecDesNombresDecimaux extends NatDeleguantEtat {

    public static final FabriqueNaturels<Nat> FAB = new NatCalculantAvecDesNombresDecimaux(new ZeroInductif());

    public NatCalculantAvecDesNombresDecimaux(EtatNaturelPur etat) {
        super(etat);
    }

    @Override
    public Nat creerNatAvecEtat(EtatNaturelPur e) {
        return new NatCalculantAvecDesNombresDecimaux(e);
    }

    @Override
    public Nat modulo(Nat x) {
        if(x.equals(this.creerNatAvecRepresentation("10"))){
            return this.creerNatAvecValeur(this.chiffre(0));
        }
        Nat courant = zero();
        Nat r = zero();
        while(!courant.equals(this)){
            r = this.creerSuccesseur(r);
            if(r.equals(x)){
                r = zero();
            }
            courant = this.creerSuccesseur(courant);
        }
        return r;
    }

    @Override
    public Nat div(Nat x) {
        if(x.equals(this.creerNatAvecValeur(10))){
            if(this.taille() == 1)
                return this.zero();
            return this.creerNatAvecRepresentation(this.toString().substring(0, this.taille() - 1));
        }
        Nat courant = zero();
        Nat q = zero();
        Nat r = zero();
        while(!courant.equals(this)){
            r = this.creerSuccesseur(r);
            if(r.equals(x)){
                r = zero();
                q = this.creerSuccesseur(q);
            }
            courant = this.creerSuccesseur(courant);
        }
        return q;
    }

    @Override
    public Nat somme(Nat x) {
        int t = this.taille() < x.taille() ? x.taille() : this.taille();
        StringBuilder rep = new StringBuilder();
        int retenue = 0;
        for(int i = 0; i < t; i++){
            int chiffre = this.chiffre(i) + x.chiffre(i) + retenue;
            if(chiffre > 9){
                chiffre = chiffre - 10;
                retenue = 1;
            }else{
                retenue = 0;
            }
            rep.append(Integer.toString(chiffre));
        }
        rep = retenue == 0 ? rep : rep.append(1);
        return this.creerNatAvecRepresentation(rep.reverse().toString());
    }

    @Override
    public Nat produit(Nat x) {
        if(x.equals(this.creerNatAvecRepresentation("10"))){
            return this.creerNatAvecRepresentation(this.toString() + "0");
        }
        Nat res = zero();
        Nat index = zero();
        while(!index.equals(x)){
            res = res.somme(this);
            index = this.creerSuccesseur(index);
        }
        return res;
    }

    @Override
    public Nat zero() {
        return this.creerZero();
    }

    @Override
    public Nat un() {
        return this.creerNatAvecRepresentation("1");
    }
    @Override
    public boolean equals(Object o) {
        if(!(o instanceof Nat)) return false;
        Nat n = (Nat)o;
        return this.toString().equals(n.toString());
    }

    @Override
    public String toString() {
        return ""+ this.etat();
    }
}
