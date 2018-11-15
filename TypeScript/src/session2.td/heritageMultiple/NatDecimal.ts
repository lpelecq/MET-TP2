import {Nat} from "../../session1.td/Nat";
import {FabriqueNaturels} from "../../session1.td/FabriqueNaturels";
import {NombreDecimal} from "./NombreDecimal";
import {AlgebreNatDecimal, AlgebreNatDecimal_default} from "./AlgebreNatDecimal";
import {heriterInterfacesConcretes} from "./heritageInterfacesConcretes";

export class NatDecimal extends NombreDecimal implements AlgebreNatDecimal {

    public static FAB : FabriqueNaturels<Nat> = new NatDecimal("0");

    public constructor(rep : string) {
        super(rep);
    }


    private static nettoyer(s : string) : void{
        let debut : number = 0;
        let fin : number = 0;
        while((fin < s.length) && +(s.charAt(fin)) == 0){
            fin++;
        }
        s.replace(s.substring(debut, fin), "");
    }

    public creerNatAvecRepresentation(repDecimalecimale : string) : Nat {
        let repMutable : string = repDecimalecimale;
        NatDecimal.nettoyer(repMutable);
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
        return new NatDecimal(repDecimalecimale);
    }

    public equals(x : Nat) : boolean {
        return this.val() == x.val();
    }

    public toString() : string {
        return this._chiffres;
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

heriterInterfacesConcretes(NatDecimal, [NombreDecimal, AlgebreNatDecimal_default]);