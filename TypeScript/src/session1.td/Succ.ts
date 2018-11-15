import { Nat } from "./Nat";
import { NatParInt } from "./NatParInt";
import { FabriqueNaturels } from "./FabriqueNaturels";
import { Zero } from "./Zero";

export class Succ implements Nat {
    public static FAB:FabriqueNaturels<Nat> = new NatParInt(0);

	private _predecesseur : Nat;

	public constructor(predecesseur : Nat) {
		this._predecesseur = predecesseur;
	}

	public val() : number {
		return 1 + this.predecesseur().val();
	}

	public estNul() : boolean {
		return false;
	}

	public predecesseur() : Nat {
		return this._predecesseur;
	}

	// Précondition : i >=0
	public chiffre(i : number) : number {
		if(i < this.taille()){
			return +(this.val().toString().charAt(this.taille() - 1 - i));
		}
		return 0;
	}

	public taille() : number {
		return this.val().toString().length;
	}

	public creerNatAvecValeur(val : number) : Nat {
		if (val == 0)
			return this.creerZero();
		return this.creerSuccesseur(this.creerNatAvecValeur(val - 1));
	}

	public creerZero() : Nat {
		return new Zero();
	}

	public creerSuccesseur(predecesseur : Nat) : Nat {
		return new Succ(predecesseur);
	}

	public creerNatAvecRepresentation(repDecimale : string) : Nat {
		return this.creerNatAvecValeur(+repDecimale);
	}

	// Code copié-collé

	public zero() : Nat {
		return this.creerNatAvecValeur(0);
	}

	public somme(x : Nat) : Nat {
		return this.creerNatAvecValeur(this.val() + x.val());
	}

	public un() : Nat {
		return this.creerNatAvecValeur(1);
	}

	public produit(x : Nat) : Nat {
		return this.creerNatAvecValeur(this.val() * x.val());
	}

	public modulo(x : Nat) : Nat {
		return this.creerNatAvecValeur(this.val() % x.val());
	}

	public div(x : Nat) : Nat {
		return this.creerNatAvecValeur(this.val() / x.val());
	}

	public toString() : string {
		return String(this.val());
	}

    public equals(x : Nat) : boolean {
        return this.val() == x.val();
    }

}
