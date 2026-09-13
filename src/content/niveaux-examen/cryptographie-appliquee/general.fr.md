---
titre: "Quizz : Cryptographie appliquée"
description: "30 questions couvrant tout le cours : chiffrer/hacher/encoder, fonctions de hachage, cassage de hash, salage, symétrique vs asymétrique, TLS."
slug: "quizz"
examen: "cryptographie-appliquee"
niveau: "general"
ordre: 1
nombreQuizz: 2
questionsParQuizz: 15
publie: true
pool:
  - question: "Quelle est la différence essentielle entre chiffrer, hacher et encoder une donnée ?"
    type: "unique"
    reponses:
      - texte: "Chiffrer est réversible avec la bonne clé, hacher est irréversible par conception, encoder est réversible sans clé et ne vise pas la sécurité"
        correcte: true
        explication: "Le chiffrement protège la confidentialité et se déchiffre avec une clé ; le hachage produit une empreinte à sens unique sans possibilité de retour ; l'encodage (comme Base64) transforme simplement un format de représentation, sans aucun objectif de sécurité et sans clé nécessaire pour l'inverser."
      - texte: "Ces trois termes désignent exactement la même opération, avec des noms différents"
        correcte: false
        explication: "Leurs propriétés diffèrent fondamentalement (réversibilité, objectif de sécurité), ce n'est pas une simple synonymie."
      - texte: "Le hachage est réversible avec la bonne clé, le chiffrement ne l'est jamais"
        correcte: false
        explication: "C'est l'inverse : le chiffrement est réversible avec la bonne clé, alors que le hachage est conçu pour être irréversible par nature."
      - texte: "L'encodage nécessite toujours un mot de passe secret pour être inversé"
        correcte: false
        explication: "L'encodage comme Base64 ne nécessite aucun secret pour être inversé ; c'est une simple transformation de représentation, pas un mécanisme de sécurité."
  - question: "Pourquoi l'encodage Base64 ne doit-il jamais être considéré comme une mesure de sécurité pour protéger une donnée sensible ?"
    type: "unique"
    reponses:
      - texte: "Parce que le Base64 est parfaitement réversible sans aucun secret, n'importe qui pouvant décoder instantanément la donnée d'origine sans clé ni mot de passe"
        correcte: true
        explication: "Base64 transforme simplement des données binaires en texte imprimable pour faciliter leur transport (par exemple dans un e-mail ou une URL), mais toute donnée encodée en Base64 se décode instantanément par n'importe qui, sans secret requis, ce qui n'apporte aucune protection de confidentialité."
      - texte: "Parce que le Base64 corrompt systématiquement les données qu'il encode"
        correcte: false
        explication: "Base64 est une transformation fidèle et réversible, elle ne corrompt pas les données ; le problème est qu'elle n'apporte aucune confidentialité, pas qu'elle les endommage."
      - texte: "Parce que le Base64 ne fonctionne qu'avec des données textuelles, jamais binaires"
        correcte: false
        explication: "Base64 est justement conçu pour encoder des données binaires en texte, ce n'est pas une limitation aux données déjà textuelles."
      - texte: "Parce que le Base64 est plus lent à calculer que n'importe quel algorithme de chiffrement"
        correcte: false
        explication: "La vitesse de calcul n'est pas la raison pour laquelle Base64 est inadapté à la sécurité ; c'est son absence totale de confidentialité (réversible sans secret) qui pose problème."
  - question: "Qu'est-ce qu'une fonction de hachage cryptographique produit à partir d'une donnée d'entrée ?"
    type: "unique"
    reponses:
      - texte: "Une empreinte de taille fixe, différente pour chaque donnée d'entrée différente, et de façon irréversible"
        correcte: true
        explication: "Quelle que soit la taille de la donnée d'entrée (un mot ou un fichier entier), la fonction de hachage produit toujours une sortie de longueur fixe, déterministe (la même entrée donne toujours la même sortie), sans possibilité de retrouver l'entrée à partir de la seule sortie."
      - texte: "Une copie chiffrée de la donnée, déchiffrable avec la clé appropriée"
        correcte: false
        explication: "Cette description correspond au chiffrement, pas au hachage qui ne produit jamais une copie déchiffrable, même avec une clé quelconque."
      - texte: "Une version compressée mais toujours reconstructible de la donnée d'origine"
        correcte: false
        explication: "Le hachage n'est pas une compression réversible ; l'empreinte produite ne permet jamais de reconstruire la donnée d'origine."
      - texte: "Une traduction de la donnée dans une autre langue"
        correcte: false
        explication: "Le hachage est une transformation cryptographique, sans aucun rapport avec une traduction linguistique."
  - question: "Que signifie la propriété d'effet avalanche d'une bonne fonction de hachage ?"
    type: "unique"
    reponses:
      - texte: "Une modification même minime de la donnée d'entrée (comme un seul caractère changé) produit une empreinte de sortie complètement différente et imprévisible"
        correcte: true
        explication: "Cette propriété empêche de deviner la donnée d'origine en observant des similarités entre empreintes ; deux entrées presque identiques doivent produire des empreintes de sortie qui semblent totalement indépendantes l'une de l'autre."
      - texte: "Le temps de calcul du hachage augmente proportionnellement à la taille de l'entrée, sans limite"
        correcte: false
        explication: "L'effet avalanche concerne la sensibilité du résultat à un changement d'entrée, pas la relation entre taille d'entrée et temps de calcul."
      - texte: "Deux entrées différentes produisent nécessairement la même empreinte de sortie"
        correcte: false
        explication: "C'est l'inverse d'une bonne propriété de hachage : deux entrées différentes doivent produire des empreintes différentes (une collision serait un défaut, pas un objectif recherché)."
      - texte: "L'empreinte de sortie devient de plus en plus longue à mesure que l'entrée grandit"
        correcte: false
        explication: "Une fonction de hachage produit toujours une sortie de taille fixe, indépendamment de la taille de l'entrée ; ce n'est pas ce que décrit l'effet avalanche."
  - question: "Pourquoi stocker le hachage d'un mot de passe plutôt que le mot de passe en clair protège-t-il les utilisateurs en cas de fuite de la base de données ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'un attaquant récupérant la base obtient des empreintes irréversibles plutôt que les mots de passe originaux directement exploitables"
        correcte: true
        explication: "Même en cas de fuite complète de la base de données, l'attaquant doit encore tenter de casser chaque hachage (avec un succès variable selon la robustesse de l'algorithme et du mot de passe) plutôt que de disposer immédiatement du mot de passe en clair prêt à l'emploi."
      - texte: "Parce que le hachage empêche techniquement toute fuite de base de données"
        correcte: false
        explication: "Le hachage ne prévient pas la fuite elle-même (qui dépend d'autres mesures de sécurité comme le contrôle d'accès), il limite seulement l'exploitation des mots de passe une fois la fuite survenue."
      - texte: "Parce que le hachage chiffre la base de données dans son intégralité"
        correcte: false
        explication: "Le hachage s'applique spécifiquement aux mots de passe, pas à l'intégralité de la base de données, qui pourrait nécessiter un chiffrement séparé pour d'autres colonnes sensibles."
      - texte: "Parce qu'un mot de passe haché ne peut jamais être deviné par un attaquant, quelle que soit sa complexité"
        correcte: false
        explication: "Un mot de passe faible ou courant reste vulnérable même haché, notamment via des tables précalculées ou une attaque par force brute ; le hachage réduit le risque, il ne l'élimine pas totalement."
  - question: "Qu'est-ce qu'une table arc-en-ciel (rainbow table) est utilisée pour accomplir ?"
    type: "unique"
    reponses:
      - texte: "Retrouver rapidement un mot de passe à partir de son empreinte de hachage, grâce à une table précalculée de correspondances entre mots de passe courants et leurs empreintes"
        correcte: true
        explication: "Plutôt que de calculer en temps réel le hachage de chaque tentative, un attaquant consulte une table déjà précalculée pour retrouver un mot de passe correspondant à un hachage volé, une technique bien plus rapide qu'une force brute classique, mais rendue inefficace par un sel bien implémenté."
      - texte: "Chiffrer un mot de passe avec un algorithme particulièrement robuste"
        correcte: false
        explication: "Une table arc-en-ciel est un outil d'attaque de cassage de hachage, pas une technique défensive de chiffrement."
      - texte: "Générer automatiquement des mots de passe robustes pour les utilisateurs"
        correcte: false
        explication: "Une table arc-en-ciel sert à casser des hachages existants, pas à générer de nouveaux mots de passe robustes."
      - texte: "Vérifier si un site utilise correctement HTTPS"
        correcte: false
        explication: "Une table arc-en-ciel concerne le cassage de hachages de mots de passe, sans rapport avec la vérification de la configuration HTTPS d'un site."
  - question: "Qu'est-ce que le salage (salting) ajoute avant de hacher un mot de passe ?"
    type: "unique"
    reponses:
      - texte: "Une valeur aléatoire unique par mot de passe, garantissant que deux mots de passe identiques produisent des empreintes de hachage différentes"
        correcte: true
        explication: "Sans sel, deux utilisateurs avec le même mot de passe auraient exactement la même empreinte, facilitant certaines attaques comme les tables arc-en-ciel ; le sel, unique par utilisateur, neutralise cette faiblesse en rendant chaque empreinte distincte même pour un mot de passe identique."
      - texte: "Une clé secrète partagée entre tous les utilisateurs du site"
        correcte: false
        explication: "Le sel n'est pas une clé secrète partagée ; c'est une valeur aléatoire propre à chaque mot de passe individuel, généralement stockée avec le hachage lui-même sans besoin d'être secrète."
      - texte: "Une compression du mot de passe avant hachage pour réduire l'espace de stockage nécessaire"
        correcte: false
        explication: "Le sel n'a pas de rôle de compression ; son objectif est de rendre chaque hachage unique, pas de réduire la taille des données stockées."
      - texte: "Un second facteur d'authentification demandé à l'utilisateur"
        correcte: false
        explication: "Le sel est une valeur technique invisible pour l'utilisateur, générée et gérée côté serveur, pas un facteur d'authentification supplémentaire saisi par l'utilisateur."
  - question: "Pourquoi un algorithme de hachage volontairement lent comme bcrypt est-il recommandé pour les mots de passe, plutôt qu'un algorithme rapide comme SHA-256 seul ?"
    type: "unique"
    reponses:
      - texte: "Parce que la lenteur délibérée de bcrypt ralentit considérablement les tentatives de cassage par force brute, alors qu'un algorithme rapide comme SHA-256 permet à un attaquant de tester un très grand nombre de combinaisons par seconde"
        correcte: true
        explication: "SHA-256 est conçu pour être rapide, un avantage pour vérifier l'intégrité d'un fichier mais un inconvénient pour le hachage de mots de passe, car cela facilite les attaques par force brute massives ; bcrypt introduit un coût de calcul volontaire (paramétrable) qui rend chaque tentative de cassage beaucoup plus coûteuse."
      - texte: "Parce que SHA-256 ne peut techniquement pas être utilisé pour hacher un mot de passe"
        correcte: false
        explication: "SHA-256 peut techniquement être utilisé pour hacher un mot de passe, mais ce n'est pas recommandé à cause de sa rapidité, qui facilite les attaques par force brute, contrairement à un algorithme volontairement lent comme bcrypt."
      - texte: "Parce que bcrypt chiffre le mot de passe avec une clé secrète intégrée à l'algorithme"
        correcte: false
        explication: "bcrypt reste un algorithme de hachage à sens unique, il ne chiffre pas de façon réversible avec une clé secrète intégrée ; son intérêt est la lenteur volontaire du calcul, pas un mécanisme de clé."
      - texte: "Parce que bcrypt produit des empreintes plus courtes que SHA-256"
        correcte: false
        explication: "La longueur de l'empreinte produite n'est pas la raison de la préférence pour bcrypt ; c'est le coût de calcul volontairement élevé qui protège mieux contre la force brute."
  - question: "Quelle est la différence fondamentale entre le chiffrement symétrique et le chiffrement asymétrique ?"
    type: "unique"
    reponses:
      - texte: "Le chiffrement symétrique utilise la même clé pour chiffrer et déchiffrer, l'asymétrique utilise une paire de clés distinctes (publique et privée)"
        correcte: true
        explication: "En symétrique, l'expéditeur et le destinataire doivent partager secrètement la même clé au préalable ; en asymétrique, une clé publique peut chiffrer un message que seule la clé privée correspondante, jamais partagée, peut déchiffrer."
      - texte: "Le chiffrement asymétrique n'utilise aucune clé, contrairement au symétrique"
        correcte: false
        explication: "Le chiffrement asymétrique utilise justement une paire de clés, ce n'est pas un chiffrement sans clé."
      - texte: "Le chiffrement symétrique est toujours plus sûr que l'asymétrique, quelle que soit la situation"
        correcte: false
        explication: "Les deux approches ont des usages complémentaires, souvent combinés en pratique (comme dans TLS) ; aucune n'est universellement plus sûre que l'autre dans l'absolu."
      - texte: "Ces deux termes désignent exactement la même technique, avec un vocabulaire différent"
        correcte: false
        explication: "Leur gestion des clés diffère fondamentalement, ce n'est pas une simple synonymie."
  - question: "Pourquoi le chiffrement asymétrique est-il généralement considéré comme plus lent que le chiffrement symétrique pour chiffrer de gros volumes de données ?"
    type: "unique"
    reponses:
      - texte: "Parce que les opérations mathématiques sous-jacentes au chiffrement asymétrique (comme l'exponentiation modulaire sur de grands nombres) sont intrinsèquement plus coûteuses en calcul que les opérations utilisées en chiffrement symétrique"
        correcte: true
        explication: "C'est précisément pour cette raison que les protocoles comme TLS utilisent le chiffrement asymétrique seulement pour l'échange initial d'une clé de session symétrique, puis basculent vers le chiffrement symétrique, plus rapide, pour chiffrer le volume principal des données échangées."
      - texte: "Parce que le chiffrement asymétrique nécessite une connexion Internet plus rapide"
        correcte: false
        explication: "La lenteur relative du chiffrement asymétrique vient de sa complexité mathématique de calcul, pas d'une exigence de connexion réseau particulière."
      - texte: "Parce que le chiffrement asymétrique n'est disponible que sur du matériel ancien"
        correcte: false
        explication: "Le chiffrement asymétrique est disponible et largement utilisé sur du matériel moderne ; sa lenteur relative vient de sa nature mathématique, pas d'une limitation matérielle liée à l'ancienneté."
      - texte: "Parce que le chiffrement asymétrique chiffre systématiquement deux fois plus de données que le symétrique"
        correcte: false
        explication: "Le volume de données chiffrées ne dépend pas du type d'algorithme choisi ; la lenteur relative de l'asymétrique vient de la complexité de ses opérations mathématiques, pas d'un doublement systématique du volume traité."
  - question: "Pourquoi TLS combine-t-il chiffrement asymétrique et chiffrement symétrique plutôt que d'utiliser uniquement l'un des deux ?"
    type: "unique"
    reponses:
      - texte: "Il utilise l'asymétrique pour échanger de façon sécurisée une clé de session, puis le symétrique, plus rapide, pour chiffrer le volume principal des données échangées durant la session"
        correcte: true
        explication: "Cette combinaison tire parti des forces de chaque approche : l'asymétrique résout le problème de l'échange initial sécurisé d'une clé sans jamais l'avoir partagée au préalable, tandis que le symétrique assure ensuite un chiffrement performant du trafic principal, souvent volumineux."
      - texte: "Parce que le chiffrement asymétrique seul est totalement cassé et ne peut plus être utilisé"
        correcte: false
        explication: "Le chiffrement asymétrique reste robuste et pleinement utilisé, notamment pour l'échange initial de clé ; il n'est pas cassé, seulement moins performant pour chiffrer de gros volumes de données en continu."
      - texte: "Parce que la loi impose l'utilisation des deux types de chiffrement dans tout protocole web"
        correcte: false
        explication: "Il n'existe pas d'obligation légale de ce type ; le choix de combiner les deux approches dans TLS est une décision technique motivée par la performance et la sécurité, pas une exigence réglementaire."
      - texte: "Parce que le chiffrement symétrique seul ne peut techniquement pas être utilisé sur Internet"
        correcte: false
        explication: "Le chiffrement symétrique fonctionne parfaitement sur Internet ; le problème qu'il pose seul est l'échange initial sécurisé de la clé partagée, résolu par l'usage complémentaire de l'asymétrique."
  - question: "Dans le déroulement simplifié d'une poignée de main TLS (handshake), à quoi sert l'échange initial reposant sur la cryptographie asymétrique ?"
    type: "unique"
    reponses:
      - texte: "À permettre au client et au serveur de s'accorder de façon sécurisée sur une clé de session symétrique commune, sans jamais la transmettre en clair sur le réseau"
        correcte: true
        explication: "Grâce aux propriétés de la cryptographie asymétrique (ou d'un échange de clé comme Diffie-Hellman), les deux parties peuvent établir une clé secrète partagée sans qu'un tiers en écoute sur le réseau ne puisse la déduire, même en observant l'intégralité de l'échange."
      - texte: "À vérifier que le mot de passe de l'utilisateur est correct"
        correcte: false
        explication: "La poignée de main TLS établit une connexion chiffrée entre le client et le serveur ; la vérification d'un mot de passe utilisateur, si nécessaire, se ferait ensuite au niveau applicatif, une fois la connexion sécurisée établie."
      - texte: "À télécharger l'intégralité du contenu de la page web demandée"
        correcte: false
        explication: "Le téléchargement du contenu de la page se fait après l'établissement de la connexion TLS, pas pendant la poignée de main elle-même qui ne fait qu'établir le canal sécurisé."
      - texte: "À attribuer une nouvelle adresse IP au client"
        correcte: false
        explication: "L'attribution d'adresse IP est un processus réseau distinct (DHCP par exemple), sans rapport avec la poignée de main TLS qui concerne l'établissement du chiffrement."
  - question: "Qu'est-ce qu'un certificat TLS auto-signé (self-signed) implique, comparé à un certificat signé par une autorité de certification reconnue ?"
    type: "unique"
    reponses:
      - texte: "Aucun tiers de confiance externe ne garantit l'identité du serveur, ce qui pousse généralement le navigateur à afficher un avertissement de sécurité pour un service accessible publiquement"
        correcte: true
        explication: "Un certificat auto-signé permet techniquement d'établir une connexion chiffrée, mais sans la garantie d'identité qu'apporte la signature d'une autorité de certification reconnue par les navigateurs, ce qui le rend généralement réservé à des usages internes contrôlés plutôt qu'à un service public."
      - texte: "Il ne permet techniquement aucun chiffrement de la connexion"
        correcte: false
        explication: "Un certificat auto-signé permet parfaitement d'établir une connexion chiffrée ; le problème concerne uniquement la vérification d'identité, pas la capacité de chiffrement elle-même."
      - texte: "Il expire automatiquement après 24 heures, contrairement à un certificat signé par une autorité reconnue"
        correcte: false
        explication: "La durée de validité d'un certificat auto-signé est configurable comme n'importe quel autre certificat, ce n'est pas une limitation universelle et automatique de 24 heures."
      - texte: "Il ne peut être utilisé que pour du courrier électronique, jamais pour un site web"
        correcte: false
        explication: "Un certificat auto-signé peut être utilisé pour divers usages, y compris un serveur web, pas exclusivement pour la messagerie électronique."
  - question: "Pourquoi un mot de passe complexe et long reste-t-il important malgré l'utilisation d'un algorithme de hachage robuste comme bcrypt ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'un mot de passe simple ou courant reste exposé à une attaque par dictionnaire (essayer des mots de passe fréquents) même avec un hachage lent, alors qu'un mot de passe complexe augmente considérablement le nombre de tentatives nécessaires pour le deviner"
        correcte: true
        explication: "Un algorithme comme bcrypt ralentit chaque tentative individuelle, mais si le mot de passe figure parmi les plus courants, un dictionnaire ciblé de quelques milliers d'entrées suffirait à le retrouver malgré cette lenteur ; la complexité du mot de passe reste donc un facteur de protection indépendant et complémentaire à la robustesse de l'algorithme de hachage."
      - texte: "Parce que bcrypt ne fonctionne techniquement qu'avec des mots de passe complexes"
        correcte: false
        explication: "bcrypt fonctionne techniquement avec n'importe quel mot de passe, simple ou complexe ; c'est la sécurité globale qui dépend de la combinaison des deux facteurs, pas une limitation technique de l'algorithme lui-même."
      - texte: "Parce qu'un mot de passe complexe accélère le calcul du hachage bcrypt"
        correcte: false
        explication: "La complexité du mot de passe n'affecte pas la vitesse de calcul de bcrypt, qui applique un coût de calcul fixe et configurable indépendant du contenu du mot de passe."
      - texte: "Parce que bcrypt ne peut hacher que des mots de passe de moins de huit caractères"
        correcte: false
        explication: "bcrypt peut hacher des mots de passe de longueurs variées, sans cette limitation stricte de huit caractères maximum."
  - question: "Qu'est-ce que le chiffrement de bout en bout (end-to-end encryption) garantit spécifiquement, en plus d'un simple chiffrement en transit classique comme TLS ?"
    type: "unique"
    reponses:
      - texte: "Que seuls les interlocuteurs finaux de la communication possèdent la clé permettant de déchiffrer le contenu, même le fournisseur du service intermédiaire (comme un serveur de messagerie) ne pouvant pas le lire en clair"
        correcte: true
        explication: "Avec TLS classique, le serveur intermédiaire peut généralement déchiffrer et relire le contenu à un moment donné (par exemple pour le stocker) ; en chiffrement de bout en bout, ce serveur relaie le contenu déjà chiffré sans jamais pouvoir en lire le contenu réel, seuls les destinataires finaux le pouvant."
      - texte: "Que la connexion est deux fois plus rapide qu'avec TLS seul"
        correcte: false
        explication: "Le chiffrement de bout en bout n'apporte pas de gain de vitesse particulier ; son intérêt est une garantie de confidentialité renforcée vis-à-vis même du fournisseur du service intermédiaire."
      - texte: "Que le message ne peut être lu qu'une seule fois avant de s'autodétruire"
        correcte: false
        explication: "L'autodestruction après lecture est une fonctionnalité distincte parfois proposée par certaines applications, pas une propriété intrinsèque du chiffrement de bout en bout lui-même."
      - texte: "Que le message est automatiquement traduit dans la langue du destinataire"
        correcte: false
        explication: "Le chiffrement de bout en bout concerne la confidentialité du contenu, sans rapport avec une éventuelle traduction linguistique automatique."
  - question: "Pourquoi un algorithme de chiffrement propriétaire et non public, conçu en interne par une entreprise sans être soumis à un examen externe, est-il généralement déconseillé, contrairement à un algorithme standard largement étudié comme AES ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'un algorithme non soumis à l'examen public de la communauté cryptographique risque de contenir des failles non détectées, alors qu'un algorithme comme AES a survécu à des années d'analyse rigoureuse par de nombreux experts indépendants sans faille majeure découverte"
        correcte: true
        explication: "Ce principe, parfois résumé par l'idée qu'il ne faut jamais faire confiance à la sécurité par l'obscurité, explique pourquoi la communauté cryptographique privilégie des algorithmes publiquement documentés et testés par de nombreux chercheurs indépendants plutôt que des solutions maison non vérifiées, dont la robustesse réelle reste incertaine."
      - texte: "Parce qu'un algorithme propriétaire est toujours plus lent qu'un algorithme public comme AES"
        correcte: false
        explication: "La vitesse d'exécution n'est pas la préoccupation principale ici ; le risque concerne l'absence de vérification indépendante de la robustesse réelle de l'algorithme, pas sa performance."
      - texte: "Parce que la loi interdit l'utilisation de tout algorithme de chiffrement non standardisé"
        correcte: false
        explication: "Il n'existe pas d'interdiction légale universelle de ce type ; la recommandation de privilégier des algorithmes publics et éprouvés relève d'une bonne pratique de sécurité, pas d'une obligation légale généralisée."
      - texte: "Parce qu'AES est un algorithme récent alors que les algorithmes propriétaires sont toujours plus anciens"
        correcte: false
        explication: "L'ancienneté relative n'est pas le facteur en jeu ; c'est l'examen public et l'analyse rigoureuse par la communauté qui distinguent la fiabilité d'un algorithme comme AES d'une solution propriétaire non vérifiée, quelle que soit sa date de conception."
  - question: "Qu'est-ce qu'une collision de hachage, en cryptographie ?"
    type: "unique"
    reponses:
      - texte: "Le fait que deux entrées différentes produisent exactement la même empreinte de sortie, un événement qu'une bonne fonction de hachage doit rendre extrêmement improbable à provoquer volontairement"
        correcte: true
        explication: "Une fonction de hachage cryptographique robuste doit rendre pratiquement impossible pour un attaquant de trouver délibérément deux entrées différentes produisant la même empreinte, une propriété essentielle notamment pour garantir l'intégrité des données ou la sécurité des signatures numériques."
      - texte: "Le fait que deux fonctions de hachage différentes produisent le même algorithme"
        correcte: false
        explication: "Une collision concerne deux entrées différentes produisant la même sortie pour une même fonction de hachage, pas une comparaison entre deux algorithmes de hachage distincts."
      - texte: "Une erreur qui empêche complètement le calcul du hachage"
        correcte: false
        explication: "Une collision n'empêche pas le calcul du hachage ; elle décrit au contraire le cas où ce calcul aboutit, par malchance ou par attaque délibérée, au même résultat pour deux entrées distinctes."
      - texte: "Le chiffrement simultané de deux fichiers différents avec la même clé"
        correcte: false
        explication: "Une collision concerne le hachage, pas le chiffrement ; ce sont deux opérations cryptographiques distinctes avec des propriétés différentes."
  - question: "Pourquoi la découverte de collisions pratiques dans l'algorithme de hachage MD5 a-t-elle conduit à son abandon pour des usages de sécurité sensibles, comme les certificats numériques ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'un attaquant capable de générer une collision pourrait potentiellement forger un document ou un certificat malveillant partageant la même empreinte qu'un document légitime, trompant ainsi un système qui se fierait uniquement à cette empreinte pour vérifier l'authenticité"
        correcte: true
        explication: "Une fois que des collisions MD5 pratiques ont été démontrées par des chercheurs, la confiance dans son usage pour des vérifications de sécurité critiques s'est effondrée, la communauté recommandant depuis des algorithmes plus robustes comme SHA-256, dont aucune collision pratique n'est connue à ce jour."
      - texte: "Parce que MD5 est devenu illégal à utiliser dans tous les pays du monde"
        correcte: false
        explication: "Il n'existe pas d'interdiction légale universelle de MD5 ; son abandon pour des usages sensibles est une recommandation de sécurité technique de la communauté, pas une interdiction légale généralisée."
      - texte: "Parce que MD5 est devenu plus lent à calculer que les algorithmes plus récents"
        correcte: false
        explication: "La vitesse de calcul n'est pas la raison de l'abandon de MD5 pour des usages sensibles ; c'est la découverte de collisions pratiques qui a compromis la confiance en sa robustesse cryptographique."
      - texte: "Parce que MD5 ne peut techniquement plus être calculé sur du matériel moderne"
        correcte: false
        explication: "MD5 reste techniquement calculable sur du matériel moderne ; le problème n'est pas une impossibilité de calcul, mais une faiblesse de sécurité démontrée (collisions) qui le rend inadapté à des usages sensibles."
  - question: "Qu'est-ce que l'algorithme SHA-256, largement recommandé aujourd'hui, désigne précisément ?"
    type: "unique"
    reponses:
      - texte: "Une fonction de hachage cryptographique produisant une empreinte de 256 bits, faisant partie de la famille SHA-2, considérée robuste et largement utilisée pour la vérification d'intégrité"
        correcte: true
        explication: "SHA-256 est couramment utilisé pour vérifier l'intégrité de fichiers téléchargés, dans la structure des blockchains, ou comme composant de certains protocoles de sécurité, en remplacement d'algorithmes plus anciens et affaiblis comme MD5 ou SHA-1."
      - texte: "Un algorithme de chiffrement symétrique concurrent d'AES"
        correcte: false
        explication: "SHA-256 est une fonction de hachage à sens unique, pas un algorithme de chiffrement réversible comme AES ; ce sont deux catégories cryptographiques différentes."
      - texte: "Un protocole de connexion sécurisée équivalent à TLS"
        correcte: false
        explication: "SHA-256 est une fonction de hachage, un composant technique utilisé notamment dans certains protocoles, mais ce n'est pas un protocole de connexion complet comme TLS."
      - texte: "Une méthode d'authentification à deux facteurs"
        correcte: false
        explication: "SHA-256 est une fonction de hachage cryptographique, sans rapport direct avec un mécanisme d'authentification à deux facteurs."
---
