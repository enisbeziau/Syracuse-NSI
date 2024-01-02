/*
Auteur : Enis Béziau [1H]
Code gérant : 
- L'affichage du graphique montrant la suite de Syracuse du nombre entré
- Le changement de repère au clic sur le btn correspondant
- Le téléchargement en format csv des informations au clic sur le btn correspondant 
*/


// Importe les fonctions utilisées dans le programme depuis fonction.js
import {
    syracuseSuite,
    supprimerGraphiqueExistant,
    creerGraphique,
    verifierEntree,
    exporterCSV
} from './fonction.js';


// Déclaration de la variable infos en dehors de toute fonction pour qu'elle soit globale
let infos;


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


// Constante utilisée pour le téléchargement en format csv des informations
const btnCsv = document.getElementById("csv");


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
    // On peut parseInt directement vu que l'input est défini comme ne prenant que des nombres dans le HTML
    const entree_utilisateur = parseInt(entree.value);

    if (verifierEntree(entree_utilisateur)) {

        const ctx = canvas.getContext('2d');
        infos = syracuseSuite(entree_utilisateur);


        // Supprime le graphique existant s'il y en a un
        supprimerGraphiqueExistant(canvas);


        // Crée un nouveau graphique
        creerGraphique(ctx, infos, "linear");


        if (premierClic) {
            // Lors du premier clic sur le bouton `btn_input`, on affiche le graphique, ses informations et les btns
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


        // La première génération étant par défaut avec le repère orthonormé, on colore le bouton
        btnOrtho.style.backgroundColor = "#1b9bff";


        // Remplissage des informations de la section informations en fonction de l'entrée de l'utilisateur
        iterations.innerHTML = infos.nbr_iterations;
        altitudeMax.innerHTML = infos.max;
        facteurExpansion.innerHTML = Math.round((infos.max / entree_utilisateur));

    }
    // Si l'entrée est invalide
    else { alert("Vous devez entrer un nombre entier supérieur ou égal à 1"); }
});


// Lorsque l'on clique sur le bouton pour générer le fichier csv, on vérifie que la variable infos contient quelque chose puis on exporte
btnCsv.addEventListener('click', () => {
    // Si la variable globale n'est pas vide
    if (infos) {
        exporterCSV(infos)
    }
})
