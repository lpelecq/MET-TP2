import {Nat} from "../../session1.td/Nat";

export interface AlgebreNatRecursifZero {
    somme(n : Nat) : Nat;
    zero() : Nat;
    produit(n : Nat) : Nat;
    un() : Nat;
    modulo(n : Nat) : Nat;
    div(n : Nat) : Nat;
    equals(o : Nat) : boolean;
    toString() : string;
}

export abstract class AlgebreNatRecursifZero_default implements AlgebreNatRecursifZero {

    public zero() : Nat {
        return this.creerZero();
    }

    public un() : Nat {
        return this.creerSuccesseur(this.creerZero());
    }

    public somme(x : Nat) : Nat {
        return x;
    }

    public produit(x : Nat) : Nat {
        return this.creerZero();
    }

    public modulo(x : Nat) : Nat {
        return this.creerZero();
    }

    public div(x : Nat) : Nat {
        return this.creerZero();
    }

    equals(o: Nat): boolean {
        return this.val() == o.val();
    }

    abstract chiffre(i: number): number;

    abstract creerNatAvecRepresentation(repDecimale: String): Nat;

    abstract creerNatAvecValeur(val: number): Nat;

    abstract creerSuccesseur(predecesseur: Nat): Nat;

    abstract creerZero(): Nat;

    abstract estNul(): boolean;

    abstract predecesseur(): Nat;

    abstract taille(): number;

    abstract val(): number;

}