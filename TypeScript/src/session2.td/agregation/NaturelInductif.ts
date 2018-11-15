import {EtatNaturelPur} from './etatnaturelpur';

export interface NaturelInductif extends EtatNaturelPur {

    creerZero() : EtatNaturelPur;
    creerSuccesseur(e : EtatNaturelPur) : EtatNaturelPur;
    creerNatAvecValeur(n : number) : EtatNaturelPur;

}
