package session2.td.agregation;

public interface EtatNaturel<T> {

    int val();
    boolean estNul();
    T predecesseur();
    int chiffre(int n);
    int taille();


}
