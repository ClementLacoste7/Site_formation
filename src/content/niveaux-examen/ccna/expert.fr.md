---
titre: "CCNA : Expert"
description: "OSPF avancé, EIGRP, notions BGP, RSTP/MST, QoS, VPN, automatisation et programmabilité, sécurité avancée et dépannage complexe."
slug: "expert"
examen: "ccna"
niveau: "expert"
ordre: 3
nombreQuizz: 3
questionsParQuizz: 20
publie: true
pool:
  - question: "Dans OSPF, à quoi correspond une LSA de type 1 (Router LSA) ?"
    type: "unique"
    reponses:
      - texte: "Elle décrit les liens et interfaces d'un routeur au sein de sa propre zone, inondée uniquement dans cette zone"
        correcte: true
        explication: "Chaque routeur OSPF génère une LSA de type 1 décrivant ses interfaces actives et leurs coûts dans sa zone ; elle reste confinée à cette zone, contrairement aux LSA de type 5 par exemple."
      - texte: "Elle résume les routes d'une zone vers les autres zones, générée par un routeur de bordure de zone (ABR)"
        correcte: false
        explication: "Cette description correspond à une LSA de type 3 (Summary LSA), générée par un ABR, pas à la Router LSA de type 1."
      - texte: "Elle décrit une route externe redistribuée dans OSPF depuis un autre protocole"
        correcte: false
        explication: "Cette description correspond à une LSA de type 5 (External LSA), pas à la Router LSA de type 1."
      - texte: "Elle identifie le routeur désigné (DR) d'un segment multi-accès"
        correcte: false
        explication: "L'identification du DR relève d'une LSA de type 2 (Network LSA) générée par le DR lui-même, pas de la Router LSA de type 1."
  - question: "Que fait une zone stub (stub area) en OSPF ?"
    type: "unique"
    reponses:
      - texte: "Elle bloque l'entrée des routes externes (LSA de type 5) dans la zone, réduisant la taille de la base de données OSPF des routeurs internes"
        correcte: true
        explication: "Une zone stub interdit les LSA de type 5 (routes externes redistribuées), les routeurs internes s'appuyant à la place sur une route par défaut générée par l'ABR pour atteindre les destinations externes, ce qui allège leur base de données et leurs calculs."
      - texte: "Elle empêche toute communication entre les routeurs de cette zone et le reste du réseau OSPF"
        correcte: false
        explication: "Une zone stub continue de communiquer normalement avec la zone 0 (backbone) et les autres zones ; elle filtre seulement certains types de LSA, elle ne coupe pas la communication."
      - texte: "Elle transforme automatiquement tous les routeurs de la zone en routeurs désignés (DR)"
        correcte: false
        explication: "Le concept de zone stub n'a aucun rapport avec l'élection de DR, qui reste un mécanisme distinct lié aux segments multi-accès."
      - texte: "Elle chiffre automatiquement tous les échanges OSPF au sein de la zone"
        correcte: false
        explication: "Une zone stub ne chiffre rien ; son rôle est de limiter certains types de LSA pour alléger la base de données OSPF."
  - question: "Quelle est la différence entre une zone totally stubby (Cisco) et une simple zone stub en OSPF ?"
    type: "unique"
    reponses:
      - texte: "Une zone totally stubby bloque en plus les LSA de type 3 (routes résumées inter-zones), ne laissant passer qu'une route par défaut unique générée par l'ABR"
        correcte: true
        explication: "En plus de filtrer les routes externes (comme une zone stub classique), une zone totally stubby (extension propriétaire Cisco) bloque également les résumés inter-zones, réduisant encore davantage la table de routage des routeurs internes au profit d'une simple route par défaut."
      - texte: "Une zone totally stubby autorise les LSA de type 5, contrairement à une zone stub classique"
        correcte: false
        explication: "C'est l'inverse : une zone totally stubby est encore plus restrictive qu'une zone stub classique, elle n'autorise donc pas davantage de types de LSA."
      - texte: "Une zone totally stubby ne peut contenir qu'un seul routeur"
        correcte: false
        explication: "Une zone totally stubby peut contenir autant de routeurs qu'une zone OSPF normale ; la distinction porte sur le filtrage des LSA, pas sur le nombre de routeurs autorisés."
      - texte: "Il n'existe aucune différence, ce sont deux noms pour le même concept"
        correcte: false
        explication: "Ces deux types de zones ont un comportement de filtrage de LSA différent, la totally stubby étant strictement plus restrictive que la stub classique."
  - question: "À quoi sert une zone NSSA (Not-So-Stubby Area) en OSPF ?"
    type: "unique"
    reponses:
      - texte: "À permettre la redistribution de routes externes limitées dans une zone qui reste par ailleurs stub, via un type de LSA spécifique (type 7) converti en type 5 par l'ABR"
        correcte: true
        explication: "Une NSSA autorise un routeur ASBR interne à cette zone à injecter des routes externes (LSA de type 7), tout en conservant les avantages d'une zone stub pour le reste ; l'ABR convertit ensuite ces LSA de type 7 en type 5 en sortie de zone."
      - texte: "À interdire complètement toute forme de redistribution de routes externes dans OSPF"
        correcte: false
        explication: "C'est l'inverse : la NSSA existe justement pour permettre une redistribution limitée de routes externes, ce qu'une zone stub classique interdit totalement."
      - texte: "À fusionner deux zones OSPF différentes en une seule zone 0"
        correcte: false
        explication: "Une NSSA reste une zone à part entière avec son propre numéro, elle ne fusionne pas deux zones existantes en zone 0."
      - texte: "À chiffrer spécifiquement les échanges de cette zone, contrairement aux autres"
        correcte: false
        explication: "Une NSSA ne chiffre rien de particulier ; sa spécificité concerne uniquement le traitement des routes externes via les LSA de type 7."
  - question: "Que représente la métrique composite utilisée par EIGRP, basée notamment sur la bande passante et le délai par défaut ?"
    type: "unique"
    reponses:
      - texte: "Une valeur calculée à partir de plusieurs composantes pondérées par des valeurs K (bande passante et délai par défaut, avec charge et fiabilité disponibles mais rarement utilisées)"
        correcte: true
        explication: "EIGRP calcule sa métrique via une formule combinant plusieurs composantes (bande passante, délai, charge, fiabilité, MTU) pondérées par des constantes K1 à K5 ; par défaut, seules la bande passante et le délai sont réellement pris en compte (K1=K3=1, les autres à 0)."
      - texte: "Uniquement le nombre de sauts (hop count) entre la source et la destination"
        correcte: false
        explication: "Le nombre de sauts seul est la métrique de RIP, pas la métrique composite bien plus riche utilisée par EIGRP."
      - texte: "Uniquement la distance administrative de la route"
        correcte: false
        explication: "La distance administrative sert à comparer des sources de routage différentes entre elles, ce n'est pas la métrique interne de calcul de chemin d'EIGRP."
      - texte: "Un simple booléen indiquant si la route est directement connectée ou non"
        correcte: false
        explication: "EIGRP calcule une métrique numérique fine basée sur plusieurs facteurs pondérés, pas un simple indicateur binaire de connexion directe."
  - question: "Que désigne un successeur potentiel (feasible successor) dans l'algorithme DUAL d'EIGRP ?"
    type: "unique"
    reponses:
      - texte: "Une route de secours déjà connue et garantie sans boucle, immédiatement utilisable si la route principale (successeur) tombe en panne"
        correcte: true
        explication: "DUAL précalcule des routes de secours (feasible successors) qui satisfont une condition de faisabilité garantissant l'absence de boucle ; en cas de perte du successeur principal, EIGRP peut basculer instantanément vers ce successeur potentiel sans recalcul complet."
      - texte: "Le prochain routeur qui sera élu pont racine dans le réseau"
        correcte: false
        explication: "L'élection de pont racine est un concept de STP (couche 2), sans rapport avec le successeur potentiel d'EIGRP qui concerne le routage de couche 3."
      - texte: "Une route qui n'est jamais utilisable, uniquement conservée pour des raisons historiques"
        correcte: false
        explication: "Un successeur potentiel est au contraire immédiatement exploitable en cas de défaillance du successeur actuel, ce n'est pas une route figée sans usage pratique."
      - texte: "Le routeur EIGRP ayant la priorité DR la plus élevée"
        correcte: false
        explication: "La notion de priorité DR appartient à OSPF sur les segments multi-accès, sans équivalent direct dans le vocabulaire du successeur potentiel EIGRP."
  - question: "Pourquoi la bascule vers un successeur potentiel (feasible successor) EIGRP est-elle nettement plus rapide qu'une convergence OSPF classique après la perte d'une route ?"
    type: "unique"
    reponses:
      - texte: "Parce que le successeur potentiel est déjà précalculé et validé comme exempt de boucle avant même la panne, évitant un nouveau calcul complet du meilleur chemin"
        correcte: true
        explication: "DUAL maintient en permanence, quand c'est possible, un successeur potentiel prêt à l'emploi ; la bascule se fait donc quasi immédiatement, alors qu'OSPF doit généralement recalculer l'arbre du plus court chemin (SPF) après un changement de topologie."
      - texte: "Parce qu'EIGRP n'utilise aucune métrique, contrairement à OSPF"
        correcte: false
        explication: "EIGRP utilise bien une métrique composite pour choisir ses routes ; la rapidité de bascule vient de la préparation du successeur potentiel, pas de l'absence de métrique."
      - texte: "Parce qu'EIGRP ignore complètement les pannes de lien"
        correcte: false
        explication: "EIGRP détecte activement les pannes de lien (via les hello et la perte d'adjacence), ce n'est pas une ignorance des pannes qui explique sa rapidité de convergence."
      - texte: "Parce qu'EIGRP ne fonctionne qu'sur des réseaux à un seul routeur"
        correcte: false
        explication: "EIGRP fonctionne sur des réseaux à plusieurs routeurs comme tout protocole de routage dynamique ; sa rapidité de convergence vient du mécanisme DUAL, pas d'une limitation de taille de réseau."
  - question: "En BGP, quelle est la différence essentielle entre eBGP (external BGP) et iBGP (internal BGP) ?"
    type: "unique"
    reponses:
      - texte: "eBGP établit une session entre routeurs de systèmes autonomes (AS) différents, iBGP entre routeurs d'un même système autonome"
        correcte: true
        explication: "Le numéro de système autonome (AS number) distingue les deux : une session eBGP relie deux AS distincts (typiquement entre deux organisations ou vers un fournisseur d'accès), une session iBGP relie des routeurs au sein du même AS pour propager en interne les routes apprises en externe."
      - texte: "eBGP ne peut échanger que des routes IPv4, iBGP uniquement des routes IPv6"
        correcte: false
        explication: "Les deux variantes de BGP peuvent échanger des routes IPv4 ou IPv6 selon la configuration ; la distinction entre eBGP et iBGP porte sur les systèmes autonomes, pas la version d'IP."
      - texte: "iBGP est un protocole propriétaire Cisco, eBGP un standard ouvert"
        correcte: false
        explication: "BGP dans son ensemble (eBGP et iBGP) est un standard ouvert défini par l'IETF, ce n'est pas une distinction de propriété entre les deux variantes."
      - texte: "eBGP ne peut relier que deux routeurs directement connectés physiquement, jamais iBGP"
        correcte: false
        explication: "eBGP suppose généralement une connexion directe (souvent exigée par défaut via un TTL de 1), mais iBGP peut aussi bien relier des routeurs directement connectés que distants au sein du même AS via des sessions multi-sauts."
  - question: "Qu'est-ce qu'un système autonome (AS) dans le contexte de BGP et du routage Internet ?"
    type: "unique"
    reponses:
      - texte: "Un ensemble de réseaux sous une administration technique unique, identifié par un numéro d'AS unique, qui définit une politique de routage cohérente vers l'extérieur"
        correcte: true
        explication: "Un AS regroupe des réseaux gérés par une même organisation (un opérateur, une grande entreprise) avec une politique de routage propre, et échange des routes avec d'autres AS via BGP pour former le routage global d'Internet."
      - texte: "Un unique routeur physique connecté à Internet"
        correcte: false
        explication: "Un système autonome représente un ensemble de réseaux, potentiellement de nombreux routeurs, pas un routeur unique."
      - texte: "Un protocole de chiffrement utilisé exclusivement par BGP"
        correcte: false
        explication: "Le terme système autonome ne désigne pas un protocole de chiffrement, mais une unité administrative de réseaux identifiée par un numéro."
      - texte: "Une zone OSPF particulière dédiée au trafic externe"
        correcte: false
        explication: "Le système autonome est un concept propre à BGP et au routage inter-domaines, distinct des zones OSPF qui structurent le routage au sein d'un même domaine."
  - question: "Pourquoi BGP est-il considéré comme un protocole de routage à vecteur de chemin (path-vector), et pas seulement à vecteur de distance ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'il propage la liste complète des systèmes autonomes traversés (AS-path) pour chaque route, permettant de détecter et d'éviter les boucles au niveau des AS"
        correcte: true
        explication: "En plus d'une métrique, BGP inclut l'AS-path (la séquence des AS traversés) dans chaque route annoncée ; un routeur rejette une route dont son propre AS apparaît déjà dans l'AS-path, prévenant ainsi les boucles au niveau du routage inter-domaines."
      - texte: "Parce qu'il ne prend en compte que le nombre de sauts, comme RIP"
        correcte: false
        explication: "BGP ne se limite pas à un simple compteur de sauts ; c'est justement l'AS-path complet, bien plus riche qu'un compteur, qui caractérise son fonctionnement en vecteur de chemin."
      - texte: "Parce qu'il fonctionne uniquement sur des liaisons point-à-point directes"
        correcte: false
        explication: "BGP peut fonctionner aussi bien sur des liaisons directement connectées que via des sessions iBGP multi-sauts ; ce n'est pas cette caractéristique qui définit le vecteur de chemin."
      - texte: "Parce qu'il recalcule systématiquement tout l'arbre du plus court chemin comme OSPF"
        correcte: false
        explication: "Ce comportement de recalcul d'arbre de plus court chemin (SPF) caractérise les protocoles à état de liens comme OSPF, pas BGP qui repose sur l'échange de chemins (AS-path) et de règles de politique."
  - question: "Dans RSTP (802.1w), quel nouveau rôle de port permet une bascule quasi immédiate en cas de perte du port racine, sans repasser par tous les états intermédiaires de STP classique ?"
    type: "unique"
    reponses:
      - texte: "Le port alternatif (alternate port)"
        correcte: true
        explication: "Le port alternatif offre un chemin de secours vers le pont racine, déjà connu et prêt, ce qui permet à RSTP de basculer très rapidement en cas de défaillance du port racine actuel, contrairement à STP classique qui devait repasser par les états d'écoute et d'apprentissage."
      - texte: "Le port désigné (designated port)"
        correcte: false
        explication: "Le port désigné est le port qui transmet normalement le trafic sur un segment donné ; ce n'est pas lui qui sert de secours immédiat au port racine."
      - texte: "Le port de secours (backup port)"
        correcte: false
        explication: "Le port de secours (backup) offre une redondance pour un port désigné sur un même segment partagé, pas spécifiquement pour le port racine."
      - texte: "Le port bloqué (blocking port), comme en STP classique"
        correcte: false
        explication: "Le terme blocking n'existe plus en tant que tel dans RSTP de la même façon ; c'est le rôle alternate port qui assure la bascule rapide vers le pont racine."
  - question: "Quelle est la différence entre le port alternatif (alternate) et le port de secours (backup) dans RSTP ?"
    type: "unique"
    reponses:
      - texte: "Le port alternatif offre un chemin de secours vers le pont racine via un autre switch, le port de secours offre une redondance vers le même segment que le port désigné du même switch"
        correcte: true
        explication: "Le port alternatif reçoit de meilleures BPDU d'un autre switch et sert de route de secours vers la racine ; le port de secours concerne un cas particulier où un même switch a plusieurs connexions vers le même segment partagé (par exemple via un hub), offrant une redondance locale plutôt qu'un chemin alternatif vers la racine."
      - texte: "Il n'existe aucune différence, ce sont deux noms pour le même rôle de port"
        correcte: false
        explication: "RSTP distingue bien ces deux rôles avec des conditions et des usages différents, ce n'est pas une simple synonymie."
      - texte: "Le port alternatif ne peut exister que sur le pont racine lui-même"
        correcte: false
        explication: "Le port alternatif existe sur des switches non-racine ayant plusieurs chemins possibles vers la racine, pas exclusivement sur le pont racine, qui lui-même n'a pas besoin de chemin alternatif vers lui-même."
      - texte: "Le port de secours ne peut exister que sur un lien WAN"
        correcte: false
        explication: "Le port de secours concerne un scénario de redondance sur un même segment partagé, un cas de figure plus courant en LAN historique (avec hub) qu'en lien WAN."
  - question: "Qu'est-ce que MST (Multiple Spanning Tree, 802.1s) apporte par rapport à PVST+ (Per-VLAN Spanning Tree) ?"
    type: "unique"
    reponses:
      - texte: "Il permet de regrouper plusieurs VLAN dans une seule instance Spanning Tree commune, réduisant la charge de calcul par rapport à une instance dédiée par VLAN"
        correcte: true
        explication: "PVST+ calcule une instance STP distincte pour chaque VLAN, ce qui devient coûteux en ressources avec de nombreux VLAN ; MST regroupe plusieurs VLAN partageant la même topologie logique dans une instance commune, réduisant ainsi le nombre de calculs nécessaires tout en gardant une certaine granularité."
      - texte: "Il supprime complètement le besoin de Spanning Tree sur le réseau"
        correcte: false
        explication: "MST reste un protocole Spanning Tree à part entière, il ne supprime pas le concept, il optimise seulement le nombre d'instances de calcul par rapport à PVST+."
      - texte: "Il ne peut fonctionner qu'avec un seul VLAN à la fois, comme STP classique"
        correcte: false
        explication: "C'est l'inverse : MST est justement conçu pour regrouper efficacement plusieurs VLAN dans une même instance, contrairement à STP classique limité nativement à une seule instance globale sans distinction de VLAN."
      - texte: "Il chiffre les échanges BPDU entre les switches, contrairement à PVST+"
        correcte: false
        explication: "Ni MST ni PVST+ ne chiffrent les échanges BPDU ; l'apport de MST concerne l'efficacité du calcul des instances, pas la sécurité cryptographique."
  - question: "Que signifie GLBP (Gateway Load Balancing Protocol) par rapport à HSRP ou VRRP ?"
    type: "unique"
    reponses:
      - texte: "GLBP permet, en plus de la redondance de passerelle, de répartir la charge du trafic sortant entre plusieurs routeurs actifs simultanément, plutôt qu'un seul routeur actif à la fois"
        correcte: true
        explication: "Contrairement à HSRP ou VRRP où un seul routeur du groupe traite activement le trafic à un instant donné, GLBP répond à différentes requêtes ARP des clients avec des adresses MAC virtuelles différentes, répartissant ainsi la charge entre plusieurs routeurs actifs."
      - texte: "GLBP est une version chiffrée d'HSRP, sans autre différence fonctionnelle"
        correcte: false
        explication: "La différence essentielle de GLBP n'est pas le chiffrement, mais sa capacité à répartir la charge entre plusieurs routeurs actifs simultanément, contrairement à HSRP."
      - texte: "GLBP ne fonctionne qu'avec un seul routeur, jamais en groupe"
        correcte: false
        explication: "GLBP fonctionne justement avec un groupe de plusieurs routeurs, comme HSRP et VRRP, mais avec une répartition de charge entre eux."
      - texte: "GLBP est un standard ouvert IETF, contrairement à HSRP propriétaire Cisco"
        correcte: false
        explication: "GLBP est en réalité lui aussi une technologie propriétaire Cisco, comme HSRP ; VRRP est le standard ouvert IETF parmi ces trois protocoles."
  - question: "Quelle est la différence entre le shaping (mise en forme) et le policing (contrôle) du trafic en QoS ?"
    type: "unique"
    reponses:
      - texte: "Le shaping mémorise (buffer) le trafic excédentaire pour le lisser dans le temps, le policing rejette ou remarque immédiatement le trafic qui dépasse la limite définie"
        correcte: true
        explication: "Le shaping retarde l'émission du trafic excédentaire en le stockant temporairement dans une file d'attente pour respecter un débit moyen, tandis que le policing agit immédiatement en rejetant (drop) ou en remarquant (re-mark) les paquets qui dépassent le débit autorisé, sans mise en attente."
      - texte: "Le policing mémorise le trafic excédentaire, le shaping le rejette immédiatement"
        correcte: false
        explication: "C'est l'inverse : c'est le shaping qui met en attente le trafic excédentaire, tandis que le policing agit immédiatement sans mise en buffer."
      - texte: "Les deux termes désignent exactement le même mécanisme de QoS"
        correcte: false
        explication: "Le comportement face au trafic excédentaire diffère nettement (mise en attente contre rejet immédiat), ce ne sont pas deux noms pour le même mécanisme."
      - texte: "Le shaping et le policing ne s'appliquent qu'au trafic entrant, jamais sortant"
        correcte: false
        explication: "Ces deux mécanismes peuvent s'appliquer aussi bien au trafic entrant que sortant selon la configuration, ce n'est pas une limitation à une seule direction."
  - question: "À quoi sert le marquage DSCP (Differentiated Services Code Point) dans une stratégie de QoS de bout en bout ?"
    type: "unique"
    reponses:
      - texte: "À classer un paquet IP selon une priorité de traitement, permettant à chaque équipement traversé d'appliquer une politique de mise en file d'attente cohérente"
        correcte: true
        explication: "Le champ DSCP, dans l'en-tête IP, encode une valeur de priorité (par exemple EF pour la voix, priorisée) que chaque routeur ou switch traversé peut lire pour appliquer un traitement de file d'attente cohérent sur tout le chemin, sans devoir réanalyser le trafic à chaque saut."
      - texte: "À chiffrer le contenu du paquet IP pour le protéger en transit"
        correcte: false
        explication: "DSCP est un marquage de priorité en clair dans l'en-tête IP, il ne chiffre absolument rien du contenu du paquet."
      - texte: "À attribuer une adresse IP différente selon le type de trafic"
        correcte: false
        explication: "DSCP ne change pas l'adressage IP du paquet ; il ajoute seulement une information de priorité dans l'en-tête existant."
      - texte: "À bloquer automatiquement tout trafic non marqué"
        correcte: false
        explication: "Un trafic non marqué (DSCP à 0, best effort) n'est pas automatiquement bloqué ; il est simplement traité sans priorité particulière, sauf configuration contraire."
  - question: "Quelle est la différence fondamentale entre un tunnel GRE et un tunnel IPsec ?"
    type: "unique"
    reponses:
      - texte: "GRE encapsule et achemine différents types de trafic (y compris non-IP et multicast) sans chiffrement natif, IPsec chiffre et authentifie le trafic mais ne supporte nativement que l'unicast IP"
        correcte: true
        explication: "GRE est un protocole d'encapsulation générique, souple sur les types de trafic transportés (y compris le multicast utile pour certains protocoles de routage), mais sans confidentialité ; IPsec apporte le chiffrement et l'authentification, mais avec des contraintes plus strictes sur le trafic supporté, ce qui explique la combinaison fréquente GRE sur IPsec."
      - texte: "IPsec ne peut fonctionner qu'en local, jamais à travers Internet"
        correcte: false
        explication: "IPsec est justement largement utilisé pour sécuriser des tunnels VPN à travers Internet entre deux sites distants, ce n'est pas une limitation à un usage local."
      - texte: "GRE chiffre nativement tout le trafic qu'il transporte, contrairement à IPsec"
        correcte: false
        explication: "C'est l'inverse : GRE n'apporte aucun chiffrement par lui-même, alors qu'IPsec est justement le protocole qui assure la confidentialité et l'authentification du trafic."
      - texte: "Les deux protocoles sont strictement identiques dans leur fonctionnement et leurs cas d'usage"
        correcte: false
        explication: "Leur fonctionnement diffère nettement sur la sécurité et le type de trafic supporté, ce n'est pas une équivalence stricte."
  - question: "Dans un tunnel VPN IPsec en mode site-à-site, à quoi sert la phase 1 (établissement de l'association de sécurité IKE) ?"
    type: "unique"
    reponses:
      - texte: "À authentifier les deux extrémités du tunnel et à négocier les paramètres de sécurité qui protégeront ensuite les échanges de la phase 2"
        correcte: true
        explication: "La phase 1 IKE établit un canal sécurisé et authentifié entre les deux passerelles VPN, sur lequel se négocieront ensuite en phase 2 les associations de sécurité IPsec qui protégeront réellement le trafic utilisateur."
      - texte: "À transporter directement le trafic utilisateur chiffré entre les deux sites"
        correcte: false
        explication: "Le transport du trafic utilisateur chiffré se fait via les associations de sécurité négociées en phase 2, pas directement pendant la phase 1 qui sert à établir le canal de négociation sécurisé."
      - texte: "À attribuer des adresses IP publiques aux deux passerelles VPN"
        correcte: false
        explication: "L'attribution d'adresses IP publiques est une configuration réseau préalable, indépendante du déroulement des phases IKE d'un tunnel IPsec."
      - texte: "À synchroniser les tables de routage des deux sites via OSPF"
        correcte: false
        explication: "La synchronisation de routage via OSPF, si utilisée, est une couche indépendante qui peut s'exécuter par-dessus le tunnel une fois établi, ce n'est pas le rôle de la phase 1 IKE elle-même."
  - question: "Quelle est la différence entre un VPN site-à-site et un VPN d'accès distant (remote access) ?"
    type: "unique"
    reponses:
      - texte: "Un VPN site-à-site relie deux réseaux entiers via leurs passerelles respectives, un VPN d'accès distant relie un utilisateur individuel isolé au réseau de l'entreprise"
        correcte: true
        explication: "Le VPN site-à-site fonctionne en permanence entre deux passerelles pour interconnecter deux sites complets, tandis que le VPN d'accès distant est typiquement établi à la demande depuis le poste d'un utilisateur nomade (via un client VPN) vers une passerelle d'entreprise."
      - texte: "Un VPN site-à-site nécessite obligatoirement un client logiciel installé sur chaque poste utilisateur"
        correcte: false
        explication: "C'est l'inverse : c'est le VPN d'accès distant qui repose généralement sur un client logiciel installé sur le poste de l'utilisateur, tandis que le VPN site-à-site est transparent pour les utilisateurs, géré au niveau des passerelles."
      - texte: "Un VPN d'accès distant relie toujours deux data centers entre eux"
        correcte: false
        explication: "Relier deux data centers entre eux est un cas d'usage typique du VPN site-à-site, pas du VPN d'accès distant destiné à un utilisateur individuel."
      - texte: "Il n'existe aucune différence pratique entre les deux types de VPN"
        correcte: false
        explication: "Leur architecture et leur cas d'usage diffèrent nettement (interconnexion de sites contre accès individuel distant), ce n'est pas une distinction purement nominale."
  - question: "Que permet le protocole NETCONF, utilisé en automatisation réseau moderne ?"
    type: "unique"
    reponses:
      - texte: "Configurer et interroger des équipements réseau de façon structurée et programmatique, en s'appuyant sur des modèles de données comme YANG"
        correcte: true
        explication: "NETCONF est un protocole de gestion de configuration réseau qui échange des données structurées (XML) conformes à des modèles YANG, permettant une automatisation fiable et standardisée, contrairement à l'analyse fragile de sorties de commandes CLI texte."
      - texte: "Chiffrer uniquement le trafic voix sur IP"
        correcte: false
        explication: "NETCONF n'a aucun rapport avec la voix sur IP ; c'est un protocole de gestion et de configuration d'équipements réseau."
      - texte: "Remplacer complètement le besoin d'adresses IP sur les équipements"
        correcte: false
        explication: "NETCONF utilise le réseau IP existant pour dialoguer avec les équipements, il ne supprime en rien le besoin d'adressage IP."
      - texte: "Un protocole de routage concurrent d'OSPF"
        correcte: false
        explication: "NETCONF n'est pas un protocole de routage : c'est un protocole de gestion de configuration, complémentaire et indépendant des protocoles de routage comme OSPF."
  - question: "Quelle est la différence entre RESTCONF et NETCONF ?"
    type: "unique"
    reponses:
      - texte: "RESTCONF expose les mêmes modèles de données YANG que NETCONF, mais via une API HTTP de style REST, souvent avec des données en JSON plutôt qu'en XML"
        correcte: true
        explication: "RESTCONF reprend les principes de modélisation de données de NETCONF (YANG) mais les rend accessibles via des appels HTTP classiques (GET, POST, PUT, DELETE), un style d'API plus familier aux développeurs habitués à REST et JSON."
      - texte: "RESTCONF ne peut interroger que l'état des interfaces, jamais les modifier"
        correcte: false
        explication: "RESTCONF permet aussi bien de consulter (GET) que de modifier (POST, PUT, PATCH, DELETE) la configuration d'un équipement, comme NETCONF."
      - texte: "NETCONF utilise exclusivement HTTP, RESTCONF exclusivement SSH"
        correcte: false
        explication: "C'est l'inverse en pratique : NETCONF s'appuie généralement sur SSH comme transport, tandis que RESTCONF utilise HTTP/HTTPS."
      - texte: "Il n'existe aucune différence entre les deux protocoles"
        correcte: false
        explication: "Leur transport et leur style d'interaction diffèrent (SSH avec XML pour NETCONF, HTTP avec souvent du JSON pour RESTCONF), ce n'est pas une simple synonymie."
  - question: "Dans une architecture définie par logiciel (SDN, Software-Defined Networking), quel est le rôle principal du plan de contrôle centralisé (contrôleur SDN) ?"
    type: "unique"
    reponses:
      - texte: "Prendre les décisions de routage et de politique de façon centralisée, puis pousser cette configuration vers les équipements du réseau, qui se contentent de transmettre le trafic"
        correcte: true
        explication: "SDN sépare le plan de contrôle (intelligence, décisions) du plan de données (transmission du trafic) : un contrôleur centralisé prend les décisions et les équipements réseau deviennent principalement des exécutants qui suivent les instructions reçues, facilitant une gestion et une automatisation centralisées."
      - texte: "Transmettre physiquement chaque paquet de données à travers le réseau"
        correcte: false
        explication: "C'est le rôle du plan de données (les équipements réseau eux-mêmes), pas du contrôleur SDN qui se concentre sur les décisions de contrôle."
      - texte: "Remplacer complètement le besoin de câblage physique entre les équipements"
        correcte: false
        explication: "SDN ne supprime pas le besoin d'une infrastructure physique de câblage ; il change la façon dont cette infrastructure est contrôlée et gérée, pas son existence physique."
      - texte: "Chiffrer automatiquement tout le trafic transitant sur le réseau"
        correcte: false
        explication: "Le rôle du contrôleur SDN est la centralisation des décisions de contrôle, pas nécessairement le chiffrement systématique du trafic, qui reste une fonction distincte."
  - question: "Quel est le principe général de Cisco SD-Access (SDA), une architecture de réseau de campus définie par logiciel ?"
    type: "unique"
    reponses:
      - texte: "Automatiser le déploiement et la segmentation du réseau de campus via une fabric basée sur VXLAN, avec une gestion centralisée par un contrôleur comme Cisco DNA Center"
        correcte: true
        explication: "SD-Access crée une fabric réseau overlay (souvent basée sur VXLAN) qui découple l'adressage et la politique de sécurité de la topologie physique sous-jacente, automatisant la segmentation (via des groupes de sécurité) et la configuration via un contrôleur centralisé."
      - texte: "Remplacer tous les switches physiques du réseau par des équipements uniquement virtuels"
        correcte: false
        explication: "SD-Access s'appuie toujours sur des équipements physiques réels (switches, points d'accès) formant la fabric ; ce n'est pas une virtualisation complète qui supprime le matériel physique."
      - texte: "Un protocole de chiffrement de bout en bout pour les communications vocales uniquement"
        correcte: false
        explication: "SD-Access est une architecture globale de réseau de campus, pas un protocole limité au chiffrement de la voix."
      - texte: "Une technique exclusivement dédiée à l'optimisation des liaisons WAN entre sites distants"
        correcte: false
        explication: "Cette description correspond davantage au principe de SD-WAN, une architecture différente axée sur les liaisons WAN, alors que SD-Access cible le réseau de campus local."
  - question: "Quel est le principe général de SD-WAN par rapport à une architecture WAN traditionnelle basée sur MPLS uniquement ?"
    type: "unique"
    reponses:
      - texte: "Il permet de combiner intelligemment plusieurs types de liens WAN (MPLS, Internet, cellulaire) sous une gestion centralisée, en orientant dynamiquement le trafic selon des politiques et la qualité de chaque lien"
        correcte: true
        explication: "SD-WAN ajoute une couche logicielle de contrôle centralisé qui choisit dynamiquement le meilleur chemin parmi plusieurs liens WAN disponibles (MPLS, Internet, 4G) selon des critères de performance et de politique, plutôt que de dépendre d'un unique lien MPLS statique."
      - texte: "Il élimine complètement le besoin d'une connexion Internet sur les sites distants"
        correcte: false
        explication: "SD-WAN utilise souvent Internet comme l'un des liens combinés, il ne l'élimine pas ; au contraire, il valorise la possibilité d'utiliser Internet en complément ou à la place du MPLS."
      - texte: "Il ne fonctionne qu'avec un unique fournisseur MPLS, jamais avec plusieurs types de liens"
        correcte: false
        explication: "C'est l'inverse : l'un des principaux intérêts de SD-WAN est justement de combiner plusieurs types de liens et fournisseurs différents sous une même gestion."
      - texte: "Il s'agit d'un simple renommage marketing de MPLS, sans différence technique réelle"
        correcte: false
        explication: "SD-WAN apporte des différences techniques réelles : abstraction logicielle, choix dynamique de chemin et gestion centralisée, ce n'est pas une simple opération marketing."
  - question: "Quelle est la différence entre les modèles de service cloud IaaS, PaaS et SaaS ?"
    type: "unique"
    reponses:
      - texte: "IaaS fournit une infrastructure virtuelle brute (serveurs, stockage, réseau), PaaS ajoute une plateforme d'exécution prête à l'emploi pour développer des applications, SaaS fournit une application complète déjà prête à l'usage"
        correcte: true
        explication: "Ces trois modèles se distinguent par le niveau d'abstraction et de responsabilité laissé au client : IaaS laisse gérer l'OS et les applications sur une infrastructure louée, PaaS gère l'infrastructure et le runtime pour ne laisser que le code applicatif, SaaS livre une application entièrement fonctionnelle sans aucune gestion technique côté client."
      - texte: "Les trois modèles désignent exactement le même service, avec des noms marketing différents"
        correcte: false
        explication: "Ces trois modèles se distinguent clairement par le niveau de responsabilité et d'abstraction offert au client, ce n'est pas une simple différence de nom."
      - texte: "SaaS est le modèle le plus bas niveau, IaaS le plus haut niveau"
        correcte: false
        explication: "C'est l'inverse : IaaS est le modèle le plus bas niveau (infrastructure brute), SaaS le plus haut niveau (application complète prête à l'emploi)."
      - texte: "PaaS ne concerne que le stockage de fichiers dans le cloud"
        correcte: false
        explication: "PaaS concerne une plateforme complète de développement et d'exécution d'applications, pas uniquement le stockage de fichiers."
  - question: "Qu'est-ce qu'une architecture cloud hybride ?"
    type: "unique"
    reponses:
      - texte: "Une combinaison d'une infrastructure sur site (on-premises) et de ressources cloud public, interconnectées et souvent orchestrées ensemble"
        correcte: true
        explication: "Le cloud hybride permet à une organisation de garder certaines charges de travail sensibles ou historiques sur son infrastructure propre, tout en exploitant l'élasticité et les services du cloud public pour d'autres besoins, avec une interconnexion (souvent via VPN ou liaison dédiée) entre les deux environnements."
      - texte: "Un cloud utilisant exclusivement plusieurs fournisseurs de cloud public, sans aucune infrastructure sur site"
        correcte: false
        explication: "Cette description correspond davantage à une architecture multicloud (plusieurs fournisseurs publics), pas au cloud hybride qui combine spécifiquement sur site et cloud public."
      - texte: "Un cloud réservé exclusivement aux administrations publiques"
        correcte: false
        explication: "Le terme hybride ne fait pas référence au secteur d'activité de l'utilisateur, mais à la combinaison technique entre infrastructure sur site et cloud public."
      - texte: "Une infrastructure entièrement virtualisée mais hébergée uniquement en interne, sans connexion à Internet"
        correcte: false
        explication: "Le cloud hybride implique justement une connexion et une intégration avec un cloud public externe, ce n'est pas une infrastructure interne isolée."
  - question: "Qu'est-ce que le DHCP snooping sur un switch Cisco vise à empêcher ?"
    type: "unique"
    reponses:
      - texte: "Qu'un serveur DHCP non autorisé (rogue) sur un port non fiable ne distribue de fausses configurations IP aux clients du réseau"
        correcte: true
        explication: "DHCP snooping classe les ports en fiables (trusted, généralement vers le vrai serveur DHCP ou la liaison montante) et non fiables (untrusted, vers les postes utilisateurs) ; il bloque les réponses DHCP (offer/ack) provenant de ports non fiables, empêchant un serveur DHCP pirate connecté par erreur ou malveillance de perturber le réseau."
      - texte: "Qu'un utilisateur ne puisse jamais recevoir d'adresse IP via DHCP"
        correcte: false
        explication: "C'est l'inverse : DHCP snooping vise à sécuriser le fonctionnement normal du DHCP légitime, pas à empêcher les clients légitimes de recevoir une adresse IP."
      - texte: "Que deux VLAN différents communiquent entre eux sans passer par un routeur"
        correcte: false
        explication: "Ce contrôle relèverait de la configuration de routage inter-VLAN ou de listes de contrôle d'accès, sans rapport avec le rôle de DHCP snooping."
      - texte: "Que le trafic DHCP soit chiffré de bout en bout"
        correcte: false
        explication: "DHCP snooping ne chiffre rien ; son rôle est de filtrer les sources autorisées à répondre aux requêtes DHCP, pas de sécuriser cryptographiquement les échanges."
  - question: "Comment la table de liaison DHCP snooping (DHCP snooping binding table) est-elle utilisée par la fonctionnalité Dynamic ARP Inspection (DAI) ?"
    type: "unique"
    reponses:
      - texte: "DAI compare chaque message ARP reçu à la table de liaison DHCP snooping pour vérifier que l'association adresse IP/adresse MAC annoncée est légitime, avant de laisser passer le message"
        correcte: true
        explication: "DAI s'appuie sur les baux DHCP légitimes enregistrés par DHCP snooping (adresse IP, adresse MAC, VLAN, port) pour détecter et bloquer les messages ARP falsifiés (ARP spoofing/poisoning) qui ne correspondraient à aucune association connue et légitime."
      - texte: "DAI utilise cette table uniquement pour générer des rapports statistiques, sans bloquer aucun trafic"
        correcte: false
        explication: "DAI bloque activement les messages ARP suspects ne correspondant pas à la table de liaison légitime, ce n'est pas une fonction purement statistique et passive."
      - texte: "DAI l'utilise pour attribuer automatiquement de nouvelles adresses IP aux clients"
        correcte: false
        explication: "L'attribution d'adresses IP reste le rôle du serveur DHCP ; DAI se contente de vérifier la légitimité des messages ARP à l'aide des informations déjà enregistrées par DHCP snooping."
      - texte: "DAI l'utilise pour chiffrer les échanges ARP sur le réseau local"
        correcte: false
        explication: "ARP n'est pas nativement chiffrable de cette façon, et DAI ne cherche pas à le chiffrer : son rôle est de vérifier la légitimité des correspondances IP/MAC annoncées."
  - question: "Quel est l'objectif du protocole 802.1X dans le contrôle d'accès réseau ?"
    type: "unique"
    reponses:
      - texte: "Exiger une authentification (souvent via un serveur RADIUS) avant qu'un poste ne soit autorisé à accéder pleinement au réseau via un port de switch ou un point d'accès"
        correcte: true
        explication: "802.1X met en œuvre un contrôle d'accès basé sur le port : tant que l'utilisateur ou l'équipement ne s'est pas authentifié avec succès (typiquement relayé vers un serveur RADIUS), son accès au réseau reste limité ou bloqué, une mesure clé du contrôle d'accès réseau (NAC)."
      - texte: "Chiffrer automatiquement tout le contenu des fichiers stockés sur le réseau"
        correcte: false
        explication: "802.1X est un mécanisme de contrôle d'accès au réseau à l'authentification, pas un système de chiffrement de fichiers stockés."
      - texte: "Attribuer des adresses IP statiques à chaque poste authentifié"
        correcte: false
        explication: "L'attribution d'adresse IP reste généralement le rôle de DHCP, potentiellement déclenché après une authentification 802.1X réussie, mais ce n'est pas la fonction propre de 802.1X lui-même."
      - texte: "Remplacer complètement le besoin d'un pare-feu sur le réseau"
        correcte: false
        explication: "802.1X et un pare-feu ont des rôles complémentaires mais distincts : l'un contrôle l'accès au niveau du port réseau, l'autre filtre le trafic selon des règles ; l'un ne remplace pas l'autre."
  - question: "Qu'est-ce que le concept de Zero Trust en sécurité réseau moderne ?"
    type: "unique"
    reponses:
      - texte: "Ne jamais faire confiance par défaut à un utilisateur ou un équipement, même à l'intérieur du réseau interne, et vérifier systématiquement chaque accès selon le principe du moindre privilège"
        correcte: true
        explication: "Contrairement au modèle traditionnel du périmètre sécurisé (tout ce qui est interne est de confiance), Zero Trust exige une vérification continue de l'identité, du contexte et des droits pour chaque accès à une ressource, qu'il vienne de l'intérieur ou de l'extérieur du réseau."
      - texte: "Faire confiance à tout le trafic interne du réseau, mais bloquer systématiquement tout le trafic externe"
        correcte: false
        explication: "C'est justement l'inverse de la philosophie Zero Trust, qui remet en cause précisément la confiance implicite accordée au trafic interne dans les modèles traditionnels."
      - texte: "Un protocole de chiffrement spécifique remplaçant TLS"
        correcte: false
        explication: "Zero Trust est un modèle et une philosophie de sécurité, pas un protocole de chiffrement particulier ; il peut s'appuyer sur TLS et d'autres mécanismes existants."
      - texte: "Une architecture qui supprime totalement le besoin d'authentification des utilisateurs"
        correcte: false
        explication: "C'est l'inverse : Zero Trust renforce au contraire l'exigence de vérification et d'authentification systématique, plutôt que de la supprimer."
  - question: "Quelle est la différence entre l'authentification multifacteur (MFA) et une authentification classique par simple mot de passe ?"
    type: "unique"
    reponses:
      - texte: "MFA exige la combinaison d'au moins deux facteurs différents (par exemple un mot de passe et un code envoyé sur un téléphone), rendant une compromission bien plus difficile qu'un mot de passe seul"
        correcte: true
        explication: "Les facteurs d'authentification combinent typiquement quelque chose que l'on sait (mot de passe), quelque chose que l'on possède (téléphone, clé de sécurité) ou quelque chose que l'on est (biométrie) ; exiger plusieurs facteurs réduit fortement le risque qu'un attaquant réussisse à s'authentifier avec un seul élément volé."
      - texte: "MFA remplace complètement le besoin d'un mot de passe par un unique code temporaire"
        correcte: false
        explication: "MFA combine généralement plusieurs facteurs, dont souvent encore un mot de passe en premier facteur, plutôt que de le remplacer entièrement par un seul code."
      - texte: "MFA ne s'applique qu'aux connexions VPN, jamais aux applications web"
        correcte: false
        explication: "MFA s'applique largement à de nombreux contextes d'authentification, y compris les applications web, les VPN, ou l'accès à des consoles d'administration."
      - texte: "Il n'existe aucune différence de sécurité entre MFA et un simple mot de passe"
        correcte: false
        explication: "MFA apporte une amélioration de sécurité réelle et documentée par rapport à un simple mot de passe, ce n'est pas une distinction sans effet pratique."
  - question: "En IPv6, à quoi correspond l'adresse multicast bien connue ff02::1 ?"
    type: "unique"
    reponses:
      - texte: "Le groupe de tous les nœuds (all-nodes) sur le lien local"
        correcte: true
        explication: "ff02::1 désigne le groupe multicast de tous les nœuds IPv6 du lien local, utilisé notamment par certains messages de découverte de voisinage (NDP)."
      - texte: "Le groupe de tous les routeurs (all-routers) sur le lien local"
        correcte: false
        explication: "Le groupe de tous les routeurs sur le lien local correspond à ff02::2, pas à ff02::1 qui désigne tous les nœuds."
      - texte: "L'adresse de bouclage IPv6, équivalente à 127.0.0.1 en IPv4"
        correcte: false
        explication: "L'adresse de bouclage IPv6 est ::1, une adresse unicast, pas ff02::1 qui est une adresse multicast de tous les nœuds."
      - texte: "Une adresse réservée exclusivement à la configuration DHCPv6"
        correcte: false
        explication: "ff02::1 n'est pas spécifiquement réservée à DHCPv6 ; c'est une adresse multicast générale de portée lien-local pour tous les nœuds."
  - question: "En IPv6, à quoi correspond l'adresse multicast bien connue ff02::2 ?"
    type: "unique"
    reponses:
      - texte: "Le groupe de tous les routeurs (all-routers) sur le lien local"
        correcte: true
        explication: "ff02::2 désigne le groupe multicast de tous les routeurs IPv6 présents sur le lien local, notamment sollicité lors de certains échanges de découverte de routeur."
      - texte: "Le groupe de tous les nœuds (all-nodes) sur le lien local"
        correcte: false
        explication: "Le groupe de tous les nœuds correspond à ff02::1, pas à ff02::2 qui désigne spécifiquement tous les routeurs."
      - texte: "L'adresse de bouclage IPv6"
        correcte: false
        explication: "L'adresse de bouclage IPv6 est ::1, distincte de l'adresse multicast ff02::2 réservée aux routeurs du lien local."
      - texte: "Une adresse réservée au trafic de voix sur IP en IPv6"
        correcte: false
        explication: "ff02::2 n'a aucun rapport avec la voix sur IP ; c'est une adresse multicast de portée lien-local réservée à tous les routeurs."
  - question: "Comment un identifiant d'interface EUI-64 est-il généré pour une adresse IPv6 auto-configurée (SLAAC) à partir d'une adresse MAC de 48 bits ?"
    type: "unique"
    reponses:
      - texte: "En insérant la valeur fixe FFFE au milieu de l'adresse MAC et en inversant le septième bit (bit universel/local)"
        correcte: true
        explication: "Le procédé EUI-64 découpe l'adresse MAC de 48 bits en deux moitiés de 24 bits, insère FFFE entre les deux pour obtenir 64 bits, puis inverse le bit U/L (septième bit) afin d'indiquer que l'identifiant est globalement unique à partir d'une adresse MAC gravée."
      - texte: "En dupliquant simplement l'adresse MAC deux fois de suite pour obtenir 64 bits"
        correcte: false
        explication: "Le procédé n'est pas une simple duplication ; il insère spécifiquement la valeur FFFE au milieu et inverse un bit précis, pas une répétition brute de l'adresse."
      - texte: "En demandant systématiquement l'identifiant à un serveur DHCPv6 central"
        correcte: false
        explication: "EUI-64 est justement une méthode d'auto-génération locale sans serveur central, contrairement à une attribution DHCPv6 classique."
      - texte: "En chiffrant l'adresse MAC avec une clé partagée du réseau local"
        correcte: false
        explication: "EUI-64 ne chiffre rien ; c'est une transformation déterministe et prévisible de l'adresse MAC, pas un chiffrement avec une clé."
  - question: "Pourquoi l'identifiant d'interface généré par EUI-64 pose-t-il un problème de confidentialité pour un appareil mobile se déplaçant entre plusieurs réseaux ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'il reste identique quel que soit le réseau visité (dérivé directement de l'adresse MAC fixe), permettant de suivre et corréler l'activité d'un même appareil à travers différents réseaux"
        correcte: true
        explication: "Comme EUI-64 dérive un identifiant fixe de l'adresse MAC de la carte réseau, cet identifiant reste identique sur tous les réseaux visités, ce qui permettrait en théorie de suivre les déplacements ou l'activité d'un appareil ; c'est pourquoi les systèmes d'exploitation modernes utilisent souvent des adresses IPv6 temporaires et aléatoires (extensions de confidentialité) en complément."
      - texte: "Parce qu'il change aléatoirement toutes les secondes, rendant impossible toute communication stable"
        correcte: false
        explication: "C'est l'inverse du problème réel : EUI-64 est justement trop stable et prévisible, pas trop instable pour communiquer."
      - texte: "Parce qu'il révèle en clair le mot de passe Wi-Fi du réseau visité"
        correcte: false
        explication: "EUI-64 ne révèle aucun mot de passe ; le problème de confidentialité concerne la traçabilité de l'appareil via un identifiant stable, pas la fuite d'un secret d'authentification."
      - texte: "Parce qu'il empêche complètement l'appareil de se connecter à un nouveau réseau"
        correcte: false
        explication: "EUI-64 n'empêche pas la connexion à un nouveau réseau ; l'appareil se connecte normalement, le souci concerne uniquement la persistance de son identifiant à travers différents réseaux."
  - question: "Qu'est-ce qu'un problème de duplex mismatch entre deux équipements reliés par un câble Ethernet, et quel symptôme provoque-t-il typiquement ?"
    type: "unique"
    reponses:
      - texte: "Un équipement configuré en full-duplex face à un équipement en half-duplex, provoquant de nombreuses collisions tardives et une dégradation importante des performances"
        correcte: true
        explication: "Si les deux extrémités d'un lien ne s'accordent pas sur le mode duplex (souvent à cause d'une négociation automatique désactivée d'un côté), le côté half-duplex détecte des collisions que le côté full-duplex ne voit jamais, provoquant des erreurs, des retransmissions et une chute significative des performances perçues."
      - texte: "Une différence de bande passante entre les deux équipements, sans autre conséquence"
        correcte: false
        explication: "Une différence de bande passante seule (par exemple 100 Mbit/s contre 1 Gbit/s) se négocie normalement sans provoquer nécessairement les symptômes typiques de collisions du duplex mismatch."
      - texte: "Une incompatibilité totale empêchant tout établissement de lien physique"
        correcte: false
        explication: "Un duplex mismatch n'empêche généralement pas le lien physique de s'établir ; le lien fonctionne, mais avec des performances dégradées et des erreurs, pas une absence totale de connectivité."
      - texte: "Un problème qui ne touche que les liaisons fibre optique, jamais le cuivre"
        correcte: false
        explication: "Le duplex mismatch touche aussi bien les liaisons cuivre historiques (Fast Ethernet notamment) que d'autres supports où la négociation automatique peut échouer, ce n'est pas limité à la fibre optique."
  - question: "Qu'est-ce que le routage asymétrique (asymmetric routing) et pourquoi peut-il poser problème avec certains pare-feux ?"
    type: "unique"
    reponses:
      - texte: "Le trafic aller et le trafic retour empruntent des chemins différents ; un pare-feu à état (stateful) peut alors ne voir qu'une partie de la session et bloquer le trafic par erreur"
        correcte: true
        explication: "Un pare-feu stateful attend de voir l'établissement complet d'une session (par exemple la poignée de main TCP) pour l'autoriser ; si le trafic retour emprunte un chemin différent qui ne passe pas par ce même pare-feu, celui-ci peut considérer les paquets comme illégitimes et les bloquer."
      - texte: "Le trafic aller et le trafic retour sont toujours strictement identiques en termes de contenu"
        correcte: false
        explication: "Le routage asymétrique concerne le chemin réseau emprunté, pas le contenu du trafic lui-même, qui peut rester cohérent entre l'aller et le retour même si le chemin diffère."
      - texte: "C'est un phénomène qui ne peut jamais se produire dans un réseau correctement configuré"
        correcte: false
        explication: "Le routage asymétrique peut survenir légitimement dans des topologies avec plusieurs chemins équivalents ou une conception de routage complexe, ce n'est pas systématiquement le signe d'une erreur de configuration."
      - texte: "Il s'agit d'une fonctionnalité de sécurité qui protège automatiquement contre les attaques"
        correcte: false
        explication: "Le routage asymétrique n'est pas une fonctionnalité de sécurité ; c'est au contraire souvent une source de dysfonctionnement avec des équipements de sécurité à état comme les pare-feux stateful."
  - question: "Qu'est-ce que la fragmentation IP et pourquoi est-elle généralement à éviter sur un réseau moderne ?"
    type: "unique"
    reponses:
      - texte: "Elle découpe un paquet trop volumineux pour la MTU d'un lien en plusieurs fragments plus petits, un processus coûteux en performance et parfois mal géré par certains équipements ou pare-feux"
        correcte: true
        explication: "Quand un paquet dépasse la MTU (taille maximale de transmission) d'un lien, il doit être fragmenté (ou rejeté avec un message ICMP si le bit Don't Fragment est positionné) ; la fragmentation ajoute une charge de traitement et peut être bloquée ou mal interprétée par certains pare-feux ou équipements intermédiaires, d'où la recommandation de l'éviter en ajustant la MTU en amont."
      - texte: "Elle chiffre un paquet en le divisant en plusieurs clés de chiffrement distinctes"
        correcte: false
        explication: "La fragmentation IP n'a aucun rapport avec le chiffrement ; elle concerne uniquement le découpage d'un paquet trop volumineux pour respecter la MTU d'un lien."
      - texte: "Elle n'existe qu'en IPv6, jamais en IPv4"
        correcte: false
        explication: "La fragmentation existe historiquement en IPv4 (réalisée par les routeurs en chemin ou la source) ; en IPv6, elle est en revanche réalisée uniquement par la source, pas par les routeurs intermédiaires, mais le concept existe dans les deux versions."
      - texte: "Elle améliore systématiquement les performances du réseau"
        correcte: false
        explication: "C'est l'inverse : la fragmentation ajoute une charge de traitement et des risques de perte accrus (la perte d'un seul fragment invalide tout le paquet), elle dégrade généralement les performances plutôt que de les améliorer."
  - question: "En IPv6, pourquoi la fragmentation ne peut-elle être réalisée que par l'hôte source, jamais par un routeur intermédiaire, contrairement à IPv4 ?"
    type: "unique"
    reponses:
      - texte: "Parce que le protocole IPv6 a délibérément simplifié le traitement des routeurs en leur retirant cette responsabilité, s'appuyant plutôt sur la découverte de MTU de chemin (Path MTU Discovery) par la source"
        correcte: true
        explication: "Ce choix de conception d'IPv6 allège le travail des routeurs intermédiaires (qui rejettent simplement un paquet trop grand avec un message ICMPv6 Packet Too Big) et reporte la responsabilité de la fragmentation sur l'hôte source, qui ajuste alors la taille de ses paquets grâce au mécanisme de découverte de MTU de chemin."
      - texte: "Parce qu'IPv6 ne supporte techniquement aucune forme de fragmentation, ni à la source ni sur le chemin"
        correcte: false
        explication: "IPv6 supporte bien la fragmentation, mais uniquement réalisée par la source via un en-tête d'extension dédié, pas une absence totale de fragmentation."
      - texte: "Parce que tous les liens IPv6 ont obligatoirement exactement la même MTU"
        correcte: false
        explication: "Les liens IPv6 peuvent avoir des MTU différentes selon la technologie utilisée ; c'est justement pour gérer cette diversité que la découverte de MTU de chemin existe."
      - texte: "Parce que les routeurs IPv6 ne peuvent pas lire l'en-tête des paquets qu'ils acheminent"
        correcte: false
        explication: "Les routeurs IPv6 lisent parfaitement l'en-tête des paquets pour les acheminer ; ce n'est pas une incapacité de lecture qui explique l'absence de fragmentation en chemin, mais un choix de conception du protocole."
  - question: "Quel est le rôle d'un WLC (Wireless LAN Controller) dans la gestion de l'itinérance (roaming) des clients Wi-Fi entre plusieurs points d'accès légers ?"
    type: "unique"
    reponses:
      - texte: "Coordonner la bascule du client d'un point d'accès à un autre en maintenant sa session et son adressage IP autant que possible, pour une transition fluide et sans interruption perceptible"
        correcte: true
        explication: "Le WLC centralise les informations de session des clients associés à ses points d'accès légers, ce qui lui permet de coordonner un roaming rapide (parfois appelé fast roaming ou intra-controller roaming) sans que le client n'ait à se ré-authentifier complètement ni changer d'adresse IP dans de nombreux cas."
      - texte: "Forcer systématiquement le client à se déconnecter et se reconnecter manuellement à chaque changement de point d'accès"
        correcte: false
        explication: "C'est justement l'inverse de l'objectif recherché : le WLC vise à rendre la transition entre points d'accès aussi transparente que possible pour l'utilisateur, pas à forcer une reconnexion manuelle systématique."
      - texte: "Chiffrer uniquement le trafic du premier point d'accès auquel le client se connecte, jamais les suivants"
        correcte: false
        explication: "La politique de sécurité (chiffrement, authentification) reste cohérente sur l'ensemble des points d'accès gérés par le même WLC, pas limitée au tout premier point d'accès de connexion."
      - texte: "Empêcher totalement tout client de changer de point d'accès une fois connecté"
        correcte: false
        explication: "C'est l'inverse : le rôle du WLC est justement de faciliter et fluidifier le changement de point d'accès (roaming), pas de l'empêcher."
      
  - question: "Quel protocole encapsule le trafic entre un point d'accès léger et son contrôleur WLC dans une architecture Wi-Fi centralisée ?"
    type: "unique"
    reponses:
      - texte: "CAPWAP (Control And Provisioning of Wireless Access Points)"
        correcte: true
        explication: "CAPWAP est le protocole standardisé qui encapsule à la fois le trafic de contrôle et, souvent, le trafic de données entre un point d'accès léger et son contrôleur WLC, permettant la gestion centralisée de la configuration et de la politique Wi-Fi."
      - texte: "GRE"
        correcte: false
        explication: "GRE est un protocole d'encapsulation générique utilisé dans d'autres contextes de tunneling, pas spécifiquement le protocole standard entre AP léger et WLC, qui est CAPWAP."
      - texte: "HSRP"
        correcte: false
        explication: "HSRP est un protocole de redondance de passerelle de couche 3, sans rapport avec la communication entre point d'accès léger et contrôleur Wi-Fi."
      - texte: "VTP"
        correcte: false
        explication: "VTP synchronise la configuration des VLAN entre switches, sans rapport avec l'encapsulation du trafic entre AP léger et WLC."
  - question: "Que signifie le terme 'canal bonding' (agrégation de canaux) en Wi-Fi (par exemple passer d'un canal de 20 MHz à 40 ou 80 MHz) ?"
    type: "unique"
    reponses:
      - texte: "Combiner plusieurs canaux radio adjacents en un canal plus large pour augmenter le débit théorique disponible, au prix d'un risque accru d'interférence et d'un nombre de canaux non superposés disponibles réduit"
        correcte: true
        explication: "Un canal plus large (40, 80 ou 160 MHz) permet de transporter davantage de données simultanément, augmentant le débit théorique, mais réduit le nombre de canaux non-superposés disponibles dans l'environnement et augmente la sensibilité aux interférences d'autres réseaux voisins."
      - texte: "Chiffrer deux fois le trafic Wi-Fi pour renforcer la sécurité"
        correcte: false
        explication: "Le canal bonding n'a aucun rapport avec le chiffrement ; c'est une technique d'augmentation de la largeur de bande radio utilisée, pas une mesure de sécurité cryptographique."
      - texte: "Relier physiquement deux points d'accès avec un câble Ethernet supplémentaire"
        correcte: false
        explication: "Le canal bonding est une technique purement radio (RF), sans rapport avec un câblage physique supplémentaire entre points d'accès."
      - texte: "Réduire automatiquement la portée du signal Wi-Fi à quelques mètres seulement"
        correcte: false
        explication: "Le canal bonding concerne la largeur de bande utilisée, pas directement la portée du signal, même si des effets secondaires sur la portée peuvent exister selon les conditions."
      
  - question: "Pourquoi les canaux Wi-Fi 1, 6 et 11 sont-ils particulièrement recommandés en bande 2,4 GHz pour un déploiement multi-point d'accès ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'ils sont les seuls canaux de 20 MHz de cette bande à ne pas se chevaucher entre eux, minimisant les interférences mutuelles entre points d'accès voisins"
        correcte: true
        explication: "La bande 2,4 GHz est étroite et ses canaux se chevauchent largement ; seuls 1, 6 et 11 (en régulation la plus courante) offrent un espacement suffisant pour être utilisés simultanément dans une zone donnée sans interférence significative entre eux."
      - texte: "Parce que ce sont les seuls canaux autorisés légalement dans le monde entier, sans aucune exception"
        correcte: false
        explication: "La réglementation des canaux Wi-Fi varie selon les pays ; la recommandation de 1, 6, 11 tient à l'absence de chevauchement radio, pas à une règle légale universelle unique."
      - texte: "Parce qu'ils offrent un débit maximal théorique supérieur aux autres canaux de la même bande"
        correcte: false
        explication: "Le débit théorique d'un canal de largeur identique ne dépend pas de son numéro particulier ; la recommandation 1/6/11 concerne l'absence de chevauchement, pas un débit intrinsèquement supérieur."
      - texte: "Parce que ce sont les seuls canaux compatibles avec le protocole de sécurité WPA2"
        correcte: false
        explication: "WPA2 fonctionne sur n'importe quel canal Wi-Fi de la bande, sans lien avec le choix particulier des canaux 1, 6 ou 11."
  - question: "Qu'est-ce qu'une attaque de type 'man-in-the-middle' (interception) dans un contexte réseau ?"
    type: "unique"
    reponses:
      - texte: "Un attaquant s'interpose entre deux parties communicantes pour intercepter, voire modifier, leurs échanges à leur insu"
        correcte: true
        explication: "Une attaque man-in-the-middle place l'attaquant au milieu du chemin de communication (par exemple via de l'ARP spoofing sur un réseau local, ou un point d'accès Wi-Fi malveillant), lui permettant d'observer ou d'altérer le trafic sans que les deux parties légitimes ne s'en aperçoivent immédiatement."
      - texte: "Une attaque qui sature un serveur de requêtes pour le rendre indisponible"
        correcte: false
        explication: "Cette description correspond à une attaque par déni de service (DoS), pas à une attaque d'interception man-in-the-middle."
      - texte: "Une attaque qui devine un mot de passe par essais successifs"
        correcte: false
        explication: "Cette description correspond à une attaque par force brute, distincte du principe d'interception d'une attaque man-in-the-middle."
      - texte: "Une attaque qui exploite exclusivement une vulnérabilité logicielle non corrigée (zero-day)"
        correcte: false
        explication: "Une attaque man-in-the-middle repose sur le positionnement de l'attaquant sur le chemin de communication, pas nécessairement sur l'exploitation d'une vulnérabilité logicielle spécifique non corrigée."
  - question: "Comment le mécanisme ARP spoofing (ou ARP poisoning) permet-il de réaliser une attaque man-in-the-middle sur un réseau local ?"
    type: "unique"
    reponses:
      - texte: "En envoyant de fausses réponses ARP pour associer sa propre adresse MAC à l'adresse IP d'une victime légitime (comme la passerelle), détournant ainsi le trafic vers l'attaquant"
        correcte: true
        explication: "En empoisonnant les caches ARP des victimes avec de fausses correspondances IP/MAC, l'attaquant fait croire aux machines du réseau local qu'il est la passerelle (ou un autre hôte), ce qui lui permet d'intercepter le trafic avant de le retransmettre, souvent à l'insu des victimes."
      - texte: "En devinant le mot de passe Wi-Fi du réseau ciblé"
        correcte: false
        explication: "L'ARP spoofing n'a pas besoin de connaître un mot de passe Wi-Fi ; il exploite la confiance implicite du protocole ARP sur un réseau local déjà accessible, pas une faille d'authentification Wi-Fi."
      - texte: "En envoyant un très grand nombre de requêtes DNS vers un serveur cible"
        correcte: false
        explication: "Cette description correspond davantage à une attaque de déni de service via DNS, pas au mécanisme d'ARP spoofing qui repose sur la corruption du cache ARP local."
      - texte: "En modifiant physiquement le câblage réseau de la victime"
        correcte: false
        explication: "L'ARP spoofing est une attaque purement logicielle exploitant le protocole ARP, elle ne nécessite aucune modification physique du câblage."
  - question: "Que permet Dynamic ARP Inspection (DAI), en s'appuyant sur DHCP snooping, de prévenir spécifiquement ?"
    type: "unique"
    reponses:
      - texte: "Les attaques d'ARP spoofing/poisoning sur le réseau local, en validant chaque message ARP par rapport aux baux DHCP légitimes connus"
        correcte: true
        explication: "DAI vérifie que chaque message ARP correspond à une association IP/MAC déjà validée (par exemple via un bail DHCP légitime enregistré), rejetant les messages ARP suspects qui tenteraient d'usurper une autre adresse."
      - texte: "Les attaques par déni de service distribuées (DDoS) venant d'Internet"
        correcte: false
        explication: "DAI opère au niveau du réseau local sur les messages ARP, sans rapport avec la prévention d'attaques DDoS provenant d'Internet, qui nécessitent d'autres mécanismes de protection."
      - texte: "Le vol de mots de passe transmis en clair sur le réseau"
        correcte: false
        explication: "DAI ne protège pas contre l'interception de mots de passe en clair ; ce risque relève plutôt du chiffrement des communications (comme HTTPS), pas de la validation des messages ARP."
      - texte: "Les pannes matérielles des équipements de commutation"
        correcte: false
        explication: "DAI est une mesure de sécurité logicielle contre l'usurpation ARP, sans rapport avec la détection ou la prévention de pannes matérielles."
  - question: "Dans une conception réseau de campus classique en trois couches (accès, distribution, cœur), quel est le rôle principal de la couche distribution ?"
    type: "unique"
    reponses:
      - texte: "Agréger le trafic de plusieurs switches d'accès, appliquer des politiques (routage inter-VLAN, ACL, QoS) avant de le transmettre vers la couche cœur"
        correcte: true
        explication: "La couche distribution sert de point d'agrégation et de politique entre les nombreux switches d'accès proches des utilisateurs et la couche cœur dédiée à un transport rapide et simple, appliquant notamment le routage inter-VLAN et les règles de sécurité à ce niveau intermédiaire."
      - texte: "Connecter directement chaque poste utilisateur individuel au réseau"
        correcte: false
        explication: "Cette fonction de connexion directe des postes utilisateurs est le rôle de la couche accès, pas de la couche distribution qui agrège plutôt le trafic de plusieurs switches d'accès."
      - texte: "Assurer un transport de données à très haute vitesse sans aucune application de politique, purement dédié à la commutation"
        correcte: false
        explication: "Cette description correspond davantage au rôle de la couche cœur, qui privilégie la vitesse de transport pur, alors que la couche distribution applique justement des politiques (routage, filtrage, QoS)."
      - texte: "Héberger exclusivement les serveurs de l'entreprise, sans aucun rôle de commutation ou de routage"
        correcte: false
        explication: "L'hébergement de serveurs relève plutôt d'un data center ou d'une zone dédiée du réseau, pas spécifiquement du rôle fonctionnel de la couche distribution dans le modèle à trois couches."
  - question: "Quel est l'intérêt principal du modèle de conception réseau à trois couches (accès, distribution, cœur) par rapport à un réseau plat sans hiérarchie ?"
    type: "unique"
    reponses:
      - texte: "Une meilleure scalabilité, une localisation plus simple des pannes et une application cohérente des politiques à chaque niveau, plutôt qu'une complexité incontrôlable à mesure que le réseau grandit"
        correcte: true
        explication: "En structurant le réseau par fonction (accès proche des utilisateurs, distribution pour les politiques, cœur pour le transport rapide), il devient plus facile de faire évoluer, dépanner et sécuriser le réseau que dans une topologie plate où tous les équipements jouent des rôles mélangés et où les domaines de panne sont mal délimités."
      - texte: "Une réduction automatique du coût total des équipements réseau, quelle que soit la taille du réseau"
        correcte: false
        explication: "Le modèle hiérarchique n'est pas systématiquement moins coûteux ; son intérêt principal est organisationnel et opérationnel (scalabilité, clarté, maintenance), pas une garantie de réduction de coût dans tous les cas."
      - texte: "L'élimination totale du besoin de VLAN dans le réseau"
        correcte: false
        explication: "Les VLAN restent pleinement utilisés et pertinents dans un réseau hiérarchique à trois couches, notamment gérés au niveau de la couche accès et routés en distribution ; ce modèle ne supprime pas ce besoin."
      - texte: "La suppression complète de tout risque de panne réseau"
        correcte: false
        explication: "Aucune architecture ne supprime totalement le risque de panne ; le modèle à trois couches vise plutôt à mieux localiser et limiter l'impact d'une panne, pas à l'éliminer entièrement."
  - question: "Qu'est-ce que la variance en EIGRP permet de réaliser ?"
    type: "unique"
    reponses:
      - texte: "Un équilibrage de charge sur plusieurs chemins de coûts inégaux, tant que leur métrique respecte un multiple maximal du meilleur chemin défini par la variance"
        correcte: true
        explication: "Par défaut EIGRP équilibre la charge uniquement sur des chemins de coût strictement égal ; la commande variance autorise l'utilisation simultanée de chemins jusqu'à N fois le coût du meilleur chemin (et respectant la condition de faisabilité DUAL), permettant un équilibrage de charge à coût inégal."
      - texte: "Un chiffrement renforcé des mises à jour de routage EIGRP"
        correcte: false
        explication: "La variance ne chiffre rien ; elle concerne uniquement le nombre et la sélection des chemins utilisés pour l'équilibrage de charge."
      - texte: "Une limitation stricte à un seul chemin actif à la fois, sans aucun secours"
        correcte: false
        explication: "C'est l'inverse : la variance sert justement à activer plusieurs chemins simultanément, pas à en limiter l'usage à un seul."
      - texte: "Un mécanisme réservé exclusivement à OSPF, absent d'EIGRP"
        correcte: false
        explication: "La variance est une fonctionnalité propre à EIGRP ; OSPF gère l'équilibrage de charge différemment, uniquement sur des coûts strictement égaux par défaut."
  - question: "À quoi sert un lien virtuel (virtual link) en OSPF ?"
    type: "unique"
    reponses:
      - texte: "À relier logiquement une zone qui n'est pas physiquement connectée à la zone 0 (backbone), en la traversant à travers une zone de transit intermédiaire"
        correcte: true
        explication: "OSPF exige normalement que toute zone soit directement connectée à la zone 0 ; quand la topologie physique ne le permet pas, un lien virtuel simule cette connexion à travers une zone de transit existante, rétablissant la continuité logique du backbone."
      - texte: "À chiffrer les échanges OSPF entre deux zones distinctes"
        correcte: false
        explication: "Un lien virtuel ne chiffre rien ; son rôle est de rétablir une continuité logique de connexion à la zone 0, pas la sécurité cryptographique des échanges."
      - texte: "À fusionner deux zones OSPF différentes en une seule zone unique"
        correcte: false
        explication: "Un lien virtuel ne fusionne pas les zones ; chaque zone garde son identité propre, le lien virtuel ne fait que rétablir une connexion logique manquante vers la zone 0."
      - texte: "À remplacer complètement le besoin d'un routeur de bordure de zone (ABR)"
        correcte: false
        explication: "Un lien virtuel s'appuie justement sur des ABR existants pour fonctionner ; il ne supprime pas ce besoin, il compense une topologie physique incomplète."
  - question: "Que décrit une LSA de type 4 (ASBR Summary LSA) en OSPF ?"
    type: "unique"
    reponses:
      - texte: "Elle indique comment atteindre un routeur ASBR (celui qui injecte des routes externes) situé dans une autre zone"
        correcte: true
        explication: "Quand un ASBR se trouve dans une zone différente de celle d'un routeur donné, une LSA de type 4 générée par l'ABR indique le chemin vers cet ASBR, permettant ensuite d'interpréter correctement les routes externes (LSA de type 5) qu'il a injectées."
      - texte: "Elle résume directement les sous-réseaux internes d'une zone vers les autres zones"
        correcte: false
        explication: "Cette description correspond à une LSA de type 3 (Summary LSA), pas à la LSA de type 4 qui concerne spécifiquement l'accessibilité d'un ASBR."
      - texte: "Elle décrit les interfaces directement connectées d'un routeur dans sa propre zone"
        correcte: false
        explication: "Cette description correspond à une LSA de type 1 (Router LSA), pas à une LSA de type 4."
      - texte: "Elle identifie le routeur désigné (DR) d'un segment multi-accès"
        correcte: false
        explication: "L'identification du DR relève d'une LSA de type 2 (Network LSA), pas d'une LSA de type 4."
  - question: "Quel est l'intérêt principal de la sommation (résumé) de routes (route summarization) dans un réseau utilisant OSPF ou EIGRP ?"
    type: "unique"
    reponses:
      - texte: "Réduire la taille des tables de routage et contenir l'impact d'une instabilité locale, en évitant qu'un changement isolé ne soit propagé partout dans le réseau"
        correcte: true
        explication: "En annonçant un seul préfixe résumé plutôt que de nombreux sous-réseaux détaillés, on réduit la charge de calcul et de mémoire des routeurs, tout en isolant les autres zones du réseau des fluctuations (flapping) d'une route spécifique masquée par le résumé."
      - texte: "Chiffrer automatiquement les routes résumées pour plus de sécurité"
        correcte: false
        explication: "La sommation de routes ne chiffre rien ; son intérêt est purement lié à l'efficacité et à la stabilité du routage."
      - texte: "Augmenter délibérément le nombre d'entrées dans la table de routage pour plus de précision"
        correcte: false
        explication: "C'est l'inverse : la sommation vise justement à réduire le nombre d'entrées de la table de routage, pas à l'augmenter."
      - texte: "Remplacer complètement le besoin d'un protocole de routage dynamique"
        correcte: false
        explication: "La sommation de routes est une technique utilisée au sein même d'un protocole de routage dynamique comme OSPF ou EIGRP, elle n'en supprime pas le besoin."
  - question: "Quel est le principal risque lors de la redistribution mutuelle de routes entre deux protocoles de routage différents (par exemple OSPF et EIGRP) sur plusieurs routeurs frontières ?"
    type: "unique"
    reponses:
      - texte: "La formation de boucles de routage, notamment si les informations sont réinjectées d'un protocole vers l'autre puis reviennent au premier avec une métrique qui semble meilleure"
        correcte: true
        explication: "Sans filtrage ou marquage approprié (comme des listes de distribution ou des balises de route), une route redistribuée d'un protocole vers l'autre peut être réinjectée en sens inverse sur un autre routeur frontière, créant une boucle que ni l'un ni l'autre protocole ne détecte nativement puisqu'ils ne partagent pas la même vision de métrique."
      - texte: "Un chiffrement incompatible qui empêche toute communication entre les deux domaines de routage"
        correcte: false
        explication: "La redistribution de routes ne concerne pas le chiffrement ; le risque documenté et classique est la formation de boucles de routage, pas un problème de chiffrement."
      - texte: "Une incompatibilité totale qui empêche la coexistence des deux protocoles sur un même routeur"
        correcte: false
        explication: "Les deux protocoles peuvent parfaitement coexister sur un même routeur (redistribution mutuelle) ; le risque réel est la boucle de routage en cas de mauvaise configuration, pas une incompatibilité empêchant leur coexistence."
      - texte: "La désactivation automatique de tous les VLAN configurés sur le réseau"
        correcte: false
        explication: "La redistribution de routes opère en couche 3 sur le routage, sans rapport direct avec la configuration des VLAN de couche 2."
  - question: "Qu'est-ce que le routage basé sur des politiques (Policy-Based Routing, PBR) permet de faire, par rapport au routage classique basé uniquement sur l'adresse de destination ?"
    type: "unique"
    reponses:
      - texte: "Dévier le chemin d'un paquet selon des critères définis par l'administrateur (adresse source, protocole, taille...), plutôt que selon la seule adresse de destination"
        correcte: true
        explication: "PBR permet de définir des règles de type 'si le trafic correspond à tel critère, alors l'envoyer par tel chemin', offrant une flexibilité que le routage traditionnel basé uniquement sur la destination ne permet pas, par exemple pour envoyer certains flux par un lien spécifique selon leur adresse source."
      - texte: "Chiffrer automatiquement le trafic selon la politique de sécurité de l'entreprise"
        correcte: false
        explication: "PBR ne chiffre rien ; il modifie uniquement le choix du chemin emprunté par certains paquets selon des critères définis, pas la sécurité cryptographique du trafic."
      - texte: "Remplacer complètement le besoin d'une table de routage classique"
        correcte: false
        explication: "PBR agit en complément et en priorité sur la table de routage classique pour certains flux ciblés, il ne la remplace pas entièrement pour tout le trafic."
      - texte: "Limiter le nombre maximal d'utilisateurs pouvant se connecter au réseau"
        correcte: false
        explication: "PBR concerne le choix du chemin réseau emprunté par le trafic, pas une limitation du nombre d'utilisateurs connectés."
  - question: "À quoi sert IP SLA (Service Level Agreement) associé à un objet de suivi (track object) sur un routeur Cisco, par exemple combiné à HSRP ?"
    type: "unique"
    reponses:
      - texte: "À surveiller activement l'accessibilité d'une destination (comme la sortie Internet) et à déclencher une action, comme céder le rôle actif HSRP, si cette destination devient injoignable"
        correcte: true
        explication: "IP SLA peut envoyer des sondes régulières (ping, par exemple) vers une destination critique ; combiné à un objet de suivi (track), il peut abaisser la priorité HSRP d'un routeur si sa liaison vers Internet tombe, permettant au routeur de secours de prendre le relais même si le lien local vers le groupe HSRP reste actif."
      - texte: "À chiffrer automatiquement les communications entre deux routeurs HSRP"
        correcte: false
        explication: "IP SLA ne chiffre rien ; son rôle est de surveiller la disponibilité d'une ressource et de déclencher une action en conséquence, pas d'assurer une fonction de chiffrement."
      - texte: "À attribuer dynamiquement des adresses IP aux postes clients du réseau"
        correcte: false
        explication: "L'attribution d'adresses IP est le rôle de DHCP, sans rapport avec la fonction de suivi de disponibilité assurée par IP SLA."
      - texte: "À remplacer complètement le besoin d'un protocole de routage dynamique"
        correcte: false
        explication: "IP SLA complète un mécanisme comme HSRP ou une route statique, il ne remplace pas le rôle d'un protocole de routage dynamique."
  - question: "Quel est le principe général de NAT64 combiné à DNS64 pour permettre à un client IPv6 uniquement de contacter un serveur IPv4 uniquement ?"
    type: "unique"
    reponses:
      - texte: "DNS64 synthétise une adresse IPv6 spéciale à partir de l'adresse IPv4 du serveur, et NAT64 traduit ensuite le trafic entre le client IPv6 et le serveur IPv4 réel"
        correcte: true
        explication: "Quand un client IPv6 uniquement interroge le DNS pour un service qui n'a qu'une adresse IPv4, DNS64 renvoie une adresse IPv6 synthétique encodant cette adresse IPv4 ; le trafic du client vers cette adresse synthétique est ensuite intercepté et traduit en IPv4 réel par une passerelle NAT64, rendant la communication transparente pour le client."
      - texte: "NAT64 chiffre tout le trafic IPv4 pour le rendre compatible avec IPv6"
        correcte: false
        explication: "NAT64 traduit des adresses entre les deux versions d'IP, il ne chiffre rien dans ce processus de traduction."
      - texte: "DNS64 attribue directement une adresse IPv4 au client IPv6, sans passerelle de traduction"
        correcte: false
        explication: "Le client IPv6 uniquement ne reçoit jamais directement d'adresse IPv4 ; c'est la passerelle NAT64 qui réalise la traduction en arrière-plan, le client continuant de communiquer uniquement en IPv6."
      - texte: "Ce mécanisme ne fonctionne que dans le sens IPv4 vers IPv6, jamais l'inverse"
        correcte: false
        explication: "NAT64/DNS64 est justement conçu pour le sens décrit, IPv6 vers IPv4, pour permettre à des clients IPv6 uniquement d'atteindre des ressources encore uniquement disponibles en IPv4."
  - question: "Qu'est-ce que l'épuisement de ports (port exhaustion) peut provoquer sur une passerelle utilisant massivement le PAT (NAT overload) ?"
    type: "unique"
    reponses:
      - texte: "L'impossibilité d'établir de nouvelles sessions sortantes une fois que tous les ports disponibles associés à l'adresse publique partagée sont déjà utilisés"
        correcte: true
        explication: "Le PAT dispose d'un nombre fini de ports (environ 65 000 par adresse IP publique) pour distinguer les sessions ; avec un très grand nombre de clients ou de connexions simultanées, ce pool peut s'épuiser, empêchant l'établissement de nouvelles sessions tant que d'anciennes ne se libèrent pas."
      - texte: "Une amélioration automatique de la sécurité du réseau interne"
        correcte: false
        explication: "L'épuisement de ports est un problème opérationnel qui dégrade la connectivité, pas une amélioration de sécurité."
      - texte: "Le chiffrement automatique de toutes les sessions restantes"
        correcte: false
        explication: "Le PAT ne chiffre rien par lui-même ; l'épuisement de ports concerne uniquement la disponibilité de ports pour de nouvelles traductions, pas le chiffrement."
      - texte: "Une augmentation du débit disponible pour chaque session existante"
        correcte: false
        explication: "L'épuisement de ports dégrade la capacité à établir de nouvelles connexions, il n'augmente en rien le débit des sessions déjà établies."
  - question: "Qu'est-ce qu'une instance VRF (Virtual Routing and Forwarding) permet de réaliser sur un même routeur physique ?"
    type: "unique"
    reponses:
      - texte: "Maintenir plusieurs tables de routage totalement indépendantes et isolées sur le même équipement, permettant à des adresses IP identiques d'exister dans des contextes séparés sans conflit"
        correcte: true
        explication: "VRF crée des instances de routage logiquement séparées sur un même routeur (souvent utilisé pour du multi-tenant ou l'isolation de réseaux clients dans un contexte fournisseur de services), chaque VRF ayant sa propre table de routage indépendante, même avec un plan d'adressage identique à un autre VRF."
      - texte: "Chiffrer automatiquement toutes les tables de routage du routeur"
        correcte: false
        explication: "VRF ne chiffre rien ; son rôle est de séparer logiquement des instances de routage, pas d'assurer une fonction de chiffrement."
      - texte: "Fusionner plusieurs tables de routage distinctes en une seule table commune"
        correcte: false
        explication: "C'est l'inverse : VRF sépare et isole les tables de routage entre elles, il ne les fusionne pas en une seule."
      - texte: "Limiter le routeur à une seule interface physique active à la fois"
        correcte: false
        explication: "VRF n'a aucun rapport avec une limitation du nombre d'interfaces physiques actives ; il concerne la séparation logique des tables de routage."
  - question: "Quel est le principe général d'un VPN MPLS de couche 3 (L3VPN) proposé par un opérateur à plusieurs clients ?"
    type: "unique"
    reponses:
      - texte: "Isoler le trafic de routage de chaque client dans des instances VRF distinctes sur les routeurs de l'opérateur, tout en transportant ce trafic à travers une infrastructure MPLS partagée"
        correcte: true
        explication: "Un L3VPN MPLS combine VRF (pour isoler les tables de routage de chaque client) et des labels MPLS (pour acheminer le trafic à travers le réseau partagé de l'opérateur), permettant à plusieurs clients de partager la même infrastructure physique tout en gardant leurs réseaux logiquement séparés, y compris avec des plans d'adressage se chevauchant."
      - texte: "Dédier physiquement un routeur entier à chaque client, sans aucun partage d'infrastructure"
        correcte: false
        explication: "C'est justement l'inverse : l'intérêt du L3VPN MPLS est de partager une même infrastructure physique entre plusieurs clients tout en gardant une isolation logique, pas de dédier du matériel physique séparé à chacun."
      - texte: "Chiffrer systématiquement tout le trafic de bout en bout entre les sites clients"
        correcte: false
        explication: "Un L3VPN MPLS assure avant tout une isolation logique du routage, pas nécessairement un chiffrement de bout en bout, qui nécessiterait une couche de sécurité supplémentaire comme IPsec si requis."
      - texte: "Remplacer complètement le besoin d'adresses IP chez chaque client"
        correcte: false
        explication: "Chaque client conserve son propre plan d'adressage IP au sein de son VRF ; le L3VPN MPLS ne supprime pas ce besoin, il permet justement de gérer plusieurs plans d'adressage isolés."
  - question: "Dans une configuration de VLAN privé (Private VLAN, PVLAN), quel est le rôle d'un port isolé (isolated) ?"
    type: "unique"
    reponses:
      - texte: "Il ne peut communiquer qu'avec les ports promiscuous, jamais avec un autre port isolé ou communautaire du même VLAN privé"
        correcte: true
        explication: "Un port isolé offre le niveau de restriction le plus strict d'un PVLAN : il communique uniquement vers le port promiscuous (généralement la passerelle), totalement coupé de tout autre port isolé ou communautaire, même au sein du même VLAN secondaire."
      - texte: "Il peut communiquer librement avec tous les autres ports du VLAN privé, sans restriction"
        correcte: false
        explication: "C'est l'inverse : le port isolé est justement le plus restreint des rôles PVLAN, à l'opposé d'une communication libre avec tous les autres ports."
      - texte: "Il sert exclusivement à connecter le routeur ou la passerelle du réseau"
        correcte: false
        explication: "Cette fonction correspond au port promiscuous, pas au port isolé qui est destiné aux hôtes finaux fortement restreints."
      - texte: "Il permet la communication uniquement avec d'autres ports isolés du même groupe communautaire"
        correcte: false
        explication: "Cette description correspond plutôt à un port communautaire (community), pas à un port isolé qui ne communique qu'avec le port promiscuous."
  - question: "Dans une configuration de VLAN privé (PVLAN), quelle est la différence entre un port communautaire (community) et un port isolé (isolated) ?"
    type: "unique"
    reponses:
      - texte: "Un port communautaire peut communiquer avec les autres ports du même groupe communautaire, en plus du port promiscuous, contrairement à un port isolé qui ne communique qu'avec le promiscuous"
        correcte: true
        explication: "Le rôle communautaire offre un compromis intermédiaire : les hôtes d'un même groupe communautaire peuvent se parler entre eux tout en restant isolés des autres groupes ou ports isolés, alors qu'un port isolé n'a aucune communication possible en dehors du port promiscuous."
      - texte: "Un port communautaire ne peut jamais communiquer avec le port promiscuous, contrairement au port isolé"
        correcte: false
        explication: "C'est l'inverse : les deux types de ports (communautaire et isolé) peuvent communiquer avec le port promiscuous ; seule leur capacité à communiquer entre eux au sein du VLAN privé diffère."
      - texte: "Il n'existe aucune différence entre les deux rôles, ce sont deux noms pour le même comportement"
        correcte: false
        explication: "Leur comportement diffère nettement sur la capacité à communiquer entre pairs du même groupe, ce n'est pas une simple synonymie."
      - texte: "Un port communautaire est réservé exclusivement à la gestion du switch lui-même"
        correcte: false
        explication: "Un port communautaire est destiné à des hôtes finaux comme n'importe quel autre rôle PVLAN, pas réservé à la gestion du switch."
  - question: "À quoi sert la fonctionnalité storm control (contrôle de tempête) sur un port de switch Cisco ?"
    type: "unique"
    reponses:
      - texte: "À limiter le pourcentage de bande passante qu'un type de trafic (broadcast, multicast ou unicast inconnu) peut consommer sur un port, pour éviter qu'une tempête de trafic ne sature le réseau"
        correcte: true
        explication: "Storm control surveille le niveau de trafic broadcast, multicast ou unicast inconnu sur un port et applique une action (souvent bloquer temporairement le trafic excédentaire) dès qu'un seuil configuré est dépassé, une protection utile même en présence de STP contre certains dysfonctionnements ou tempêtes de courte durée."
      - texte: "À chiffrer le trafic broadcast pour le rendre illisible à des tiers"
        correcte: false
        explication: "Storm control ne chiffre rien ; son rôle est de limiter le volume de certains types de trafic, pas de les sécuriser cryptographiquement."
      - texte: "À élire automatiquement un nouveau pont racine en cas de tempête de trafic"
        correcte: false
        explication: "L'élection du pont racine reste un mécanisme de STP indépendant ; storm control se contente de limiter le volume de trafic sur un port, sans interagir avec l'élection du pont racine."
      - texte: "À garantir une bande passante minimale réservée pour le trafic vocal"
        correcte: false
        explication: "Cette garantie de bande passante minimale pour un trafic prioritaire relève de la QoS, pas de storm control qui vise au contraire à plafonner certains types de trafic excessifs."
  - question: "À quoi sert le protocole UDLD (UniDirectional Link Detection) sur des liens fibre optique notamment ?"
    type: "unique"
    reponses:
      - texte: "À détecter un lien qui ne fonctionne que dans un seul sens (un câble mal branché ou défectueux sur une seule fibre d'une paire), un problème que la détection physique classique ne repère pas toujours"
        correcte: true
        explication: "Sur une liaison fibre optique utilisant deux brins séparés (émission et réception), un défaut sur un seul brin peut laisser croire que le lien fonctionne (signal physique détecté) alors que la communication n'est effective que dans un sens ; UDLD échange des messages pour vérifier la bidirectionnalité réelle du lien et désactiver le port si un problème est détecté, prévenant notamment des boucles STP non détectées."
      - texte: "À chiffrer le trafic transitant sur une liaison fibre optique"
        correcte: false
        explication: "UDLD ne chiffre rien ; son rôle est de vérifier la bidirectionnalité effective d'un lien, pas la sécurité cryptographique de son contenu."
      - texte: "À attribuer automatiquement une adresse IP à chaque extrémité du lien fibre"
        correcte: false
        explication: "L'attribution d'adresse IP n'a aucun rapport avec le rôle d'UDLD, qui concerne la vérification de la bidirectionnalité physique et logique d'un lien."
      - texte: "À remplacer complètement le besoin de STP sur les liens fibre"
        correcte: false
        explication: "UDLD complète STP en détectant un cas spécifique (lien unidirectionnel) que STP seul ne repère pas toujours efficacement, il ne remplace pas son rôle global de prévention des boucles."
  - question: "Sur quoi se base généralement l'algorithme de répartition de charge (load-balancing) d'un EtherChannel pour choisir quel lien physique utiliser pour un paquet donné ?"
    type: "unique"
    reponses:
      - texte: "Un hachage calculé à partir d'informations comme les adresses MAC ou IP source et destination (voire les ports), garantissant qu'un même flux emprunte toujours le même lien physique"
        correcte: true
        explication: "L'algorithme de hachage EtherChannel (configurable selon le modèle de switch) répartit les flux entre les liens membres tout en garantissant qu'un même flux (donc les mêmes valeurs de hachage) emprunte systématiquement le même lien physique, évitant ainsi un réordonnancement des paquets d'une même conversation."
      - texte: "Un tirage totalement aléatoire à chaque paquet individuel, sans aucune cohérence entre les paquets d'un même flux"
        correcte: false
        explication: "Un tirage purement aléatoire par paquet risquerait de faire arriver les paquets d'un même flux dans le désordre ; l'algorithme de hachage garantit au contraire la cohérence du chemin pour un même flux."
      - texte: "Le lien physique choisi en fonction de l'heure de la journée"
        correcte: false
        explication: "L'heure de la journée n'entre pas en compte dans l'algorithme de répartition de charge EtherChannel, basé sur un hachage des informations de flux."
      - texte: "Toujours le premier lien physique de l'agrégat, sans jamais utiliser les autres"
        correcte: false
        explication: "C'est justement l'inverse de l'objectif d'un EtherChannel, qui vise à répartir la charge entre tous les liens membres, pas à n'utiliser qu'un seul en permanence."
  - question: "Qu'est-ce qu'une frontière de confiance (trust boundary) en QoS, généralement positionnée au niveau du switch d'accès ?"
    type: "unique"
    reponses:
      - texte: "Le point du réseau à partir duquel le marquage de priorité (CoS/DSCP) apposé par un équipement (comme un téléphone IP) est accepté tel quel, plutôt que remarqué par défaut à une valeur basse"
        correcte: true
        explication: "Faire confiance à un marquage QoS déjà posé par un équipement de confiance (comme un téléphone IP Cisco certifié) en bordure de réseau évite de devoir reclasser tout le trafic plus loin ; au-delà de cette frontière, le réseau accepte le marquage existant plutôt que de tout remettre au niveau par défaut best-effort."
      - texte: "Une limite physique au-delà de laquelle aucun trafic ne peut circuler"
        correcte: false
        explication: "La frontière de confiance QoS ne bloque aucun trafic ; elle détermine seulement à partir de quel point du réseau un marquage de priorité déjà existant est accepté sans être reclassé."
      - texte: "Un mécanisme de chiffrement appliqué uniquement au trafic voix"
        correcte: false
        explication: "La frontière de confiance QoS ne chiffre rien ; elle concerne la confiance accordée à un marquage de priorité existant, pas la sécurité cryptographique du trafic."
      - texte: "Une zone du réseau où tout le trafic est automatiquement bloqué par un pare-feu"
        correcte: false
        explication: "Ce concept n'a aucun rapport avec un blocage de trafic par un pare-feu ; il concerne uniquement l'acceptation ou le reclassement d'un marquage de priorité QoS."
  - question: "Quelle est la différence essentielle entre WPA2-Personal (PSK) et WPA2-Enterprise pour sécuriser un réseau Wi-Fi ?"
    type: "unique"
    reponses:
      - texte: "WPA2-Personal utilise une clé pré-partagée unique commune à tous les utilisateurs, WPA2-Enterprise authentifie individuellement chaque utilisateur via un serveur RADIUS (souvent avec 802.1X)"
        correcte: true
        explication: "WPA2-Personal convient à un usage domestique ou petite structure avec un mot de passe partagé unique, tandis que WPA2-Enterprise s'appuie sur une authentification individuelle (identifiants personnels, certificats) relayée vers un serveur RADIUS, permettant une gestion fine des accès et une révocation individuelle sans changer le mot de passe de tout le monde."
      - texte: "WPA2-Enterprise n'offre aucun chiffrement du trafic Wi-Fi, contrairement à WPA2-Personal"
        correcte: false
        explication: "Les deux modes chiffrent le trafic Wi-Fi ; leur différence porte sur la méthode d'authentification (clé partagée contre authentification individuelle via RADIUS), pas sur la présence ou non de chiffrement."
      - texte: "WPA2-Personal ne fonctionne que sur la bande 5 GHz, WPA2-Enterprise uniquement sur 2,4 GHz"
        correcte: false
        explication: "Les deux modes de sécurité fonctionnent indépendamment de la bande de fréquence choisie ; ce n'est pas ce qui les distingue."
      - texte: "Il n'existe aucune différence pratique entre les deux modes"
        correcte: false
        explication: "Leur méthode d'authentification diffère nettement (clé partagée unique contre authentification individuelle via RADIUS), une différence pratique importante notamment en entreprise."
  - question: "Quel est le rôle général d'un serveur comme Cisco ISE (Identity Services Engine) dans une architecture de contrôle d'accès réseau (NAC) ?"
    type: "unique"
    reponses:
      - texte: "Centraliser les politiques d'authentification, d'autorisation et de conformité des équipements avant de leur accorder un niveau d'accès réseau adapté à leur contexte"
        correcte: true
        explication: "Une plateforme NAC comme Cisco ISE évalue l'identité de l'utilisateur ou de l'équipement (souvent via 802.1X et RADIUS), son niveau de conformité (antivirus à jour, correctifs installés) et applique dynamiquement une politique d'accès adaptée, par exemple en plaçant l'équipement dans un VLAN restreint s'il ne respecte pas les critères de sécurité."
      - texte: "Fournir une connexion Internet de secours en cas de panne du lien principal"
        correcte: false
        explication: "Cette fonction de secours relève de solutions de redondance WAN, sans rapport avec le rôle d'une plateforme de contrôle d'accès réseau comme Cisco ISE."
      - texte: "Remplacer complètement le besoin de switches et de routeurs physiques"
        correcte: false
        explication: "Une plateforme NAC s'appuie sur l'infrastructure réseau existante (switches, points d'accès) pour appliquer ses politiques, elle ne remplace pas ces équipements."
      - texte: "Chiffrer uniquement le trafic de sauvegarde vers un stockage cloud"
        correcte: false
        explication: "Le rôle d'une plateforme NAC concerne le contrôle d'accès réseau basé sur l'identité et la conformité, sans rapport spécifique avec le chiffrement de sauvegardes cloud."
  - question: "Qu'est-ce qu'un VPC (Virtual Private Cloud) chez un fournisseur de cloud public ?"
    type: "unique"
    reponses:
      - texte: "Un réseau virtuel logiquement isolé au sein de l'infrastructure partagée du fournisseur, où le client définit son propre plan d'adressage, ses sous-réseaux et ses règles de sécurité"
        correcte: true
        explication: "Un VPC donne au client l'illusion de disposer d'un réseau privé dédié, avec un contrôle sur l'adressage IP, la segmentation en sous-réseaux et les règles de sécurité, tout en s'exécutant sur l'infrastructure physique partagée et mutualisée du fournisseur cloud."
      - texte: "Un serveur physique dédié exclusivement à un seul client, hébergé dans un data center du fournisseur"
        correcte: false
        explication: "Cette description correspond davantage à un hébergement dédié physique (bare metal), pas au concept de VPC qui est avant tout une isolation logique de réseau, indépendante de l'hébergement physique sous-jacent."
      - texte: "Un VPN classique reliant deux sites physiques d'une entreprise entre eux"
        correcte: false
        explication: "Un VPC est un réseau virtuel dans le cloud, distinct d'un VPN qui relie des sites physiques ; les deux concepts peuvent d'ailleurs être combinés en connectant un VPC à un site sur site via un VPN."
      - texte: "Un protocole de chiffrement propre à chaque fournisseur de cloud"
        correcte: false
        explication: "Le VPC n'est pas un protocole de chiffrement, c'est un concept de réseau virtuel isolé dans le cloud, indépendant du chiffrement éventuellement appliqué au trafic qui y transite."
  - question: "Que signifie l'idempotence d'un playbook d'automatisation réseau (par exemple avec Ansible) ?"
    type: "unique"
    reponses:
      - texte: "L'exécuter plusieurs fois de suite produit le même résultat final, sans effet indésirable supplémentaire si l'état désiré est déjà atteint"
        correcte: true
        explication: "Un playbook idempotent vérifie l'état actuel avant d'agir : s'il constate que la configuration désirée est déjà en place, il ne fait rien de plus, ce qui permet de le réexécuter sans risque de duplication ou d'effet de bord, une propriété essentielle pour une automatisation fiable et répétable."
      - texte: "Il ne peut être exécuté qu'une seule fois dans toute la durée de vie d'un équipement"
        correcte: false
        explication: "C'est l'inverse : l'idempotence signifie justement qu'on peut le réexécuter autant de fois que nécessaire sans problème, pas qu'il est limité à une seule exécution."
      - texte: "Il chiffre automatiquement tous les mots de passe utilisés dans le playbook"
        correcte: false
        explication: "L'idempotence concerne le comportement du playbook face à un état déjà atteint, sans rapport direct avec le chiffrement des informations sensibles qu'il manipule."
      - texte: "Il s'exécute automatiquement plus vite à chaque nouvelle exécution"
        correcte: false
        explication: "L'idempotence ne garantit pas une amélioration systématique de la vitesse d'exécution ; elle garantit la cohérence du résultat final, pas la performance d'exécution."
  - question: "Pourquoi des bibliothèques Python comme Netmiko ou NAPALM sont-elles couramment utilisées en automatisation réseau, plutôt que de se contenter de scripts qui envoient des commandes CLI brutes ?"
    type: "unique"
    reponses:
      - texte: "Elles gèrent les particularités de connexion et de syntaxe propres à chaque constructeur, et offrent des méthodes structurées pour interagir avec les équipements de façon plus fiable qu'un simple envoi de texte brut"
        correcte: true
        explication: "Ces bibliothèques abstraient la gestion de la connexion (SSH), les invites de commande spécifiques, et pour NAPALM la normalisation de certaines données entre constructeurs différents, réduisant la fragilité d'une approche par simple automatisation de terminal texte brut."
      - texte: "Elles remplacent complètement le besoin d'un accès réseau IP aux équipements"
        correcte: false
        explication: "Ces bibliothèques utilisent toujours une connexion réseau (généralement SSH) vers les équipements ; elles ne suppriment pas ce besoin de connectivité IP."
      - texte: "Elles ne fonctionnent qu'avec des équipements virtuels, jamais des équipements physiques réels"
        correcte: false
        explication: "Ces bibliothèques fonctionnent aussi bien avec des équipements physiques réels qu'avec des équipements virtuels, sans distinction de ce type."
      - texte: "Elles sont un pré-requis obligatoire pour qu'un équipement supporte SSH"
        correcte: false
        explication: "Le support de SSH est une fonctionnalité de l'équipement lui-même, indépendante de l'utilisation ou non de ces bibliothèques Python côté automatisation."
  - question: "Quel est l'intérêt d'utiliser un système de contrôle de version comme Git pour gérer les fichiers de configuration réseau dans une démarche d'infrastructure as code ?"
    type: "unique"
    reponses:
      - texte: "Conserver un historique complet des modifications, permettre de revenir à une version antérieure connue et de documenter précisément qui a changé quoi et pourquoi"
        correcte: true
        explication: "Git apporte à la configuration réseau les mêmes bénéfices qu'au code source : traçabilité des changements, possibilité de retour arrière (rollback) rapide en cas de problème, revue collaborative avant application, et documentation implicite via l'historique des commits."
      - texte: "Chiffrer automatiquement tous les fichiers de configuration stockés"
        correcte: false
        explication: "Git ne chiffre pas nativement le contenu des fichiers versionnés ; son rôle est de suivre l'historique des modifications, pas d'assurer la confidentialité du contenu."
      - texte: "Appliquer automatiquement la configuration versionnée directement sur les équipements réseau"
        correcte: false
        explication: "Git versionne les fichiers, mais l'application effective de la configuration sur les équipements nécessite un outil d'automatisation distinct (comme Ansible), Git seul ne pousse rien sur les équipements."
      - texte: "Remplacer complètement le besoin de sauvegarder la configuration active des équipements"
        correcte: false
        explication: "Git conserve un historique des fichiers de configuration source, mais ne remplace pas nécessairement une sauvegarde de la configuration réellement active sur l'équipement lui-même à un instant donné."
  - question: "Quelle est la principale différence entre les formats de données XML, JSON et YAML utilisés en automatisation réseau ?"
    type: "unique"
    reponses:
      - texte: "Ce sont trois syntaxes différentes pour structurer des données, JSON et YAML étant généralement plus concis et lisibles par un humain que XML, plus verbeux"
        correcte: true
        explication: "Les trois formats permettent de représenter des données structurées (comme une configuration ou une réponse d'API) ; XML utilise des balises verbeuses (historiquement lié à NETCONF), JSON est plus compact et largement utilisé par les API REST, et YAML privilégie une syntaxe indentée très lisible, souvent utilisée pour les playbooks Ansible."
      - texte: "Seul XML permet de représenter des données structurées, JSON et YAML sont limités au texte brut"
        correcte: false
        explication: "JSON et YAML représentent tout aussi bien des données structurées (objets, listes, valeurs) que XML ; ce n'est pas une limitation au texte brut sans structure."
      - texte: "JSON et YAML sont des protocoles réseau, XML est un simple format de fichier"
        correcte: false
        explication: "Aucun des trois n'est un protocole réseau ; ce sont tous des formats de représentation de données, utilisés par des protocoles ou outils distincts (NETCONF, RESTCONF, Ansible)."
      - texte: "Il n'existe aucune différence de syntaxe entre les trois formats"
        correcte: false
        explication: "Leur syntaxe diffère nettement (balises pour XML, accolades pour JSON, indentation pour YAML), ce n'est pas une distinction purement nominale."
  - question: "Quelle est la différence entre la télémétrie pilotée par modèle (model-driven telemetry) et l'interrogation SNMP traditionnelle (polling) ?"
    type: "unique"
    reponses:
      - texte: "La télémétrie pousse en continu les données depuis l'équipement vers un collecteur selon un modèle structuré, alors que SNMP nécessite qu'un système interroge périodiquement chaque équipement pour obtenir ses données"
        correcte: true
        explication: "Avec SNMP traditionnel, un système de supervision doit régulièrement interroger (poll) chaque équipement, ce qui limite la fréquence de collecte et charge les équipements de nombreuses requêtes ; la télémétrie inverse ce modèle en laissant l'équipement pousser (push) ses données de façon continue et structurée (souvent via des modèles YANG), offrant une visibilité plus fine et en quasi temps réel."
      - texte: "SNMP est plus récent et plus performant que la télémétrie pilotée par modèle"
        correcte: false
        explication: "C'est l'inverse historiquement et fonctionnellement : la télémétrie pilotée par modèle est l'approche plus récente, conçue pour pallier les limites de fréquence et de charge du polling SNMP traditionnel."
      - texte: "La télémétrie ne peut collecter que des données de sécurité, jamais de performance"
        correcte: false
        explication: "La télémétrie pilotée par modèle peut collecter une large variété de données (interfaces, CPU, mémoire, routage...), pas uniquement des données de sécurité."
      - texte: "SNMP et la télémétrie pilotée par modèle sont exactement le même mécanisme sous deux noms différents"
        correcte: false
        explication: "Leur mécanisme de collecte diffère fondamentalement (interrogation périodique contre envoi continu), ce n'est pas une simple différence de nom."
  - question: "Quel est l'intérêt d'appliquer une démarche de type CI/CD (intégration et déploiement continus) aux changements de configuration réseau ?"
    type: "unique"
    reponses:
      - texte: "Tester et valider automatiquement chaque changement de configuration avant son déploiement en production, réduisant le risque d'erreur humaine et accélérant le rythme des changements fiables"
        correcte: true
        explication: "En intégrant des tests automatisés (syntaxe, simulation, validation de politique) à chaque modification de configuration avant son déploiement, une démarche CI/CD réseau permet de détecter des erreurs plus tôt et de déployer des changements de façon plus fréquente et plus sûre qu'un processus entièrement manuel."
      - texte: "Éliminer complètement le besoin de tester une configuration avant de la déployer"
        correcte: false
        explication: "C'est l'inverse : la démarche CI/CD renforce justement la phase de test automatisé avant déploiement, elle ne la supprime pas."
      - texte: "Empêcher définitivement tout changement de configuration sur le réseau de production"
        correcte: false
        explication: "L'objectif n'est pas de bloquer les changements, mais de les rendre plus sûrs et plus rapides grâce à l'automatisation des tests et du déploiement."
      - texte: "Remplacer complètement le besoin d'administrateurs réseau qualifiés"
        correcte: false
        explication: "CI/CD outille et accélère le travail des administrateurs réseau, il ne remplace pas leur expertise nécessaire pour concevoir les tests, les politiques et superviser le processus."
  - question: "Qu'est-ce que le dual-stack, en tant que stratégie de transition entre IPv4 et IPv6 ?"
    type: "unique"
    reponses:
      - texte: "Faire fonctionner IPv4 et IPv6 simultanément sur les mêmes équipements et interfaces, sans dépendance entre les deux protocoles"
        correcte: true
        explication: "Le dual-stack est considérée comme la stratégie de transition la plus simple sur le plan conceptuel : chaque hôte et routeur dispose à la fois d'une pile IPv4 et d'une pile IPv6 pleinement fonctionnelles, choisissant l'une ou l'autre selon la destination contactée, sans mécanisme de traduction ou de tunneling nécessaire."
      - texte: "Faire transiter tout le trafic IPv6 encapsulé à l'intérieur de paquets IPv4"
        correcte: false
        explication: "Cette description correspond à une technique de tunneling (comme 6to4), pas au dual-stack qui fait fonctionner les deux protocoles de façon indépendante et native, sans encapsulation de l'un dans l'autre."
      - texte: "Désactiver complètement IPv4 au profit exclusif d'IPv6"
        correcte: false
        explication: "C'est l'inverse du principe du dual-stack, qui consiste justement à garder les deux protocoles actifs simultanément, pas à en désactiver un au profit de l'autre."
      - texte: "Un mécanisme de traduction NAT entre adresses IPv4 et IPv6"
        correcte: false
        explication: "Cette description correspond à un mécanisme comme NAT64, pas au dual-stack qui fait fonctionner les deux protocoles nativement en parallèle sans traduction."
  - question: "Quel est le principe général d'un mécanisme de tunneling IPv6 sur IPv4 comme 6to4, utilisé en phase de transition ?"
    type: "unique"
    reponses:
      - texte: "Encapsuler les paquets IPv6 à l'intérieur de paquets IPv4 pour les faire transiter à travers une infrastructure IPv4 existante ne supportant pas encore IPv6 nativement"
        correcte: true
        explication: "Le tunneling permet de connecter des îlots IPv6 à travers une infrastructure IPv4 majoritaire en encapsulant le trafic IPv6 dans des paquets IPv4 standard, une solution transitoire en attendant un déploiement IPv6 natif plus large."
      - texte: "Faire fonctionner IPv4 et IPv6 de façon totalement indépendante sur les mêmes interfaces, sans aucune encapsulation"
        correcte: false
        explication: "Cette description correspond au dual-stack, une stratégie distincte du tunneling qui repose justement sur l'encapsulation d'un protocole dans l'autre."
      - texte: "Traduire directement chaque paquet IPv6 en paquet IPv4 équivalent, sans encapsulation"
        correcte: false
        explication: "Cette description correspond davantage à un mécanisme de traduction comme NAT64, pas au tunneling qui encapsule plutôt que de traduire."
      - texte: "Chiffrer systématiquement tout le trafic IPv6 transitant dans le tunnel"
        correcte: false
        explication: "Un tunnel comme 6to4 n'apporte pas nécessairement de chiffrement par lui-même ; son rôle est l'encapsulation pour le transport, pas la confidentialité du contenu."
  - question: "À quoi sert DNSSEC (Domain Name System Security Extensions) ?"
    type: "unique"
    reponses:
      - texte: "À garantir l'authenticité et l'intégrité des réponses DNS grâce à une signature cryptographique, protégeant contre la falsification de réponses (DNS spoofing/cache poisoning)"
        correcte: true
        explication: "DNSSEC ajoute des signatures numériques aux enregistrements DNS, permettant à un résolveur de vérifier qu'une réponse provient bien du serveur faisant autorité et n'a pas été altérée en chemin, contrairement au DNS classique qui ne vérifie pas nativement l'authenticité des réponses reçues."
      - texte: "À chiffrer la confidentialité des requêtes DNS échangées entre le client et le résolveur"
        correcte: false
        explication: "DNSSEC garantit l'authenticité et l'intégrité des réponses, pas leur confidentialité ; ce dernier objectif est plutôt visé par des mécanismes distincts comme DNS over HTTPS (DoH) ou DNS over TLS (DoT)."
      - texte: "À accélérer la résolution de noms de domaine en réduisant le nombre de requêtes nécessaires"
        correcte: false
        explication: "DNSSEC n'a pas pour objectif d'accélérer la résolution ; il ajoute au contraire une vérification cryptographique supplémentaire, focalisée sur la sécurité plutôt que la performance."
      - texte: "À remplacer complètement le besoin de serveurs DNS traditionnels"
        correcte: false
        explication: "DNSSEC est une extension de sécurité du DNS existant, il ne remplace pas l'infrastructure DNS traditionnelle, il la renforce."
  - question: "Dans les niveaux de gravité (severity) Syslog, lequel des suivants représente le niveau le plus critique ?"
    type: "unique"
    reponses:
      - texte: "Emergency (niveau 0)"
        correcte: true
        explication: "L'échelle Syslog va de 0 (Emergency, le plus critique, système inutilisable) à 7 (Debug, le moins critique, informations de mise au point) ; plus le chiffre est bas, plus la gravité est élevée."
      - texte: "Debug (niveau 7)"
        correcte: false
        explication: "Debug est le niveau le moins critique de l'échelle Syslog, utilisé pour des informations détaillées de mise au point, pas pour signaler une urgence."
      - texte: "Notice (niveau 5)"
        correcte: false
        explication: "Notice est un niveau intermédiaire signalant des événements normaux mais significatifs, moins critique qu'Emergency qui est le niveau 0."
      - texte: "Informational (niveau 6)"
        correcte: false
        explication: "Informational est un niveau bas de l'échelle, réservé à des messages purement informatifs, bien moins critique qu'Emergency."
  - question: "Dans le cadre AAA, quelle est la différence entre l'autorisation (authorization) et la comptabilisation (accounting) ?"
    type: "unique"
    reponses:
      - texte: "L'autorisation détermine ce qu'un utilisateur authentifié a le droit de faire, la comptabilisation journalise ce qu'il a effectivement fait"
        correcte: true
        explication: "Une fois l'identité vérifiée (authentication), l'autorisation définit les droits accordés (quelles commandes, quelles ressources), tandis que l'accounting enregistre a posteriori les actions réalisées, la durée de connexion ou les ressources consommées, à des fins d'audit ou de facturation."
      - texte: "Les deux termes désignent exactement la même fonction dans le cadre AAA"
        correcte: false
        explication: "Ce sont deux fonctions bien distinctes du cadre AAA : l'une définit les droits accordés, l'autre journalise les actions effectuées, ce n'est pas une simple synonymie."
      - texte: "L'autorisation journalise les actions, la comptabilisation détermine les droits"
        correcte: false
        explication: "C'est l'inverse des rôles réels : l'autorisation définit les droits, la comptabilisation journalise les actions effectuées."
      - texte: "Ni l'une ni l'autre ne dépend d'une authentification préalable"
        correcte: false
        explication: "L'autorisation et la comptabilisation s'appuient logiquement sur une identité déjà authentifiée ; sans authentification préalable, il n'y a pas d'identité à laquelle associer des droits ou des actions journalisées."
  - question: "Quelle est une différence notable entre TACACS+ et RADIUS concernant le chiffrement des échanges avec le serveur AAA ?"
    type: "unique"
    reponses:
      - texte: "TACACS+ chiffre l'intégralité du corps du paquet, alors que RADIUS ne chiffre nativement que le mot de passe, laissant le reste des attributs en clair"
        correcte: true
        explication: "TACACS+ (propriétaire Cisco) offre une meilleure confidentialité en chiffrant tout le contenu échangé, tandis que RADIUS (standard ouvert plus répandu) ne chiffre par défaut que le champ du mot de passe, les autres attributs (comme le nom d'utilisateur) circulant en clair."
      - texte: "RADIUS chiffre l'intégralité du paquet, TACACS+ ne chiffre rien du tout"
        correcte: false
        explication: "C'est l'inverse : c'est TACACS+ qui chiffre l'ensemble du corps du paquet, RADIUS se limitant nativement au chiffrement du mot de passe."
      - texte: "Aucun des deux protocoles ne chiffre quoi que ce soit par défaut"
        correcte: false
        explication: "Les deux protocoles appliquent un certain niveau de chiffrement par défaut (au minimum le mot de passe pour RADIUS, l'intégralité du corps pour TACACS+), ce n'est pas une absence totale de chiffrement des deux côtés."
      - texte: "Les deux protocoles utilisent exactement le même niveau de chiffrement, sans aucune différence"
        correcte: false
        explication: "Leur niveau de chiffrement par défaut diffère nettement (mot de passe seul contre corps entier du paquet), ce n'est pas une équivalence stricte."
  - question: "Quelle est la différence entre Root Guard et BPDU Guard sur un port de switch Cisco ?"
    type: "unique"
    reponses:
      - texte: "Root Guard empêche un port de devenir un chemin vers un nouveau pont racine en ignorant les BPDU supérieures reçues, tandis que BPDU Guard désactive complètement le port dès qu'une BPDU y est reçue"
        correcte: true
        explication: "Root Guard, utilisé sur des ports vers des switches non censés devenir le pont racine, place le port en état bloqué (root-inconsistent) tant qu'une BPDU supérieure continue d'y être reçue, sans désactiver totalement le port ; BPDU Guard, généralement combiné à PortFast, désactive purement et simplement le port (err-disable) dès la moindre BPDU reçue."
      - texte: "Les deux fonctionnalités sont exactement identiques, ce sont juste deux noms différents pour la même protection"
        correcte: false
        explication: "Leur comportement diffère : Root Guard bloque spécifiquement le risque de changement de pont racine sans désactiver totalement le port, BPDU Guard désactive directement le port à la moindre BPDU."
      - texte: "BPDU Guard s'applique uniquement aux ports trunk, Root Guard uniquement aux ports access"
        correcte: false
        explication: "Ce n'est pas la distinction correcte : BPDU Guard s'utilise généralement sur des ports d'accès avec PortFast, tandis que Root Guard s'applique plutôt sur des ports orientés vers d'autres switches, indépendamment du mode trunk ou access à proprement parler."
      - texte: "Root Guard chiffre les BPDU échangées, BPDU Guard ne fait aucune vérification"
        correcte: false
        explication: "Ni Root Guard ni BPDU Guard ne chiffrent les BPDU ; ce sont deux mécanismes de protection contre des scénarios de topologie indésirables, pas des fonctions de chiffrement."
  - question: "Quelle est la différence entre BPDU Filter et BPDU Guard sur un port PortFast ?"
    type: "unique"
    reponses:
      - texte: "BPDU Filter empêche simplement l'envoi et la réception de BPDU sur le port sans le désactiver, alors que BPDU Guard désactive complètement le port dès qu'une BPDU y est détectée"
        correcte: true
        explication: "BPDU Filter supprime silencieusement l'échange de BPDU sur le port concerné (ce qui peut masquer un problème de boucle sans le signaler), tandis que BPDU Guard réagit activement à la réception d'une BPDU inattendue en désactivant le port, une approche généralement considérée plus sûre pour la détection d'anomalies."
      - texte: "Les deux fonctionnalités ont un comportement strictement identique en toute circonstance"
        correcte: false
        explication: "Leur comportement diffère nettement face à la réception d'une BPDU : l'un la filtre silencieusement, l'autre désactive activement le port, ce n'est pas une équivalence stricte."
      - texte: "BPDU Guard filtre silencieusement les BPDU, BPDU Filter désactive le port"
        correcte: false
        explication: "C'est l'inverse des rôles réels : BPDU Filter filtre silencieusement, BPDU Guard désactive activement le port en cas de réception d'une BPDU inattendue."
      - texte: "BPDU Filter ne peut être configuré que globalement pour tout le switch, jamais par port"
        correcte: false
        explication: "BPDU Filter peut être configuré aussi bien globalement que sur une interface spécifique, ce n'est pas une limitation exclusive au niveau global."
  - question: "Quel est l'intérêt des trames jumbo (jumbo frames), dépassant la taille standard de 1500 octets de MTU Ethernet, notamment dans un environnement de stockage réseau ou de data center ?"
    type: "unique"
    reponses:
      - texte: "Réduire le nombre de trames nécessaires pour transporter un même volume de données, diminuant ainsi la charge de traitement par octet transmis"
        correcte: true
        explication: "En transportant davantage de données utiles par trame (souvent jusqu'à 9000 octets), les trames jumbo réduisent le nombre total de trames à traiter pour un même volume de données, ce qui peut réduire la charge CPU des équipements et améliorer l'efficacité, particulièrement utile pour du trafic de stockage ou de sauvegarde à fort volume."
      - texte: "Chiffrer automatiquement le contenu de chaque trame transmise"
        correcte: false
        explication: "Les trames jumbo ne chiffrent rien ; leur intérêt est purement lié à l'efficacité de transport de gros volumes de données, pas à la sécurité cryptographique."
      - texte: "Elles sont obligatoires sur tout réseau Ethernet moderne, sans exception"
        correcte: false
        explication: "Les trames jumbo restent optionnelles et doivent être supportées de façon cohérente par tous les équipements du chemin ; ce n'est pas une exigence universelle sur tout réseau Ethernet moderne."
      - texte: "Elles réduisent automatiquement la latence perçue pour tout type de trafic, y compris la voix"
        correcte: false
        explication: "Les trames jumbo sont surtout bénéfiques pour du trafic à fort volume comme le stockage ; pour un trafic sensible à la latence comme la voix, des trames plus petites et plus fréquentes sont généralement préférées, pas l'inverse."
  - question: "Pourquoi active-t-on généralement l'authentification OSPF (par exemple MD5 ou SHA) entre routeurs voisins ?"
    type: "unique"
    reponses:
      - texte: "Pour empêcher un routeur non autorisé d'injecter de fausses routes en se faisant passer pour un voisin OSPF légitime"
        correcte: true
        explication: "Sans authentification, n'importe quel équipement capable d'envoyer des paquets OSPF valides sur le segment pourrait former une adjacence et injecter des routes erronées ou malveillantes ; l'authentification garantit que seuls les routeurs partageant la clé secrète configurée peuvent former une adjacence."
      - texte: "Pour accélérer la convergence OSPF en cas de panne de lien"
        correcte: false
        explication: "L'authentification OSPF n'a pas d'effet sur la vitesse de convergence ; son rôle est exclusivement sécuritaire, pour valider l'identité des voisins."
      - texte: "Pour permettre l'équilibrage de charge sur des chemins de coûts différents"
        correcte: false
        explication: "L'équilibrage de charge sur des coûts inégaux est un mécanisme distinct (comme la variance en EIGRP) ; l'authentification OSPF ne concerne que la sécurité des échanges entre voisins."
      - texte: "Pour réduire la taille de la base de données OSPF (LSDB)"
        correcte: false
        explication: "La réduction de la base de données OSPF relève de techniques comme les zones stub ou la sommation de routes, sans rapport avec l'authentification entre voisins."
  - question: "Quel est l'objectif d'une étude de site (site survey) RF avant le déploiement de points d'accès Wi-Fi dans un grand bâtiment ?"
    type: "unique"
    reponses:
      - texte: "Déterminer le nombre, l'emplacement et la puissance optimale des points d'accès nécessaires pour assurer une couverture radio homogène et limiter les interférences, avant tout déploiement physique"
        correcte: true
        explication: "Une étude de site RF (souvent réalisée avec des outils de simulation ou de mesure physique) analyse la structure du bâtiment, les matériaux, les sources d'interférence potentielles et les besoins de densité de clients pour concevoir un placement optimal des points d'accès, évitant les zones d'ombre ou de chevauchement excessif entre cellules radio."
      - texte: "Vérifier uniquement la compatibilité des mots de passe utilisateur avec la politique de sécurité"
        correcte: false
        explication: "Cette vérification de politique de mot de passe n'a aucun rapport avec l'objectif d'une étude de site RF, centrée sur la couverture et la qualité radio."
      - texte: "Configurer à distance chaque point d'accès sans jamais se rendre sur le site physique"
        correcte: false
        explication: "Une étude de site RF implique généralement une visite ou une analyse physique du site (plans, matériaux, obstacles), elle ne se limite pas à une configuration à distance sans considération du lieu réel."
      - texte: "Déterminer exclusivement le prix total du matériel Wi-Fi à acheter"
        correcte: false
        explication: "L'aspect budgétaire peut découler des résultats d'une étude de site, mais l'objectif technique premier est la conception de la couverture radio, pas uniquement un chiffrage financier."
  - question: "En PVST+ (Per-VLAN Spanning Tree), pourquoi peut-il être utile d'ajuster manuellement le coût ou la priorité de port sur une base par VLAN, plutôt que de garder la configuration par défaut identique pour tous les VLAN ?"
    type: "unique"
    reponses:
      - texte: "Pour équilibrer la charge du trafic entre plusieurs liens redondants, en faisant emprunter des VLAN différents à des chemins différents plutôt que de tous les concentrer sur le même lien actif"
        correcte: true
        explication: "Comme PVST+ calcule une topologie STP indépendante par VLAN, ajuster le coût ou la priorité pour certains VLAN permet de répartir le trafic sur des liens redondants distincts selon le VLAN, plutôt que de systématiquement bloquer le même lien pour tous les VLAN et de concentrer tout le trafic actif sur un seul chemin physique."
      - texte: "Pour chiffrer différemment le trafic de chaque VLAN"
        correcte: false
        explication: "L'ajustement de coût ou de priorité STP n'a aucun rapport avec le chiffrement ; il s'agit uniquement d'influencer le choix du chemin actif par VLAN."
      - texte: "Parce que PVST+ ne fonctionne techniquement qu'avec un coût identique pour tous les VLAN, sans possibilité d'ajustement"
        correcte: false
        explication: "C'est l'inverse : PVST+ permet justement d'ajuster ces paramètres indépendamment par VLAN, ce qui est même l'un de ses principaux intérêts par rapport à une seule instance STP globale."
      - texte: "Pour désactiver complètement le Spanning Tree sur les VLAN concernés"
        correcte: false
        explication: "Ajuster le coût ou la priorité ne désactive pas STP sur ces VLAN ; ils restent protégés contre les boucles, seul le choix du chemin actif est influencé."
  - question: "Dans le contexte de la VoIP à travers un pare-feu ou un NAT, à quoi sert un mécanisme comme STUN pour un client ?"
    type: "unique"
    reponses:
      - texte: "À découvrir sa propre adresse IP publique et le type de NAT traversé, afin d'établir une communication directe avec un autre client malgré la présence de NAT"
        correcte: true
        explication: "STUN (Session Traversal Utilities for NAT) permet à un client derrière un NAT de connaître l'adresse et le port publics sous lesquels il est vu depuis l'extérieur, une information nécessaire pour négocier une communication pair-à-pair directe (par exemple en voix ou vidéo sur IP) malgré la traduction d'adresse."
      - texte: "À chiffrer intégralement le flux audio de l'appel VoIP"
        correcte: false
        explication: "STUN ne chiffre rien ; son rôle est d'aider à la découverte d'adresse et à la traversée de NAT, pas d'assurer la confidentialité du flux audio."
      - texte: "À attribuer une adresse IP privée au client derrière le NAT"
        correcte: false
        explication: "L'attribution d'adresse IP privée est le rôle de DHCP, sans rapport avec la fonction de découverte d'adresse publique assurée par STUN."
      - texte: "À remplacer complètement le besoin d'un routeur NAT sur le réseau"
        correcte: false
        explication: "STUN aide justement à composer avec la présence du NAT plutôt que de le remplacer ; le NAT continue de fonctionner normalement en parallèle."
  - question: "Dans un réseau de conteneurs (comme Docker), à quoi correspond typiquement un réseau de type bridge par défaut ?"
    type: "unique"
    reponses:
      - texte: "Un réseau virtuel interne à l'hôte qui permet aux conteneurs de communiquer entre eux et de sortir vers l'extérieur via une traduction d'adresse gérée par l'hôte"
        correcte: true
        explication: "Le réseau bridge par défaut crée une interface réseau virtuelle sur l'hôte, à laquelle chaque conteneur se connecte avec une adresse IP interne ; l'hôte réalise généralement une traduction d'adresse (NAT) pour permettre aux conteneurs de sortir vers l'extérieur tout en restant isolés du réseau physique direct."
      - texte: "Une connexion physique directe entre le conteneur et le commutateur physique du réseau, sans aucune couche de virtualisation"
        correcte: false
        explication: "Un réseau bridge de conteneurs reste une abstraction logicielle sur l'hôte, pas une connexion physique directe au commutateur, contrairement par exemple à un mode réseau host ou macvlan dans certains cas particuliers."
      - texte: "Un mécanisme qui chiffre automatiquement toutes les communications entre conteneurs"
        correcte: false
        explication: "Un réseau bridge de conteneurs ne chiffre rien par défaut ; il assure la connectivité logique entre conteneurs et vers l'extérieur, pas la confidentialité du trafic."
      - texte: "Un réseau qui isole totalement chaque conteneur, les empêchant de communiquer entre eux même sur le même hôte"
        correcte: false
        explication: "C'est l'inverse : le réseau bridge par défaut permet justement aux conteneurs d'un même hôte de communiquer entre eux, tout en gardant une certaine isolation vis-à-vis du réseau physique externe."
  - question: "Qu'est-ce que la micro-segmentation apporte par rapport à une segmentation réseau traditionnelle basée uniquement sur des VLAN et un pare-feu en périphérie ?"
    type: "unique"
    reponses:
      - texte: "Elle applique des politiques de sécurité fines jusqu'au niveau de la charge de travail individuelle (une VM ou un conteneur), limitant les mouvements latéraux même au sein d'un même VLAN"
        correcte: true
        explication: "Alors qu'une segmentation traditionnelle sépare de larges zones (VLAN) filtrées principalement en périphérie, la micro-segmentation applique des règles très granulaires directement entre charges de travail individuelles, réduisant fortement la capacité d'un attaquant ayant compromis une machine à se déplacer latéralement vers d'autres systèmes du même segment traditionnel."
      - texte: "Elle supprime complètement le besoin de VLAN dans l'architecture réseau"
        correcte: false
        explication: "La micro-segmentation peut coexister avec des VLAN existants ; elle ajoute une granularité supplémentaire, elle ne supprime pas nécessairement le découpage en VLAN sous-jacent."
      - texte: "Elle ne s'applique qu'au trafic sortant vers Internet, jamais au trafic interne au data center"
        correcte: false
        explication: "C'est l'inverse : l'intérêt principal de la micro-segmentation est justement de contrôler finement le trafic interne (est-ouest) au sein du data center, pas uniquement le trafic sortant vers Internet."
      - texte: "Elle consiste à chiffrer systématiquement tout le trafic interne du data center, sans aucun filtrage"
        correcte: false
        explication: "La micro-segmentation repose avant tout sur du filtrage fin des communications entre charges de travail, pas uniquement sur du chiffrement systématique sans aucune règle de filtrage."
---
