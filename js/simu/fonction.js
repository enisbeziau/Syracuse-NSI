/*
Auteur : Enis Béziau [1H]
Ce fichier sert à définir toutes les fonctions utilisées dans la partie simulateur du site. 
Ces fonctions seront ensuites importées dans 'app.js'. 
Scinder en une partie fonction et une partie détection des évènements améliore la maintenabilité et la compréhension du code
*/


function syracuseSuite(nombre) {
    /**
    * Génère la suite de Syracuse pour un nombre donné.
    * @param {number} nombre - Le nombre de départ.
    * @returns {Object} - Un objet contenant :
    *   @property {number[]} sequence - La suite de Syracuse sous forme de tableau
    *   @property {number} nbr_iterations - Le nombre d'itérations effectuées
    *   @property {number} max - La valeur maximale atteinte par la suite
    */
    let sequence = [nombre];
    let nbr_iterations = 0;
    while (nombre !== 1) {
        nombre = nombre % 2 === 0 ? nombre / 2 : nombre * 3 + 1;
        sequence.push(nombre);
        nbr_iterations++;
    }
    return {
        sequence: sequence,
        nbr_iterations: nbr_iterations,
        max: Math.max(...sequence),
    };
}


function supprimerGraphiqueExistant(canvas) {
    /**
     * @param {HTMLElement} canvas - Le canvas dans lequel on devra supprimer le graphique
     */
    const graphiqueExistant = Chart.getChart(canvas);
    // Si un graphique est à l'emplacement prévu, on le supprime avant d'en recréer un nouveau
    if (graphiqueExistant) {
        graphiqueExistant.destroy();
    }
}


function creerGraphique(ctx, infos, repere) {
    /**
     * @param {CanvasRenderingContext2D} ctx - Le contexte 2D du canvas HTML, utilisé pour dessiner des éléments graphiques sur le canvas
     * @param {number[]} infos - La suite dont les éléments composeront les points du graphique qui seront reliés
     * @param {"linear" | "logarithmic"} repere - Le type de repère dans lequel sera dessiné le graphique
     */
    // Constante contenant les str "orthonormé" ou "semi-logarithmique" en fonction de la valeur de l'argument repere.
    const repereLabel = repere === "linear" ? "orthonormé" : "semi-logarithmique";
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: infos.sequence.length }, (_, index) => index),
            datasets: [{
                label: 'Repère ' + repereLabel,
                data: infos.sequence,
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
     * @param {number} input - La valeur qui est testé pour savoir si oui ou non c'est un entier
     * @return {bool} - true si input est un nombre entier supérieur ou égal à 1, false sinon
     */
    return Number.isInteger(input) && input >= 1;
}


function exporterCSV(infos_objet) {
    /**
     * Exporte la suite de Syracuse en CSV
     * @param {Object} infos_objet - Les informations sur la suite de Syracuse du nombre généré (voir fonction syracuseSuite)
     */

    const contenu_csv = infos_objet.sequence.join("\n");

    const nomFichier = `suite_de_syracuse_de_${infos_objet.sequence[0]}.csv`;

    const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${contenu_csv}`);

    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", nomFichier);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// Exporte les fonctions définies dans ce fichier pour pouvoir les importer et utiliser dans app.js
export {
    syracuseSuite,
    supprimerGraphiqueExistant,
    creerGraphique,
    verifierEntree,
    exporterCSV
};
