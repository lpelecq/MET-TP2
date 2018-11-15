import {Nat} from "../../session1.td/Nat";
import {FabriqueNaturels} from "../../session1.td/FabriqueNaturels";
import {EtatZero} from "./EtatZero";
import {AlgebreNatRecursifZero, AlgebreNatRecursifZero_default} from "./AlgebreNatRecursifZero";
import {SuccRecursif} from "./SuccRecursif";
import {heriterInterfacesConcretes} from "./heritageInterfacesconcretes";

export class ZeroRecursif extends EtatZero implements AlgebreNatRecursifZero {

    public static FAB : FabriqueNaturels<Nat> = new ZeroRecursif() ;

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

heriterInterfacesConcretes(ZeroRecursif, [EtatZero, AlgebreNatRecursifZero_default]);