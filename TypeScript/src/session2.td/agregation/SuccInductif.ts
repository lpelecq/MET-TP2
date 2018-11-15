import {NaturelInductif} from "./NaturelInductif";
import {EtatNaturelPur} from "./EtatNaturelPur";
import {ZeroInductif} from "./ZeroInductif";
import {Nat} from "./Nat";

export class SuccInductif implements NaturelInductif {

    protected _predecesseur : EtatNaturelPur;

    public constructor(predecesseur : EtatNaturelPur) {
        this._predecesseur = predecesseur;
    }

    public creerZero() : EtatNaturelPur{
        return new ZeroInductif();
    }

    public creerSuccesseur(e : EtatNaturelPur) : EtatNaturelPur{
        return new SuccInductif(e);
    }

    public creerNatAvecValeur(n : number) : EtatNaturelPur{
        if (n == 0){
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(n-1));
    }

    public val() : number{
        return this._predecesseur.val() + 1;
    }

    public estNul() : boolean{
        return this.val() == 0;
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

    public toString() : string{
        return ""+this.val();
    }
    public equals(o : Nat) : boolean{

        return this.val() == o.val();
    }

    creerNatAvecRepresentation(repDecimale: string): EtatNaturelPur {
        return this.creerNatAvecValeur(+repDecimale);
    }
}
