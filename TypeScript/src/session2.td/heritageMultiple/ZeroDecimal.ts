import {Nat} from "../../session1.td/Nat";
import {FabriqueNaturels} from "../../session1.td/FabriqueNaturels";
import {EtatZero} from "./EtatZero";
import {AlgebreNatDecimal, AlgebreNatDecimal_default} from "./AlgebreNatDecimal";
import {SuccDecimal} from "./SuccDecimal";
import {heriterInterfacesConcretes} from "./heritageInterfacesconcretes";

export class ZeroDecimal extends EtatZero implements AlgebreNatDecimal {

    public static FAB : FabriqueNaturels<Nat> = new ZeroDecimal();

    public creerZero() : Nat {
        return this;
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

heriterInterfacesConcretes(ZeroDecimal, [EtatZero, AlgebreNatDecimal_default]);