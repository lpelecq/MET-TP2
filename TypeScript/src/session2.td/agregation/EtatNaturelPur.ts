
import {FabriqueNaturels} from '../../session1.td/FabriqueNaturels';
import {EtatNaturel} from './EtatNaturel';
import {ZeroInductif} from './ZeroInductif';

export interface EtatNaturelPur extends EtatNaturel<EtatNaturelPur>, FabriqueNaturels<EtatNaturelPur> {

    creerNatAvecValeur(val : number) : EtatNaturelPur;
    creerZero() : EtatNaturelPur;
    creerSuccesseur(predecesseur : EtatNaturelPur ) : EtatNaturelPur;
    creerNatAvecRepresentation(repDecimale : string) : EtatNaturelPur;
}

export abstract class EtatNaturelPur_default implements EtatNaturelPur {

    creerNatAvecValeur(val : number) : EtatNaturelPur {
        return this.creerNatAvecRepresentation(String(val));
    }

    creerZero() : EtatNaturelPur {
        return this.creerNatAvecValeur(0);
    }

    creerSuccesseur(predecesseur : EtatNaturelPur ) : EtatNaturelPur {
        return this.creerNatAvecValeur(predecesseur.val());
    }

    creerNatAvecRepresentation(repDecimale : string) : EtatNaturelPur {
        return this.creerNatAvecValeur(+repDecimale);
    }

    abstract chiffre(n: number): number;
    abstract estNul(): boolean;
    abstract predecesseur(): EtatNaturelPur;
    abstract taille(): number;
    abstract val(): number;
}