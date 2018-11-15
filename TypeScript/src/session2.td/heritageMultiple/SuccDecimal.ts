import {Nat} from "../../session1.td/Nat";
import {FabriqueNaturels} from "../../session1.td/FabriqueNaturels";
import {EtatSucc} from "./EtatSucc";
import {AlgebreNatDecimal, AlgebreNatDecimal_default} from "./AlgebreNatDecimal";
import {ZeroDecimal} from "./ZeroDecimal";
import {heriterInterfacesConcretes} from "./heritageInterfacesconcretes";

export class SuccDecimal extends EtatSucc implements AlgebreNatDecimal {
    public static FAB : FabriqueNaturels<Nat> = new SuccDecimal(new ZeroDecimal());

    public constructor(predecesseur : Nat) {
        super(predecesseur);
    }

    public creerZero() : Nat {
        return new ZeroDecimal();
    }

    public creerSuccesseur(predecesseur : Nat) : Nat {
        return new SuccDecimal(predecesseur);
    }

    public toString() : string {
        return String(this.val());
    }

    public equals(obj : Nat) : boolean {
        return this.val() == obj.val();
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


heriterInterfacesConcretes(SuccDecimal, [EtatSucc, AlgebreNatDecimal_default]);