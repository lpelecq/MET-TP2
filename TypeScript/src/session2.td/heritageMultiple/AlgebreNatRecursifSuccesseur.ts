import {Nat} from "../../session1.td/Nat";

export interface AlgebreNatRecursifSuccesseur extends Nat {
    somme(n : Nat) : Nat;
    zero() : Nat;
    produit(n : Nat) : Nat;
    un() : Nat;
    modulo(n : Nat) : Nat;
    div(n : Nat) : Nat;
    equals(o : Nat) : boolean;
    toString() : string;
}

export abstract class AlgebreNatRecursifSuccesseur_default implements AlgebreNatRecursifSuccesseur {

    public zero() : Nat {
        return this.creerNatAvecValeur(0);
    }

    public un() : Nat {
        return this.creerNatAvecValeur(1);
    }

    public somme(x : Nat) : Nat {
        if (this.equals(this.zero())) {
            return x;
        }
        return this.creerSuccesseur(this.predecesseur().somme(x));
    }

    public produit(x : Nat)  : Nat{
        if (x.estNul() || this.estNul())
            return this.creerZero();
        else
            return x.somme(this.predecesseur().produit(x));
    }

    public modulo(x : Nat) : Nat {
        if (this.estNul())
            return this.zero();
        else {
            let r : Nat = this.predecesseur().modulo(x);
            return this.creerSuccesseur(r).equals(x) ? this.creerZero() : this.creerSuccesseur(r);
        }
    }

    public div(x : Nat) : Nat {
        if (this.estNul())
            return this.zero();
        else {
            let r : Nat = this.predecesseur().modulo(x);
            let q : Nat = this.predecesseur().div(x);
            return this.creerSuccesseur(r).equals(x) ? this.creerSuccesseur(q) : q;
        }
    }

    public toString() : string {
        return this.val().toString();
    }

    public equals(x : Nat) : boolean {
        return this.val() == x.val();
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