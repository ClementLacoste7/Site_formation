---
titre: "Quizz : Défense et détection d'intrusion"
description: "30 questions couvrant tout le cours : comprendre les logs, détecter une attaque web, SIEM, règles de détection, réagir à un incident, rapport."
slug: "quizz"
examen: "defense-detection-intrusion"
niveau: "general"
ordre: 1
nombreQuizz: 2
questionsParQuizz: 15
publie: true
pool:
  - question: "Pourquoi les journaux d'événements (logs) d'un système sont-ils une ressource essentielle en défense et détection d'intrusion ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'ils enregistrent une trace chronologique des événements survenus sur un système, permettant de détecter une activité suspecte et d'enquêter après un incident"
        correcte: true
        explication: "Sans journalisation fiable, il devient très difficile de savoir ce qui s'est réellement passé sur un système, que ce soit pour détecter une attaque en cours ou pour comprendre après coup comment un incident s'est déroulé."
      - texte: "Parce qu'ils chiffrent automatiquement toutes les communications du système"
        correcte: false
        explication: "Les journaux enregistrent des événements, ils ne chiffrent rien du trafic ou des communications du système."
      - texte: "Parce qu'ils remplacent complètement le besoin d'un pare-feu"
        correcte: false
        explication: "Les journaux complètent les autres mesures de sécurité comme le pare-feu, ils ne remplacent pas sa fonction de filtrage du trafic."
      - texte: "Parce qu'ils servent uniquement à des fins de facturation"
        correcte: false
        explication: "Bien que des journaux puissent parfois servir à d'autres usages, leur intérêt principal en sécurité est la détection et l'investigation d'incidents, pas la facturation."
  - question: "Que peut révéler l'analyse des journaux d'un serveur web face à une tentative d'attaque comme une injection SQL ?"
    type: "unique"
    reponses:
      - texte: "Des motifs suspects dans les requêtes reçues (comme des caractères SQL inhabituels dans un paramètre), un volume anormal de requêtes échouées, ou des tentatives répétées depuis une même adresse IP"
        correcte: true
        explication: "Un attaquant testant méthodiquement une injection laisse souvent des traces caractéristiques dans les journaux : de nombreuses requêtes similaires avec des variations de payload, ou des erreurs serveur répétées provoquées par des tentatives infructueuses."
      - texte: "Le contenu exact et complet de la base de données du serveur"
        correcte: false
        explication: "Les journaux enregistrent des événements liés aux requêtes et à l'activité du serveur, pas le contenu intégral de la base de données elle-même."
      - texte: "Le mot de passe de l'attaquant utilisé pour se connecter à son propre ordinateur"
        correcte: false
        explication: "Les journaux du serveur ciblé n'ont aucune visibilité sur les informations locales de la machine de l'attaquant, comme son propre mot de passe."
      - texte: "La localisation exacte du domicile de l'attaquant, garantie à 100%"
        correcte: false
        explication: "Une adresse IP peut donner une indication géographique approximative, mais elle ne garantit jamais une localisation exacte et fiable à 100% du domicile réel de l'attaquant, notamment en cas d'usage d'un VPN ou proxy."
  - question: "Pourquoi un très grand nombre de requêtes échouées vers une page de connexion, provenant d'une même adresse IP en peu de temps, est-il un signal d'alerte classique ?"
    type: "unique"
    reponses:
      - texte: "Parce que ce comportement est caractéristique d'une attaque par force brute, où un attaquant teste automatiquement de nombreuses combinaisons de mots de passe"
        correcte: true
        explication: "Un utilisateur légitime ayant simplement oublié son mot de passe échoue rarement plus de quelques fois de suite ; un très grand nombre de tentatives rapprochées est le signe typique d'un script automatisé tentant de deviner un mot de passe par force brute."
      - texte: "Parce que cela indique toujours une simple erreur de configuration du serveur, sans rapport avec une attaque"
        correcte: false
        explication: "Bien qu'une erreur de configuration soit théoriquement possible, ce motif de comportement (nombreuses tentatives échouées rapprochées) est un signal caractéristique classique de tentative de force brute, à examiner sérieusement."
      - texte: "Parce que cela prouve que le serveur est physiquement endommagé"
        correcte: false
        explication: "Un grand nombre de tentatives de connexion échouées n'a aucun rapport avec un dommage physique du serveur ; c'est un comportement observé au niveau applicatif, pas matériel."
      - texte: "Parce que cela signifie que l'utilisateur légitime a définitivement perdu l'accès à son compte"
        correcte: false
        explication: "Ce motif suggère plutôt une tentative d'attaque externe qu'une perte d'accès légitime, qui se traduirait généralement par un nombre bien plus restreint de tentatives isolées."
  - question: "Qu'est-ce qu'un SIEM (Security Information and Event Management) permet de faire dans une stratégie de défense ?"
    type: "unique"
    reponses:
      - texte: "Centraliser, corréler et analyser les journaux d'événements de nombreuses sources différentes (serveurs, pare-feux, applications) pour détecter des activités suspectes qui ne seraient pas visibles en examinant chaque source isolément"
        correcte: true
        explication: "En agrégeant des journaux provenant de multiples équipements et en appliquant des règles de corrélation, un SIEM peut détecter des schémas d'attaque complexes répartis sur plusieurs systèmes, un travail que l'examen manuel de journaux dispersés rendrait extrêmement difficile."
      - texte: "Chiffrer automatiquement toutes les communications de l'entreprise"
        correcte: false
        explication: "Un SIEM se concentre sur la collecte et l'analyse de journaux de sécurité, pas sur le chiffrement des communications."
      - texte: "Remplacer complètement le besoin d'un pare-feu sur le réseau"
        correcte: false
        explication: "Un SIEM complète les autres mesures de sécurité, dont le pare-feu qui lui fournit d'ailleurs souvent des journaux, il ne remplace pas sa fonction de filtrage."
      - texte: "Générer automatiquement de nouveaux mots de passe pour les utilisateurs"
        correcte: false
        explication: "La génération de mots de passe n'est pas la fonction d'un SIEM, dédié à la collecte et l'analyse de journaux de sécurité."
  - question: "Pourquoi la centralisation des journaux de multiples sources dans un SIEM aide-t-elle à détecter des attaques qui passeraient inaperçues en examinant chaque source isolément ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'une attaque peut laisser des traces partielles et anodines en apparence sur différents systèmes, alors que leur corrélation temporelle et logique révèle un schéma d'attaque cohérent"
        correcte: true
        explication: "Par exemple, une tentative de connexion échouée sur un serveur, suivie peu après d'un accès réussi depuis une adresse IP différente sur un autre système, pourrait sembler anodine isolément, mais la corrélation de ces deux événements dans un SIEM peut révéler une compromission de compte suivie d'un mouvement latéral."
      - texte: "Parce qu'un SIEM chiffre automatiquement tous les journaux collectés, les rendant plus fiables"
        correcte: false
        explication: "Le chiffrement des journaux collectés n'est pas ce qui explique l'intérêt de la corrélation ; c'est la capacité à croiser des événements dispersés qui révèle des schémas d'attaque invisibles isolément."
      - texte: "Parce qu'un SIEM supprime automatiquement les faux positifs sans aucune configuration"
        correcte: false
        explication: "Un SIEM nécessite généralement une configuration et un réglage des règles pour réduire les faux positifs ; ce n'est pas un processus automatique sans aucun paramétrage."
      - texte: "Parce qu'un SIEM ne peut collecter des journaux que d'une seule source à la fois"
        correcte: false
        explication: "C'est l'inverse : la force d'un SIEM vient justement de sa capacité à collecter et corréler des journaux de nombreuses sources différentes simultanément."
  - question: "Qu'est-ce qu'une règle de détection dans un SIEM ou un IDS permet de faire ?"
    type: "unique"
    reponses:
      - texte: "Définir un motif ou une condition spécifique qui, une fois observée dans les événements collectés, déclenche automatiquement une alerte pour signaler une activité potentiellement suspecte"
        correcte: true
        explication: "Une règle de détection encode la connaissance d'un comportement suspect connu (comme un motif caractéristique d'injection SQL dans une requête), permettant au système de générer automatiquement une alerte dès que ce motif est observé dans les événements analysés."
      - texte: "Bloquer automatiquement et définitivement tout le trafic réseau de l'entreprise"
        correcte: false
        explication: "Une règle de détection génère une alerte à examiner, elle ne bloque pas nécessairement automatiquement tout le trafic de l'entreprise, sauf si elle est explicitement couplée à une action de blocage automatisée."
      - texte: "Chiffrer automatiquement les journaux une fois qu'une alerte est déclenchée"
        correcte: false
        explication: "Une règle de détection déclenche une alerte, elle ne chiffre pas les journaux collectés."
      - texte: "Supprimer automatiquement l'utilisateur ayant déclenché l'alerte"
        correcte: false
        explication: "Une règle de détection génère une alerte à examiner par un analyste, elle ne supprime pas automatiquement un compte utilisateur sans intervention humaine, sauf configuration spécifique de réponse automatisée."
  - question: "Qu'est-ce qu'un faux positif dans le contexte d'une règle de détection de sécurité ?"
    type: "unique"
    reponses:
      - texte: "Une alerte déclenchée à tort pour une activité en réalité légitime, qui ne correspond pas réellement à une menace"
        correcte: true
        explication: "Un trop grand nombre de faux positifs peut provoquer une fatigue d'alerte chez les analystes, qui risquent de finir par négliger des alertes légitimes noyées parmi de nombreuses fausses alarmes, d'où l'importance d'affiner régulièrement les règles de détection."
      - texte: "Une véritable attaque qui n'a déclenché aucune alerte du tout"
        correcte: false
        explication: "Cette situation correspond à un faux négatif, l'inverse d'un faux positif qui concerne au contraire une alerte déclenchée à tort sur une activité légitime."
      - texte: "Une alerte qui se déclenche systématiquement toutes les heures, sans exception"
        correcte: false
        explication: "La fréquence de déclenchement n'est pas ce qui définit un faux positif ; c'est le fait que l'alerte corresponde à tort à une activité légitime, pas à une menace réelle."
      - texte: "Un type de logiciel malveillant particulièrement difficile à détecter"
        correcte: false
        explication: "Un faux positif est une caractéristique d'une alerte de détection, pas un type de logiciel malveillant en lui-même."
  - question: "Qu'est-ce qu'un faux négatif dans le contexte de la détection de sécurité, et pourquoi est-il généralement considéré comme plus problématique qu'un faux positif ?"
    type: "unique"
    reponses:
      - texte: "Un faux négatif est une véritable attaque qui n'a déclenché aucune alerte, laissant l'organisation dans l'ignorance d'une menace réelle en cours, un risque généralement jugé plus grave qu'une fausse alerte gérable"
        correcte: true
        explication: "Alors qu'un faux positif consomme du temps d'analyse pour rien, un faux négatif laisse une attaque réelle totalement passer inaperçue, ce qui peut avoir des conséquences bien plus graves pour la sécurité de l'organisation."
      - texte: "Un faux négatif est une alerte déclenchée à tort sur une activité légitime"
        correcte: false
        explication: "Cette description correspond à un faux positif, l'inverse d'un faux négatif qui concerne au contraire une véritable attaque n'ayant déclenché aucune alerte."
      - texte: "Un faux négatif ne peut se produire que sur des systèmes obsolètes"
        correcte: false
        explication: "Un faux négatif peut se produire sur n'importe quel système dont les règles de détection sont insuffisantes ou mal configurées, pas exclusivement sur des systèmes obsolètes."
      - texte: "Un faux négatif est toujours moins grave qu'un faux positif"
        correcte: false
        explication: "C'est généralement l'inverse : un faux négatif (attaque réelle non détectée) est généralement considéré comme plus problématique qu'un faux positif (fausse alerte gérable), même si les deux méritent attention."
  - question: "Quelle est généralement la toute première étape d'un processus de réponse à incident, une fois qu'une activité suspecte a été détectée ?"
    type: "unique"
    reponses:
      - texte: "L'identification et la confirmation qu'un incident de sécurité réel est bien en cours, avant d'engager toute action de réponse plus poussée"
        correcte: true
        explication: "Avant de pouvoir contenir, éradiquer ou restaurer, il faut d'abord confirmer la nature réelle de l'événement détecté ; sans cette identification correcte, les étapes suivantes risqueraient de mal cibler la réponse ou de réagir inutilement à un faux positif."
      - texte: "La restauration immédiate de tous les systèmes à partir de la dernière sauvegarde disponible"
        correcte: false
        explication: "La restauration intervient plus tard dans le processus, après l'identification, le confinement et l'éradication de la cause de l'incident, pas en toute première étape."
      - texte: "La communication publique immédiate de tous les détails de l'incident, avant toute vérification"
        correcte: false
        explication: "Une communication précipitée avant même d'avoir confirmé et compris la nature réelle de l'incident risquerait de propager une information erronée ou incomplète, une communication prudente intervenant plus tard dans le processus."
      - texte: "Le licenciement immédiat de tout employé soupçonné d'être impliqué"
        correcte: false
        explication: "Une décision de ressources humaines aussi lourde n'est pas la première étape technique d'une réponse à incident, qui commence par l'identification factuelle de ce qui s'est réellement passé."
  - question: "Que vise l'étape de confinement (containment) dans un processus de réponse à incident ?"
    type: "unique"
    reponses:
      - texte: "Limiter la propagation ou l'aggravation de l'incident en cours, par exemple en isolant les systèmes affectés du reste du réseau, avant même d'avoir totalement éliminé la cause racine"
        correcte: true
        explication: "Le confinement vise à stopper l'aggravation de la situation rapidement, par exemple en déconnectant un poste infecté du réseau pour éviter une propagation plus large, avant de procéder à l'éradication complète de la menace."
      - texte: "Éliminer définitivement et complètement la cause racine de l'incident"
        correcte: false
        explication: "Cette action correspond à la phase d'éradication, qui suit généralement le confinement, une fois la propagation maîtrisée."
      - texte: "Restaurer immédiatement tous les systèmes affectés à leur état de fonctionnement normal"
        correcte: false
        explication: "Cette action correspond à la phase de restauration, qui intervient après le confinement et l'éradication, pas pendant le confinement lui-même."
      - texte: "Documenter les leçons apprises pour améliorer la préparation future"
        correcte: false
        explication: "Cette action correspond à la phase de retour d'expérience, la toute dernière étape du cycle, pas au confinement qui intervient bien plus tôt dans le processus."
  - question: "Pourquoi rédiger un rapport post-incident détaillé, même une fois l'incident résolu et les systèmes restaurés, reste-t-il une étape importante ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'il permet de tirer des leçons concrètes de l'incident (comment il s'est produit, ce qui a bien ou mal fonctionné dans la réponse) pour améliorer la préparation et réduire le risque d'un incident similaire à l'avenir"
        correcte: true
        explication: "Sans cette analyse rétrospective structurée, une organisation risque de répéter les mêmes erreurs ou de laisser persister les mêmes failles ayant permis l'incident initial, d'où l'importance de ce retour d'expérience formalisé, souvent appelé post-mortem."
      - texte: "Uniquement pour satisfaire une obligation administrative sans aucune utilité pratique réelle"
        correcte: false
        explication: "Le rapport post-incident a une réelle valeur pratique d'amélioration continue de la sécurité, au-delà d'une simple formalité administrative sans utilité concrète."
      - texte: "Parce qu'il remplace complètement le besoin de corriger les vulnérabilités ayant permis l'incident"
        correcte: false
        explication: "Le rapport documente et recommande des actions, il ne corrige rien lui-même ; l'application effective des correctifs reste une étape distincte et nécessaire après la rédaction du rapport."
      - texte: "Parce qu'il est légalement obligatoire dans tous les pays pour tout type d'incident, même mineur"
        correcte: false
        explication: "Certaines réglementations imposent une notification pour des incidents spécifiques (comme une fuite de données personnelles), mais un rapport post-incident détaillé pour amélioration interne reste une bonne pratique recommandée, pas une obligation légale universelle pour tout incident."
  - question: "Qu'est-ce qu'un rapport post-incident devrait typiquement documenter, au-delà d'un simple résumé de ce qui s'est passé ?"
    type: "unique"
    reponses:
      - texte: "La chronologie précise des événements, la cause racine identifiée, l'efficacité de la réponse apportée, et des recommandations concrètes pour éviter la répétition d'un incident similaire"
        correcte: true
        explication: "Un rapport post-incident de qualité analyse en profondeur non seulement ce qui s'est passé, mais aussi pourquoi cela a pu se produire et comment la réponse de l'organisation a fonctionné, afin d'en tirer des enseignements concrets et actionnables pour l'avenir."
      - texte: "Uniquement le nom et l'adresse de l'attaquant présumé"
        correcte: false
        explication: "L'identité de l'attaquant, souvent difficile à établir avec certitude, n'est pas le contenu central attendu d'un rapport post-incident axé sur l'amélioration de la sécurité interne."
      - texte: "Le montant exact de la prime d'assurance cyber de l'organisation"
        correcte: false
        explication: "Le montant de la prime d'assurance est une information administrative distincte, sans rapport direct avec le contenu technique attendu d'un rapport post-incident."
      - texte: "Uniquement une liste des employés à sanctionner suite à l'incident"
        correcte: false
        explication: "Un rapport post-incident de qualité se concentre sur l'analyse technique et organisationnelle de l'incident pour en tirer des leçons, pas sur une liste de sanctions individuelles."
  - question: "Pourquoi un plan de réponse à incident préparé à l'avance (avant qu'un incident ne survienne) est-il préférable à une improvisation totale au moment de la crise ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'il permet de réagir plus rapidement et efficacement, en ayant déjà défini les rôles, les procédures et les contacts nécessaires, plutôt que de perdre un temps précieux à s'organiser en pleine crise"
        correcte: true
        explication: "Un incident de sécurité est souvent une situation stressante et urgente ; disposer d'un plan déjà préparé (qui contacter, quelles actions immédiates entreprendre, comment communiquer) réduit considérablement le temps de réaction et le risque d'erreurs commises dans la précipitation."
      - texte: "Parce que la loi interdit toute réponse à incident non planifiée à l'avance"
        correcte: false
        explication: "Il n'existe pas d'interdiction légale générale de ce type ; la préparation préalable est une bonne pratique fortement recommandée pour son efficacité, pas une obligation légale de planification stricte."
      - texte: "Parce qu'un plan préparé à l'avance élimine complètement tout besoin d'adaptation pendant l'incident réel"
        correcte: false
        explication: "Un plan préparé reste une base de référence utile, mais une certaine adaptation reste souvent nécessaire face aux spécificités de chaque incident réel, qui ne correspond jamais exactement au scénario prévu."
      - texte: "Parce qu'un plan préparé à l'avance garantit qu'aucun incident ne pourra jamais se reproduire"
        correcte: false
        explication: "Un plan de réponse prépare à bien réagir à un incident, il ne garantit en rien qu'un incident ne se reproduira jamais, ce qui dépend aussi de la correction effective des vulnérabilités sous-jacentes."
  - question: "Qu'est-ce qu'un exercice de simulation d'incident (tabletop exercise) permet à une organisation de tester, sans risque opérationnel réel ?"
    type: "unique"
    reponses:
      - texte: "La réaction et la coordination de l'équipe face à un scénario d'incident fictif discuté en réunion, sans action technique réelle sur les systèmes de production"
        correcte: true
        explication: "En simulant un scénario réaliste (par exemple une découverte de ransomware un lundi matin) et en discutant collectivement des décisions à prendre, l'organisation peut identifier des lacunes dans son plan de réponse avant qu'un véritable incident ne survienne, sans aucun risque pour les systèmes réels."
      - texte: "Une attaque réelle menée sans autorisation contre les systèmes de production de l'entreprise"
        correcte: false
        explication: "Un tabletop exercise est un exercice de discussion planifié et autorisé, sans action technique réelle, à l'opposé d'une attaque réelle non autorisée contre les systèmes en production."
      - texte: "Le remplacement définitif de tous les systèmes de sécurité existants par de nouveaux outils"
        correcte: false
        explication: "Un tabletop exercise est un exercice de préparation organisationnelle, il ne consiste pas à remplacer les outils de sécurité existants."
      - texte: "Un audit financier des dépenses de sécurité de l'année précédente"
        correcte: false
        explication: "Un tabletop exercise évalue la préparation opérationnelle face à un scénario d'incident, ce n'est pas un audit financier des dépenses passées."
  - question: "Pourquoi la corrélation temporelle entre plusieurs événements de journaux (comme une connexion suivie peu après d'un transfert de fichier volumineux) est-elle plus révélatrice qu'un seul événement isolé ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'un événement isolé peut sembler anodin en lui-même, alors que sa combinaison avec d'autres événements proches dans le temps peut révéler un schéma d'attaque cohérent"
        correcte: true
        explication: "Une connexion réussie seule n'est pas suspecte, un transfert de fichier volumineux seul non plus ; mais leur succession rapprochée dans le temps, surtout à une heure inhabituelle, peut révéler une exfiltration de données en cours qu'aucun des deux événements pris isolément n'aurait signalée."
      - texte: "Parce qu'un événement isolé n'est jamais enregistré dans les journaux"
        correcte: false
        explication: "Un événement isolé est bien enregistré normalement dans les journaux ; le problème n'est pas son absence d'enregistrement, mais son manque de signification en dehors de tout contexte."
      - texte: "Parce que la corrélation d'événements chiffre automatiquement les journaux"
        correcte: false
        explication: "La corrélation d'événements est une technique d'analyse, elle n'a aucune fonction de chiffrement des journaux."
      - texte: "Parce qu'un seul événement isolé ne peut techniquement jamais provenir d'un attaquant"
        correcte: false
        explication: "Un événement isolé peut tout à fait provenir d'une action malveillante ; c'est justement l'objectif de la corrélation que de renforcer la confiance dans la détection en combinant plusieurs indices plutôt qu'un seul."
  - question: "Pourquoi la synchronisation précise de l'horloge (via NTP par exemple) de tous les systèmes générant des journaux est-elle importante pour l'analyse et la corrélation d'incidents ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'une corrélation fiable entre événements provenant de systèmes différents nécessite de pouvoir comparer précisément leurs horodatages respectifs, ce qui serait faussé si les horloges des systèmes n'étaient pas synchronisées"
        correcte: true
        explication: "Si un serveur a une horloge en avance de dix minutes sur un autre, l'ordre réel des événements pourrait être mal interprété lors d'une analyse post-incident, rendant plus difficile la reconstitution exacte de la chronologie d'une attaque à travers plusieurs systèmes."
      - texte: "Parce qu'une horloge non synchronisée empêche techniquement tout système de fonctionner"
        correcte: false
        explication: "Un système peut parfaitement fonctionner avec une horloge légèrement désynchronisée ; le problème posé concerne la fiabilité de la corrélation d'événements lors d'une analyse, pas le fonctionnement basique du système."
      - texte: "Parce que la synchronisation d'horloge chiffre automatiquement les journaux collectés"
        correcte: false
        explication: "La synchronisation d'horloge via NTP n'a aucune fonction de chiffrement ; elle assure uniquement la cohérence temporelle entre systèmes."
      - texte: "Parce que la loi interdit la collecte de journaux sur des systèmes dont l'horloge n'est pas synchronisée"
        correcte: false
        explication: "Il n'existe pas d'interdiction légale de ce type ; la synchronisation d'horloge est une bonne pratique technique pour la fiabilité de l'analyse, pas une exigence réglementaire."
  - question: "Qu'est-ce que le principe de défense en profondeur recommande dans la conception d'une stratégie de détection d'intrusion ?"
    type: "unique"
    reponses:
      - texte: "Combiner plusieurs couches de détection complémentaires (journaux applicatifs, IDS réseau, SIEM corrélant plusieurs sources) plutôt que de se reposer sur un seul mécanisme de détection unique"
        correcte: true
        explication: "Si un attaquant parvient à contourner ou désactiver un seul mécanisme de détection, les autres couches restent actives et peuvent encore révéler son activité, une redondance qui renforce la fiabilité globale de la détection face à des attaquants qui chercheraient à masquer leurs traces."
      - texte: "Installer un unique outil de détection très puissant, considéré comme suffisant à lui seul"
        correcte: false
        explication: "C'est l'inverse de la philosophie de défense en profondeur, qui repose justement sur la multiplicité des couches complémentaires plutôt que sur un seul outil, aussi performant soit-il."
      - texte: "Ne journaliser que les événements de connexion, en ignorant tout le reste du trafic"
        correcte: false
        explication: "La défense en profondeur recommande au contraire de couvrir plusieurs types d'événements et de sources, pas de se limiter à une seule catégorie comme les connexions uniquement."
      - texte: "Supprimer les journaux après chaque analyse pour économiser de l'espace de stockage"
        correcte: false
        explication: "Supprimer les journaux réduirait la capacité d'investigation future et contredirait l'objectif de traçabilité recherché par une stratégie de détection robuste, ce n'est pas une recommandation de défense en profondeur."
  - question: "Pourquoi la détection d'une attaque web comme une tentative d'injection SQL nécessite-t-elle souvent d'examiner le contenu des paramètres de requête, pas seulement l'adresse IP source ou le volume de trafic ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'une seule requête contenant un payload malveillant caractéristique peut suffire à révéler une tentative d'exploitation, même sans volume de trafic anormal ni adresse IP suspecte connue au préalable"
        correcte: true
        explication: "Contrairement à une attaque par force brute qui génère un volume élevé de requêtes détectable statistiquement, une tentative d'injection ciblée et unique peut passer inaperçue si l'analyse se limite au volume ou à la réputation de l'adresse IP, sans jamais examiner le contenu réel des paramètres transmis."
      - texte: "Parce que l'adresse IP source n'est jamais enregistrée dans les journaux d'un serveur web"
        correcte: false
        explication: "L'adresse IP source est généralement bien enregistrée dans les journaux d'un serveur web ; le problème est qu'elle seule ne suffit pas à détecter un payload malveillant caché dans le contenu d'une requête par ailleurs isolée."
      - texte: "Parce que le volume de trafic est toujours l'indicateur le plus fiable de toute attaque web"
        correcte: false
        explication: "C'est l'inverse de ce qui est illustré ici : le volume de trafic seul peut passer à côté d'une attaque ciblée et discrète comme une injection SQL isolée, qui ne génère pas nécessairement un pic de trafic détectable."
      - texte: "Parce que les paramètres de requête ne sont jamais journalisés par un serveur web"
        correcte: false
        explication: "De nombreux serveurs web peuvent être configurés pour journaliser les paramètres de requête, une information précieuse justement pour détecter des motifs d'injection dans leur contenu."
---
