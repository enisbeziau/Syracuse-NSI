Lien du site : https://enisbeziau.github.io/Syracuse-NSI  
Lien du code : [https://github.com/enisbeziau/Syracuse-NSI/releases/tag/release](https://github.com/enisbeziau/Syracuse-NSI/releases/tag/Phase1)  
Document de rendu de projet phase n°1 : https://github.com/enisbeziau/Rendu-1/blob/main/README.md
# Document de rendu de projet - Phase finale  

## I. Généralités  
Tout d'abord, pour mieux appréhender les explications ci-dessous, voici l'architecture du projet :  
├── index.html  
├── assets  
│   ├── accueil  
│   │   ├── 28.png  
│   │   ├── 28compressee.png  
│   │   ├── accueil.png  
│   │   ├── collatz.jpeg  
│   │   ├── valeurs.png    
│   ├── tentatives_resolutions  
│   │   ├── arbre.jpg  
│   │   ├── code.png  
│   │   ├── code_opti.png  
│   ├── voca  
│   │   ├── 12.png  
│   │   ├── 20.png  
│   │   ├── 27.png  
│   │   ├── 30.png  
│   ├── icones  
│   │   ├── hamburger.png  
│   │   ├── icon.png  
|       ├── telecharger.png  
├── js  
│   ├── simu  
        ├── fonction.js  
        ├── app.js  
│   ├── responsive.js  
│   ├── anim.js  
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

Voici les élements redondants sur le site ainsi qu'une description de quelques spécificités techniques qui leur sont propres :  
- La navbar : alignée en haut de la page à droite, celle-ci utilise flexbox pour la mise en forme et les noms des pages auxquelles elle renvoie sont dans la police `Barlow`
- Le footer : prenant toute la largeur de la page et étant situé tout en bas de celle-ci, le footer donne accès à une page de source (`infos.html`) et à des liens externes (GitHub, Gmail et Drive) dans une police identique à la barre de navigation
- L'aspect responsive : toutes les pages admettent un aspect pouvant s'adapter aux tailles d'écrans plus petites, notamment celle des mobiles. Géré par le fichier `responsive.js` du dossier `js`, cet aspect se manifeste notamment par le changement de mise en place du texte et des images dans les sections, passant de cote à cote à à coté l'un de l'autre, mais aussi par la disparition de la barre de navigation au profit d'un menu sandwich pour les tailles d'écrans inférieures ou égales à `633px`.
- L'utilisation de la bibliothèque [`MathJax`](https://www.mathjax.org/) permettant un rendu LaTex des expressions mathématiques dont les formules sont tapées entre `\(\)` ou `\[\]`. Au fur et à mesure de l'élaboration du site, notamment de la page `tentatives-resolutions.html`, le besoin d'expressions mathématiques propres, claires et agréables à lire s'est de plus en plus fait ressentir, d'où l'utilisation de cet outil. Seul point noir : la couleur des expressiosn était bien plus foncée que l'écriture du site, ce qui cassait l'identité visuelle d'une page. Pour y remédier, j'ai mis dans le fichier `general.css` un code permettant de rendre moins foncé le tout : `.MathJax.CtxtMenu_Attached_0 { color: rgb(85 85 85); }`
- Les deux types de section : le site utilise deux types de sections distinctes : les sections de classe `presentation` et les sections de classe `carte`. Voici deux exemples pour voir la différence entre les deux :

<div align="center"><p>Section de classe "presentation"</p></div>

![Capture d'écran des sections de classe présentation comportant une image et un texte cote à cote](https://github.com/enisbeziau/Syracuse-NSI/assets/126325785/28cdc2ad-180a-429a-b64d-c517a63ee738)  

<div align="center"><p>Section de classe "carte"</p></div>

![Capture d'écran des sections de classe carte comportant du texte](https://github.com/enisbeziau/Syracuse-NSI/assets/126325785/191d2380-81f6-41aa-b35c-1bb7399a4409)

Les deux sont assez différentes dans leur style et seront utilisées dans des contextes différents : 
- Les sections `presentation` sont les plus utilisées et servent à exposer un concept ou expliquer une notion nécessitant un exemple visuel comme un graphique
- Les sections `carte` sont notamment utilisées dans la page `tentatives-resolutions.html` et servent plutot à laisser de l'espace au texte qui peut prendre toute la largeur de l'écran. Celles-ci s'avèrent très utiles lors de la démonstration de notions mathématiques comme l'unicité du cycle de longueur 3


## II. Page d'accueil `index.html`  
### 1) Informations  
Cette page sert de page d'accueil et de page principale du site.  
Dans celle-ci sont expliquées ou introduites les notions les plus fondamentales de la conjecture, telles que :

- Les origines et les divers noms
- L'application de Syracuse
- La définition rigoureuse de Syracuse par récurrence
- La définition de la suite de Syracuse compressée, très utilisées notamment dans la page `tentatives-resolutions.html`  

*Remarque* : Tous les points sont illustrés par des graphiques que j'ai crée à l'aide du simulateur de la page `simulateur.html`

### 2) Style  
Cette page utilise des sections de classe `presentation`.   
De plus, au scroll de la page ou au clique sur le bouton `decouvrir`, une légère animation d'apparition progressive des sections de présentation se lance :

![Screen-recording-2023-12-23-22 51 14](https://github.com/enisbeziau/Syracuse-NSI/assets/126325785/ccee8388-9953-46b8-8e1e-a8390536a547)

Pour ce faire, le scroll est détectée grâce à un écouteur d'évènement appliquée à la fenêtre tout entière. La fonction `apparitionSection()` est alors appelée. Celle-ci parcourt l'ensemble des sections grâce à une boucle `forEach`. Pour chaque section de la page, sa position sur celle-ci est calculée par rapport au haut de la fenêtre et si cette position est située à moins de 100px de la portion visible de l'écran, alors la classe `visible` est appliquée à la section. Cette classe est définie en css pour faire apparaître progressivement l'élément grâce à `TranslateY` et `opacity`.

## III. Page d'explication du vocabulaire `voca.html`  
### 1) Informations
Cette page sert à définir les notions plus complexes relatives à la conjecture de Syracuse telles que : 
- Le vol d'une suite de Syracuse
- Le temps de vol d'une suite de Syracuse
- L'altitude maximale d'une suite de Syracuse
- Le temps de vol en altitude d'une suite de Syracuse

### 2) Style  
Cette page utilise des sections de classe `presentation` et présente un style plutôt similaire à `index.html`  


## IV. Page de simulateur `simulateur.html`  
### 1) Description  
Cette page est surement la page la plus importante du site. En effet, celle-ci permet de 
- Taper n'importe quel nombre entier strictement positif et de pouvoir observer un graphique représentant sa suite de Syracuse sous différents repères : `linéaire` ou `semi-logarithmique`. Le premier est le répère par défaut lors de la génération du graphique et permet de respecter la physionomie de la suite, passant de très haut pic à des pics très bas. Cependant, pour des valeurs élevés, celui-ci peut devenir rapidement illisible, c'est pourquoi il est possible de changer pour un repère semi-logarithmique couvrant des ordres de grandeur variés en utilisant une échelle logarithmique sur un axe et une échelle linéaire sur l'autre
- Obtenir des informations plus précises sur la suite que l'on a généré, comme le nombre d'itération nécessaire pour atteindre 0, la valeur maximale atteinte ou encore le facteur d'expansion.
- De télécharger la suite de Syracuse du nombre généré sous forme d'un fichier `.csv` facilement importable dans Excel par exemple pour pouvoir exploiter les données
Il est également possible de faire un clic droit sur le graphique généré et de l'enregistrer sous format `.png`

### 2) Style  
Cette page reprend les élements graphiques basiques du site comme le fond bleu, la barre de navigation...  
Cependant, hormis les élements cités plus haut, la page est complètement indépendante d'un point de vu de mise en page et possède donc un fichier css dédié : `simulateur.css` rangé dans le dossier `css`. Au chargement, la page se présente très sobrement, n'étant composée que d'un titre, d'une barre d'entrée et d'un bouton. Or, la page est composée de trois autres sections : `ensemble-btn`, `zone-graphique` et `informations` qui sont par défaut en `display: none;`. Au clic sur le bouton de validation, si l'entrée est validée, ces trois sections passent en `display: block` ou `display: flex` dans le cas de la div `ensemble-btn`. Par cette action, effectuée en javascript, une zone blanche comportant le graphique voulu apparait au centre de l'écran avec au dessus deux boutons permettant de changer le repère de ce dernier et en bas une zone permettant de découvrir quelques informations sur la suite du nombre tapé, comme son nombre d'itération, sa valeur maximale d'expansion et son facteur d'expansion. Si l'entrée n'est pas validée, donc si l'entrée n'est pas un entier strictement positif, une `alert` apparait afin d'indiquer à l'utilisateur son erreur.  

### 3) Fonctionnement  
Le fonctionnement du générateur de graphique est assuré par deux fichiers javascripts : `app.js` et `fonction.js`.  
Le fichier `fonction.js` sert à définir les fonctions utilisées pour faire fonctionner l'application. On y trouve :  
- La fonction `syracuseSuite` qui, pour tout nombre passé en argument, nous renvoie un objet contenant la suite de Syracuse, le nombre d'itération et le maximum atteint
- La fonction `supprimerGraphiqueExistant` qui sert à supprimer le graphique déjà généré sur la page. Cette fonction est très utile dans le cas ou l'utilisateur veut changer de repère ou souhaite simplement générer le graphique d'un autre nombre sans avoir à recharger la page
- La fonction `creerGraphique` qui sert de pièce centrale dans le bon fonctionnement de l'application. Celle-ci prend trois arguments `ctx`, `infos` et `repere`. Le but de cette fonction est de pouvoir créer un moule le plus générique possible qui pourra s'adapter au nombre entré ou aux actions de l'utilisateur grâce aux arguments que l'on spécifie à l'appel de la fonction. En effet, plutôt que de copier coller le code nécessaire pour générer un graphique (qui est assez massif) pour au final ne modifier que la ligne du repère par exemple, il est plus judicieux de simplement supprimer le graphique préexistant et d'appeler la fonction de nouveau avec `"logarithmic"` comme valeur de l'argument `repere`. Nous échangeons donc 52 lignes pour une seule.
- La fonction `verifierEntree` qui sert à vérifier si l'entrée saisie par l'utilisateur est bien un nombre et que celui-ci est strictement positif. Sans cette vérification, l'utilisateur pourrait entrer n'importe quoi comme des chaines de caractère ou des nombres décimaux ou négatifs, ce qui poserait problème lors de la mise en graphique de la suite. La page se figerait alors et l'utilisateur n'aurait d'autre choix que de l'actualiser.  
- La fonction `exporterCSV` qui permet d'exporter les données générées sur la suite de Syracuse du nombre tapé (grâce à la fonction `syracuseSuite`) sous un format `suite_de_syracuse_de_<nombre>.csv`. Elle prend ces données en argument sous forme d'un objet. Dans un premier temps, la fonction modifie la séquence pour y ajouter des `\n` permettant un saut de ligne entre chaque valeur et rendant la lecture plus agréable lorsque le fichier csv est importé. Puis, un fichier est crée avec la méthode `encodeURI` avec un encodage `utf-8`.

Le second fichier, appelé `app.js`, sert à relier les actions de l'utilisateur et les fonctions définies au préalable dans le fichier `fonction.js`. Y sont effectuées les tâches suivantes : 
- La déclaration de constantes reliée au document html grâce à la méthode `getElementById`
- La gestion du changement de couleur des boutons changeant le repère. En effet, le repère sélectionné devient bleu pendant que le second vire au gris. Pour ce faire, on parcourt chacun des boutons de la div et on y ajoute un écouteur d'évènement sur le clic grâce à `addEventListener`. Au clic sur le bouton (1), le bouton (2) est d'abord désactivé puis le bouton (1) prend sa couleur bleu signifiant qu'il est celui qui a été cliqué
- L'écouteur d'évènement sur le clic principal, celui gérant les actions lors du clic de l'utilisateur sur le bouton de validation de l'entrée. Voici les étapes réalisées dans l'ordre pour générer le graphique :
     * On récupère l'entrée tapée avec la méthode `.value` appliquée sur la barre d'entrée.
     * On vérifie que l'entrée satisfaie bien les conditions établies dans le fonction `verifierEntree`. Si ce n'est pas le cas, on affiche un message avec `alert` indiquant à l'utulisateur que son entrée est invalide
     * Si l'entrée est valide, on récupère le contexte du canvas défini en html, on génère l'objet contenant les informations sur la suite de Syracuse du nombre entré, on vérifie qu'aucun graphique ne se trouve sur la zone voulue avec la méthode `creerGraphique`, puis l'on crée un nouveau graphique `creerGraphique(ctx, infos, "linear");`. Par défaut, le répère est linéaire, ce qui explique que le bouton correspondant soit directement coloré lors de la première génération.
     * On vérifie à l'aide d'une variable drapeau que le clic de l'utilisateur sur le bouton de validation est bien le premier. Si tel est le cas, on définie les trois sections de telle sorte qu'ils deviennent visible à l'écran comme dit précédemment. Cette variable drapeau nous sert à ne pas réappliquer un style à un élément l'ayant déjà.
     * On crée deux écouteurs d'évènement sur les boutons servant à changer le repère et on détruit puis régénère un nouveau graphique correspondant
     * On remplit les informations comme le maximum, le nbr d'itération ou le facteur d'expansion grâce aux données stockées dans l'objet
     * On crée un écouteur d'évènement sur le bouton permettant de télécharger les informations en csv
Diviser ces tâches en deux fichiers distincts permet une meilleure lisibilité et maintenabilité du code car si nous voulons modifier une fonction ou une action lors du clic, nous savons directement quel fichier gère quoi.
