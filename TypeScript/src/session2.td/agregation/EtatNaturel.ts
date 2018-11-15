export interface EtatNaturel<T> {
    val() : number;
    estNul() : boolean;
    predecesseur() : T;
    chiffre(n : number) : number;
    taille() : number;
}