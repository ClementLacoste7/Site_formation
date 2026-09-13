---
titre: "Quizz : Python"
description: "30 questions couvrant tout le cours : variables, opérateurs, conditions, boucles, fonctions, listes, chaînes, dictionnaires, erreurs et classes."
slug: "quizz"
examen: "python"
niveau: "general"
ordre: 1
nombreQuizz: 2
questionsParQuizz: 15
publie: true
pool:
  - question: "Que renvoie `type(5)` en Python ?"
    type: "unique"
    reponses:
      - texte: "<class 'int'>"
        correcte: true
        explication: "5 est un nombre entier, dont le type en Python est int."
      - texte: "<class 'float'>"
        correcte: false
        explication: "float correspond aux nombres décimaux comme 5.0, pas à l'entier 5."
      - texte: "<class 'str'>"
        correcte: false
        explication: "str correspond aux chaînes de caractères, comme \"5\" entre guillemets, pas à l'entier 5."
      - texte: "<class 'bool'>"
        correcte: false
        explication: "bool correspond aux valeurs True et False, pas à un entier comme 5."
  - question: "Que renvoie `10 // 3` en Python ?"
    type: "unique"
    reponses:
      - texte: "3"
        correcte: true
        explication: "L'opérateur // effectue une division entière, qui arrondit vers le bas le résultat de la division réelle (3,33...), donnant 3."
      - texte: "3.33"
        correcte: false
        explication: "Ce résultat correspondrait à une division classique avec /, pas à la division entière // qui renvoie un entier arrondi vers le bas."
      - texte: "1"
        correcte: false
        explication: "1 correspondrait au reste de la division (10 % 3), pas au résultat de la division entière (10 // 3)."
      - texte: "4"
        correcte: false
        explication: "// arrondit vers le bas (floor), pas vers le haut : 10 // 3 vaut 3, pas 4."
  - question: "Que renvoie `10 % 3` en Python ?"
    type: "unique"
    reponses:
      - texte: "1"
        correcte: true
        explication: "L'opérateur modulo % renvoie le reste de la division entière : 10 divisé par 3 donne 3 avec un reste de 1."
      - texte: "3"
        correcte: false
        explication: "3 correspond au quotient de la division entière (10 // 3), pas au reste (10 % 3)."
      - texte: "0"
        correcte: false
        explication: "Le reste ne serait 0 que si 10 était parfaitement divisible par 3, ce qui n'est pas le cas."
      - texte: "3.33"
        correcte: false
        explication: "Ce résultat correspondrait à une division classique avec /, pas au modulo qui renvoie un reste entier."
  - question: "Que fait la boucle `for i in range(3):` ?"
    type: "unique"
    reponses:
      - texte: "Elle répète son bloc pour i valant successivement 0, 1 puis 2"
        correcte: true
        explication: "range(3) génère les valeurs de 0 jusqu'à 3 exclu, soit 0, 1, 2, la boucle for les parcourant une par une."
      - texte: "Elle répète son bloc pour i valant successivement 1, 2 puis 3"
        correcte: false
        explication: "range(3) démarre à 0 par défaut, pas à 1 : les valeurs parcourues sont 0, 1, 2."
      - texte: "Elle répète son bloc exactement une seule fois"
        correcte: false
        explication: "range(3) génère 3 valeurs distinctes (0, 1, 2), donc la boucle s'exécute 3 fois, pas une seule."
      - texte: "Elle ne s'exécute jamais, range(3) étant vide"
        correcte: false
        explication: "range(3) génère bien 3 valeurs (0, 1, 2), ce n'est pas une séquence vide."
  - question: "Quelle est la différence entre une boucle for et une boucle while en Python ?"
    type: "unique"
    reponses:
      - texte: "for parcourt une séquence connue à l'avance (comme une liste ou un range), while répète tant qu'une condition reste vraie, sans nombre de tours fixé à l'avance"
        correcte: true
        explication: "for convient quand on connaît la collection à parcourir ; while convient mieux quand le nombre de répétitions dépend d'une condition qui évolue pendant l'exécution."
      - texte: "for et while font exactement la même chose, ce sont juste deux noms différents"
        correcte: false
        explication: "Leur usage typique diffère : parcourir une séquence connue contre répéter selon une condition évolutive, ce n'est pas une simple synonymie."
      - texte: "while ne peut jamais être utilisée avec une liste"
        correcte: false
        explication: "while peut tout à fait être utilisée pour parcourir une liste avec un index manuel, même si for reste généralement plus adapté et lisible pour ce cas."
      - texte: "for peut provoquer une boucle infinie, jamais while"
        correcte: false
        explication: "C'est plutôt l'inverse qui est le risque classique : une boucle while dont la condition ne devient jamais fausse tourne indéfiniment, un risque moins courant avec for qui parcourt une séquence de taille connue."
  - question: "Que renvoie une fonction Python qui n'a pas d'instruction return explicite ?"
    type: "unique"
    reponses:
      - texte: "None"
        correcte: true
        explication: "En l'absence de return explicite, une fonction Python renvoie automatiquement None, quel que soit le traitement effectué à l'intérieur."
      - texte: "0"
        correcte: false
        explication: "0 est une valeur numérique spécifique, différente de None qui représente l'absence de valeur renvoyée par défaut."
      - texte: "Une chaîne vide"
        correcte: false
        explication: "Une chaîne vide est une valeur de type str, différente de None qui est la valeur par défaut renvoyée sans return."
      - texte: "Une erreur est levée à l'exécution"
        correcte: false
        explication: "Aucune erreur n'est levée : la fonction s'exécute normalement et renvoie simplement None."
  - question: "Que fait `def saluer(nom=\"visiteur\"):` en Python ?"
    type: "unique"
    reponses:
      - texte: "Elle définit une fonction avec un paramètre nom ayant une valeur par défaut \"visiteur\", utilisée si aucun argument n'est fourni à l'appel"
        correcte: true
        explication: "Un paramètre avec valeur par défaut permet d'appeler la fonction sans argument (saluer() utilise \"visiteur\") ou avec un argument qui remplace cette valeur par défaut (saluer(\"Alice\"))."
      - texte: "Elle définit une fonction qui exige obligatoirement l'argument nom à chaque appel"
        correcte: false
        explication: "C'est l'inverse : la valeur par défaut rend justement cet argument optionnel, pas obligatoire à chaque appel."
      - texte: "Elle définit une variable nom valant \"visiteur\", sans fonction associée"
        correcte: false
        explication: "def introduit bien la définition d'une fonction, pas une simple déclaration de variable isolée."
      - texte: "Elle provoque une erreur de syntaxe, les valeurs par défaut n'existant pas en Python"
        correcte: false
        explication: "Les paramètres avec valeur par défaut sont une fonctionnalité standard et valide de Python, cette syntaxe ne provoque aucune erreur."
  - question: "Quelle méthode ajoute un élément à la fin d'une liste Python ?"
    type: "unique"
    reponses:
      - texte: "append()"
        correcte: true
        explication: "ma_liste.append(element) ajoute l'élément fourni à la toute fin de la liste ma_liste."
      - texte: "add()"
        correcte: false
        explication: "add() est la méthode utilisée pour les ensembles (set) en Python, pas pour les listes qui utilisent append()."
      - texte: "insert(0, element)"
        correcte: false
        explication: "insert(0, element) ajoute l'élément au tout début de la liste (index 0), pas à la fin comme append()."
      - texte: "push()"
        correcte: false
        explication: "push() n'existe pas comme méthode native des listes Python ; c'est append() qui ajoute un élément en fin de liste."
  - question: "Que renvoie `[1, 2, 3][-1]` en Python ?"
    type: "unique"
    reponses:
      - texte: "3"
        correcte: true
        explication: "L'index -1 désigne le dernier élément d'une liste en Python, ici 3."
      - texte: "1"
        correcte: false
        explication: "1 correspond à l'index 0 (le premier élément), pas à l'index -1 qui désigne le dernier élément."
      - texte: "Une erreur, les index négatifs n'existant pas en Python"
        correcte: false
        explication: "Les index négatifs sont une fonctionnalité valide de Python, permettant d'accéder aux éléments depuis la fin de la liste, sans provoquer d'erreur."
      - texte: "None"
        correcte: false
        explication: "L'index -1 sur une liste non vide renvoie bien le dernier élément existant (3), pas None."
  - question: "Que fait la compréhension de liste `[x * 2 for x in range(3)]` ?"
    type: "unique"
    reponses:
      - texte: "Elle construit la liste [0, 2, 4], en doublant chaque valeur de range(3)"
        correcte: true
        explication: "Pour chaque x parmi 0, 1, 2 (générés par range(3)), l'expression x * 2 calcule respectivement 0, 2, 4, formant la nouvelle liste."
      - texte: "Elle construit la liste [0, 1, 2], sans aucune transformation"
        correcte: false
        explication: "L'expression x * 2 double chaque valeur, le résultat n'est donc pas la liste non transformée [0, 1, 2]."
      - texte: "Elle provoque une erreur de syntaxe"
        correcte: false
        explication: "Les compréhensions de liste sont une syntaxe Python valide et courante, cette expression ne provoque aucune erreur."
      - texte: "Elle construit une liste vide"
        correcte: false
        explication: "range(3) génère bien 3 valeurs (0, 1, 2), la compréhension de liste produit donc bien 3 éléments transformés, pas une liste vide."
  - question: "Comment accède-t-on à la valeur associée à la clé \"nom\" dans le dictionnaire `personne = {\"nom\": \"Alice\", \"age\": 25}` ?"
    type: "unique"
    reponses:
      - texte: "personne[\"nom\"]"
        correcte: true
        explication: "L'accès à un dictionnaire Python se fait via des crochets contenant la clé recherchée, ici \"nom\", ce qui renvoie la valeur \"Alice\" associée."
      - texte: "personne.nom"
        correcte: false
        explication: "Cette syntaxe d'attribut avec un point n'est pas la méthode d'accès standard à un dictionnaire Python, qui utilise les crochets avec la clé."
      - texte: "personne(nom)"
        correcte: false
        explication: "Cette syntaxe d'appel de fonction ne s'applique pas à un dictionnaire ; l'accès se fait via les crochets avec la clé entre guillemets."
      - texte: "personne[0]"
        correcte: false
        explication: "Un dictionnaire Python s'indexe par ses clés (comme \"nom\"), pas par une position numérique comme le ferait une liste."
  - question: "Que fait la méthode `.get(\"cle\", \"valeur_par_defaut\")` sur un dictionnaire Python, par rapport à un accès direct avec des crochets ?"
    type: "unique"
    reponses:
      - texte: "Elle renvoie la valeur associée à la clé si elle existe, ou la valeur par défaut fournie si la clé n'existe pas, sans provoquer d'erreur"
        correcte: true
        explication: "Contrairement à un accès direct dictionnaire[\"cle\"] qui lève une erreur KeyError si la clé n'existe pas, .get() permet de fournir une valeur de repli sûre, évitant un plantage du programme."
      - texte: "Elle supprime la clé du dictionnaire après l'avoir lue"
        correcte: false
        explication: ".get() se contente de lire la valeur sans modifier le dictionnaire ; la suppression d'une clé se ferait avec une méthode distincte comme .pop() ou l'instruction del."
      - texte: "Elle provoque toujours une erreur si la clé n'existe pas, comme l'accès direct"
        correcte: false
        explication: "C'est l'inverse : l'intérêt principal de .get() est justement d'éviter l'erreur qui se produirait avec un accès direct par crochets sur une clé absente."
      - texte: "Elle fonctionne uniquement sur des listes, jamais sur des dictionnaires"
        correcte: false
        explication: ".get() est une méthode spécifique aux dictionnaires Python, pas aux listes qui utilisent d'autres méthodes d'accès."
  - question: "Que fait `\"Bonjour\".upper()` en Python ?"
    type: "unique"
    reponses:
      - texte: "Elle renvoie \"BONJOUR\", la chaîne convertie en majuscules"
        correcte: true
        explication: "La méthode .upper() sur une chaîne de caractères renvoie une nouvelle chaîne où toutes les lettres sont converties en majuscules."
      - texte: "Elle modifie directement la chaîne d'origine en majuscules"
        correcte: false
        explication: "Les chaînes de caractères sont immuables en Python : .upper() renvoie une nouvelle chaîne, elle ne modifie pas la chaîne d'origine sur place."
      - texte: "Elle renvoie \"bonjour\", sans aucune modification"
        correcte: false
        explication: ".upper() convertit bien en majuscules, le résultat est donc \"BONJOUR\", pas la chaîne inchangée en minuscules."
      - texte: "Elle provoque une erreur, upper() n'existant pas pour les chaînes"
        correcte: false
        explication: ".upper() est une méthode standard et valide des chaînes de caractères en Python, cette expression ne provoque aucune erreur."
  - question: "Que renvoie `\"Bonjour\"[0:3]` en Python ?"
    type: "unique"
    reponses:
      - texte: "\"Bon\""
        correcte: true
        explication: "Le slicing [0:3] extrait les caractères des index 0, 1 et 2 (l'index de fin 3 étant exclu), soit \"B\", \"o\", \"n\"."
      - texte: "\"Bonj\""
        correcte: false
        explication: "[0:3] extrait 3 caractères (indices 0, 1, 2), pas 4 : le résultat est \"Bon\", pas \"Bonj\"."
      - texte: "\"njo\""
        correcte: false
        explication: "Le slicing commence à l'index 0 (le tout premier caractère), pas au milieu de la chaîne."
      - texte: "Une erreur, le slicing n'existant pas pour les chaînes Python"
        correcte: false
        explication: "Le slicing (découpage) est une fonctionnalité standard et valide des chaînes Python, cette expression ne provoque aucune erreur."
  - question: "Quelle est la différence entre une liste et un tuple en Python ?"
    type: "unique"
    reponses:
      - texte: "Une liste est modifiable (mutable) après sa création, un tuple ne l'est pas (immuable)"
        correcte: true
        explication: "Une fois un tuple créé, on ne peut plus ajouter, supprimer ou modifier ses éléments directement, contrairement à une liste qui reste modifiable tout au long de son existence."
      - texte: "Un tuple ne peut contenir que des nombres, une liste peut contenir tout type de donnée"
        correcte: false
        explication: "Un tuple peut contenir n'importe quel type de donnée, tout comme une liste ; leur différence essentielle porte sur la mutabilité, pas les types acceptés."
      - texte: "Une liste ne peut contenir qu'un seul élément, un tuple peut en contenir plusieurs"
        correcte: false
        explication: "Une liste peut contenir un nombre quelconque d'éléments, tout comme un tuple ; ce n'est pas une différence de capacité entre les deux structures."
      - texte: "Les deux structures sont strictement identiques, seul le nom change"
        correcte: false
        explication: "Leur mutabilité diffère nettement (modifiable contre immuable), ce n'est pas une simple synonymie."
  - question: "Que fait le bloc `try/except` en Python ?"
    type: "unique"
    reponses:
      - texte: "Il permet d'intercepter une erreur survenue dans le bloc try, pour éviter que le programme ne s'arrête brutalement, et d'exécuter à la place le code du bloc except"
        correcte: true
        explication: "Sans try/except, une erreur non gérée (comme une division par zéro) arrête immédiatement l'exécution du programme ; try/except permet de réagir à cette erreur de façon contrôlée plutôt que de planter."
      - texte: "Il empêche définitivement toute erreur de se produire dans le programme"
        correcte: false
        explication: "try/except n'empêche pas l'erreur de se produire, il permet de la gérer une fois qu'elle survient, sans arrêter brutalement le programme."
      - texte: "Il exécute systématiquement les deux blocs, try puis except, dans tous les cas"
        correcte: false
        explication: "Le bloc except ne s'exécute que si une erreur survient dans le bloc try ; sans erreur, seul le bloc try s'exécute normalement."
      - texte: "Il ralentit systématiquement l'exécution du programme de moitié"
        correcte: false
        explication: "L'utilisation de try/except n'a pas d'impact significatif de cet ordre sur la performance ; son rôle est la gestion d'erreurs, pas l'optimisation ou la dégradation de la vitesse."
  - question: "Que fait l'instruction `raise ValueError(\"message\")` en Python ?"
    type: "unique"
    reponses:
      - texte: "Elle lève volontairement une erreur de type ValueError avec le message fourni, interrompant l'exécution normale jusqu'au bloc except le plus proche capable de la traiter"
        correcte: true
        explication: "raise permet à une fonction de signaler explicitement qu'elle ne peut pas continuer normalement, par exemple face à un argument invalide, en propageant une erreur qui devra être gérée par un try/except englobant, sinon le programme s'arrête."
      - texte: "Elle affiche simplement le message dans la console, comme print()"
        correcte: false
        explication: "raise ne se contente pas d'afficher un message : elle interrompt l'exécution normale et propage une erreur, contrairement à print() qui se contente d'un affichage sans interruption."
      - texte: "Elle termine proprement le programme sans aucune erreur affichée"
        correcte: false
        explication: "raise lève une erreur explicite, potentiellement affichée si elle n'est pas interceptée, ce n'est pas une terminaison silencieuse et sans erreur du programme."
      - texte: "Elle corrige automatiquement l'erreur détectée"
        correcte: false
        explication: "raise signale une erreur, elle ne la corrige pas ; la correction éventuelle relève du code qui intercepte cette erreur via un bloc except."
  - question: "Qu'est-ce qu'une classe en programmation orientée objet Python permet de définir ?"
    type: "unique"
    reponses:
      - texte: "Un modèle décrivant la structure (attributs) et le comportement (méthodes) commun à un ensemble d'objets, appelés instances de cette classe"
        correcte: true
        explication: "Une classe comme CompteBancaire peut définir un attribut solde et une méthode deposer(), chaque instance créée avec CompteBancaire(...) disposant alors de son propre solde indépendant, tout en partageant le même comportement défini par la classe."
      - texte: "Une simple liste de valeurs numériques"
        correcte: false
        explication: "Une classe définit une structure et un comportement réutilisables, ce n'est pas une simple liste de valeurs numériques."
      - texte: "Une boucle qui répète un bloc de code plusieurs fois"
        correcte: false
        explication: "Une classe définit un modèle d'objet, sans rapport avec une boucle de répétition comme for ou while."
      - texte: "Une fonction qui ne peut être appelée qu'une seule fois dans tout le programme"
        correcte: false
        explication: "Une classe peut être instanciée (créer des objets) autant de fois que nécessaire, ce n'est pas une limitation à un usage unique."
  - question: "Que représente le paramètre self dans une méthode de classe Python, comme `def deposer(self, montant):` ?"
    type: "unique"
    reponses:
      - texte: "Il désigne l'instance de la classe sur laquelle la méthode est appelée, permettant d'accéder à ses propres attributs (comme self.solde)"
        correcte: true
        explication: "self est automatiquement passé par Python lors de l'appel d'une méthode sur une instance (comme mon_compte.deposer(50)), il permet à l'intérieur de la méthode de référencer l'instance elle-même et ses attributs propres."
      - texte: "Il désigne le nom de la classe elle-même, jamais une instance particulière"
        correcte: false
        explication: "self désigne bien l'instance particulière sur laquelle la méthode est appelée, pas la classe en elle-même de façon générale."
      - texte: "C'est un mot-clé réservé qui ne peut jamais être renommé"
        correcte: false
        explication: "self est une convention de nommage largement adoptée, pas un mot-clé réservé imposé par le langage ; techniquement, un autre nom pourrait être utilisé, bien que ce ne soit pas recommandé."
      - texte: "Il représente toujours la valeur 0 par défaut"
        correcte: false
        explication: "self ne représente pas une valeur numérique fixe ; il référence l'instance complète de l'objet sur lequel la méthode est appelée."
  - question: "Qu'est-ce que le constructeur `__init__` d'une classe Python permet de faire ?"
    type: "unique"
    reponses:
      - texte: "Il s'exécute automatiquement à la création d'une nouvelle instance, permettant d'initialiser ses attributs de départ"
        correcte: true
        explication: "Par exemple, __init__(self, solde) peut définir self.solde = solde, donnant à chaque nouvelle instance créée avec CompteBancaire(100) un solde initial de 100, sans avoir à le définir manuellement après la création."
      - texte: "Il supprime l'instance une fois qu'elle n'est plus utilisée"
        correcte: false
        explication: "La suppression d'une instance relève d'un autre mécanisme (comme la méthode __del__ ou le ramasse-miettes de Python), pas de __init__ qui initialise au contraire une nouvelle instance."
      - texte: "Il ne peut être appelé qu'une seule fois pour toutes les instances de la classe, jamais par instance"
        correcte: false
        explication: "__init__ s'exécute automatiquement à chaque nouvelle création d'instance, pas une seule fois pour l'ensemble de la classe."
      - texte: "Il affiche automatiquement un message de bienvenue à l'écran"
        correcte: false
        explication: "__init__ n'affiche rien par défaut ; son rôle est d'initialiser les attributs de la nouvelle instance, sauf si le code qu'il contient inclut explicitement un affichage."
---
