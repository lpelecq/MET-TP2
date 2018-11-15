import {Nat} from "../../session1.td/Nat";
import {AlgebreNatRecursifSuccesseur} from "./AlgebreNatRecursifSuccesseur";
import {AlgebreNatRecursifZero} from "./AlgebreNatRecursifZero";

export interface AlgebreNatRecursif extends AlgebreNatRecursifSuccesseur, AlgebreNatRecursifZero{
    somme(n : Nat) : Nat;
    zero() : Nat;
    produit(n : Nat) : Nat;
    un() : Nat;
    modulo(n : Nat) : Nat;
    div(n : Nat) : Nat;
    equals(o : Nat) : boolean;
    toString() : string;
}

export abstract class AlgebreNatRecursif_default implements AlgebreNatRecursif {
    div(n: Nat): Nat {
        let r : Nat = this.predecesseur().modulo(n);
        let q : Nat = this.predecesseur().div(n);
        return this.creerSuccesseur(r).equals(n) ? this.creerSuccesseur(q) : q;
    }

    equals(o: Nat): boolean {
        return this.val() == o.val();
    }

    modulo(n: Nat): Nat {
        let r : Nat = this.predecesseur().modulo(n);
        return this.creerSuccesseur(r).equals(n) ? this.creerZero() : this.creerSuccesseur(r);
    }

    produit(n: Nat): Nat {
        if (n.estNul() || this.estNul())
            return this.creerZero();
        else
            return n.somme(this.predecesseur().produit(n));
    }

    somme(n: Nat): Nat {
        if (this.equals(this.zero())) {
            return n;
        }
        return this.creerSuccesseur(this.predecesseur().somme(n));
    }

    un(): Nat {
        return this.creerNatAvecRepresentation("1");
    }

    zero(): Nat {
        return this.creerNatAvecRepresentation("0");
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
