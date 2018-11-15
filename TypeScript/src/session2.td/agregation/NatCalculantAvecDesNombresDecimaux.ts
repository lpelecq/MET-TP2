import {FabriqueNaturels} from '../../session1.td/fabriqueNaturels';
import {NatDeleguantEtat} from "./NatDeleguantEtat";
import {ZeroInductif} from "./ZeroInductif";
import {EtatNaturelPur} from "./EtatNaturelPur";
import {Nat} from "./Nat";

export class NatCalculantAvecDesNombresDecimaux extends NatDeleguantEtat {

    public static FAB : FabriqueNaturels<Nat>= new NatCalculantAvecDesNombresDecimaux(new ZeroInductif());

    public constructor(etat : EtatNaturelPur) {
        super(etat);
    }

    public creerNatAvecEtat(e : EtatNaturelPur) : Nat{
        return new NatCalculantAvecDesNombresDecimaux(e);
    }

    public modulo(n: Nat): Nat {
        if(n.val() == this.creerNatAvecRepresentation("10").val()) {
            return this.creerNatAvecValeur(this.chiffre(0));
        }
        let courant : Nat = this.zero();
        let r : Nat = this.zero();
        while(!(courant.val() == this.val())){
            r = this.creerSuccesseur(r);
            if(r.val() == n.val()){
                r = this.zero();
            }
            courant = this.creerSuccesseur(courant);
        }
        return r;
    }

    public div(n: Nat): Nat {
        if(n.val() == this.creerNatAvecRepresentation("10").val()){
            if(this.taille() == 1)
                return this.zero();
            return this.creerNatAvecRepresentation(this.toString().substring(0, this.taille() - 1));
        }
        let courant : Nat = this.zero();
        let q : Nat = this.zero();
        let r : Nat = this.zero();
        while(!(courant.val() == this.val())){
            r = this.creerSuccesseur(r);
            if(r.val() == n.val()){
                r = this.zero();
                q = this.creerSuccesseur(q);
            }
            courant = this.creerSuccesseur(courant);
        }
        return q;
    }

    public somme(n: Nat): Nat {
        let t : number = this.taille() < n.taille() ? n.taille() : this.taille();
        let rep : string = "";
        let retenue : number = 0;
        for(let i : number = 0; i < t; i++){
            let chiffre : number = this.chiffre(i) + n.chiffre(i) + retenue;
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

    public produit(n: Nat): Nat {
        if(n.val() == this.creerNatAvecRepresentation("10").val()){
            return this.creerNatAvecRepresentation(this.toString() + "0");
        }
        let res : Nat = this.zero();
        let index : Nat = this.zero();
        while(!(index.val() == n.val())){
            res = res.somme(this);
            index = this.creerSuccesseur(index);
        }
        return res;
    }

    public zero() : Nat{
        return this.creerZero();
    }

    public un() : Nat{
        return this.creerNatAvecRepresentation("1");
    }

    public equals(o : Nat) : boolean{
        return this.val() == o.val();
    }


    public toString() : string{
        return ""+ this.etat();
    }
}
