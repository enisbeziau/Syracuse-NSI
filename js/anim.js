/**
 * Auteur : Enis Béziau
 * Ce fichier sert à gérer l'animation d'apparition progressives des sections lors du scroll 
   ou de l'appui sur le btn de la page d'accueil index.html
 */
const grp_section = document.querySelectorAll('.presentation');
const taille_fen = window.innerHeight;


window.addEventListener('scroll', () => {
    apparitionSection();
});

function apparitionSection() {
    grp_section.forEach((section) => {
        const sectionPos = section.getBoundingClientRect().top;


        // Si la position de la section est à moins de 100 pixels de la fenêtre du haut
        // alors la section est partiellement ou entièrement visible à l'écran
        if (sectionPos < taille_fen - 100) {
            section.classList.add('visible');
        }
    })
}
