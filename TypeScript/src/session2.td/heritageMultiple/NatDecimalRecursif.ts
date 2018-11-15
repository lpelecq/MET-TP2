import {Nat} from "../../session1.td/Nat";
import {FabriqueNaturels} from "../../session1.td/FabriqueNaturels";
import {NombreDecimal} from "./NombreDecimal";
import {AlgebreNatRecursif, AlgebreNatRecursif_default} from "./AlgebreNatRecursif";
import {heriterInterfacesConcretes} from "./heritageInterfacesconcretes";

export class NatDecimalRecursif  extends NombreDecimal implements AlgebreNatRecursif{

    public static FAB : FabriqueNaturels<Nat> = new NatDecimalRecursif("0");

    public constructor(chiffres : string) {
        super(chiffres);
    }

    private static nettoyer(s : string) : void{
        let debut : number = 0;
        let fin : number = 0;
        while((fin < s.length) && +(s.charAt(fin)) == 0){
            fin++;
        }
        s.replace(s.substring(debut, fin), "");
    }


    public toString() : string {
        return String(this.val());
    }

    public equals(x : Nat) : boolean {
        return this.toString() == x.toString();
    }

    public creerNatAvecRepresentation(repDecimalecimale : string) : Nat {
        let repMutable : string = repDecimalecimale;
        NatDecimalRecursif.nettoyer(repMutable);
        repDecimalecimale = repMutable;
        if(repDecimalecimale == ""){
            repDecimalecimale = "0";
        }
        let min : string = "0";
        let max : string = "9";
        for(let i : number = 0; i < repDecimalecimale.length; i++){
            let c : string = repDecimalecimale.charAt(i);
            if(c < min)	throw new Error();
            if(c > max) throw new Error();
        }
        return new NatDecimalRecursif(repDecimalecimale);
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

heriterInterfacesConcretes(NatDecimalRecursif, [NombreDecimal, AlgebreNatRecursif_default]);