import { FabriqueNaturels } from "./FabriqueNaturels";
import { Succ } from "./Succ";
import { Nat } from "./Nat";
import { Zero } from "./Zero";
import { ZeroRec } from "./ZeroRec";
import { NatParInt } from "./NatParInt";

export class SuccRec extends Succ implements Nat {

    public static FAB:FabriqueNaturels<Nat> = new NatParInt(0);
	
	public constructor(predecesseur : Nat) {
		super(predecesseur);
	}

	public creerZero() : Nat {
		return new ZeroRec();
	}

	public creerSuccesseur(predecesseur : Nat) : Nat {
		return new SuccRec(predecesseur);
	}
	
	// Remplacement du code copié-collé par du code récursif

	public somme(x : Nat) : Nat {
		return this.creerSuccesseur(this.predecesseur().somme(x));
	}

	public produit(x : Nat) : Nat {
		return x.somme(this.predecesseur().produit(x));
	}

	public modulo(x : Nat) : Nat {
		let r : Nat = this.predecesseur().modulo(x);
		return this.creerSuccesseur(r).val() == x.val() ? this.creerZero() : this.creerSuccesseur(r);
	}

	public div(x : Nat) : Nat {
		let r : Nat = this.predecesseur().modulo(x);
		let q : Nat = this.predecesseur().div(x);
		return this.creerSuccesseur(r).val() == x.val() ? this.creerSuccesseur(q) : q;
	}

	public toString() : string {
		return "S^" + this.val() + "(0)";
	}

    public equals(x : Nat) : boolean {
        return this.val() == x.val();
    }
}
