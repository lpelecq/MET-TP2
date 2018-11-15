import {Nat} from "../../session1.td/Nat";

export abstract class NombreDecimal implements Nat {

    protected _chiffres : string;

    public constructor(chiffres : string) {
        this._chiffres = chiffres;
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

    public chiffre(i : number) : number {
        if(i < this.taille())
            return +(this._chiffres.charAt(this._chiffres.length -1 -i));
        return 0;
    }

    public taille() : number {
        return this._chiffres.length;
    }

    public val() : number {
        return +this._chiffres;
    }

    public creerNatAvecValeur(val : number) : Nat {
        return this.creerNatAvecRepresentation(String(val));
    }

    public creerZero() : Nat {
        return this.creerNatAvecValeur(0);
    }


    public creerSuccesseur(predecesseur : Nat) : Nat {
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
        return this.creerNatAvecRepresentation(rep.split('').reverse().join(''));
    }

    abstract creerNatAvecRepresentation(repDecimale: String): Nat;

    abstract div(x: Nat): Nat;

    abstract equals(x: Nat): boolean;

    abstract modulo(x: Nat): Nat;

    abstract produit(x: Nat): Nat;

    abstract somme(x: Nat): Nat;

    abstract un(): Nat;

    abstract zero(): Nat;

}
