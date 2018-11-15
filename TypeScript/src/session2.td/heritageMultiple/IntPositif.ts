import {Nat} from "../../session1.td/Nat";

export abstract class IntPositif implements Nat {

    private _val : number;

    protected constructor(val : number) {
        this._val = val;
    }

    public estNul() : boolean {
        return this.val() == 0;
    }

    public predecesseur() : Nat {

        if(this.estNul()){
            return this.creerZero();
        }
        return this.creerNatAvecValeur(this.val() -1) ;
    }

    public chiffre(i : number) : number {
        /*if (i == 0) {
            return this.val()%10;
        } else {
            let v : number = this.val();
            for(let j : number = i ; j>0 ; j--)
            {
                v /= 10;
                j--;
            }
            return v;
        }*/
        return (i == 0) ? this.val()%10 : (this.creerNatAvecValeur(this.val()/10)).chiffre(i-1);
    }

    public taille() : number {
        return String(this.val()).length;
    }

    public val() : number {
        return this._val;
    }

    public creerZero() : Nat {
        return this.creerNatAvecValeur(0);
    }

    public creerSuccesseur(predecesseur : Nat) : Nat {
        return this.creerNatAvecValeur(predecesseur.val() + 1);
    }

    abstract creerNatAvecValeur(val : number) : Nat;

    public creerNatAvecRepresentation(repDecimale : string) : Nat {
        return this.creerNatAvecValeur(+repDecimale);
    }

    abstract div(x: Nat): Nat;

    abstract equals(x: Nat): boolean;

    abstract modulo(x: Nat): Nat;

    abstract produit(x: Nat): Nat;

    abstract somme(x: Nat): Nat;

    abstract un(): Nat;

    abstract zero(): Nat;
}
