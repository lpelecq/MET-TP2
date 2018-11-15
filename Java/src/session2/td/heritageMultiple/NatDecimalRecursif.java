package session2.td.heritageMultiple;

import session1.td.FabriqueNaturels;
import session1.td.Nat;

public class NatDecimalRecursif  extends NombreDecimal implements AlgebreNatRecursif{

    public static final FabriqueNaturels<Nat> FAB = new NatDecimalRecursif("0");

    public NatDecimalRecursif(String chiffres) {
        super(chiffres);
    }

    private static void nettoyer(StringBuilder s){
        int debut = 0;
        int fin = 0;
        while((fin < s.length()) && Character.getNumericValue(s.charAt(fin)) == 0){
            fin++;
        }
        s.delete(debut, fin);
    }

    @Override
    public String toString() {
        return ""+this.val();
    }

    @Override
    public boolean equals(Object x){
        if(!(x instanceof Nat))
        {
            System.out.println("1");
            return false;
        }
        System.out.println("2");
        Nat n = (Nat)x;
        return this.toString().equals(n.toString());
    }

    @Override
    public Nat creerNatAvecRepresentation(String repDecimalecimale) {
        StringBuilder repMutable = new StringBuilder(repDecimalecimale);
        nettoyer(repMutable);
        repDecimalecimale = new String(repMutable);
        if(repDecimalecimale.equals("")){
            repDecimalecimale = "0";
        }
        char min = Character.forDigit(0, 10);
        char max = Character.forDigit(9, 10);
        for(int i = 0; i < repDecimalecimale.length(); i++){
            char c = repDecimalecimale.charAt(i);
            if(c < min)	throw new IllegalArgumentException();
            if(c > max) throw new IllegalArgumentException();
        }
        return new NatDecimal(repDecimalecimale);
    }

}
