import {Nat} from "../../session1.td/Nat";
import {FabriqueNaturels} from "../../session1.td/FabriqueNaturels";
import {EtatSucc} from "./EtatSucc";
import {AlgebreNatRecursifSuccesseur, AlgebreNatRecursifSuccesseur_default} from "./AlgebreNatRecursifSuccesseur";
import {ZeroRecursif} from "./ZeroRecursif";
import {heriterInterfacesConcretes} from "./heritageInterfacesconcretes";

export class SuccRecursif extends EtatSucc implements AlgebreNatRecursifSuccesseur {

    public static FAB : FabriqueNaturels<Nat> = new SuccRecursif(new ZeroRecursif());

    public constructor(predecesseur : Nat) {
        super(predecesseur);
    }

    public creerZero() : Nat {
        return new ZeroRecursif();
    }

    public creerSuccesseur(predecesseur : Nat) : Nat {
        return new SuccRecursif(predecesseur);
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

heriterInterfacesConcretes(SuccRecursif, [EtatSucc, AlgebreNatRecursifSuccesseur_default]);