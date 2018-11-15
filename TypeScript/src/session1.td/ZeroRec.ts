import { Nat } from "./Nat";
import { NatParInt } from "./NatParInt";
import { FabriqueNaturels } from "./FabriqueNaturels";
import { Zero } from "./Zero";
import { SuccRec } from "./SuccRec";

export class ZeroRec extends Zero implements Nat {

    public static FAB:FabriqueNaturels<Nat> = new ZeroRec();

	public creerSuccesseur(predecesseur : Nat) : Nat {
		return new SuccRec(predecesseur);
	}

	// Remplacement du code copié-collé par du code récursif

	public zero() : Nat {
		return this.creerZero();
	}

	public somme(x : Nat) : Nat {
		return x;
	}

	public un() : Nat {
		return this.creerSuccesseur(this.creerZero());
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

	public toString() : string {
		return "0";
	}

    public equals(x : Nat) : boolean {
        return this.val() == x.val();
    }

}
