/*
Auteur : Enis Béziau [1H]
Code gérant : 
- L'affichage du graphique montrant la suite de Syracuse d'un nombre entré
- L'affichage de la section d'informations lors du clic sur la flèche
*/


// Importe les fonctions utilisées dans le programme depuis fonction.js
import {
    syracuseSuite,
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
const sectionInformations = document.getElementById("informations");
const iterations = document.getElementById('nbr-iteration');
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
    const entree_utilisateur = parseInt(entree.value);

    if (verifierEntree(entree_utilisateur)) {

        const ctx = canvas.getContext('2d');
        let infos = syracuseSuite(entree_utilisateur);


        // Supprimer le graphique existant s'il y en a un
        supprimerGraphiqueExistant(canvas);


        // Créer un nouveau graphique
        creerGraphique(ctx, infos, "linear");


        if (premierClic) {
            zoneGraphique.style.display = "block";
            sectionInformations.style.display = "block";
            divBtn.style.display = "flex";
            premierClic = false;
        }


        btnOrtho.addEventListener('click', () => {
            supprimerGraphiqueExistant(canvas);
            creerGraphique(ctx, infos, "linear")
        })


        btnLog.addEventListener('click', () => {
            supprimerGraphiqueExistant(canvas);
            creerGraphique(ctx, infos, "logarithmic");
        })


        // La première génération étant forcément avec le repère orthonormé, on colore le bouton
        btnOrtho.style.backgroundColor = "#1b9bff";


        // Remplissage des informations de la section informations en fonction de l'entrée de l'utilisateur
        iterations.innerHTML = infos.nbr_iterations;
        altitudeMax.innerHTML = infos.max;
        facteurExpansion.innerHTML =  Math.round((infos.max / entree_utilisateur));
    }
    else { alert("Vous devez entrer un nombre entier supérieur ou égal à 1"); }
});
