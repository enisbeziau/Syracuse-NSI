/**
 * Auteur : Enis Béziau
 * Ce fichier sert à appliquer des classes à des élements css lors du clic sur le menu hamburger
 * Sert à gérer le responsive de la navbar et son changement d'affichage sur les écrans < 632px
 */
const hamburger = document.querySelector(".hamburger");
const lienNav = document.querySelector(".ensemble-lien");


hamburger.addEventListener('click', () => {
    lienNav.classList.toggle("menu-mobile");
    document.documentElement.classList.toggle("no-scroll");

})
