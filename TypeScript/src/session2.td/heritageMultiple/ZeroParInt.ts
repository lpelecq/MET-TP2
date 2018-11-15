import {Nat} from "../../session1.td/Nat";
import {FabriqueNaturels} from "../../session1.td/FabriqueNaturels";
import {EtatZero} from "./EtatZero";
import {AlgebreNatParInt, AlgebreNatParInt_default} from "./AlgebreNatParInt";
import {SuccDecimal} from "./SuccDecimal";
import {heriterInterfacesConcretes} from "./heritageInterfacesconcretes";

export class ZeroParInt extends EtatZero implements AlgebreNatParInt {

    public static FAB : FabriqueNaturels<Nat> = new ZeroParInt();

    public creerZero() : Nat {
        return new ZeroParInt();
    }

    public creerSuccesseur(predecesseur) {
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

heriterInterfacesConcretes(ZeroParInt, [EtatZero, AlgebreNatParInt_default]);