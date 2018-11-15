import {Nat} from "../../session1.td/Nat";
import {FabriqueNaturels} from "../../session1.td/FabriqueNaturels";
import {EtatSucc} from "./EtatSucc";
import {AlgebreNatParInt, AlgebreNatParInt_default} from "./AlgebreNatParInt";
import {ZeroParInt} from "./ZeroParInt";
import {heriterInterfacesConcretes} from "./heritageInterfacesconcretes";

export class SuccParInt extends EtatSucc implements AlgebreNatParInt {

    public static FAB : FabriqueNaturels<Nat> = new SuccParInt(new ZeroParInt()) ;

    public constructor(predecesseur : Nat) {
        super(predecesseur);
    }

    public creerZero() : Nat {
        return new ZeroParInt();
    }

    public creerSuccesseur(predecesseur : Nat) : Nat {
        return new SuccParInt(predecesseur);
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


heriterInterfacesConcretes(SuccParInt, [EtatSucc, AlgebreNatParInt_default]);
