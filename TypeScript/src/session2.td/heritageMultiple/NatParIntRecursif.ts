import {Nat} from "../../session1.td/Nat";
import {FabriqueNaturels} from "../../session1.td/FabriqueNaturels";
import {IntPositif} from "./IntPositif";
import {AlgebreNatRecursif, AlgebreNatRecursif_default} from "./AlgebreNatRecursif";
import {heriterInterfacesConcretes} from "./heritageInterfacesconcretes";


export class NatParIntRecursif extends IntPositif implements AlgebreNatRecursif {

    public static FAB : FabriqueNaturels<Nat> = new NatParIntRecursif(0);

    public constructor(val : number) {
        super(val);
    }

    public creerNatAvecValeur(val : number) : Nat {
        return new NatParIntRecursif(val);
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

heriterInterfacesConcretes(NatParIntRecursif, [IntPositif, AlgebreNatRecursif_default]);