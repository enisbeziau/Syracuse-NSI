/*
Auteur : Enis Béziau [1H]
Ce code sert à définir les fonctions utilisées dans le fichier app.js pour faire fonctionner la partie simulateur
Le fait de scinder le code js en deux fichiers améliore la lisibilité de app.js et améliore la maintenabilité du code
*/


function syracuseSuite(nombre) {
    /**
     * Génère la suite de Syracuse pour un nombre donné.
     * @param {number} nombre - Le nombre de départ.
     * @returns {number[]} - La suite de Syracuse sous forme de tableau.
     */
    let sequence = [nombre];
    while (nombre !== 1) {
        nombre = nombre % 2 === 0 ? nombre / 2 : nombre * 3 + 1;
        sequence.push(nombre);
    }
    return sequence;
}


function syracuseCompresseeSuite(nombre) {
    /**
     * Génère la suite de Syracuse compressée pour un nombre donné.
     * @param {number} nombre - Le nombre de départ.
     * @return {number[]} - La suite de Syracuse compressée.
     */
    const sequence = [nombre];
    while (nombre !== 1) {
        nombre = nombre % 2 === 0 ? nombre / 2 : (nombre * 3 + 1) / 2;
        sequence.push(nombre);
    }
    return sequence;
}


function supprimerGraphiqueExistant(canvas) {
    /**
     * @param {HTMLElement} canvas - Le canvas dans lequel on devra supprimer le graphique
     */
    const graphiqueExistant = Chart.getChart(canvas);
    if (graphiqueExistant) {
        graphiqueExistant.destroy();
    }
}


function creerGraphique(ctx, suite, repere) {
    /**
     * @param {CanvasRenderingContext2D} ctx - Le contexte 2D du canvas HTML, utilisé pour dessiner des éléments graphiques sur le canvas
     * @param {entier[]} suite - La suite dont les éléments composeront les points du graphique qui seront reliés
     * @param {"linear" | "logarithmic"} repere - Le type de repère dans lequel sera dessiné le graphique
     */
    // Constante contenant les str "orthonormé" ou "semi-logarithmique" en fonction de la valeur de l'argument repere.
    const repereLabel = repere === "linear" ? "orthonormé" : "semi-logarithmique";
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: suite.length }, (_, index) => index + 1),
            datasets: [{
                label: 'Repère ' + repereLabel,
                data: suite,
                borderColor: 'black',
                borderWidth: 2,
            }],
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Étapes',
                        color: 'black',
                    },
                    ticks: {
                        color: 'black',
                    },
                },
                y: {
                    type: repere,
                    title: {
                        display: true,
                        text: 'Valeurs ',
                        color: 'black',
                    },
                    ticks: {
                        color: 'black',
                    },
                },
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'black',
                    },
                },
            },
        },
    });
}


function verifierEntree(input) {
    /**
     * Sert à vérifier la saisie de l'utilisateur pour éviter une erreur lors de la génération du graphique
     * @param {any} input - La valeur qui est testé pour savoir si oui ou non c'est un entier
     * @return {bool} - true si input est un nombre entier supérieur ou égal à 1, false sinon
     */
    return Number.isInteger(input) && input >= 1;
}


// Exporte les fonctions définies dans ce fichier pour pouvoir les importer et utiliser dans app.js
export {
    syracuseSuite,
    syracuseCompresseeSuite,
    supprimerGraphiqueExistant,
    creerGraphique,
    verifierEntree
};
