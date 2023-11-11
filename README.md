Lien du site : https://enisbeziau.github.io/Syracuse-NSI  
Lien du code : https://github.com/enisbeziau/Syracuse-NSI/releases/tag/release

# Document de rendu de projet - Phase n°1

## I. Choix du sujet  
J'ai décidé de choisir la conjecture de Syracuse comme sujet pour ce projet car je trouve ce problème véritablement fascinant. En effet, cette conjecture, en apparence simple, m'a étonné par la complexité mathématique qu'elle cache lorsque l’on s’y intéresse plus en détail. Je trouve que ce projet est donc un bon moyen d’améliorer mes compétences informatiques mais également mathématiques

## II. Organisation du projet
Les fichiers du projet sont rangés méthodiquement :
- `assets` est le dossier contenant toutes les illustrations utilisées dans le site
Ce dossier contient trois sous-dossier qui classe les images selon la page dans laquelle elles sont utilisées : `accueil`, `voca` et `tentatives-resolutions`
- `src` contient toutes les pages html indexés sur le site
- `index.html` est le seul fichier à la racine. Il contient le code de la page d’accueil

## III. Choix des informations des pages
Le site est divisé en 4 pages distinctes : 
- `index.html` : La page d’accueil du site. Celle-ci a été conçue pour présenter les aspects essentiels et basiques à propos de la conjecture de Syracuse. Elle présente donc l’histoire et la mise en problèmes de la conjecture, son énoncé ainsi que des concepts clés tels que l’application de Syracuse, la suite de Syracuse, la suite compressée de Syracuse et la notion de cycle trivial
- `voca.html` : Cette page vise à expliquer les notions plus spécifiques et complexes de la conjecture de Syracuse à l’aide d'exemples sous forme de graphiques.
- `tentatives-resolutions.html` : Cette page vise à exposer les différentes tentatives des chercheurs pour vaincre la conjecture de Syracuse. Y sont évoqués des tentatives via différentes approches : algorithmique, calculatoire, inversée (arbre de Syracuse) et recherche des cycles non triviaux.
- `info.html` : Cette page sert à sourcer le site et les informations / illustrations y figurant.

*Remarque* : Toutes les pages sont munies d’une barre de navigation permettant de circuler de page en page sans soucis et d’un pied de page permettant d’accéder au fichier info.html via un lien cliquable. 

## IV. Choix des balises
Afin de présenter un code doté d'une bonne sémantique, toutes les pages sont munies de balises `<header>` , `<main>` et `<footer>`. La balise `<main>` contient des balises `<section>`

**Cas particulier de la page `index.html`** : Le choix de mettre une section pour la page d’accueil est justifié par le futur aspect de la page lors de l’application du css qui sera ainsi
![image](https://github.com/enisbeziau/Syracuse-NSI/assets/126325785/21593acf-882f-446a-a63c-64ba96e64a42)

Dans toutes les pages du site, il y aura deux types de sections de style différents : 
- Balise de classe `carte`
![image](https://github.com/enisbeziau/Syracuse-NSI/assets/126325785/9ce3147f-cc28-41ca-afc5-dfd200da38ba)

- Balise de classe `presentation` : Le style des sections sera en miroir pour ajouter un effet plus esthétique. Ainsi la place des composants de la section changera en fonction de l'ordre dans lequel ils sont mis dans la section

Avec `div class="texte-presentation">` en premier
![image](https://github.com/enisbeziau/Syracuse-NSI/assets/126325785/27b46c27-e79e-4c56-8500-41b148163b65)

Avec `<figure>` en premier
![image](https://github.com/enisbeziau/Syracuse-NSI/assets/126325785/444f21e2-309c-4638-a2e7-8d254d4c0c49)

Je pense utiliser la section de classe presentation lorsque le texte sera court et illustré d’une image (graphique) comme dans les pages `index.html` et `voca.html ` 
Je pense utiliser la section de classe carte dans des pages contenant plus de texte ou d’explication comme dans les pages `info.html` et `tentatives-resolutions.html`

Le but est de pouvoir réutiliser et adapter ces modèles en ne changeant que l’image, le texte et le titre de section. Cela permet donc de réduire la taille du code css et, par conséquent, alléger et rendre plus optimisé le site final

## V. Futurs ajouts
Dans le seconde partie du projet, je compte implémenter les ajouts suivants : 

**ajout d'une nouvelle page `simulateur.html`** : Je compte ajouter une sixième et dernière page à mon site dans laquelle il sera possible d’entrer un nombre et de générer la représentation graphique de sa suite de Syracuse qui sera affiché sur la page. Pour ce faire, je compte utiliser la bibliothèque `chart.js`. Lorsque le vol du nombre sera très important, un graphique doté d'un repère orthonormal peut se révéler peu lisible. C'est pourquoi je compte également ajouter sur cette page un bouton permettant de faire basculer le graphique généré d'un repère orthonormal à un repère semi-logarithmique et inversement

**Rendre l'architecture du projet plus clair**  
Je pense organiser comme ci-dessous mon projet  
├── index.html  
├── assets  
│   ├── accueil.jpg  
│   ├── arbre.jpg  
│   ├── code.png  
│   ├── code_opti.png  
│   ├── collatz.jpeg  
│   ├── icon.png  
│   ├── graphique  
│   │   ├── 12.png  
│   │   ├── 20.png  
│   │   ├── 27.png  
│   │   ├── 28.png  
│   │   ├── 28compressee.png  
│   │   ├── 30.png  
├── js  
│   ├── app.js  
│   ├── fonction.js  
├── css  
│   ├── accueil.css  
│   ├── general.css  
│   ├── simulateur.css  
│   ├── section  
│   │   ├── presentation.css  
│   │   ├── carte.css  
├── src  
│   ├── infos.html  
│   ├── simulateur.html  
│   ├── tentatives-resolutions.html  
│   ├── voca.html  
Cette architecture claire et ce découpage du site en fichiers distincts permet :
- D'améliorer les performances de la page et le temps de chargement en important que les fichiers css strictement nécessaire au style de la page. Cela évite d'importer par exemple un seul fichier `styles.css` de 800 lignes dont la moitié peut porter sur une page complètement différente et dont les styles n'ont aucun effet
- De faciliter la maintenance du code en permettant de très rapidement identifier quel composant nous voulons modifier au lieu de chercher dans un grand fichier ce que l'on cherche, ce qui fait gagner beaucoup de temps






