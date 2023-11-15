/*
Auteur : Enis Béziau [1H]
Code gérant : 
- L'affichage du graphique montrant la suite de Syracuse d'un nombre entré
- L'affichage de la section d'informations lors du clic sur la flèche
*/


// Importe les fonctions utilisées dans le programme depuis fonction.js
import {
    syracuseSuite,
    syracuseCompresseeSuite,
    supprimerGraphiqueExistant,
    creerGraphique,
    verifierEntree
} from './fonction.js';


// Constantes et variable utilisées pour la partie affichage du graphique
const canvas = document.getElementById("graphique");
const btn_input = document.getElementById("btn");
const entree = document.getElementById("input");
const zoneGraphique = document.getElementById("zone-graphique");
let premierClic = true;


// Constantes pour la gestion des boutons
const divBtn = document.getElementById('ensemble-btn');
const boutons = document.querySelectorAll('.btn');
const btnOrtho = document.getElementById('btn-ortho');
const btnLog = document.getElementById('btn-log');


// Constantes utilisées pour la partie informations
const sectionInformations = document.getElementById("informations")
const altitudeMax = document.getElementById("altitude-max");
const facteurExpansion = document.getElementById("facteur-expansion");


// Gestion du changement de couleur au clic d'un bouton --> ajoute un écouteur d'événement de clic à chaque bouton
boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        // Réinitialise la couleur de fond de tous les boutons
        boutons.forEach(boutonReinitialise => {
            boutonReinitialise.style.backgroundColor = '';
        });

        // Change la couleur de fond du bouton cliqué en bleu
        bouton.style.backgroundColor = "#1b9bff";
    });
});


btn_input.addEventListener('click', () => {
    const entreeValide = parseInt(entree.value);

    if (verifierEntree(entreeValide)) {

        const ctx = canvas.getContext('2d');
        let suiteSyracuse = syracuseSuite(entreeValide);


        // Supprimer le graphique existant s'il y en a un
        supprimerGraphiqueExistant(canvas);


        // Créer un nouveau graphique
        creerGraphique(ctx, suiteSyracuse, "linear");


        if (premierClic) {
            zoneGraphique.style.display = "block";
            sectionInformations.style.display = "block";
            divBtn.style.display = "flex";
            premierClic = false;
        }


        btnOrtho.addEventListener('click', () => {
            supprimerGraphiqueExistant(canvas);
            creerGraphique(ctx, suiteSyracuse, "linear")
        })


        btnLog.addEventListener('click', () => {
            supprimerGraphiqueExistant(canvas);
            creerGraphique(ctx, suiteSyracuse, "logarithmic");
        })


        // La première génération étant forcément avec le repère orthonormé, on colore le bouton
        btnOrtho.style.backgroundColor = "#1b9bff";


        // Remplissage des informations de la section informations en fonction de l'entrée de l'utilisateur
        altitudeMax.innerHTML = Math.max(...suiteSyracuse);
        facteurExpansion.innerHTML =  Math.round((Math.max(...suiteSyracuse) / entreeValide));
    }
    else { alert("Vous devez entrer un nombre entier supérieur ou égal à 1"); }
});
