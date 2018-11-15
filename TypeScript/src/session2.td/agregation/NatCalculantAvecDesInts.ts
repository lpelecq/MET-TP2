import {NatDeleguantEtat} from "./NatDeleguantEtat";
import {EtatNaturelPur, EtatNaturelPur_default} from "./EtatNaturelPur";
import {Nat} from "./Nat";
import {FabriqueNaturels} from "../../session1.td/FabriqueNaturels";
import {IntPositif} from "./IntPositif";

export class NatCalculantAvecDesInts extends NatDeleguantEtat {

    public static  FAB : FabriqueNaturels<Nat>  = new NatCalculantAvecDesInts(new IntPositif(1)) ;

    public constructor(etat : EtatNaturelPur) {
        super(etat);
    }

    public creerNatAvecEtat(e : EtatNaturelPur) : Nat{
        return new NatCalculantAvecDesInts(e);
    }

    public somme(x : Nat) : Nat{
        return this.creerNatAvecValeur(this.val() + x.val());
    }

    public un() : Nat{
        return this.creerNatAvecValeur(1);
    }

    public produit(x : Nat) : Nat{
        return this.creerNatAvecValeur(this.val() * x.val());
    }

    public modulo(x : Nat) : Nat{
        return this.creerNatAvecValeur(this.val()%x.val());
    }

    public div(x : Nat) : Nat{
        return this.creerNatAvecValeur(this.val()/x.val());
    }

    public zero() : Nat{
        return this.creerZero();
    }

    public toString() : string{
        return ""+this.etat();
    }

    public equals(obj : Nat) : boolean{
        return this.val() == obj.val();
    }
}