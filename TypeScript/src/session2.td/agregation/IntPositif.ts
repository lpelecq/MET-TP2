import {EtatNaturelPur} from "./EtatNaturelPur";
import {ZeroInductif} from "./ZeroInductif";
import {SuccInductif} from "./SuccInductif";


export class IntPositif implements EtatNaturelPur {

    private _val : number;

    public constructor(val : number) {
        this._val = val;
    }

    public creerNatAvecValeur(val : number) : EtatNaturelPur {
        return new IntPositif(val);
    }

    public val() : number{
        return this._val;
    }

    public estNul() : boolean{
        return this._val == 0;
    }

    public predecesseur() : EtatNaturelPur{
        if(this.estNul())
            throw new Error("Pas de predecesseur.");
        return this.creerNatAvecValeur(this.val() - 1);
    }

    public chiffre(i : number) : number{
        return (i == 0) ? this.val()%10 : (this.creerNatAvecValeur(this.val()/10)).chiffre(i-1);
    }

    public taille() : number{
        return (this.val() < 10) ? 1 : 1 + (this.creerNatAvecValeur(this.val() / 10)).taille();
    }

    public toString() : string {
        return ""+this._val;
    }

    creerNatAvecRepresentation(repDecimale: String): EtatNaturelPur{
        return this.creerNatAvecValeur(+repDecimale);
    }

    creerSuccesseur(predecesseur: EtatNaturelPur): EtatNaturelPur {
        return new SuccInductif(predecesseur);
    }

    creerZero(): EtatNaturelPur {
        return new ZeroInductif();
    }
}
