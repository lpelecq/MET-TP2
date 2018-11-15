import {Nat} from "./Nat";
import {EtatNaturelPur} from "./EtatNaturelPur";

export abstract class NatDeleguantEtat implements Nat{

    protected _etat : EtatNaturelPur;

    public constructor(etat : EtatNaturelPur) {
        this._etat = etat;
    }

    public etat() : EtatNaturelPur{
        return this._etat;
    }

    public val() : number{
        return this._etat.val();
    }

    public estNul() : boolean{
        return this._etat.val() == 0;
    }

    public predecesseur() : Nat{
        return this.creerNatAvecEtat(this.etat().predecesseur());
    }

    public chiffre(n : number) : number{
        return this._etat.chiffre(n);
    }

    public taille() : number{
        return this._etat.taille();
    }

    public creerNatAvecValeur(n : number) : Nat{
        return this.creerNatAvecEtat(this._etat.creerNatAvecValeur(n));
    }

    public creerZero() : Nat{
        return this.creerNatAvecEtat(this._etat.creerZero());
    }

    public creerSuccesseur(predecesseur : Nat) : Nat{
        return this.creerNatAvecValeur(predecesseur.val() + 1);
    }

    public creerNatAvecRepresentation(s : string) : Nat{
        return this.creerNatAvecEtat(this._etat.creerNatAvecRepresentation(s));
    }

    abstract creerNatAvecEtat(e: EtatNaturelPur): Nat;
    abstract div(x: Nat): Nat;
    abstract modulo(x: Nat): Nat;
    abstract produit(x: Nat): Nat;
    abstract somme(x: Nat): Nat;
    abstract un(): Nat;
    abstract zero(): Nat;
    abstract equals(x: Nat): boolean;
}
