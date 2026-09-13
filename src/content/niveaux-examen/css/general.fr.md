---
titre: "Quizz : CSS"
description: "30 questions couvrant tout le cours : sélecteurs, modèle de boîte, couleurs/texte, Flexbox, Grid, positionnement, responsive et transitions."
slug: "quizz"
examen: "css"
niveau: "general"
ordre: 1
nombreQuizz: 2
questionsParQuizz: 15
publie: true
pool:
  - question: "Quelle est la différence entre un sélecteur de classe (.exemple) et un sélecteur d'identifiant (#exemple) en CSS ?"
    type: "unique"
    reponses:
      - texte: "Une classe peut s'appliquer à plusieurs éléments et se réutilise librement, un identifiant devrait rester unique dans toute la page"
        correcte: true
        explication: "On utilise généralement des classes pour styliser un groupe d'éléments similaires de façon réutilisable, et un identifiant pour cibler un élément unique et précis de la page."
      - texte: "Un identifiant peut s'appliquer à plusieurs éléments, une classe doit rester unique"
        correcte: false
        explication: "C'est l'inverse des conventions habituelles : la classe est réutilisable sur plusieurs éléments, l'identifiant devrait rester unique."
      - texte: "Les deux sélecteurs ont exactement la même priorité (spécificité) en CSS"
        correcte: false
        explication: "Un identifiant a une spécificité CSS plus élevée qu'une classe, ce qui signifie que ses règles l'emportent généralement en cas de conflit avec une règle de classe."
      - texte: "Une classe ne peut cibler que du texte, un identifiant peut cibler n'importe quel élément"
        correcte: false
        explication: "Classes et identifiants peuvent tous deux cibler n'importe quel type d'élément HTML, sans cette distinction de nature d'élément ciblé."
  - question: "Dans le modèle de boîte CSS, dans quel ordre s'empilent les couches, de l'intérieur vers l'extérieur ?"
    type: "unique"
    reponses:
      - texte: "Contenu, padding, bordure, marge"
        correcte: true
        explication: "Le padding sépare le contenu de la bordure, la marge sépare ensuite la bordure des éléments voisins, formant les couches concentriques du modèle de boîte CSS."
      - texte: "Marge, bordure, padding, contenu"
        correcte: false
        explication: "Cet ordre est inversé : de l'intérieur vers l'extérieur, c'est le contenu qui vient en premier, la marge en dernier, pas l'inverse."
      - texte: "Bordure, contenu, marge, padding"
        correcte: false
        explication: "Cet ordre ne correspond pas à la structure réelle du modèle de boîte, où le contenu est au centre, entouré du padding, puis de la bordure, puis de la marge."
      - texte: "Padding, marge, contenu, bordure"
        correcte: false
        explication: "Cet ordre ne correspond pas à la structure réelle : le padding se trouve entre le contenu et la bordure, pas à l'extérieur de la marge."
  - question: "Que change la propriété box-sizing: border-box par rapport au comportement par défaut (content-box) ?"
    type: "unique"
    reponses:
      - texte: "La largeur déclarée (width) inclut alors le padding et la bordure, au lieu de s'ajouter en plus comme avec le comportement par défaut"
        correcte: true
        explication: "Avec border-box, une boîte déclarée avec width: 200px reste large de 200px au total même avec du padding ou une bordure ajoutés, ce qui simplifie considérablement les calculs de mise en page par rapport au comportement par défaut."
      - texte: "Elle supprime complètement le padding de l'élément"
        correcte: false
        explication: "border-box ne supprime pas le padding, il change simplement la façon dont il est comptabilisé dans la largeur totale déclarée."
      - texte: "Elle rend l'élément invisible"
        correcte: false
        explication: "border-box n'a aucun effet sur la visibilité de l'élément ; c'est une propriété qui concerne le calcul des dimensions, pas l'affichage ou non de l'élément."
      - texte: "Elle centre automatiquement l'élément sur la page"
        correcte: false
        explication: "box-sizing ne centre rien ; le centrage nécessite d'autres propriétés CSS comme margin: auto ou les techniques Flexbox/Grid."
  - question: "Quelle propriété CSS définit la couleur du texte d'un élément ?"
    type: "unique"
    reponses:
      - texte: "color"
        correcte: true
        explication: "La propriété color définit la couleur du texte affiché, distincte de background-color qui définit la couleur de fond de l'élément."
      - texte: "background-color"
        correcte: false
        explication: "background-color définit la couleur de fond de l'élément, pas la couleur de son texte, qui est définie par la propriété color."
      - texte: "text-color"
        correcte: false
        explication: "text-color n'est pas une propriété CSS valide ; la couleur du texte se définit avec la propriété color."
      - texte: "font-color"
        correcte: false
        explication: "font-color n'est pas une propriété CSS valide ; la couleur du texte se définit avec la propriété color."
  - question: "Quelle propriété CSS permet de mettre du texte en gras ?"
    type: "unique"
    reponses:
      - texte: "font-weight: bold;"
        correcte: true
        explication: "font-weight contrôle l'épaisseur de la police, bold correspondant à une valeur numérique équivalente à 700, un texte visiblement plus épais que la normale (400)."
      - texte: "font-style: bold;"
        correcte: false
        explication: "font-style contrôle plutôt l'inclinaison du texte (comme italic), pas son épaisseur qui est gérée par font-weight."
      - texte: "text-decoration: bold;"
        correcte: false
        explication: "text-decoration gère des décorations comme le soulignement (underline) ou le barré (line-through), pas la mise en gras qui relève de font-weight."
      - texte: "font-size: bold;"
        correcte: false
        explication: "font-size définit la taille de la police (en pixels, em, etc.), pas son épaisseur qui relève de font-weight."
  - question: "Quelle est la différence fondamentale entre Flexbox et Grid en CSS ?"
    type: "unique"
    reponses:
      - texte: "Flexbox aligne des éléments sur une seule dimension (une ligne ou une colonne), Grid organise lignes et colonnes simultanément, en deux dimensions"
        correcte: true
        explication: "Flexbox convient bien à l'alignement d'éléments dans une seule direction (comme une barre de navigation horizontale), tandis que Grid excelle pour des mises en page complexes nécessitant un contrôle simultané des lignes et des colonnes."
      - texte: "Flexbox et Grid font exactement la même chose, ce sont juste deux noms différents"
        correcte: false
        explication: "Leur approche diffère fondamentalement (une dimension contre deux dimensions simultanées), ce n'est pas une simple synonymie."
      - texte: "Grid ne peut être utilisé qu'avec des images, jamais du texte"
        correcte: false
        explication: "Grid peut organiser n'importe quel type de contenu, texte comme images, sans cette limitation."
      - texte: "Flexbox est plus récent que Grid dans les spécifications CSS"
        correcte: false
        explication: "Les deux technologies ont été développées à des périodes proches, mais leur différence essentielle porte sur la dimension gérée (une contre deux), pas sur leur ancienneté relative."
  - question: "Quelle est la différence entre justify-content et align-items en Flexbox ?"
    type: "unique"
    reponses:
      - texte: "justify-content répartit les enfants sur l'axe principal (horizontal par défaut), align-items les aligne sur l'axe perpendiculaire (vertical par défaut)"
        correcte: true
        explication: "Ces deux propriétés contrôlent l'alignement sur des axes différents et complémentaires : l'axe principal du conteneur flex pour justify-content, l'axe transversal (perpendiculaire) pour align-items."
      - texte: "Les deux propriétés contrôlent exactement le même axe, sans différence"
        correcte: false
        explication: "Elles contrôlent des axes différents et complémentaires (principal contre transversal), ce n'est pas une redondance."
      - texte: "align-items ne peut être utilisé qu'avec Grid, jamais avec Flexbox"
        correcte: false
        explication: "align-items est justement une propriété couramment utilisée avec Flexbox, pas exclusivement avec Grid."
      - texte: "justify-content contrôle la couleur des enfants, align-items contrôle leur taille"
        correcte: false
        explication: "Ces deux propriétés contrôlent l'alignement spatial des enfants sur leurs axes respectifs, sans rapport avec la couleur ou la taille des éléments."
  - question: "Que fait la propriété `grid-template-columns: 1fr 1fr 1fr;` sur un conteneur en display: grid ?"
    type: "unique"
    reponses:
      - texte: "Elle divise la grille en trois colonnes de largeur égale"
        correcte: true
        explication: "L'unité fr (fraction) répartit l'espace disponible proportionnellement ; trois valeurs 1fr identiques créent trois colonnes de largeur strictement égale."
      - texte: "Elle crée une seule colonne très large"
        correcte: false
        explication: "Trois valeurs 1fr distinctes créent trois colonnes séparées de largeur égale, pas une seule colonne unique."
      - texte: "Elle crée trois lignes de hauteur égale, pas des colonnes"
        correcte: false
        explication: "grid-template-columns définit spécifiquement les colonnes, pas les lignes qui seraient définies par grid-template-rows."
      - texte: "Elle provoque une erreur, l'unité fr n'existant pas en CSS"
        correcte: false
        explication: "L'unité fr est une unité CSS standard et valide, spécifiquement conçue pour les grilles CSS Grid, cette syntaxe ne provoque aucune erreur."
  - question: "Par rapport à quoi se positionne un élément avec position: absolute ?"
    type: "unique"
    reponses:
      - texte: "Par rapport à son ancêtre positionné le plus proche (relative, absolute ou fixed), ou au document entier à défaut d'un tel ancêtre"
        correcte: true
        explication: "Un élément en position absolute sort du flux normal et se positionne par rapport au premier ancêtre ayant une position autre que static, remontant jusqu'au document entier si aucun ancêtre positionné n'est trouvé."
      - texte: "Toujours par rapport à la fenêtre du navigateur, quel que soit le contexte"
        correcte: false
        explication: "Ce comportement décrit plutôt position: fixed, pas position: absolute qui se positionne par rapport à un ancêtre positionné s'il en existe un."
      - texte: "Toujours par rapport à son élément parent direct, quelle que soit sa position CSS"
        correcte: false
        explication: "Le positionnement se fait par rapport au premier ancêtre positionné rencontré en remontant l'arborescence, pas nécessairement le parent direct s'il n'a pas de position définie."
      - texte: "Jamais par rapport à un autre élément, uniquement par rapport à l'écran physique"
        correcte: false
        explication: "position: absolute se positionne bien par rapport à un ancêtre positionné (ou au document), pas par rapport à l'écran physique dans l'absolu."
  - question: "Pourquoi déclare-t-on souvent position: relative sur un conteneur, sans lui appliquer de décalage (top, left...), avant d'y placer un enfant en position: absolute ?"
    type: "unique"
    reponses:
      - texte: "Pour que cet enfant absolu se positionne par rapport à ce conteneur précis, plutôt que de remonter jusqu'au document entier faute d'ancêtre positionné"
        correcte: true
        explication: "Sans cette déclaration relative sur le conteneur, l'enfant absolute chercherait le prochain ancêtre positionné en remontant l'arborescence, ce qui pourrait le faire se positionner par rapport à un élément totalement différent de celui souhaité, comme le document entier."
      - texte: "Pour rendre le conteneur invisible à l'écran"
        correcte: false
        explication: "position: relative sans décalage n'affecte pas la visibilité du conteneur ; son rôle ici est uniquement d'établir un contexte de positionnement pour ses enfants absolus."
      - texte: "Pour chiffrer le contenu du conteneur"
        correcte: false
        explication: "position: relative n'a aucune fonction de sécurité ou de chiffrement ; c'est une propriété de mise en page CSS."
      - texte: "Pour empêcher tout enfant du conteneur d'être stylisé avec du CSS"
        correcte: false
        explication: "position: relative n'empêche en rien le style CSS des enfants ; au contraire, elle établit justement un contexte de positionnement utile pour eux."
  - question: "Que fait la règle média `@media (max-width: 600px) { ... }` ?"
    type: "unique"
    reponses:
      - texte: "Elle applique les règles CSS à l'intérieur uniquement quand la largeur de la fenêtre (ou du viewport) est de 600 pixels ou moins"
        correcte: true
        explication: "Cette requête média permet d'adapter le style d'une page selon la taille de l'écran, une technique centrale du responsive design pour offrir une mise en page adaptée aux petits écrans comme les téléphones."
      - texte: "Elle s'applique uniquement quand l'écran mesure exactement 600 pixels, ni plus ni moins"
        correcte: false
        explication: "max-width: 600px s'applique pour toute largeur inférieure ou égale à 600px, pas seulement pour une valeur exacte de 600px."
      - texte: "Elle bloque l'accès au site pour les écrans de moins de 600 pixels de large"
        correcte: false
        explication: "Une requête média adapte le style affiché, elle ne bloque jamais l'accès au contenu du site selon la taille d'écran."
      - texte: "Elle s'applique uniquement aux images, jamais au texte ou à la mise en page générale"
        correcte: false
        explication: "Une requête média peut contenir n'importe quelle règle CSS, applicable à tout type d'élément, pas exclusivement aux images."
  - question: "Quelle est la différence entre une transition CSS et une animation définie avec @keyframes ?"
    type: "unique"
    reponses:
      - texte: "Une transition adoucit un changement déclenché ailleurs (comme un survol :hover ou une classe ajoutée), une animation @keyframes définit une séquence autonome qui peut démarrer seule sans déclencheur externe"
        correcte: true
        explication: "Une transition réagit à un changement d'état déjà provoqué par autre chose (comme l'utilisateur survolant un bouton), tandis qu'une animation @keyframes peut se déclencher automatiquement au chargement de la page, sans nécessiter d'interaction préalable."
      - texte: "Les deux termes désignent exactement la même fonctionnalité CSS, sans différence"
        correcte: false
        explication: "Leur mécanisme de déclenchement diffère nettement (réaction à un changement d'état contre séquence autonome), ce n'est pas une simple synonymie."
      - texte: "Une animation @keyframes ne peut jamais se répéter en boucle"
        correcte: false
        explication: "Une animation @keyframes peut au contraire se répéter en boucle grâce à la propriété animation-iteration-count, ce n'est pas une limitation à une seule exécution."
      - texte: "Une transition ne peut affecter que la couleur, jamais d'autres propriétés"
        correcte: false
        explication: "Une transition peut affecter de nombreuses propriétés animables (comme la taille, la position, l'opacité), pas exclusivement la couleur."
  - question: "Quelle unité CSS est relative à la taille de police de l'élément parent, souvent utilisée pour créer des mises en page qui s'adaptent proportionnellement ?"
    type: "unique"
    reponses:
      - texte: "em"
        correcte: true
        explication: "1em correspond à la taille de police actuelle de l'élément (ou héritée du parent), ce qui rend les dimensions exprimées en em proportionnelles à la taille du texte environnant."
      - texte: "px"
        correcte: false
        explication: "px (pixel) est une unité fixe et absolue, indépendante de la taille de police du parent, contrairement à em qui est relative."
      - texte: "%"
        correcte: false
        explication: "% est également une unité relative, mais généralement relative aux dimensions du conteneur parent (largeur/hauteur), pas spécifiquement à sa taille de police comme em."
      - texte: "deg"
        correcte: false
        explication: "deg (degré) est une unité utilisée pour exprimer des angles, notamment en rotation CSS, sans rapport avec la taille de police."
  - question: "Que fait la propriété CSS `display: none;` sur un élément ?"
    type: "unique"
    reponses:
      - texte: "Elle retire complètement l'élément de l'affichage et de la mise en page, comme s'il n'existait pas visuellement sur la page"
        correcte: true
        explication: "Contrairement à visibility: hidden qui masque l'élément tout en conservant son espace dans la mise en page, display: none supprime entièrement l'élément visuellement, sans laisser d'espace vide à sa place."
      - texte: "Elle rend l'élément semi-transparent"
        correcte: false
        explication: "La semi-transparence se contrôle avec la propriété opacity, pas display: none qui masque complètement l'élément sans transparence graduelle."
      - texte: "Elle supprime définitivement l'élément du code HTML"
        correcte: false
        explication: "display: none masque visuellement l'élément sans le supprimer du HTML ; il reste présent dans le DOM et peut être réaffiché ultérieurement via JavaScript ou CSS."
      - texte: "Elle agrandit l'élément pour occuper tout l'écran"
        correcte: false
        explication: "display: none masque l'élément, il ne l'agrandit certainement pas pour occuper tout l'écran, ce qui serait l'inverse de son effet."
  - question: "Pourquoi le responsive design (design adaptatif) est-il devenu une pratique essentielle en développement web moderne ?"
    type: "unique"
    reponses:
      - texte: "Parce que les visiteurs consultent les sites web depuis des appareils aux tailles d'écran très variées (téléphones, tablettes, ordinateurs), et une mise en page fixe non adaptée offrirait une mauvaise expérience sur certains d'entre eux"
        correcte: true
        explication: "Un site conçu uniquement pour un écran d'ordinateur pourrait s'afficher de façon illisible ou mal organisée sur un téléphone, d'où l'importance des techniques comme les requêtes média et les unités relatives pour adapter la mise en page à chaque taille d'écran."
      - texte: "Parce que la loi impose un design responsive pour tout site web commercial"
        correcte: false
        explication: "Il n'existe pas d'obligation légale généralisée imposant le responsive design ; c'est une bonne pratique motivée par l'expérience utilisateur, pas une exigence réglementaire universelle."
      - texte: "Parce que le responsive design accélère automatiquement la vitesse du serveur"
        correcte: false
        explication: "Le responsive design concerne l'adaptation de la mise en page visuelle à la taille de l'écran, sans effet direct sur la performance du serveur lui-même."
      - texte: "Parce que sans design responsive, un site ne peut techniquement pas être indexé par les moteurs de recherche"
        correcte: false
        explication: "Un site non responsive reste techniquement indexable par les moteurs de recherche, même si son classement peut en pâtir ; le responsive design n'est pas une condition technique absolue d'indexation."
  - question: "Quelle propriété CSS permet d'espacer régulièrement les éléments enfants d'un conteneur Flexbox ou Grid, sans avoir à ajouter de marge sur chaque enfant individuellement ?"
    type: "unique"
    reponses:
      - texte: "gap"
        correcte: true
        explication: "gap: 1rem; définit un espacement uniforme entre les éléments enfants du conteneur, une alternative plus simple que d'ajouter une marge individuelle sur chaque enfant, avec le risque d'espace en trop sur les bords extérieurs."
      - texte: "margin"
        correcte: false
        explication: "margin s'applique à un élément individuel et peut créer un espacement inégal ou en trop sur les bords extérieurs du conteneur, contrairement à gap qui espace uniquement entre les enfants."
      - texte: "padding"
        correcte: false
        explication: "padding ajoute de l'espace à l'intérieur d'un élément, entre son contenu et sa bordure, pas entre les éléments enfants d'un conteneur Flexbox ou Grid."
      - texte: "spacing"
        correcte: false
        explication: "spacing n'est pas une propriété CSS valide ; la propriété correcte pour espacer les enfants d'un conteneur Flexbox ou Grid est gap."
  - question: "Que fait la propriété `flex-direction: column;` sur un conteneur en display: flex ?"
    type: "unique"
    reponses:
      - texte: "Elle organise les enfants du conteneur verticalement, l'un en dessous de l'autre, plutôt qu'horizontalement comme le comportement par défaut"
        correcte: true
        explication: "Par défaut, Flexbox aligne les enfants horizontalement (row) ; flex-direction: column inverse l'axe principal pour empiler les enfants verticalement, du haut vers le bas."
      - texte: "Elle transforme le conteneur en grille CSS Grid"
        correcte: false
        explication: "flex-direction reste une propriété Flexbox, elle ne transforme pas le conteneur en Grid, qui nécessiterait display: grid à la place de display: flex."
      - texte: "Elle empile les enfants les uns sur les autres, superposés au même endroit"
        correcte: false
        explication: "flex-direction: column empile les enfants verticalement les uns en dessous des autres, sans les superposer au même endroit comme le ferait un positionnement absolu."
      - texte: "Elle supprime tout espace entre les enfants du conteneur"
        correcte: false
        explication: "flex-direction ne contrôle pas l'espacement entre enfants, qui serait plutôt géré par gap ; elle contrôle uniquement l'axe d'alignement (horizontal ou vertical)."
  - question: "Quelle est la différence entre les pseudo-classes :hover et :focus en CSS ?"
    type: "unique"
    reponses:
      - texte: ":hover s'applique quand le curseur de la souris survole l'élément, :focus s'applique quand l'élément a le focus clavier (par exemple via la touche Tab)"
        correcte: true
        explication: "Ces deux pseudo-classes ciblent des interactions différentes : une interaction souris pour :hover, une interaction clavier ou de focus pour :focus, toutes deux importantes pour une interface accessible à différents modes d'interaction."
      - texte: "Les deux pseudo-classes ciblent exactement la même interaction, sans différence"
        correcte: false
        explication: "Elles ciblent des interactions différentes (survol souris contre focus clavier), ce n'est pas une simple redondance."
      - texte: ":focus ne peut jamais être utilisé sur un lien ou un bouton"
        correcte: false
        explication: ":focus s'applique justement couramment aux éléments interactifs comme les liens et les boutons, quand ils reçoivent le focus clavier."
      - texte: ":hover fonctionne uniquement sur les appareils tactiles, jamais avec une souris"
        correcte: false
        explication: "C'est l'inverse : :hover est conçu pour les interactions à la souris (survol) et se comporte différemment ou de façon moins prévisible sur les appareils tactiles sans souris."
  - question: "Que fait la propriété `overflow: hidden;` sur un élément dont le contenu dépasse ses dimensions définies ?"
    type: "unique"
    reponses:
      - texte: "Elle masque tout contenu qui dépasse les limites de la boîte de l'élément, sans ajouter de barre de défilement"
        correcte: true
        explication: "Contrairement à overflow: scroll ou auto qui ajoutent une barre de défilement pour accéder au contenu débordant, overflow: hidden masque simplement ce qui dépasse, sans aucun moyen visuel d'y accéder."
      - texte: "Elle agrandit automatiquement l'élément pour que tout le contenu soit visible"
        correcte: false
        explication: "C'est l'inverse : overflow: hidden ne redimensionne pas l'élément, il masque ce qui dépasse de sa taille définie."
      - texte: "Elle ajoute toujours une barre de défilement visible"
        correcte: false
        explication: "Ce comportement correspond à overflow: scroll ou auto, pas à overflow: hidden qui masque le débordement sans offrir de barre de défilement."
      - texte: "Elle rend l'élément totalement invisible, y compris son contenu qui ne déborde pas"
        correcte: false
        explication: "overflow: hidden n'affecte que le contenu qui dépasse les limites de la boîte ; le contenu qui rentre normalement dans l'élément reste parfaitement visible."
---
