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
    return Number.isInteger(input) && input >= 0;
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
