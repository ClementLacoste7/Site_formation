---
titre: "Quizz : JavaScript"
description: "30 questions couvrant tout le cours : variables, opérateurs, boucles, fonctions, tableaux, objets, DOM, événements, erreurs et classes."
slug: "quizz"
examen: "javascript"
niveau: "general"
ordre: 1
nombreQuizz: 2
questionsParQuizz: 15
publie: true
pool:
  - question: "Quand choisir const plutôt que let pour déclarer une variable en JavaScript ?"
    type: "unique"
    reponses:
      - texte: "Quand la variable ne sera jamais réaffectée après sa déclaration"
        correcte: true
        explication: "const empêche toute réaffectation ultérieure ; let reste nécessaire dès que la variable doit changer de valeur, par exemple dans une boucle."
      - texte: "const est simplement une syntaxe plus courte pour let, sans différence de comportement"
        correcte: false
        explication: "Les deux ont un comportement différent face à une réaffectation : const l'interdit, let l'autorise."
      - texte: "const ne fonctionne qu'avec des nombres, let avec tous les autres types"
        correcte: false
        explication: "const et let fonctionnent avec n'importe quel type de valeur ; leur différence porte sur la réaffectation, pas sur le type stocké."
      - texte: "let doit toujours être utilisé en premier, puis converti en const plus tard"
        correcte: false
        explication: "Il n'existe aucune conversion nécessaire entre let et const ; on choisit directement le bon mot-clé dès la déclaration selon le besoin de réaffectation."
  - question: "Que renvoie `typeof \"25\"` en JavaScript ?"
    type: "unique"
    reponses:
      - texte: "\"string\""
        correcte: true
        explication: "Entourée de guillemets, \"25\" est une chaîne de caractères, pas un nombre, même si son contenu ressemble à un nombre."
      - texte: "\"number\""
        correcte: false
        explication: "Le contenu ne détermine pas le type : ce sont les guillemets qui font de cette valeur une chaîne, quel que soit ce qu'elle contient."
      - texte: "\"boolean\""
        correcte: false
        explication: "boolean ne concerne que les valeurs true et false, sans rapport avec cette chaîne de caractères."
      - texte: "\"undefined\""
        correcte: false
        explication: "\"25\" est une valeur bien définie (une chaîne), pas une valeur non définie."
  - question: "Pourquoi préfère-t-on === à == en JavaScript ?"
    type: "unique"
    reponses:
      - texte: "Parce que == peut produire des résultats surprenants en convertissant silencieusement les types avant de comparer, alors que === compare sans convertir"
        correcte: true
        explication: "Des cas comme 0 == \"\" ou null == undefined renvoient true à cause des conversions implicites de ==, une source de bugs difficiles à repérer ; === évite ce piège."
      - texte: "Parce que == est plus lent à l'exécution que ==="
        correcte: false
        explication: "La différence n'est pas une question de performance, mais de fiabilité du résultat à cause des conversions de types implicites de ==."
      - texte: "Parce que == ne fonctionne pas avec les nombres"
        correcte: false
        explication: "== fonctionne avec tous les types, y compris les nombres ; le problème est qu'il convertit les types avant de comparer, ce qui donne parfois des résultats inattendus."
      - texte: "Parce que === est une syntaxe plus récente qui remplace complètement =="
        correcte: false
        explication: "Les deux opérateurs coexistent dans le langage ; === n'a pas remplacé ==, on choisit simplement === pour sa fiabilité plutôt que == qui reste disponible mais déconseillé."
  - question: "Combien de fois `for (let i = 0; i < 5; i++) { ... }` exécute-t-elle son bloc ?"
    type: "unique"
    reponses:
      - texte: "5 fois, pour i valant 0, 1, 2, 3 et 4"
        correcte: true
        explication: "La boucle continue tant que i < 5 : elle s'exécute donc pour i = 0, 1, 2, 3, 4, puis s'arrête quand i atteint 5."
      - texte: "4 fois, pour i valant 1, 2, 3 et 4"
        correcte: false
        explication: "i démarre à 0 (l'initialisation let i = 0), pas à 1 : la première exécution a donc lieu avec i = 0."
      - texte: "6 fois, pour i valant 0, 1, 2, 3, 4 et 5"
        correcte: false
        explication: "La condition i < 5 devient fausse dès que i atteint 5 : le bloc ne s'exécute pas pour i = 5."
      - texte: "Une boucle infinie, i n'étant jamais incrémenté"
        correcte: false
        explication: "i++ incrémente bien i à chaque tour ; la boucle se termine normalement une fois la condition i < 5 devenue fausse."
  - question: "Quelle est la différence essentielle entre for...of et une boucle for classique pour parcourir un tableau ?"
    type: "unique"
    reponses:
      - texte: "for...of donne directement chaque élément du tableau, sans avoir à gérer un index manuellement"
        correcte: true
        explication: "for (const element of tableau) fournit directement chaque valeur, alors qu'une boucle for classique oblige à déclarer un compteur i et à écrire tableau[i] pour accéder à l'élément."
      - texte: "for...of est plus rapide à l'exécution que for classique"
        correcte: false
        explication: "La différence n'est pas une question de vitesse d'exécution, mais de lisibilité : for...of évite la gestion manuelle d'un index."
      - texte: "for...of ne fonctionne qu'avec des nombres, jamais avec des chaînes de caractères"
        correcte: false
        explication: "for...of fonctionne avec tout objet itérable, y compris les chaînes de caractères, qu'elle parcourt caractère par caractère."
      - texte: "for classique ne peut jamais parcourir un tableau, seulement for...of"
        correcte: false
        explication: "Une boucle for classique peut parfaitement parcourir un tableau via un index manuel (tableau[i]), même si for...of est généralement plus lisible pour ce cas."
  - question: "Que renvoie une fonction JavaScript qui n'a pas d'instruction return ?"
    type: "unique"
    reponses:
      - texte: "undefined"
        correcte: true
        explication: "En l'absence de return explicite, une fonction JavaScript renvoie automatiquement undefined, quel que soit le traitement effectué à l'intérieur."
      - texte: "null"
        correcte: false
        explication: "null représente une absence de valeur volontaire assignée explicitement ; l'absence de return produit undefined, pas null."
      - texte: "Une erreur est levée à l'exécution"
        correcte: false
        explication: "Aucune erreur n'est levée : la fonction s'exécute normalement et renvoie simplement undefined."
      - texte: "0"
        correcte: false
        explication: "0 est une valeur numérique spécifique, différente d'undefined qui est la valeur par défaut renvoyée sans return."
  - question: "Quelle est la différence entre `function carre(x) { return x * x; }` et `const carre = (x) => x * x;` ?"
    type: "unique"
    reponses:
      - texte: "Ce sont deux syntaxes différentes pour un résultat équivalent : la fonction fléchée à corps concis renvoie implicitement le résultat de l'expression"
        correcte: true
        explication: "Une fonction fléchée sans accolades renvoie automatiquement la valeur de son expression, sans avoir besoin d'écrire return : les deux écritures produisent donc le même comportement pour cet exemple."
      - texte: "La fonction fléchée ne peut jamais prendre de paramètres"
        correcte: false
        explication: "Une fonction fléchée peut prendre autant de paramètres qu'une fonction classique, comme le montre justement (x) => x * x qui en prend un."
      - texte: "function carre ne peut être appelée qu'une seule fois"
        correcte: false
        explication: "Une fonction déclarée avec function peut être appelée autant de fois que nécessaire, exactement comme une fonction fléchée."
      - texte: "Les fonctions fléchées ne peuvent renvoyer que des nombres"
        correcte: false
        explication: "Une fonction fléchée peut renvoyer n'importe quel type de valeur (chaîne, objet, tableau...), pas exclusivement des nombres."
  - question: "Quelle est la différence entre map et filter sur un tableau JavaScript ?"
    type: "unique"
    reponses:
      - texte: "map transforme chaque élément et renvoie un tableau de même longueur ; filter garde seulement les éléments qui passent un test, donc un tableau potentiellement plus court"
        correcte: true
        explication: "map(fn) applique fn à chaque élément (transformation) ; filter(fn) ne garde que les éléments pour lesquels fn renvoie true (sélection), sans modifier le tableau d'origine dans les deux cas."
      - texte: "map et filter font exactement la même chose, ce sont juste deux noms différents"
        correcte: false
        explication: "Leur rôle diffère nettement : map transforme chaque élément, filter sélectionne un sous-ensemble."
      - texte: "filter modifie le tableau original, map crée toujours un nouveau tableau"
        correcte: false
        explication: "Ni map ni filter ne modifient le tableau d'origine : les deux renvoient un nouveau tableau."
      - texte: "map renvoie toujours un tableau plus court que l'original, jamais de même taille"
        correcte: false
        explication: "C'est l'inverse : map renvoie toujours un tableau de la même longueur que l'original, puisqu'il transforme chaque élément sans en supprimer aucun."
  - question: "Que fait objet.propriete par rapport à objet[\"propriete\"] en JavaScript ?"
    type: "unique"
    reponses:
      - texte: "Les deux accèdent à la même valeur ; la notation avec crochets accepte aussi un nom de propriété dynamique (une variable)"
        correcte: true
        explication: "objet.propriete et objet[\"propriete\"] accèdent à la même valeur ; la notation avec crochets devient indispensable dès que le nom de la propriété est stocké dans une variable, par exemple objet[cle]."
      - texte: "objet.propriete est plus rapide, objet[\"propriete\"] est dépréciée"
        correcte: false
        explication: "Aucune des deux notations n'est dépréciée ni plus lente en pratique ; elles coexistent parce que les crochets permettent un nom dynamique."
      - texte: "objet[\"propriete\"] ne fonctionne qu'avec des tableaux, jamais avec des objets"
        correcte: false
        explication: "La notation avec crochets fonctionne parfaitement sur les objets ; elle est même indispensable dès que le nom de propriété est dynamique."
      - texte: "Les deux notations produisent systématiquement des résultats différents"
        correcte: false
        explication: "Les deux notations accèdent exactement à la même valeur quand le nom de propriété est identique ; ce n'est pas une source de résultats différents."
  - question: "Que fait `const { nom, age } = personne;` (déstructuration) ?"
    type: "unique"
    reponses:
      - texte: "Elle crée deux variables nom et age, initialisées avec les propriétés correspondantes de l'objet personne"
        correcte: true
        explication: "La déstructuration extrait directement des propriétés d'un objet vers des variables du même nom, évitant d'écrire const nom = personne.nom; const age = personne.age; séparément."
      - texte: "Elle supprime les propriétés nom et age de l'objet personne"
        correcte: false
        explication: "La déstructuration ne modifie pas l'objet source : elle lit ses propriétés pour créer de nouvelles variables, sans rien supprimer."
      - texte: "Elle fonctionne uniquement si personne est un tableau, pas un objet"
        correcte: false
        explication: "La déstructuration avec des accolades cible justement un objet ; la déstructuration de tableau utilise une syntaxe différente, avec des crochets."
      - texte: "Elle provoque une erreur si l'objet personne contient d'autres propriétés que nom et age"
        correcte: false
        explication: "La déstructuration extrait seulement les propriétés demandées, sans erreur si l'objet en contient d'autres non extraites."
  - question: "Comment sélectionner le premier élément de la page correspondant à un sélecteur CSS donné, en JavaScript ?"
    type: "unique"
    reponses:
      - texte: "document.querySelector(sélecteur)"
        correcte: true
        explication: "querySelector renvoie le premier élément correspondant au sélecteur CSS fourni, ou null si aucun élément ne correspond."
      - texte: "document.getElementById(sélecteur CSS)"
        correcte: false
        explication: "getElementById prend spécifiquement un identifiant simple, pas un sélecteur CSS complet comme querySelector."
      - texte: "document.selectAll(sélecteur)"
        correcte: false
        explication: "selectAll n'est pas une méthode JavaScript valide ; c'est querySelector (ou querySelectorAll pour plusieurs éléments) qui joue ce rôle."
      - texte: "document.find(sélecteur)"
        correcte: false
        explication: "find n'est pas une méthode native de sélection d'éléments DOM en JavaScript ; c'est querySelector qui remplit cette fonction."
  - question: "Que fait `element.textContent = \"Nouveau texte\";` en JavaScript ?"
    type: "unique"
    reponses:
      - texte: "Elle remplace le contenu textuel affiché de l'élément par \"Nouveau texte\""
        correcte: true
        explication: "textContent lit ou modifie le texte affiché à l'intérieur de l'élément, une des façons les plus simples de mettre à jour dynamiquement le contenu d'une page."
      - texte: "Elle change la couleur du texte de l'élément"
        correcte: false
        explication: "Changer la couleur du texte se fait via la propriété de style CSS color, pas via textContent qui modifie le contenu texte lui-même, pas son apparence."
      - texte: "Elle supprime complètement l'élément de la page"
        correcte: false
        explication: "textContent modifie le contenu textuel de l'élément, il ne le supprime pas de la page."
      - texte: "Elle ajoute \"Nouveau texte\" à la suite du texte existant, sans le remplacer"
        correcte: false
        explication: "L'affectation avec = remplace entièrement le contenu existant, elle ne l'ajoute pas à la suite du texte déjà présent."
  - question: "Que fait `bouton.addEventListener(\"click\", maFonction);` ?"
    type: "unique"
    reponses:
      - texte: "Elle enregistre maFonction pour qu'elle soit appelée automatiquement à chaque clic sur bouton"
        correcte: true
        explication: "addEventListener attache une fonction de rappel à un élément : elle sera appelée par le navigateur à chaque fois que l'événement précisé se produit sur cet élément."
      - texte: "Elle déclenche immédiatement un clic sur le bouton, comme si l'utilisateur avait cliqué"
        correcte: false
        explication: "addEventListener ne déclenche rien : il enregistre une réaction pour plus tard. Déclencher un clic par code se fait avec bouton.click()."
      - texte: "Elle empêche l'utilisateur de cliquer sur le bouton"
        correcte: false
        explication: "addEventListener n'empêche aucune interaction : il ajoute une réaction supplémentaire au clic, sans désactiver le bouton."
      - texte: "Elle supprime le bouton de la page une fois cliqué"
        correcte: false
        explication: "addEventListener attache un comportement personnalisé au clic, mais ne supprime pas automatiquement le bouton à moins que la fonction associée ne le fasse explicitement."
  - question: "Que fait `try { ... } catch (erreur) { ... }` en JavaScript ?"
    type: "unique"
    reponses:
      - texte: "Il intercepte une erreur survenue dans le bloc try, sans arrêter l'exécution du script, permettant d'exécuter le bloc catch à la place"
        correcte: true
        explication: "Sans try/catch, une erreur non interceptée arrête l'exécution du script à cet endroit précis ; try/catch permet de réagir à cette erreur de façon contrôlée."
      - texte: "Il empêche toute erreur de se produire dans le bloc try"
        correcte: false
        explication: "try/catch n'empêche pas l'erreur de survenir, il permet de la gérer une fois qu'elle se produit, sans arrêter brutalement le script."
      - texte: "Il exécute systématiquement les deux blocs, try puis catch"
        correcte: false
        explication: "Le bloc catch ne s'exécute que si une erreur survient dans le bloc try ; sans erreur, seul le bloc try s'exécute normalement."
      - texte: "Il affiche automatiquement l'erreur dans une fenêtre popup à l'utilisateur"
        correcte: false
        explication: "try/catch permet de gérer l'erreur dans le code, mais n'affiche rien automatiquement à l'utilisateur sauf si le code du bloc catch le fait explicitement."
  - question: "Que fait `class Rectangle { constructor(largeur, hauteur) { this.largeur = largeur; this.hauteur = hauteur; } }` suivi de `new Rectangle(4, 5)` ?"
    type: "unique"
    reponses:
      - texte: "Elle crée une nouvelle instance de Rectangle avec largeur valant 4 et hauteur valant 5, chaque propriété étant accessible via this à l'intérieur de la classe"
        correcte: true
        explication: "new déclenche l'exécution du constructor avec les arguments fournis (4 et 5), qui les assigne respectivement aux propriétés largeur et hauteur de la nouvelle instance créée."
      - texte: "Elle modifie la classe Rectangle elle-même pour toutes les instances déjà créées"
        correcte: false
        explication: "new crée une instance indépendante ; elle ne modifie ni la classe ni les autres instances déjà créées à partir d'elle."
      - texte: "Elle provoque une erreur car Rectangle n'a pas de méthode définie"
        correcte: false
        explication: "Une classe peut parfaitement n'avoir qu'un constructor sans autre méthode ; cela ne provoque aucune erreur lors de l'instanciation."
      - texte: "Elle crée un tableau contenant les valeurs 4 et 5"
        correcte: false
        explication: "new Rectangle(4, 5) crée une instance d'objet avec des propriétés nommées (largeur, hauteur), pas un tableau simple de valeurs."
  - question: "Que fait la méthode `.push()` sur un tableau JavaScript ?"
    type: "unique"
    reponses:
      - texte: "Elle ajoute un ou plusieurs éléments à la toute fin du tableau, en modifiant le tableau d'origine"
        correcte: true
        explication: "tableau.push(element) modifie directement le tableau existant en y ajoutant l'élément à la fin, contrairement à des méthodes comme map ou filter qui renvoient un nouveau tableau sans modifier l'original."
      - texte: "Elle renvoie un nouveau tableau, sans modifier le tableau d'origine"
        correcte: false
        explication: "C'est l'inverse : push() modifie directement le tableau d'origine, contrairement à des méthodes comme map ou filter qui renvoient un nouveau tableau."
      - texte: "Elle supprime le dernier élément du tableau"
        correcte: false
        explication: "Cette action correspond à la méthode pop(), pas à push() qui ajoute un élément à la fin plutôt que d'en supprimer un."
      - texte: "Elle trie le tableau par ordre alphabétique"
        correcte: false
        explication: "Le tri d'un tableau se fait avec la méthode sort(), sans rapport avec push() qui ajoute simplement un élément en fin de tableau."
  - question: "Que fait l'opérateur de décomposition (spread) dans `const copie = [...original];` ?"
    type: "unique"
    reponses:
      - texte: "Il crée un nouveau tableau contenant une copie des éléments du tableau original, sans que les deux tableaux ne partagent la même référence"
        correcte: true
        explication: "L'opérateur ... déploie les éléments du tableau original dans un nouveau tableau littéral, créant ainsi une copie indépendante : modifier copie n'affecte pas original, contrairement à une simple affectation const copie = original qui référencerait le même tableau."
      - texte: "Il supprime tous les éléments du tableau original"
        correcte: false
        explication: "L'opérateur spread ne modifie ni ne supprime rien du tableau original ; il en lit simplement les éléments pour construire un nouveau tableau."
      - texte: "Il transforme le tableau en chaîne de caractères"
        correcte: false
        explication: "L'opérateur spread déploie les éléments dans un nouveau tableau (ou d'autres structures comme un appel de fonction), il ne les convertit pas en chaîne de caractères."
      - texte: "Il ne fonctionne qu'avec des tableaux de nombres, jamais d'autres types"
        correcte: false
        explication: "L'opérateur spread fonctionne avec des tableaux contenant n'importe quel type d'élément, pas exclusivement des nombres."
  - question: "Que fait `event.preventDefault()` dans le gestionnaire de soumission d'un formulaire HTML en JavaScript ?"
    type: "unique"
    reponses:
      - texte: "Elle empêche le rechargement de la page que déclenche normalement la soumission d'un formulaire, laissant le JavaScript gérer la suite"
        correcte: true
        explication: "Par défaut, soumettre un formulaire recharge la page ; preventDefault() annule ce comportement natif pour permettre par exemple de valider les données ou d'envoyer une requête sans rechargement complet de la page."
      - texte: "Elle empêche l'utilisateur de remplir les champs du formulaire"
        correcte: false
        explication: "preventDefault() ne touche pas à la saisie des champs, seulement au comportement automatique du navigateur déclenché par l'événement de soumission."
      - texte: "Elle supprime le formulaire de la page"
        correcte: false
        explication: "preventDefault() n'affecte pas la structure de la page ; il annule seulement l'action par défaut associée à l'événement de soumission."
      - texte: "Elle valide automatiquement toutes les données saisies dans le formulaire"
        correcte: false
        explication: "preventDefault() empêche seulement le comportement par défaut du navigateur ; la validation des données doit être codée séparément si nécessaire."
---
