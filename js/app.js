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
const zoneGraphique = document.getElementById("zone-graphique");
let premierClic = true;


// Constantes utilisées pour la partie informations
const sectionInformations = document.getElementById("informations")
const suiteTxt = document.getElementById("suite-txt");
const txtCompressee = document.getElementById("txt-compressee");
const vol = document.getElementById("vol");
const altitudeMax = document.getElementById("altitude-max");
const facteurExpansion = document.getElementById("facteur-expansion");


btn.addEventListener('click', () => {
    const entreeValide = parseInt(entree.value);

    if (verifierEntree(entreeValide)) {
        const ctx = canvas.getContext('2d');
        let suiteSyracuse = syracuseSuite(entreeValide);
        let suiteCompresseeSyracuse = syracuseCompresseeSuite(entreeValide)

        // Supprimer le graphique existant s'il y en a un
        supprimerGraphiqueExistant(canvas);

        // Créer un nouveau graphique
        creerGraphique(ctx, suiteSyracuse, "linear");

        if (premierClic) {
            zoneGraphique.style.display = "block";
            sectionInformations.style.display = "block";
            premierClic = false;
        }

        vol.innerHTML = "Vol de la suite : " + suiteSyracuse.length;
        altitudeMax.innerHTML = "Altitude maximale : " + Math.max(...suiteSyracuse);
        facteurExpansion.innerHTML = "Facteur d'expansion : " + Math.round((Math.max(...suiteSyracuse) / entreeValide));
        suiteTxt.innerHTML = suiteSyracuse;
        txtCompressee.innerHTML = suiteCompresseeSyracuse;
    } else {
        alert("Vous devez entrer un nombre entier supérieur ou égal à 1")
    }
});
