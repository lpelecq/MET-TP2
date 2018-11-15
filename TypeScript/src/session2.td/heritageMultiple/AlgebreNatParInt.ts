import {Nat} from "../../session1.td/Nat";

export interface AlgebreNatParInt extends Nat {
    somme(n : Nat) : Nat;
    zero() : Nat;
    produit(n : Nat) : Nat;
    un() : Nat;
    modulo(n : Nat) : Nat;
    div(n : Nat) : Nat;
    equals(o : Nat) : boolean;
    toString() : string;
}

export abstract class AlgebreNatParInt_default implements AlgebreNatParInt {
    div(n: Nat): Nat {
        return this.creerNatAvecValeur(this.val() / n.val());
    }

    equals(o: Nat): boolean {
        return this.val() == o.val();
    }

    modulo(n: Nat): Nat {
        return this.creerNatAvecValeur(this.val() % n.val());
    }

    produit(n: Nat): Nat {
        return this.creerNatAvecValeur(this.val() * n.val());
    }

    somme(n: Nat): Nat {
        return this.creerNatAvecValeur(this.val() + n.val());
    }

    un(): Nat {
        return this.creerNatAvecValeur(1);
    }

    zero(): Nat {
        return this.creerNatAvecValeur(0);
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
