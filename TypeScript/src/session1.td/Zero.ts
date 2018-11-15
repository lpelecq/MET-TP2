import { Nat } from "./Nat";
import { NatParInt } from "./NatParInt";
import { FabriqueNaturels } from "./FabriqueNaturels";
import { Succ } from "./Succ";

export class Zero implements Nat {
    public static FAB:FabriqueNaturels<Nat> = new Zero();

    public val() : number {
		return 0;
	}

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
		return 1;
	}

	public creerNatAvecRepresentation(repDecimale : string) : Nat {
		return this.creerNatAvecValeur(+repDecimale);
	}

	public creerNatAvecValeur(val : number) : Nat {
		if(val == 0)
			return this.creerZero();
		return this.creerSuccesseur(this.creerNatAvecValeur(val -1));
	}

	public creerZero() : Nat {
		return this;
	}

	public creerSuccesseur(predecesseur : Nat) : Nat {
		return new Succ(predecesseur);
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
		return this.creerNatAvecValeur(this.val()%x.val());
	}

	public div(x : Nat) : Nat {
		return this.creerNatAvecValeur(this.val()/x.val());
	}

	public toString() : string {
		return this.val().toString();
	}

    public equals(x : Nat) : boolean {
        return this.val() == x.val();
    }

}
