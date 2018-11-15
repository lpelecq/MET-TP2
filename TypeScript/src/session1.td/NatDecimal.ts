import { Nat } from "./Nat";
import { NatParInt } from "./NatParInt";
import { FabriqueNaturels } from "./FabriqueNaturels";
import { Succ } from "./Succ";

export class NatDecimal implements Nat {
    private _chiffres : string; // au moins un chiffre - aucun 0 superflu en tête

	public static FAB : FabriqueNaturels<Nat> = new NatDecimal("");
	private static DIX : Nat = NatDecimal.FAB.creerNatAvecRepresentation("10");

	
	private constructor(rep : string) {
		this._chiffres = rep;
	}

	public creerNatAvecValeur(x : number) : Nat {
		return new NatDecimal(x.toString());
	}

	private static nettoyer(s : string) : void{
		let debut : number = 0;
		let fin : number = 0;
		while((fin < s.length) && +(s.charAt(fin)) == 0){
			fin++;
		}
		s.replace(s.substring(debut, fin), "");
	}

	public creerNatAvecRepresentation(repDecimalecimale : string) : Nat {
		let repMutable : string = repDecimalecimale;
        NatDecimal.nettoyer(repMutable);
		repDecimalecimale = repMutable;
		if(repDecimalecimale == ""){
			repDecimalecimale = "0";
		}
		let min : string = "0";
		let max : string = "9";
		for(let i : number = 0; i < repDecimalecimale.length; i++){
			let c : string = repDecimalecimale.charAt(i);
			if(c < min)	throw new Error();
			if(c > max) throw new Error();
		}
		return new NatDecimal(repDecimalecimale);
	}

	public creerZero() : Nat {
		return new NatDecimal("0");
	}

	public creerSuccesseur(predecesseur : Nat) : Nat {
		// somme simplifiée : 1 + predecesseur
		let t : number = predecesseur.taille();
		let rep : string = "";
		let retenue : number = 1;
		for (let i : number = 0; i < t; i++) {
			let chiffre : number = predecesseur.chiffre(i) + retenue;
			if(chiffre > 9){
				chiffre = chiffre - 10;
				retenue = 1;
			}else{
				retenue = 0;
			}
			rep += +chiffre;
		}
		rep = retenue == 0 ? rep : rep += +(1);
		return new NatDecimal(rep.split('').reverse().join(''));
	}

    public chiffre(i : number) : number {
    	if(i < this.taille())
    		return +(this._chiffres.charAt(this._chiffres.length -1 -i));
    	return 0;
    }

    public taille() : number {
    	return this._chiffres.length;
    }

	public val() : number {
		return +(this._chiffres);
	}

	public estNul() : boolean {
		// Peut être simplifié du fait du nettoyage ("0" pour zéro)
		for(let i : number = 0; i < this.taille(); i++){
			if(this.chiffre(i) != 0){
				return false;
			}
		}
		return true;
	}

	public predecesseur() : Nat {
		if(this.estNul()){
			throw new Error();
		}
		let t : number = this.taille();
		let rep : string = "";
		let retenue : number = -1;
		for(let i : number = 0; i < t; i++){
			let chiffre : number = this.chiffre(i) + retenue;
			if(chiffre == -1){
				chiffre = 9;
				retenue = -1;
			}else{
				retenue = 0;
			}
			rep += +chiffre;
		}
		return this.creerNatAvecRepresentation(rep.split('').reverse().join(''));
	}

	public somme(x : Nat) : Nat {
        let t : number = this.taille() < x.taille() ? x.taille() : this.taille();
		let rep : string = "";
		let retenue : number = 0;
		for(let i : number = 0; i < t; i++){
			let chiffre : number = this.chiffre(i) + x.chiffre(i) + retenue;
			if(chiffre > 9){
				chiffre = chiffre - 10;
				retenue = 1;
			}else{
				retenue = 0;
			}
			rep += +chiffre;
		}
		rep = retenue == 0 ? rep : rep += +1;
		return this.creerNatAvecRepresentation(rep.split('').reverse().join(''));
	}

	public zero() : Nat {
		return this.creerZero();
	}

	public produit(x : Nat) : Nat {
		if(x.val() == NatDecimal.DIX.val()){
			return this.creerNatAvecRepresentation(this.toString() + "0");
		}
		let res : Nat = this.zero();
		let index : Nat = this.zero();
		while(!(index.val() == x.val())){
			res = res.somme(this);
			index = this.creerSuccesseur(index);
		}
		return res;
	}

	public un() : Nat {
		return this.creerNatAvecRepresentation("1");
	}

	public modulo(x : Nat) : Nat {
		if(x.val() == NatDecimal.DIX.val()) {
			return this.creerNatAvecValeur(this.chiffre(0));
		}
		let courant : Nat = this.zero();
		let r : Nat = this.zero();
		while(!(courant.val() == this.val())){
			r = this.creerSuccesseur(r);
			if(r.val() == x.val()){
				r = this.zero();
			}
			courant = this.creerSuccesseur(courant);
		}
		return r;
	}

	public div(x : Nat) : Nat {
		if(x.val() == NatDecimal.DIX.val()){
			if(this.taille() == 1)
				return this.zero();
			return this.creerNatAvecRepresentation(this.toString().substring(0, this.taille() - 1));
		}
		let courant : Nat = this.zero();
		let q : Nat = this.zero();
		let r : Nat = this.zero();
		while(!(courant.val() == this.val())){
			r = this.creerSuccesseur(r);
			if(r.val() == x.val()){
				r = this.zero();
				q = this.creerSuccesseur(q);
			}
			courant = this.creerSuccesseur(courant);
		}
		return q;
	}

    public equals(x : Nat) : boolean {
        return this.val() == x.val();
    }

    public toString() : string {
    	return this._chiffres;
    }

	
}
