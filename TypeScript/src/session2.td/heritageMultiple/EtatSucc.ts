import {Nat} from "../../session1.td/Nat";
import {NatInductif} from "../heritageAscendant/NatInductif";

export abstract class EtatSucc extends NatInductif {
    private _predecesseur : Nat;

    protected constructor (predecesseur : Nat) {
        super();
        this._predecesseur = predecesseur;
    }

    public estNul() : boolean {
        return false;
    }

    public predecesseur() : Nat {
        return this._predecesseur;
    }

    public chiffre(i : number) : number {
        if(i < this.taille()){
            return +(String(this.val()).charAt(this.taille() - 1 - i));
        }
        return 0;
    }


    public val() : number {
        return 1 + this.predecesseur().val();
    }

    public taille() : number {
        return String(this.val()).length;
    }

    abstract creerSuccesseur(predecesseur: Nat): Nat;

    abstract creerZero(): Nat;

    abstract div(x: Nat): Nat;

    abstract equals(x: Nat): boolean;

    abstract modulo(x: Nat): Nat;

    abstract produit(x: Nat): Nat;

    abstract somme(x: Nat): Nat;

    abstract un(): Nat;

    abstract zero(): Nat;
}
