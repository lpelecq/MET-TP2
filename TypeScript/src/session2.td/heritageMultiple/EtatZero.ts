import {Nat} from "../../session1.td/Nat";
import {NatInductif} from "../heritageAscendant/NatInductif";

export abstract class EtatZero extends NatInductif {

    public estNul() : boolean {
        return true;
    }

    public predecesseur() : Nat {
         throw new Error("Pas de prédécesseur.");
    }

    public chiffre(i : number) : number {
        return 0;
    }

    public taille() : number {
        return 0;
    }

    public val() : number {
        return 0;
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
