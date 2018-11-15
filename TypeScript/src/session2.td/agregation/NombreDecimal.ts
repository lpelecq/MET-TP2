import {EtatNaturelPur} from "./EtatNaturelPur";
import {Nat} from "../../session1.td/Nat";

export class NombreDecimal implements EtatNaturelPur {

    private _chiffres : string;

    public NombreDecimal(chiffres: string) {
        this._chiffres = chiffres;
    }

    public creerNatAvecValeur(val: number) : EtatNaturelPur{
        return this.creerNatAvecRepresentation(String(val));
    }

    public creerZero() : EtatNaturelPur{
        return this.creerNatAvecValeur(0);
    }

    public creerSuccesseur(e : EtatNaturelPur) : EtatNaturelPur{
        return this.creerNatAvecValeur(e.val());
    }

    public creerNatAvecRepresentation(s: string) : EtatNaturelPur{
        return this.creerNatAvecValeur(+s);
    }

    public val() : number{
        return +this._chiffres;
    }

    public estNul() : boolean{
        for(let i : number = 0; i < this.taille(); i++){
            if(this.chiffre(i) != 0){
                return false;
            }
        }
        return true;
    }

    public predecesseur() : EtatNaturelPur {
        if(this.estNul()){
            throw new Error();
        }
        let t : number = this.taille();
        let rep : string = "";
        let retenue : number = -1;
        for(let i : number = 0; i < t; i++){
            let chiffre : number = this.chiffre(i) + retenue;
            if(chiffre == -1){
                chiffre = 9;
                retenue = -1;
            }else{
                retenue = 0;
            }
            rep += +chiffre;
        }
        return this.creerNatAvecRepresentation(rep.split('').reverse().join(''));
    }

    public chiffre(i : number) : number {
        if(i < this.taille())
            return +(this._chiffres.charAt(this._chiffres.length -1 -i));
        return 0;
    }

    public taille() : number{
        return this._chiffres.length;
    }
}
