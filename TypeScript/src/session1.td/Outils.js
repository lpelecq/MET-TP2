"use strict";
exports.__esModule = true;
var Outils = /** @class */ (function () {
    function Outils() {
    }
    /*
     * Calcul du produit reposant sur l'identité suivante :
     * - x * y = x * (y/base) * base + x * y%base)
     * Elle est valable dans un semi-anneau unitaire euclidien puisque la division euclidienne
     * vérifie :
     * - y = (y/z)*z + y%z.
     * Elle est dite russe lorsque la base vaut deux ; c'est aussi la méthode habituelle
     * de calcul en base 10, lorsqu'on réalise manuellement le calcul.
     */
    Outils.produitRusse = function (x, y, base) {
        var zero = x.zero();
        var resultat = zero;
        while (!(y.val() == zero.val())) {
            var reste = y.modulo(base);
            if (!(reste.val() == zero.val())) {
                resultat = resultat.somme(x.produit(reste));
            }
            x = x.produit(base);
            y = y.div(base);
        }
        return resultat;
    };
    return Outils;
}());
exports.Outils = Outils;
