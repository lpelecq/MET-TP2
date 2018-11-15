import {Nat} from "../../session1.td/Nat";

export abstract class NatInductif implements Nat {

    creerNatAvecValeur(val: number): Nat {
        if (val == 0)
            return this.creerZero();
        return this.creerSuccesseur(this.creerNatAvecValeur(val - 1));
    }

    creerNatAvecRepresentation(repDecimale: string): Nat {
        return this.creerNatAvecValeur(+repDecimale);
    }

    abstract chiffre(i: number): number;

    abstract creerSuccesseur(predecesseur: Nat): Nat;

    abstract creerZero(): Nat;

    abstract div(x: Nat): Nat;

    abstract equals(x: Nat): boolean;

    abstract estNul(): boolean;

    abstract modulo(x: Nat): Nat;

    abstract predecesseur(): Nat;

    abstract produit(x: Nat): Nat;

    abstract somme(x: Nat): Nat;

    abstract taille(): number;

    abstract un(): Nat;

    abstract val(): number;

    abstract zero(): Nat;
}
