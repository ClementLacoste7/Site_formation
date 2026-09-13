---
titre: "Quizz : HTML"
description: "30 questions couvrant tout le cours : texte, listes, liens, images, tableaux, formulaires, balises sémantiques et accessibilité."
slug: "quizz"
examen: "html"
niveau: "general"
ordre: 1
nombreQuizz: 2
questionsParQuizz: 15
publie: true
pool:
  - question: "Quelle balise HTML représente le titre principal d'une page ?"
    type: "unique"
    reponses:
      - texte: "<h1>"
        correcte: true
        explication: "<h1> représente le titre de plus haut niveau d'une page, généralement unique et utilisé pour le titre principal du contenu."
      - texte: "<title>"
        correcte: false
        explication: "<title> définit le titre affiché dans l'onglet du navigateur, dans l'en-tête de la page, pas le titre visible principal du contenu affiché."
      - texte: "<head>"
        correcte: false
        explication: "<head> contient les métadonnées de la page, pas le titre visible du contenu affiché à l'écran."
      - texte: "<header>"
        correcte: false
        explication: "<header> est une balise sémantique représentant l'en-tête d'une section ou de la page, pas spécifiquement le titre textuel principal."
  - question: "Combien de niveaux de titres hiérarchiques HTML existe-t-il, de h1 à h6 ?"
    type: "unique"
    reponses:
      - texte: "6"
        correcte: true
        explication: "HTML propose 6 niveaux de titres, de h1 (le plus important) à h6 (le moins important), permettant de structurer hiérarchiquement le contenu."
      - texte: "3"
        correcte: false
        explication: "HTML propose 6 niveaux de titres (h1 à h6), pas seulement 3."
      - texte: "10"
        correcte: false
        explication: "HTML propose exactement 6 niveaux de titres (h1 à h6), pas 10."
      - texte: "Un nombre illimité"
        correcte: false
        explication: "HTML limite les balises de titre à 6 niveaux (h1 à h6), ce n'est pas un nombre illimité."
  - question: "Quelle balise crée une liste à puces (non numérotée) en HTML ?"
    type: "unique"
    reponses:
      - texte: "<ul>"
        correcte: true
        explication: "<ul> (unordered list) crée une liste à puces, chaque élément étant défini par une balise <li> à l'intérieur."
      - texte: "<ol>"
        correcte: false
        explication: "<ol> (ordered list) crée une liste numérotée, pas une liste à puces."
      - texte: "<li>"
        correcte: false
        explication: "<li> définit un élément individuel d'une liste, mais c'est <ul> ou <ol> qui définit le conteneur de la liste elle-même."
      - texte: "<dl>"
        correcte: false
        explication: "<dl> définit une liste de description (termes et définitions), pas une liste à puces classique."
  - question: "Quelle balise et quel attribut permettent de créer un lien hypertexte cliquable en HTML ?"
    type: "unique"
    reponses:
      - texte: "<a href=\"...\">"
        correcte: true
        explication: "La balise <a> (ancre) avec son attribut href définit la destination du lien, rendant le texte ou l'élément englobé cliquable."
      - texte: "<link href=\"...\">"
        correcte: false
        explication: "<link> sert principalement à référencer des ressources externes comme une feuille de style CSS dans l'en-tête de la page, pas à créer un lien cliquable visible dans le contenu."
      - texte: "<href url=\"...\">"
        correcte: false
        explication: "href est un attribut, pas une balise autonome ; il doit être utilisé sur la balise <a> pour créer un lien cliquable."
      - texte: "<url src=\"...\">"
        correcte: false
        explication: "Cette syntaxe n'existe pas en HTML ; un lien cliquable utilise la balise <a> avec l'attribut href."
  - question: "Quels attributs sont indispensables sur une balise <img> pour afficher une image correctement et de façon accessible ?"
    type: "unique"
    reponses:
      - texte: "src (la source de l'image) et alt (le texte alternatif descriptif)"
        correcte: true
        explication: "src indique où trouver l'image, alt fournit une description textuelle utilisée par les lecteurs d'écran ou affichée si l'image ne peut pas se charger, un attribut essentiel pour l'accessibilité."
      - texte: "width et height uniquement, alt n'étant pas nécessaire"
        correcte: false
        explication: "Bien que width et height soient utiles pour éviter un décalage de mise en page, l'attribut alt reste essentiel pour l'accessibilité, contrairement à ce qu'affirme cette réponse."
      - texte: "href et target"
        correcte: false
        explication: "href et target sont des attributs utilisés sur la balise <a> pour les liens, pas sur <img> pour afficher une image."
      - texte: "class et id uniquement"
        correcte: false
        explication: "class et id servent au style ou au ciblage de l'élément, mais ne sont pas les attributs indispensables pour afficher correctement et accessiblement une image ; src et alt le sont."
  - question: "Pourquoi l'attribut alt d'une image est-il important pour l'accessibilité ?"
    type: "unique"
    reponses:
      - texte: "Il fournit une description textuelle de l'image, lue par les lecteurs d'écran utilisés par les personnes malvoyantes, et affichée si l'image ne se charge pas"
        correcte: true
        explication: "Sans alt, une personne utilisant un lecteur d'écran ne saurait pas ce que représente l'image, et un visiteur avec une connexion défaillante ne verrait qu'un espace vide sans indication du contenu manquant."
      - texte: "Il accélère automatiquement le chargement de l'image"
        correcte: false
        explication: "L'attribut alt n'a aucun effet sur la vitesse de chargement de l'image ; son rôle est de fournir une alternative textuelle descriptive."
      - texte: "Il chiffre automatiquement l'image pour la sécuriser"
        correcte: false
        explication: "alt n'a aucune fonction de chiffrement ; c'est un attribut de description textuelle à visée d'accessibilité."
      - texte: "Il n'a aucune utilité, c'est un attribut obsolète"
        correcte: false
        explication: "alt reste un attribut essentiel et activement recommandé pour l'accessibilité web, pas un attribut obsolète sans utilité."
  - question: "Quelles balises structurent un tableau HTML de base (lignes et cellules) ?"
    type: "unique"
    reponses:
      - texte: "<table> pour le tableau, <tr> pour chaque ligne, <td> pour chaque cellule"
        correcte: true
        explication: "<table> définit le tableau global, <tr> (table row) chaque ligne, et <td> (table data) chaque cellule de donnée à l'intérieur d'une ligne."
      - texte: "<list> pour le tableau, <item> pour chaque ligne, <cell> pour chaque cellule"
        correcte: false
        explication: "Ces balises n'existent pas en HTML standard ; les balises correctes sont table, tr et td."
      - texte: "<grid> pour le tableau, <row> pour chaque ligne, <col> pour chaque cellule"
        correcte: false
        explication: "Ces balises n'existent pas en HTML standard pour structurer un tableau ; les balises correctes sont table, tr et td."
      - texte: "<div> pour le tableau, <span> pour chaque ligne et chaque cellule"
        correcte: false
        explication: "div et span sont des conteneurs génériques sans sémantique de tableau ; un vrai tableau accessible utilise table, tr, td (et th pour les en-têtes)."
  - question: "Quelle balise est utilisée pour définir une cellule d'en-tête dans un tableau HTML, par opposition à une cellule de donnée classique ?"
    type: "unique"
    reponses:
      - texte: "<th>"
        correcte: true
        explication: "<th> (table header) définit une cellule d'en-tête, généralement affichée en gras et centrée par défaut, et sémantiquement associée aux données de sa colonne ou ligne pour l'accessibilité."
      - texte: "<td>"
        correcte: false
        explication: "<td> définit une cellule de donnée classique, pas une cellule d'en-tête ; c'est <th> qui joue ce rôle sémantique spécifique."
      - texte: "<tr>"
        correcte: false
        explication: "<tr> définit une ligne entière du tableau, pas une cellule d'en-tête individuelle."
      - texte: "<head>"
        correcte: false
        explication: "<head> est la balise d'en-tête générale du document HTML, sans rapport avec une cellule d'en-tête à l'intérieur d'un tableau."
  - question: "Quelle balise crée un champ de saisie de texte dans un formulaire HTML ?"
    type: "unique"
    reponses:
      - texte: "<input type=\"text\">"
        correcte: true
        explication: "<input> avec type=\"text\" crée un champ de saisie de texte sur une seule ligne, l'une des balises de formulaire les plus courantes."
      - texte: "<field>"
        correcte: false
        explication: "<field> n'est pas une balise HTML standard ; le champ de saisie de texte s'obtient avec <input type=\"text\">."
      - texte: "<text>"
        correcte: false
        explication: "<text> n'est pas une balise HTML standard pour un champ de formulaire ; c'est <input type=\"text\"> qui joue ce rôle."
      - texte: "<textarea>"
        correcte: false
        explication: "<textarea> crée une zone de texte multiligne, distincte du champ de saisie sur une seule ligne créé par <input type=\"text\">."
  - question: "À quoi sert l'attribut for sur une balise <label>, associé à l'attribut id d'un champ de formulaire ?"
    type: "unique"
    reponses:
      - texte: "Il associe explicitement le libellé au champ correspondant, permettant notamment de cliquer sur le libellé pour activer le champ, et d'améliorer l'accessibilité pour les lecteurs d'écran"
        correcte: true
        explication: "Quand l'attribut for du label correspond exactement à l'id du champ, cliquer sur le texte du label active ou sélectionne le champ associé, et un lecteur d'écran annonce correctement ce libellé lorsque l'utilisateur navigue vers ce champ."
      - texte: "Il change automatiquement la couleur du champ de formulaire"
        correcte: false
        explication: "L'association label/champ via for et id n'a aucun effet visuel de couleur ; son rôle est fonctionnel et d'accessibilité, pas esthétique."
      - texte: "Il rend le champ de formulaire obligatoire à remplir"
        correcte: false
        explication: "Rendre un champ obligatoire se fait avec l'attribut required sur le champ lui-même, pas avec l'association label/for."
      - texte: "Il supprime le besoin de l'attribut name sur le champ"
        correcte: false
        explication: "L'attribut name reste nécessaire pour identifier la donnée soumise avec le formulaire ; l'association for/id est un mécanisme distinct et complémentaire, pas un substitut à name."
  - question: "Quelle balise sémantique HTML représente la navigation principale d'un site (comme un menu) ?"
    type: "unique"
    reponses:
      - texte: "<nav>"
        correcte: true
        explication: "<nav> identifie sémantiquement une zone de navigation, aidant les technologies d'assistance et les moteurs de recherche à comprendre le rôle de cette section."
      - texte: "<menu>"
        correcte: false
        explication: "Bien que <menu> existe en HTML, la balise sémantique standard et largement utilisée pour représenter une navigation principale est <nav>."
      - texte: "<div class=\"navigation\">"
        correcte: false
        explication: "Une div avec une classe descriptive fonctionne visuellement mais n'apporte aucune sémantique native, contrairement à <nav> qui communique explicitement ce rôle aux technologies d'assistance."
      - texte: "<header>"
        correcte: false
        explication: "<header> représente l'en-tête d'une page ou d'une section, qui peut contenir une navigation, mais ce n'est pas lui-même la balise sémantique de navigation ; c'est <nav> qui joue ce rôle."
  - question: "Quelle est la différence sémantique entre <header>, <main> et <footer> dans une page HTML ?"
    type: "unique"
    reponses:
      - texte: "<header> représente l'en-tête introductif, <main> le contenu principal unique de la page, <footer> le pied de page"
        correcte: true
        explication: "Ces balises structurent sémantiquement la page en zones bien identifiées, aidant les technologies d'assistance à comprendre l'organisation générale du document, contrairement à des div génériques sans signification propre."
      - texte: "Ces trois balises sont strictement interchangeables, sans différence de sens"
        correcte: false
        explication: "Chacune porte une sémantique propre et distincte (en-tête, contenu principal, pied de page), ce n'est pas une simple interchangeabilité sans signification."
      - texte: "<main> ne peut apparaître qu'une seule fois dans tout le site, sur toutes les pages combinées"
        correcte: false
        explication: "<main> devrait apparaître une seule fois par page (pour représenter son contenu principal unique), mais chaque page du site peut avoir son propre <main>, ce n'est pas une limitation à l'échelle de tout le site."
      - texte: "<footer> ne peut contenir que du texte, jamais de liens"
        correcte: false
        explication: "<footer> peut tout à fait contenir des liens (comme des liens vers les mentions légales), ce n'est pas une limitation au texte seul."
  - question: "Pourquoi préfère-t-on utiliser des balises sémantiques comme <article> ou <section> plutôt qu'une simple <div> générique quand c'est pertinent ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'elles communiquent un sens structurel au navigateur, aux moteurs de recherche et aux technologies d'assistance, améliorant l'accessibilité et potentiellement le référencement, sans changer l'apparence visuelle par défaut"
        correcte: true
        explication: "Une <div> n'a aucune signification propre, alors qu'un <article> signale un contenu autonome et réutilisable (comme un article de blog), une information utile qui reste invisible visuellement mais précieuse pour la compréhension automatique du document."
      - texte: "Parce qu'elles sont visuellement plus jolies par défaut qu'une div"
        correcte: false
        explication: "Les balises sémantiques n'ont par défaut aucun style visuel particulier différent d'une div ; leur intérêt est sémantique et fonctionnel, pas esthétique."
      - texte: "Parce qu'une div ne peut techniquement contenir aucun contenu"
        correcte: false
        explication: "Une div peut parfaitement contenir n'importe quel contenu ; la différence avec les balises sémantiques porte sur le sens communiqué, pas sur la capacité à contenir du contenu."
      - texte: "Parce que les balises sémantiques chargent plus vite que les div"
        correcte: false
        explication: "La différence de performance de chargement entre ces balises est négligeable ; l'intérêt principal des balises sémantiques est leur signification structurelle, pas la vitesse."
  - question: "Qu'est-ce que l'attribut aria-label permet d'apporter à un élément interactif dont le texte visible ne suffit pas à décrire clairement son rôle, comme un bouton ne contenant qu'une icône ?"
    type: "unique"
    reponses:
      - texte: "Un texte accessible alternatif, lu par les lecteurs d'écran, décrivant le rôle ou la fonction de l'élément quand aucun texte visible suffisant n'est présent"
        correcte: true
        explication: "Un bouton de fermeture représenté uniquement par une icône × sans texte visible resterait incompréhensible pour un lecteur d'écran sans aria-label=\"Fermer\", qui fournit cette information manquante de façon accessible."
      - texte: "Il change la couleur de fond de l'élément"
        correcte: false
        explication: "aria-label n'a aucun effet visuel sur la couleur ; c'est un attribut d'accessibilité fournissant une information textuelle aux technologies d'assistance."
      - texte: "Il rend l'élément cliquable, ce qu'il ne serait pas sans cet attribut"
        correcte: false
        explication: "La possibilité de cliquer sur un élément dépend de sa nature (bouton, lien) ou de gestionnaires d'événements associés, pas de la présence d'aria-label qui concerne uniquement la description accessible."
      - texte: "Il traduit automatiquement le contenu de la page dans une autre langue"
        correcte: false
        explication: "aria-label fournit un texte accessible fixe pour un élément précis, sans rapport avec une traduction automatique globale de la page."
  - question: "Quelle est la différence entre un lien relatif et un lien absolu dans un attribut href ?"
    type: "unique"
    reponses:
      - texte: "Un lien absolu contient l'adresse complète (avec le protocole et le domaine), un lien relatif désigne un chemin par rapport à la page actuelle, sans répéter le domaine"
        correcte: true
        explication: "Un lien relatif comme /contact ou ../images/photo.jpg s'adapte automatiquement si le site change de domaine, contrairement à un lien absolu qui référence explicitement l'adresse complète, y compris le domaine."
      - texte: "Un lien relatif ne peut jamais pointer vers une autre page du même site"
        correcte: false
        explication: "C'est justement l'inverse : un lien relatif est couramment utilisé pour pointer vers d'autres pages du même site, sans avoir à répéter l'adresse complète du domaine."
      - texte: "Un lien absolu est toujours plus rapide à charger qu'un lien relatif"
        correcte: false
        explication: "La vitesse de chargement ne dépend pas du caractère relatif ou absolu du lien, mais de la ressource elle-même et de la connexion réseau."
      - texte: "Les deux types de liens ont un fonctionnement strictement identique, sans aucune différence"
        correcte: false
        explication: "Leur syntaxe et leur comportement en cas de changement de domaine diffèrent, ce n'est pas une équivalence stricte."
  - question: "Pourquoi utiliser une balise <button> plutôt qu'une <div> stylisée pour représenter un bouton cliquable dans un formulaire ?"
    type: "unique"
    reponses:
      - texte: "Parce que <button> est nativement accessible au clavier (via Tab et Entrée) et correctement annoncée par les lecteurs d'écran comme un bouton, contrairement à une div qui nécessiterait un travail supplémentaire pour offrir cette même accessibilité"
        correcte: true
        explication: "Une <div> stylisée pour ressembler à un bouton n'est ni focalisable au clavier ni annoncée comme interactive par un lecteur d'écran sans ajouts spécifiques (tabindex, rôle ARIA, gestion du clavier), alors que <button> offre tout cela nativement."
      - texte: "Parce qu'une div ne peut techniquement pas recevoir de style CSS"
        correcte: false
        explication: "Une div peut parfaitement recevoir n'importe quel style CSS ; le problème soulevé ici est l'accessibilité native, pas la possibilité de la styliser visuellement."
      - texte: "Parce que <button> est plus rapide à charger qu'une div"
        correcte: false
        explication: "La différence de performance de chargement entre ces deux éléments est négligeable ; l'argument principal en faveur de <button> est l'accessibilité native, pas la vitesse."
      - texte: "Parce qu'une div ne peut jamais être cliquée avec la souris"
        correcte: false
        explication: "Une div peut recevoir un gestionnaire de clic à la souris ; le problème concerne surtout son inaccessibilité par défaut au clavier et aux technologies d'assistance, pas l'impossibilité de la cliquer à la souris."
  - question: "Que fait l'attribut required sur un champ de formulaire HTML comme <input type=\"email\" required> ?"
    type: "unique"
    reponses:
      - texte: "Il empêche la soumission du formulaire tant que ce champ n'a pas été rempli par l'utilisateur, avec une validation native du navigateur"
        correcte: true
        explication: "Le navigateur affiche automatiquement un message d'erreur natif et bloque la soumission si un champ marqué required est laissé vide, sans nécessiter de JavaScript supplémentaire pour cette validation basique."
      - texte: "Il remplit automatiquement le champ avec une valeur par défaut"
        correcte: false
        explication: "required ne remplit rien automatiquement ; il impose seulement que l'utilisateur saisisse une valeur avant de pouvoir soumettre le formulaire."
      - texte: "Il masque le champ tant qu'il n'est pas rempli"
        correcte: false
        explication: "required n'affecte pas la visibilité du champ ; le champ reste visible et modifiable, seule la soumission est bloquée tant qu'il est vide."
      - texte: "Il chiffre automatiquement la valeur saisie dans le champ"
        correcte: false
        explication: "required est un attribut de validation de formulaire, sans aucune fonction de chiffrement de la donnée saisie."
  - question: "Quelle est la différence entre les balises <strong> et <b>, ou entre <em> et <i>, en HTML sémantique ?"
    type: "unique"
    reponses:
      - texte: "<strong> et <em> portent un sens d'importance ou d'emphase réelle (compris par les lecteurs d'écran), alors que <b> et <i> sont purement des indications visuelles (gras, italique) sans signification sémantique particulière"
        correcte: true
        explication: "Un lecteur d'écran peut par exemple insister vocalement sur un texte en <strong>, alors qu'il ignorera généralement l'aspect purement visuel de <b>, qui ne porte aucune signification au-delà de son apparence graphique."
      - texte: "<strong> et <b> sont deux balises strictement identiques, tout comme <em> et <i>"
        correcte: false
        explication: "Bien qu'elles produisent souvent un rendu visuel similaire par défaut (gras, italique), leur signification sémantique diffère, ce qui a un impact pour l'accessibilité."
      - texte: "<b> et <i> sont des balises obsolètes qui ne fonctionnent plus dans les navigateurs modernes"
        correcte: false
        explication: "<b> et <i> restent des balises HTML valides et fonctionnelles, elles ne sont pas obsolètes ; leur limite est purement sémantique, pas technique."
      - texte: "<strong> ne peut être utilisée qu'une seule fois par page"
        correcte: false
        explication: "<strong> peut être utilisée autant de fois que nécessaire dans une page, sans cette limitation à un usage unique."
---
