package session2.td.heritageAscendant;

import session1.td.Nat;

public interface NatInductif extends Nat {
     default Nat creerNatAvecValeur(int val) {
        if(val == 0)
            return this.creerZero();
        return this.creerSuccesseur(this.creerNatAvecValeur(val -1));
    }
     default Nat creerNatAvecRepresentation(String repDecimale) {
        return this.creerNatAvecValeur(Integer.parseInt(repDecimale));
    }
}
