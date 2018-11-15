import { Nat } from "./Nat";
import { FabriqueNaturels } from "./FabriqueNaturels";

export class NatParInt implements Nat {
    private _val : number;
    public static FAB : FabriqueNaturels<Nat> = new NatParInt(0);

	public constructor(val : number){
		if (val < 0)
			throw new Error("Pas de Nat à patir d'un int négatif.");
		this._val = val;
	}

	public creerNatAvecValeur(val : number) : Nat {
		return new NatParInt(val);
	}

	public creerZero() : Nat {
		return this.creerNatAvecValeur(0);
	}

	public creerSuccesseur(predecesseur : Nat) {
		return this.creerNatAvecValeur(predecesseur.val() + 1);
	}

	public creerNatAvecRepresentation(repDecimale : string) : Nat {
		return this.creerNatAvecValeur(+repDecimale);
	}

	public val() : number {
		return this._val;
	}

	public estNul() : boolean {
	    return this.val() == 0;
	}

	public predecesseur() : Nat {
		if(this.estNul())
			throw new Error("Pas de prédécesseur.");
		return this.creerNatAvecValeur(this.val() - 1);
	}

	public chiffre(i : number) : number {
		return (i == 0) ? this.val()%10 : (new NatParInt(this.val()/10)).chiffre(i-1);
	}

	public taille() : number {
		return (this.val() < 10) ? 1 : 1 + (new NatParInt(this.val() / 10)).taille();
	}

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