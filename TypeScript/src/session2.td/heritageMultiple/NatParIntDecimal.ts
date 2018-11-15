import {Nat} from "../../session1.td/Nat";
import {FabriqueNaturels} from "../../session1.td/FabriqueNaturels";
import {IntPositif} from "./IntPositif";
import {AlgebreNatDecimal, AlgebreNatDecimal_default} from "./AlgebreNatDecimal";
import {heriterInterfacesConcretes} from "./heritageInterfacesconcretes";

export class NatParIntDecimal extends IntPositif implements AlgebreNatDecimal  {

    public static FAB : FabriqueNaturels<Nat> = new NatParIntDecimal(0) ;

    public constructor(val : number) {
        super(val);
    }

    public creerNatAvecValeur(val : number) : Nat {
        return new NatParIntDecimal(val);
    }

    public toString() : string {
        return this.val().toString();
    }
    public equals(x : Nat) : boolean {
        return this.val() == x.val();
    }

    div(x: Nat): Nat {
        return undefined;
    }

    modulo(x: Nat): Nat {
        return undefined;
    }

    produit(x: Nat): Nat {
        return undefined;
    }

    somme(x: Nat): Nat {
        return undefined;
    }

    un(): Nat {
        return undefined;
    }

    zero(): Nat {
        return undefined;
    }

}

heriterInterfacesConcretes(NatParIntDecimal, [IntPositif, AlgebreNatDecimal_default]);