import {FabriqueNaturels} from '../../session1.td/fabriqueNaturels';
import {NatDeleguantEtat} from "./NatDeleguantEtat";
import {Nat} from "./Nat";
import {ZeroInductif} from "./ZeroInductif";
import {EtatNaturelPur} from "./EtatNaturelPur";

export class NatCalculantRecursivement extends NatDeleguantEtat {

    public static  FAB : FabriqueNaturels<Nat> = new NatCalculantRecursivement(new ZeroInductif()) ;

    public constructor(etat : EtatNaturelPur) {
        super(etat);
    }

    public creerNatAvecEtat(e : EtatNaturelPur) : Nat{
        return new NatCalculantRecursivement(e);
    }

    public somme(x : Nat) : Nat {
        if (this.equals(this.zero())) {
            return x;
        }
        return this.creerSuccesseur(this.predecesseur().somme(x));
    }

    public produit(x : Nat)  : Nat{
        if (x.estNul() || this.estNul())
            return this.creerZero();
        else
            return x.somme(this.predecesseur().produit(x));
    }

    public modulo(x : Nat) : Nat {
        if (this.estNul())
            return this.zero();
        else {
            let r : Nat = this.predecesseur().modulo(x);
            return this.creerSuccesseur(r).equals(x) ? this.creerZero() : this.creerSuccesseur(r);
        }
    }

    public div(x : Nat) : Nat {
        if (this.estNul())
            return this.zero();
        else {
            let r : Nat = this.predecesseur().modulo(x);
            let q : Nat = this.predecesseur().div(x);
            return this.creerSuccesseur(r).equals(x) ? this.creerSuccesseur(q) : q;
        }
    }

    public zero() : Nat{
        return this.creerZero();
    }

    public un() : Nat{
        return this.creerSuccesseur(this.creerZero());
    }

    public toString() : string{
        return ""+this.etat();
    }

    public equals(o : Nat) : boolean{
        return this.val() == o.val();
    }
}
