Lien du site : https://enisbeziau.github.io/Syracuse-NSI  
Lien du code : [https://github.com/enisbeziau/Syracuse-NSI/releases/tag/release](https://github.com/enisbeziau/Syracuse-NSI/releases/tag/Phase1)  
Document de rendu de projet phase n°1 : https://github.com/enisbeziau/Rendu-1/blob/main/README.md
# Document de rendu de projet - Phase finale  

## I. Généralités  
Voici les élements redondants sur le site ainsi qu'une description de quelques spécificités techniques qui leur sont propres :  
- La navbar : alignée en haut de la page à droite, celle-ci utilise flexbox pour la mise en forme et les noms des pages auxquelles elle renvoie sont dans la police `Barlow`
- Le footer : prenant toute la largeur de la page et étant situé tout en bas de celle-ci, le footer donne accès à une page de source (`infos.html`) et à des liens externes (GitHub, Gmail et Drive) dans une police identique à la barre de navigation
- L'aspect responsive : toutes les pages admettent un aspect pouvant s'adapter aux tailles d'écrans plus petites, notamment celle des mobiles. Géré par le fichier `responsive.js` du dossier `js`, cet aspect se manifeste notamment par le changement de mise en place du texte et des images dans les sections, passant de cote à cote à à coté l'un de l'autre, mais aussi par la disparition de la barre de navigation au profit d'un menu sandwich pour les tailles d'écrans inférieures ou égales à `633px`.
- Les deux types de section : le site utilise deux types de sections distinctes : les sections de classe `presentation` et les sections de classe `carte`. Voici deux exemples pour voir la différence entre les deux :

<div align="center"><p>Section de classe "presentation"</p></div>

![image](https://github.com/enisbeziau/Syracuse-NSI/assets/126325785/28cdc2ad-180a-429a-b64d-c517a63ee738)  

<div align="center"><p>Section de classe "carte"</p></div>

![image](https://github.com/enisbeziau/Syracuse-NSI/assets/126325785/2acb540d-7bb5-4614-9385-50e488140d86)  

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
