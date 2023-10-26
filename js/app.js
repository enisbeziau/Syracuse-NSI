/*
Auteur : Enis Béziau [1H]
Code gérant : 
- L'affichage du graphique montrant la suite de Syracuse d'un nombre entré
- L'affichage de la section d'informations lors du clic sur la flèche
*/
import {
    syracuseSuite,
    syracuseCompresseeSuite,
    supprimerGraphiqueExistant,
    creerGraphique,
    verifierEntree
} from './fonction.js';


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
