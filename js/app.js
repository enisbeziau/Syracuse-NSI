/*
Auteur : Enis Béziau [1H]
Code gérant : 
- L'affichage du graphique montrant la suite de Syracuse d'un nombre entré
- L'affichage de la section d'informations lors du clic sur la flèche
*/

// Constantes et variable utilisées pour la partie affichage du graphique
const canvas = document.getElementById("graphique");
const btn = document.getElementById("btn");
const entree = document.getElementById("input");
const zoneGraphique = document.querySelector(".zone-graphique");
let premierClic = true;


// Constantes utilisées pour la partie informations
const btnFleche = document.getElementById("fleche");
const informations = document.getElementById("informations");
const classInformations = document.querySelector(".section-informations")
const suiteTxt = document.getElementById("suite-txt");
const txtCompressee = document.getElementById("txt-compressee");
const vol = document.getElementById("vol");
const altitudeMax = document.getElementById("altitude-max");
const facteurExpansion = document.getElementById("facteur-expansion");


// Lors du clic sur la flèche à droite de l'écran, la section passe de 0% de largeur à 100% de largeur, la rendant visible
btnFleche.addEventListener("click", () => {
    if (informations.style.width === "100%") {
        informations.style.width = "0";
    } else {
        informations.style.width = "100%";
    }
});


function syracuseSuite(nombre) {
    /**
     * Génère la suite de Syracuse pour un nombre donné.
     * @param {number} nombre - Le nombre de départ.
     * @return {number[]} - La suite de Syracuse.
     */
    const sequence = [nombre];
    while (nombre !== 1) {
        nombre = nombre % 2 === 0 ? nombre / 2 : nombre * 3 + 1;
        sequence.push(nombre + '   ');
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
        sequence.push(nombre + '   ');
    }
    return sequence;
}


function supprimerGraphiqueExistant() {
    // Supprime le graphique existant lorsque l'utilisateur en génère un nouveau.
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
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: suite.length }, (_, index) => index + 1),
            datasets: [{
                label: "Repère orthonormal",
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
                        text: 'Valeurs ' + repere,
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
     * @param {string | number | null} input - La valeur qui est testé pour savoir si oui ou non c'est un entier
     * @return {bool} - Si oui ou non l'entrée est un nombre supérieur ou égal à 1
     */
    return Number.isInteger(input) && input >= 1;
}


btn.addEventListener('click', () => {
    const entreeValide = parseInt(entree.value);

    if (verifierEntree(entreeValide)) {
        const ctx = canvas.getContext('2d');
        let suiteSyracuse = syracuseSuite(entreeValide);
        let suiteCompresseeSyracuse = syracuseCompresseeSuite(entreeValide)

        supprimerGraphiqueExistant();

        creerGraphique(ctx, suiteSyracuse, "linear");

        if (premierClic) {
            zoneGraphique.classList.toggle("on");
            classInformations.classList.toggle("on");
            premierClic = false;
        }

        vol.innerHTML = "Vol de la suite : " + suiteSyracuse.length;
        altitudeMax.innerHTML = "Altitude maximale : " + Math.max(...suiteSyracuse);
        facteurExpansion.innerHTML = "Facteur d'expansion :" + Math.round((Math.max(...suiteSyracuse) / entreeValide));
        suiteTxt.innerHTML = suiteSyracuse;
        txtCompressee.innerHTML = suiteCompresseeSyracuse;
    }

    else {
        alert("Vous devez entrer un nombre entier supérieur ou égal à 0")
    }
});
