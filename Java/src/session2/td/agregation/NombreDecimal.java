package session2.td.agregation;

public class NombreDecimal implements EtatNaturelPur {

    private String chiffres;

    public NombreDecimal(String chiffres) {
        this.chiffres = chiffres;
    }


    @Override
    public EtatNaturelPur creerNatAvecValeur(int val) {
        return this.creerNatAvecRepresentation(Integer.toString(val));
    }

    @Override
    public EtatNaturelPur creerZero() {
        return this.creerNatAvecValeur(0);
    }

    @Override
    public EtatNaturelPur creerSuccesseur(EtatNaturelPur e) {
        return this.creerNatAvecValeur(e.val());
    }


    @Override
    public EtatNaturelPur creerNatAvecRepresentation(String s) {
        return this.creerNatAvecValeur(Integer.parseInt(s));
    }

    @Override
    public int val() {
        return Integer.parseInt(this.chiffres);
    }

    @Override
    public boolean estNul() {
        for(int i = 0; i < this.taille(); i++){
            if(this.chiffre(i) != 0){
                return false;
            }
        }
        return true;
    }

    @Override
    public EtatNaturelPur predecesseur() {
        if(this.estNul()){
            throw new UnsupportedOperationException();
        }
        int t = this.taille();
        StringBuilder rep = new StringBuilder();
        int retenue = -1;
        for(int i = 0; i < t; i++){
            int chiffre = this.chiffre(i) + retenue;
            if(chiffre == -1){
                chiffre = 9;
                retenue = -1;
            }else{
                retenue = 0;
            }
            rep.append(Integer.toString(chiffre));
        }
        return this.creerNatAvecRepresentation(rep.reverse().toString());
    }

    @Override
    public int chiffre(int i){
        if(i < this.taille())
            return Character.getNumericValue(chiffres.charAt(chiffres.length() -1 -i));
        return 0;
    }

    @Override
    public int taille() {
        return this.chiffres.length();
    }
}
