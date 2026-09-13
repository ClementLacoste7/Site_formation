---
titre: "Quizz : Reconnaissance et méthodologie d'un test d'intrusion"
description: "30 questions couvrant tout le cours : phases d'un pentest, OSINT, reconnaissance active, cartographie web, de la faille à l'exploitation, rapport."
slug: "quizz"
examen: "reconnaissance-methodologie"
niveau: "general"
ordre: 1
nombreQuizz: 2
questionsParQuizz: 15
publie: true
pool:
  - question: "Quelle est généralement la toute première phase d'un test d'intrusion structuré ?"
    type: "unique"
    reponses:
      - texte: "La reconnaissance, qui consiste à collecter un maximum d'informations sur la cible avant toute action plus intrusive"
        correcte: true
        explication: "Avant de tenter d'exploiter quoi que ce soit, un testeur commence par comprendre son périmètre et sa cible : technologies utilisées, domaines associés, employés, infrastructure visible, une base indispensable pour la suite de la méthodologie."
      - texte: "L'exploitation immédiate de la première vulnérabilité identifiée par un scanner automatisé"
        correcte: false
        explication: "Exploiter directement sans phase de reconnaissance préalable serait précipité et manquerait souvent d'informations essentielles sur le contexte réel de la cible."
      - texte: "La rédaction du rapport final destiné au client"
        correcte: false
        explication: "Le rapport final constitue la toute dernière étape du processus, après la reconnaissance, l'exploitation et l'analyse des résultats obtenus."
      - texte: "La suppression des traces laissées sur les systèmes de la cible"
        correcte: false
        explication: "Cette action éventuelle, propre à certains scénarios avancés, n'est pas la première étape d'un test d'intrusion structuré, qui commence par la reconnaissance."
  - question: "Quelle est la différence entre la reconnaissance passive et la reconnaissance active dans un test d'intrusion ?"
    type: "unique"
    reponses:
      - texte: "La reconnaissance passive collecte des informations déjà publiquement disponibles sans jamais interagir directement avec la cible, la reconnaissance active envoie des requêtes directes vers la cible pour obtenir des informations supplémentaires"
        correcte: true
        explication: "La reconnaissance passive (comme consulter des sources publiques) ne laisse aucune trace détectable côté cible, contrairement à la reconnaissance active (comme un scan de ports) qui génère un trafic réseau observable, potentiellement détectable par la cible."
      - texte: "La reconnaissance active ne peut être réalisée que sans autorisation du client"
        correcte: false
        explication: "Un test d'intrusion légitime, actif ou passif, est toujours réalisé avec l'autorisation préalable du client, pas sans autorisation."
      - texte: "La reconnaissance passive est toujours illégale, contrairement à la reconnaissance active"
        correcte: false
        explication: "La légalité dépend du cadre d'autorisation du test, pas du caractère passif ou actif de la reconnaissance elle-même ; les deux peuvent être légitimes dans le cadre d'un test autorisé."
      - texte: "Les deux termes désignent exactement la même démarche, avec un nom différent"
        correcte: false
        explication: "Leur méthode diffère nettement (observation sans contact contre interaction directe avec la cible), ce n'est pas une simple synonymie."
  - question: "Qu'est-ce que l'OSINT (Open Source Intelligence) désigne dans le contexte d'un test d'intrusion ?"
    type: "unique"
    reponses:
      - texte: "La collecte de renseignements à partir de sources d'information publiquement accessibles (réseaux sociaux, sites web, bases de données publiques), sans jamais interagir directement avec les systèmes de la cible"
        correcte: true
        explication: "L'OSINT s'appuie uniquement sur des informations déjà disponibles publiquement (profils de réseaux sociaux d'employés, mentions légales, offres d'emploi révélant des technologies utilisées), une démarche entièrement passive qui ne laisse aucune trace détectable côté cible."
      - texte: "Une technique qui nécessite obligatoirement l'exploitation d'un logiciel malveillant"
        correcte: false
        explication: "L'OSINT ne repose sur aucun logiciel malveillant ; c'est une collecte d'informations publiques, une démarche entièrement légale et passive."
      - texte: "Une méthode de chiffrement des communications entre le testeur et le client"
        correcte: false
        explication: "L'OSINT est une technique de collecte d'informations, sans rapport avec le chiffrement des communications."
      - texte: "Un logiciel propriétaire vendu exclusivement aux agences gouvernementales"
        correcte: false
        explication: "L'OSINT est une méthodologie de collecte d'informations publiques, utilisable par quiconque, pas un logiciel propriétaire réservé à un usage gouvernemental."
  - question: "Pourquoi les offres d'emploi publiées par une entreprise peuvent-elles constituer une source d'information utile en phase d'OSINT ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'elles révèlent souvent les technologies, frameworks ou outils internes utilisés par l'entreprise, une information précieuse pour orienter la suite de la reconnaissance"
        correcte: true
        explication: "Une offre d'emploi mentionnant par exemple une stack technique précise (un framework, un langage, un outil de gestion de configuration) donne des indices concrets sur l'infrastructure de l'entreprise, sans qu'elle ait conscience de révéler ces informations à un testeur ou un attaquant potentiel."
      - texte: "Parce qu'elles contiennent toujours directement les mots de passe des employés"
        correcte: false
        explication: "Une offre d'emploi ne révèle jamais directement des mots de passe ; elle peut seulement donner des indices indirects sur les technologies utilisées par l'entreprise."
      - texte: "Parce qu'elles permettent d'accéder directement aux serveurs internes de l'entreprise"
        correcte: false
        explication: "Une offre d'emploi est une source d'information publique passive, elle ne donne aucun accès direct aux systèmes internes de l'entreprise."
      - texte: "Parce qu'elles sont automatiquement mises à jour par un logiciel malveillant"
        correcte: false
        explication: "Les offres d'emploi sont publiées légitimement par l'entreprise elle-même, sans lien avec un quelconque logiciel malveillant."
  - question: "Qu'est-ce qu'un scan de ports, une technique classique de reconnaissance active, permet de déterminer ?"
    type: "unique"
    reponses:
      - texte: "Quels services réseau sont actifs et à l'écoute sur une machine cible, en testant systématiquement une plage de ports"
        correcte: true
        explication: "En envoyant des requêtes vers différents ports d'une machine, un scan de ports révèle quels services sont potentiellement exposés (comme un serveur web sur le port 80/443, ou SSH sur le port 22), une information de base pour orienter la suite du test."
      - texte: "Le mot de passe administrateur de la machine cible"
        correcte: false
        explication: "Un scan de ports révèle les services actifs, pas les mots de passe des comptes présents sur la machine."
      - texte: "Le contenu complet des fichiers stockés sur le serveur"
        correcte: false
        explication: "Un scan de ports identifie les services réseau actifs, il ne donne pas directement accès au contenu des fichiers stockés."
      - texte: "L'identité complète des employés de l'entreprise ciblée"
        correcte: false
        explication: "Cette information relève plutôt de la reconnaissance OSINT, pas d'un scan de ports qui se concentre sur l'infrastructure réseau technique."
  - question: "Pourquoi la reconnaissance active (comme un scan de ports) présente-t-elle un risque de détection que la reconnaissance passive n'a pas ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'elle génère un trafic réseau direct vers la cible, potentiellement repérable par un système de détection d'intrusion ou visible dans les journaux de la cible"
        correcte: true
        explication: "Contrairement à l'OSINT qui n'implique aucune interaction directe avec les systèmes de la cible, un scan actif envoie des requêtes qui laissent une trace dans les journaux réseau de la cible, un risque à considérer notamment lors de tests devant rester discrets."
      - texte: "Parce qu'elle est automatiquement bloquée par tous les pare-feux, sans exception"
        correcte: false
        explication: "Un pare-feu peut détecter ou bloquer certains scans, mais ce n'est pas systématique ni garanti dans tous les cas ; le risque de détection dépend de la configuration de sécurité de la cible."
      - texte: "Parce qu'elle nécessite toujours l'accès physique aux locaux de l'entreprise ciblée"
        correcte: false
        explication: "Un scan de ports peut être réalisé entièrement à distance via le réseau, sans nécessiter d'accès physique aux locaux de l'entreprise."
      - texte: "Parce qu'elle est plus lente que la reconnaissance passive, sans autre différence"
        correcte: false
        explication: "La différence essentielle entre les deux n'est pas une question de vitesse, mais du caractère détectable ou non de l'interaction avec la cible."
  - question: "Qu'est-ce que cartographier une application web, dans le cadre d'un test d'intrusion, consiste à faire ?"
    type: "unique"
    reponses:
      - texte: "Identifier et recenser l'ensemble des pages, fonctionnalités, points d'entrée et paramètres accessibles de l'application, pour comprendre sa structure complète avant de chercher des vulnérabilités"
        correcte: true
        explication: "Une cartographie complète permet de ne pas passer à côté d'une fonctionnalité cachée ou peu visible qui pourrait être vulnérable, en explorant méthodiquement toutes les routes, formulaires et paramètres de l'application plutôt que de se limiter aux pages évidentes."
      - texte: "Créer un plan géographique des data centers hébergeant l'application"
        correcte: false
        explication: "La cartographie d'une application web concerne sa structure logicielle et fonctionnelle, pas une localisation géographique physique de son hébergement."
      - texte: "Modifier directement le code source de l'application testée"
        correcte: false
        explication: "La cartographie est une étape d'exploration et de recensement, elle ne modifie pas le code source de l'application, ce qui serait d'ailleurs hors du cadre normal d'un test d'intrusion en boîte noire."
      - texte: "Attribuer une note de sécurité globale à l'application, sans autre analyse"
        correcte: false
        explication: "La cartographie est une étape préparatoire d'exploration, distincte de l'évaluation finale de sécurité qui intervient après une analyse plus poussée des vulnérabilités identifiées."
  - question: "Pourquoi explorer les paramètres d'URL, les formulaires cachés et les points d'API d'une application web fait-il partie intégrante d'une cartographie complète ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'une vulnérabilité peut se cacher dans n'importe quel point d'entrée acceptant une donnée utilisateur, pas uniquement dans les fonctionnalités les plus visibles de l'interface"
        correcte: true
        explication: "Un formulaire de recherche peu visible, un paramètre d'URL technique, ou un point d'API accessible mais non documenté publiquement peuvent tous constituer des vecteurs d'attaque potentiels, aussi importants à examiner que les fonctionnalités principales visibles."
      - texte: "Parce que ces éléments ne peuvent jamais contenir de vulnérabilité"
        correcte: false
        explication: "C'est l'inverse : ces éléments, même moins visibles, sont justement des vecteurs d'attaque potentiels tout aussi importants à examiner que les fonctionnalités visibles."
      - texte: "Parce que la loi impose de documenter exhaustivement chaque paramètre d'une application"
        correcte: false
        explication: "Il n'existe pas d'obligation légale de ce type ; l'exploration exhaustive est une bonne pratique méthodologique de test d'intrusion, pas une exigence réglementaire."
      - texte: "Parce que ces éléments sont toujours plus simples à sécuriser que les pages principales"
        correcte: false
        explication: "Ces éléments moins visibles sont souvent moins testés et donc potentiellement moins bien sécurisés que les pages principales, pas nécessairement plus simples à sécuriser."
  - question: "Que représente l'étape 'de la faille à l'exploitation' dans la méthodologie d'un test d'intrusion ?"
    type: "unique"
    reponses:
      - texte: "La démonstration concrète qu'une vulnérabilité identifiée est réellement exploitable, avec un impact mesurable, plutôt que de se contenter d'une simple suspicion théorique"
        correcte: true
        explication: "Identifier une faiblesse potentielle ne suffit pas toujours à convaincre un client de sa gravité réelle ; démontrer concrètement l'exploitation (par exemple extraire une donnée réelle via une injection SQL) prouve l'impact effectif et aide à prioriser correctement la correction."
      - texte: "La suppression immédiate de toutes les vulnérabilités découvertes par le testeur lui-même"
        correcte: false
        explication: "Un testeur d'intrusion démontre et documente les vulnérabilités, mais la correction reste généralement la responsabilité de l'équipe technique du client, pas du testeur lui-même."
      - texte: "La vente des vulnérabilités découvertes à des tiers intéressés"
        correcte: false
        explication: "Un test d'intrusion légitime et autorisé documente les vulnérabilités pour le client qui a commandé le test, il ne les vend jamais à des tiers, ce qui serait illégal et contraire à l'éthique professionnelle."
      - texte: "L'installation permanente d'un accès dérobé pour un usage futur"
        correcte: false
        explication: "L'installation d'un accès dérobé permanent sortirait du cadre éthique et légal d'un test d'intrusion autorisé, dont l'objectif est d'évaluer la sécurité, pas de maintenir un accès non autorisé après la fin du test."
  - question: "Pourquoi la démonstration d'exploitation dans un test d'intrusion doit-elle rester strictement encadrée par le périmètre et les règles d'engagement définis avec le client ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'aller au-delà du périmètre autorisé (par exemple en supprimant réellement des données de production plutôt que de simplement démontrer la possibilité de le faire) pourrait causer un dommage réel non souhaité par le client"
        correcte: true
        explication: "Un testeur professionnel démontre généralement l'impact d'une vulnérabilité de façon contrôlée et minimalement invasive (par exemple lire une seule ligne de données sensibles plutôt que d'exfiltrer toute la base), en respectant scrupuleusement les limites convenues avec le client pour éviter tout dommage non désiré."
      - texte: "Parce que le périmètre n'a en réalité aucune importance tant que le test est globalement autorisé"
        correcte: false
        explication: "C'est l'inverse : le respect strict du périmètre et des règles d'engagement est un élément central et non négociable de l'éthique et du cadre légal d'un test d'intrusion professionnel."
      - texte: "Parce que dépasser le périmètre accélère automatiquement la découverte de nouvelles vulnérabilités"
        correcte: false
        explication: "La rigueur méthodologique et le respect du périmètre ne sont pas en opposition avec l'efficacité de découverte, mais sont au contraire une exigence éthique et contractuelle indépendante de l'efficacité technique recherchée."
      - texte: "Parce que la loi autorise n'importe quelle action tant qu'un contrat de test d'intrusion existe, même vague"
        correcte: false
        explication: "Un contrat de test d'intrusion doit précisément définir le périmètre autorisé ; agir au-delà de ce périmètre défini reste juridiquement risqué, même en présence d'un contrat général, d'où l'importance de règles d'engagement précises."
  - question: "Quel est l'objectif principal du rapport final rédigé à l'issue d'un test d'intrusion ?"
    type: "unique"
    reponses:
      - texte: "Communiquer clairement au client les vulnérabilités identifiées, leur gravité, leur impact potentiel et des recommandations concrètes de correction, dans un format compréhensible par différents publics (technique et décisionnel)"
        correcte: true
        explication: "Un bon rapport ne se contente pas de lister des failles techniques brutes ; il doit aider le client à comprendre les risques réels et à prioriser ses actions correctives, souvent avec un résumé exécutif pour la direction et des détails techniques pour les équipes IT."
      - texte: "Prouver que l'application testée est totalement invulnérable à toute attaque future"
        correcte: false
        explication: "Un rapport de test d'intrusion ne peut jamais garantir une invulnérabilité totale et permanente ; il documente les vulnérabilités trouvées à un instant donné, avec les limites du périmètre et du temps alloués au test."
      - texte: "Servir uniquement de preuve pour facturer le client, sans autre contenu utile"
        correcte: false
        explication: "Le rapport a une valeur technique et stratégique réelle pour le client, bien au-delà d'un simple justificatif de facturation ; c'est un livrable central du service rendu."
      - texte: "Remplacer complètement le besoin de corriger les vulnérabilités identifiées"
        correcte: false
        explication: "Le rapport documente et recommande, mais ne corrige rien lui-même ; l'application des corrections reste la responsabilité de l'équipe technique du client après réception du rapport."
  - question: "Pourquoi un rapport de test d'intrusion inclut-il généralement un résumé exécutif en plus des détails techniques ?"
    type: "unique"
    reponses:
      - texte: "Parce que les décideurs non techniques (direction, management) ont besoin de comprendre rapidement les risques principaux et leur priorité, sans nécessairement lire tous les détails techniques destinés aux équipes IT"
        correcte: true
        explication: "Un résumé exécutif traduit les constats techniques en enjeux compréhensibles pour un public non spécialiste, facilitant la prise de décision sur les priorités et les ressources à allouer à la correction, en complément des détails techniques nécessaires aux équipes qui devront effectivement corriger les failles."
      - texte: "Parce que la loi impose la présence d'un résumé exécutif dans tout document de sécurité"
        correcte: false
        explication: "Il n'existe pas d'obligation légale universelle de ce type ; c'est une bonne pratique de communication qui répond à un besoin réel de différents publics, pas une exigence réglementaire."
      - texte: "Parce que les détails techniques ne sont jamais utiles au client, contrairement au résumé"
        correcte: false
        explication: "Les détails techniques restent indispensables pour les équipes IT qui devront concrètement corriger les vulnérabilités identifiées ; le résumé exécutif complète ces détails, il ne les remplace pas."
      - texte: "Parce que le résumé exécutif remplace complètement le besoin de corriger les vulnérabilités"
        correcte: false
        explication: "Le résumé exécutif informe et aide à prioriser, il ne corrige rien lui-même ; l'application effective des corrections reste une étape distincte et nécessaire après la remise du rapport."
  - question: "Pourquoi la phase de reconnaissance, souvent perçue comme moins spectaculaire que l'exploitation, est-elle considérée comme essentielle à la réussite d'un test d'intrusion ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'une reconnaissance insuffisante risque de faire passer à côté de vecteurs d'attaque importants, alors qu'une reconnaissance approfondie révèle souvent des informations qui orientent efficacement la suite du test"
        correcte: true
        explication: "Un testeur qui néglige la reconnaissance risque de se précipiter sur les vulnérabilités les plus évidentes en manquant des informations contextuelles précieuses (une technologie spécifique utilisée, un sous-domaine oublié) qui auraient pu révéler des vecteurs d'attaque plus significatifs."
      - texte: "Parce qu'elle est légalement obligatoire dans tous les pays avant toute exploitation"
        correcte: false
        explication: "Il n'existe pas d'obligation légale universelle imposant une phase de reconnaissance ; son importance vient de son efficacité méthodologique, pas d'une exigence réglementaire."
      - texte: "Parce qu'elle garantit à elle seule la découverte de toutes les vulnérabilités existantes"
        correcte: false
        explication: "La reconnaissance seule ne garantit pas la découverte de toutes les vulnérabilités ; elle prépare et oriente efficacement les phases suivantes du test, sans être une garantie absolue à elle seule."
      - texte: "Parce qu'elle prend toujours plus de temps que toutes les autres phases combinées"
        correcte: false
        explication: "La durée relative de la reconnaissance par rapport aux autres phases varie selon les tests ; son importance vient de sa valeur méthodologique, pas nécessairement de sa durée."
  - question: "Quelle est la différence entre un test d'intrusion en boîte noire (black box) et en boîte blanche (white box) en matière de reconnaissance initiale ?"
    type: "unique"
    reponses:
      - texte: "En boîte noire, le testeur ne dispose d'aucune information préalable et doit tout découvrir par lui-même via la reconnaissance ; en boîte blanche, des informations comme le code source ou l'architecture sont fournies à l'avance, réduisant le besoin de reconnaissance initiale"
        correcte: true
        explication: "Ces deux approches simulent des scénarios différents : un attaquant externe sans connaissance préalable (boîte noire) contre un audit interne avec accès complet aux informations techniques (boîte blanche), ce qui influence directement l'ampleur nécessaire de la phase de reconnaissance."
      - texte: "Un test en boîte blanche ne nécessite jamais d'autorisation préalable du client"
        correcte: false
        explication: "Un test d'intrusion légitime, en boîte blanche comme en boîte noire, nécessite toujours une autorisation préalable formelle du client, ce n'est pas une différence entre ces deux approches."
      - texte: "Un test en boîte noire est toujours illégal, contrairement à un test en boîte blanche"
        correcte: false
        explication: "La légalité dépend de l'autorisation obtenue pour le test, pas du niveau d'information disponible au départ (boîte noire ou blanche)."
      - texte: "Les deux approches nécessitent exactement le même niveau de reconnaissance initiale"
        correcte: false
        explication: "Le niveau d'information disponible au départ diffère nettement entre les deux approches, ce qui influence directement l'ampleur de reconnaissance nécessaire, contrairement à une prétendue équivalence."
  - question: "Qu'est-ce qu'un test d'intrusion en boîte grise (gray box) représente comme scénario intermédiaire ?"
    type: "unique"
    reponses:
      - texte: "Le testeur dispose d'un niveau d'information partiel, comme un accès utilisateur standard ou une documentation limitée, sans avoir toutes les informations d'une boîte blanche ni être totalement aveugle comme en boîte noire"
        correcte: true
        explication: "Ce scénario simule par exemple un employé mécontent ou un client disposant d'un compte normal, un profil de menace réaliste que la boîte noire pure (attaquant externe total) ou blanche (audit interne complet) ne représentent pas aussi fidèlement."
      - texte: "Le testeur ne dispose d'absolument aucune information, comme en boîte noire pure"
        correcte: false
        explication: "C'est justement la différence : la boîte grise fournit un niveau d'information partiel, contrairement à la boîte noire qui n'en fournit aucune."
      - texte: "Le testeur reçoit l'intégralité du code source, comme en boîte blanche"
        correcte: false
        explication: "La boîte grise ne fournit qu'une information partielle, contrairement à la boîte blanche qui donne un accès complet comme le code source."
      - texte: "Cette approche n'est jamais utilisée en pratique, elle reste purement théorique"
        correcte: false
        explication: "La boîte grise est une approche couramment utilisée en pratique, notamment pour simuler des scénarios de menace interne réalistes."
  - question: "Pourquoi documenter précisément le périmètre et les règles d'engagement avant de débuter un test d'intrusion est-il une étape légale et éthique incontournable ?"
    type: "unique"
    reponses:
      - texte: "Parce que sans autorisation écrite et un périmètre clairement défini, les actions du testeur pourraient être considérées comme un accès non autorisé à un système informatique, une infraction pénale dans de nombreuses juridictions"
        correcte: true
        explication: "Un contrat ou une lettre d'autorisation (souvent appelée 'get out of jail free card') protège juridiquement le testeur en prouvant que ses actions ont été explicitement autorisées par le propriétaire légitime du système, un préalable indispensable avant toute action technique."
      - texte: "Parce que cela permet uniquement de facturer le client plus cher"
        correcte: false
        explication: "Bien que la définition du périmètre ait aussi une dimension contractuelle et commerciale, sa justification principale est légale et éthique, pas simplement une question de facturation."
      - texte: "Parce que la loi interdit tout test d'intrusion, même autorisé, dans absolument tous les pays"
        correcte: false
        explication: "Un test d'intrusion dûment autorisé par le propriétaire du système est légal dans la plupart des juridictions ; c'est justement l'absence d'autorisation qui pose un problème légal, pas le test autorisé lui-même."
      - texte: "Parce que cela garantit que le testeur ne trouvera aucune vulnérabilité critique"
        correcte: false
        explication: "La définition du périmètre n'a aucun rapport avec le nombre ou la gravité des vulnérabilités qui seront découvertes ; c'est une protection légale et un cadrage méthodologique, pas une garantie de résultat."
  - question: "Qu'est-ce qu'un outil de cartographie automatisée d'application web (comme un spider ou crawler) permet de faire pendant la phase de reconnaissance active ?"
    type: "unique"
    reponses:
      - texte: "Parcourir automatiquement les liens et formulaires d'une application pour en dresser un inventaire complet des pages et points d'entrée accessibles"
        correcte: true
        explication: "Plutôt que d'explorer manuellement chaque page une par une, un outil de cartographie automatisée suit systématiquement les liens découverts pour construire rapidement une vue d'ensemble de la structure de l'application, gagnant un temps précieux pour la suite du test."
      - texte: "Modifier automatiquement le contenu de chaque page visitée"
        correcte: false
        explication: "Un outil de cartographie se contente d'explorer et de recenser les pages, il ne modifie pas leur contenu, ce qui sortirait du cadre normal d'une reconnaissance non intrusive."
      - texte: "Chiffrer automatiquement toutes les communications avec le serveur cible"
        correcte: false
        explication: "Un outil de cartographie explore la structure de l'application, il n'a aucune fonction de chiffrement des communications."
      - texte: "Corriger automatiquement les vulnérabilités découvertes au fil de l'exploration"
        correcte: false
        explication: "Un outil de cartographie identifie et recense la structure, il ne corrige rien ; la correction reste la responsabilité de l'équipe technique du client, après réception du rapport."
  - question: "Pourquoi un testeur documente-t-il systématiquement chaque étape de sa démarche (commandes exécutées, résultats obtenus) tout au long d'un test d'intrusion, pas seulement à la toute fin ?"
    type: "unique"
    reponses:
      - texte: "Pour pouvoir reconstituer précisément la méthodologie suivie et les preuves obtenues lors de la rédaction du rapport final, sans devoir se fier uniquement à sa mémoire une fois le test terminé"
        correcte: true
        explication: "Un test d'intrusion peut s'étaler sur plusieurs jours et impliquer de nombreuses étapes ; documenter au fur et à mesure évite de perdre des détails importants ou des preuves d'exploitation qui seraient nécessaires pour étayer les conclusions du rapport final."
      - texte: "Parce que la loi impose de publier cette documentation publiquement après chaque test"
        correcte: false
        explication: "Un rapport de test d'intrusion reste généralement confidentiel entre le testeur et son client, il n'existe pas d'obligation légale de publication publique systématique."
      - texte: "Parce que cette documentation remplace complètement le besoin d'un rapport final structuré"
        correcte: false
        explication: "La documentation continue alimente et nourrit le rapport final, mais ne le remplace pas ; le rapport final reste un livrable structuré et synthétisé distinct des notes brutes prises en cours de test."
      - texte: "Parce que cela ralentit volontairement le test pour facturer davantage d'heures"
        correcte: false
        explication: "La documentation rigoureuse sert la qualité et la fiabilité du travail rendu, ce n'est pas une pratique visant à ralentir artificiellement le test à des fins de facturation."
---
