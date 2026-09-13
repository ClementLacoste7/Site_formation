---
titre: "CCNA : Intermédiaire"
description: "VLAN et trunking, STP, routage inter-VLAN, routage statique, OSPF de base, ACL, NAT/PAT, sécurité de port et redondance de passerelle."
slug: "intermediaire"
examen: "ccna"
niveau: "intermediaire"
ordre: 2
nombreQuizz: 3
questionsParQuizz: 20
publie: true
pool:
  - question: "Combien d'adresses hôtes utilisables offre un sous-réseau /27 ?"
    type: "unique"
    reponses:
      - texte: "30"
        correcte: true
        explication: "/27 laisse 5 bits d'hôte, soit 32 adresses au total ; en retirant l'adresse réseau et l'adresse de broadcast, il reste 30 adresses utilisables."
      - texte: "32"
        correcte: false
        explication: "32 est le nombre total d'adresses du sous-réseau, il faut en retirer 2 (réseau et broadcast) pour obtenir les adresses utilisables."
      - texte: "62"
        correcte: false
        explication: "62 adresses utilisables correspond à un sous-réseau /26, plus grand qu'un /27."
      - texte: "14"
        correcte: false
        explication: "14 adresses utilisables correspond à un sous-réseau /28, plus petit qu'un /27."
  - question: "On doit découper 192.168.1.0/24 pour obtenir des sous-réseaux d'au moins 50 hôtes chacun. Quel masque choisir au minimum ?"
    type: "unique"
    reponses:
      - texte: "/26 (62 hôtes utilisables par sous-réseau)"
        correcte: true
        explication: "Un /26 laisse 6 bits d'hôte (64 adresses, 62 utilisables), suffisant pour 50 hôtes ; un /27 (30 utilisables) serait insuffisant."
      - texte: "/27 (30 hôtes utilisables par sous-réseau)"
        correcte: false
        explication: "Un /27 n'offre que 30 adresses utilisables, insuffisant pour couvrir un besoin de 50 hôtes."
      - texte: "/25 (126 hôtes utilisables par sous-réseau)"
        correcte: false
        explication: "Un /25 convient aussi en capacité mais gaspille davantage d'adresses que nécessaire ; /26 est le plus petit masque qui satisfait le besoin de 50 hôtes."
      - texte: "/28 (14 hôtes utilisables par sous-réseau)"
        correcte: false
        explication: "Un /28 n'offre que 14 adresses utilisables, largement insuffisant pour 50 hôtes."
  - question: "Avec l'adresse 172.16.50.0/23, quelle est l'adresse de broadcast de ce sous-réseau ?"
    type: "unique"
    reponses:
      - texte: "172.16.51.255"
        correcte: true
        explication: "Un /23 regroupe deux blocs /24 consécutifs (172.16.50.0 et 172.16.51.0) ; l'adresse de broadcast est donc la dernière adresse du second bloc, 172.16.51.255."
      - texte: "172.16.50.255"
        correcte: false
        explication: "Cette adresse serait le broadcast d'un /24 classique, mais un /23 regroupe deux blocs /24, décalant le broadcast à 172.16.51.255."
      - texte: "172.16.255.255"
        correcte: false
        explication: "Cette adresse correspondrait au broadcast d'un /16, bien plus large qu'un /23."
      - texte: "172.16.52.0"
        correcte: false
        explication: "Cette adresse appartient déjà au sous-réseau suivant, pas au broadcast du /23 de départ."
  - question: "Quelle norme IEEE définit le marquage des trames VLAN sur un lien trunk ?"
    type: "unique"
    reponses:
      - texte: "IEEE 802.1Q"
        correcte: true
        explication: "IEEE 802.1Q insère un tag VLAN dans l'en-tête Ethernet, permettant à un lien trunk de transporter le trafic de plusieurs VLAN."
      - texte: "IEEE 802.1D"
        correcte: false
        explication: "IEEE 802.1D définit le protocole Spanning Tree (STP), pas le marquage VLAN."
      - texte: "IEEE 802.3af"
        correcte: false
        explication: "IEEE 802.3af définit l'alimentation électrique par câble Ethernet (PoE), sans rapport avec le marquage VLAN."
      - texte: "IEEE 802.11i"
        correcte: false
        explication: "IEEE 802.11i concerne la sécurité des réseaux Wi-Fi, sans rapport avec le marquage VLAN sur un trunk filaire."
  - question: "Sur un lien trunk 802.1Q, comment est traité le trafic appartenant au VLAN natif ?"
    type: "unique"
    reponses:
      - texte: "Il est transmis sans tag VLAN (non marqué)"
        correcte: true
        explication: "Le VLAN natif est la seule exception sur un trunk 802.1Q : son trafic circule sans tag, contrairement à tous les autres VLAN marqués."
      - texte: "Il est bloqué automatiquement sur le lien trunk"
        correcte: false
        explication: "Le trafic du VLAN natif est transmis normalement, seulement sans tag, il n'est pas bloqué."
      - texte: "Il reçoit systématiquement deux tags VLAN empilés"
        correcte: false
        explication: "C'est l'inverse : le VLAN natif circule sans aucun tag, pas avec un double tag."
      - texte: "Il est automatiquement chiffré contrairement aux autres VLAN"
        correcte: false
        explication: "802.1Q ne chiffre aucun VLAN, natif ou non ; le tag ne concerne que l'identification du VLAN, pas la sécurité du contenu."
  - question: "Pourquoi recommande-t-on de ne jamais laisser le VLAN natif d'un trunk correspondre au VLAN de gestion, ni à un VLAN par défaut non utilisé ?"
    type: "unique"
    reponses:
      - texte: "Parce que le trafic non tagué du VLAN natif peut être exploité pour une attaque de saut de VLAN (VLAN hopping)"
        correcte: true
        explication: "Un attaquant peut forger des trames à double tag pour tromper le switch et faire sortir du trafic vers un autre VLAN via le VLAN natif non tagué ; changer le VLAN natif par défaut réduit ce risque."
      - texte: "Parce que cela ralentit systématiquement le débit du lien trunk"
        correcte: false
        explication: "Le choix du VLAN natif n'a pas d'impact sur le débit du lien ; le risque concerné est la sécurité (VLAN hopping), pas la performance."
      - texte: "Parce qu'un trunk ne peut techniquement pas avoir de VLAN natif"
        correcte: false
        explication: "Un trunk 802.1Q a toujours un VLAN natif par défaut (souvent VLAN 1) ; le problème n'est pas son existence mais son usage par défaut non sécurisé."
      - texte: "Parce que cela empêche tout accès administrateur au switch"
        correcte: false
        explication: "Le VLAN natif n'a pas de rapport direct avec l'accès administrateur au switch, qui dépend d'une configuration distincte (VLAN de gestion, ACL, AAA)."
  - question: "Quelle commande Cisco IOS configure un port de switch en mode trunk ?"
    type: "unique"
    reponses:
      - texte: "switchport mode trunk"
        correcte: true
        explication: "switchport mode trunk configure explicitement le port pour transporter le trafic de plusieurs VLAN via 802.1Q."
      - texte: "switchport mode access"
        correcte: false
        explication: "switchport mode access configure le port en mode accès, associé à un seul VLAN, pas en trunk."
      - texte: "switchport trunk encapsulation dot1q uniquement, sans autre commande"
        correcte: false
        explication: "Cette commande précise seulement le type d'encapsulation, mais ne suffit pas seule à activer le mode trunk sur tous les modèles ; switchport mode trunk reste la commande d'activation principale."
      - texte: "no switchport"
        correcte: false
        explication: "no switchport transforme un port de switch en interface routée (couche 3), sans rapport avec le mode trunk."
  - question: "Sur un routeur, à quoi sert une sous-interface (subinterface) dans une configuration de routage inter-VLAN dite router-on-a-stick ?"
    type: "unique"
    reponses:
      - texte: "À créer une interface logique distincte par VLAN sur une seule interface physique reliée en trunk au switch"
        correcte: true
        explication: "Le router-on-a-stick utilise une seule interface physique en trunk, divisée en sous-interfaces logiques (une par VLAN), chacune avec sa propre adresse IP et son encapsulation 802.1Q."
      - texte: "À dupliquer physiquement le câblage vers le switch pour chaque VLAN"
        correcte: false
        explication: "C'est justement l'inverse : le router-on-a-stick évite d'avoir une interface physique par VLAN, en utilisant des sous-interfaces logiques sur un seul lien."
      - texte: "À remplacer le besoin d'adresses IP sur le routeur"
        correcte: false
        explication: "Chaque sous-interface nécessite au contraire sa propre adresse IP, servant de passerelle pour son VLAN respectif."
      - texte: "À désactiver le routage inter-VLAN"
        correcte: false
        explication: "C'est l'inverse : les sous-interfaces sont justement le mécanisme qui permet le routage inter-VLAN dans ce scénario."
  - question: "Qu'est-ce qu'une SVI (Switch Virtual Interface) sur un switch de niveau 3 ?"
    type: "unique"
    reponses:
      - texte: "Une interface virtuelle associée à un VLAN, à laquelle on attribue une adresse IP pour permettre le routage inter-VLAN directement sur le switch"
        correcte: true
        explication: "Une SVI (interface vlan X) donne une adresse IP de passerelle à un VLAN directement sur un switch multicouche, sans passer par un routeur externe."
      - texte: "Une interface physique dédiée exclusivement à la gestion à distance du switch"
        correcte: false
        explication: "Une SVI peut effectivement servir à la gestion (VLAN de management), mais sa fonction principale et générale est de fournir le routage inter-VLAN, pas uniquement la gestion."
      - texte: "Un protocole de sécurité empêchant les attaques de saut de VLAN"
        correcte: false
        explication: "Une SVI est une interface logique de routage, pas un mécanisme de sécurité contre le VLAN hopping."
      - texte: "Un type de câble utilisé entre deux switches"
        correcte: false
        explication: "Une SVI est purement logicielle et logique, elle n'a aucun rapport avec un type de câble."
  - question: "Dans l'algorithme Spanning Tree (STP), comment est élu le pont racine (root bridge) ?"
    type: "unique"
    reponses:
      - texte: "Le switch avec l'identifiant de pont (bridge ID) le plus bas devient le pont racine"
        correcte: true
        explication: "Le bridge ID combine une priorité configurable et l'adresse MAC du switch ; le plus petit bridge ID de tout le réseau commuté remporte l'élection du pont racine."
      - texte: "Le switch avec l'adresse MAC la plus élevée devient systématiquement le pont racine"
        correcte: false
        explication: "C'est l'inverse en cas d'égalité de priorité : c'est l'adresse MAC la plus basse, pas la plus élevée, qui départage l'élection."
      - texte: "Le premier switch physiquement allumé devient automatiquement et définitivement le pont racine"
        correcte: false
        explication: "L'élection se base sur le bridge ID (priorité et adresse MAC), pas sur l'ordre de mise sous tension des équipements."
      - texte: "Le pont racine est toujours désigné manuellement, STP ne fait aucune élection automatique"
        correcte: false
        explication: "STP réalise une élection automatique basée sur le bridge ID ; un administrateur peut influencer le résultat en abaissant la priorité, mais l'élection reste automatique."
  - question: "Quel est le rôle du protocole Spanning Tree (STP) dans un réseau commuté avec des liens redondants ?"
    type: "unique"
    reponses:
      - texte: "Bloquer logiquement certains ports pour éviter les boucles de commutation, tout en gardant les liens redondants disponibles en secours"
        correcte: true
        explication: "STP calcule un arbre sans boucle en désactivant logiquement des ports redondants, prévenant les tempêtes de broadcast tout en conservant une redondance physique activable en cas de panne."
      - texte: "Répartir la charge du trafic également sur tous les liens redondants en permanence"
        correcte: false
        explication: "STP bloque les liens redondants plutôt que de répartir la charge entre eux ; l'équilibrage de charge nécessite d'autres mécanismes comme EtherChannel."
      - texte: "Chiffrer le trafic circulant entre deux switches"
        correcte: false
        explication: "STP ne chiffre rien, son rôle est uniquement de prévenir les boucles de couche 2 dans une topologie redondante."
      - texte: "Attribuer des adresses IP aux switches du réseau"
        correcte: false
        explication: "L'attribution d'adresses IP est le rôle de DHCP ou d'une configuration statique, sans rapport avec le rôle de STP."
  - question: "Que se passerait-il dans un réseau commuté avec des liens redondants si STP (ou un équivalent) était désactivé ?"
    type: "unique"
    reponses:
      - texte: "Une boucle de commutation pourrait se former, provoquant une tempête de broadcast qui saturerait le réseau"
        correcte: true
        explication: "Sans mécanisme anti-boucle, une trame de broadcast peut circuler indéfiniment entre des liens redondants, se multipliant jusqu'à saturer la bande passante et planter les switches."
      - texte: "Le réseau fonctionnerait exactement de la même façon, sans aucun risque"
        correcte: false
        explication: "C'est l'inverse : la présence de liens redondants sans anti-boucle est justement le scénario à risque que STP est conçu pour éviter."
      - texte: "Les adresses IP des hôtes changeraient automatiquement"
        correcte: false
        explication: "STP opère en couche 2 (commutation), sans rapport avec l'attribution des adresses IP en couche 3."
      - texte: "Le chiffrement du trafic serait désactivé"
        correcte: false
        explication: "STP ne gère aucun chiffrement ; son absence n'a donc aucun effet sur ce plan, le risque concerne les boucles de couche 2."
  - question: "Quels sont les principaux états d'un port dans le Spanning Tree classique (802.1D), dans l'ordre de convergence normal ?"
    type: "unique"
    reponses:
      - texte: "Blocage, écoute, apprentissage, transmission"
        correcte: true
        explication: "Un port STP passe par blocage (blocking), écoute (listening), apprentissage (learning), puis transmission (forwarding) avant de transmettre normalement le trafic."
      - texte: "Transmission, blocage, écoute, apprentissage"
        correcte: false
        explication: "L'ordre correct commence par blocage, pas par transmission, qui est au contraire le dernier état atteint."
      - texte: "Apprentissage, transmission, blocage, écoute"
        correcte: false
        explication: "Cet ordre ne correspond pas à la séquence de convergence standard de STP, qui commence par le blocage."
      - texte: "Écoute, blocage, transmission, apprentissage"
        correcte: false
        explication: "L'écoute intervient après le blocage, pas avant, et l'apprentissage précède la transmission, pas l'inverse."
  - question: "Quelle est la principale amélioration apportée par RSTP (802.1w) par rapport à STP (802.1D) classique ?"
    type: "unique"
    reponses:
      - texte: "Une convergence beaucoup plus rapide après un changement de topologie"
        correcte: true
        explication: "RSTP réduit drastiquement le temps de convergence (de l'ordre de la seconde au lieu de dizaines de secondes) grâce à de nouveaux états de port et mécanismes de transition rapide."
      - texte: "La suppression complète du besoin d'élection d'un pont racine"
        correcte: false
        explication: "RSTP conserve le principe d'élection d'un pont racine, hérité de STP ; ce n'est pas ce qui change entre les deux versions."
      - texte: "Le chiffrement natif de tout le trafic commuté"
        correcte: false
        explication: "RSTP ne chiffre rien, comme STP ; son amélioration porte uniquement sur la rapidité de convergence."
      - texte: "La suppression totale du risque de boucle de commutation, rendant tout blocage de port inutile"
        correcte: false
        explication: "RSTP bloque toujours des ports redondants pour éviter les boucles, comme STP ; il ne supprime pas ce principe, il accélère seulement la convergence."
  - question: "Quelle est la différence essentielle entre une route statique et une route apprise dynamiquement (par un protocole de routage) ?"
    type: "unique"
    reponses:
      - texte: "Une route statique est configurée manuellement et ne s'adapte pas automatiquement à un changement de topologie, contrairement à une route dynamique"
        correcte: true
        explication: "Une route statique reste fixe tant qu'un administrateur ne la modifie pas, alors qu'un protocole de routage dynamique (OSPF, EIGRP...) recalcule automatiquement les routes en cas de changement du réseau."
      - texte: "Une route statique change automatiquement toutes les 30 secondes"
        correcte: false
        explication: "C'est l'inverse : une route statique est fixe par définition, elle ne change pas automatiquement, contrairement à une route dynamique qui se met à jour."
      - texte: "Une route dynamique ne peut jamais être utilisée en complément d'une route statique"
        correcte: false
        explication: "Il est courant de combiner routes statiques (par exemple une route par défaut) et routes dynamiques sur un même routeur."
      - texte: "Il n'existe aucune différence pratique entre les deux approches"
        correcte: false
        explication: "La capacité d'adaptation automatique à un changement de topologie est une différence pratique majeure entre route statique et route dynamique."
  - question: "Que désigne une route par défaut (default route) configurée sur un routeur ?"
    type: "unique"
    reponses:
      - texte: "Une route utilisée quand aucune autre entrée plus spécifique de la table de routage ne correspond à la destination"
        correcte: true
        explication: "La route par défaut (souvent 0.0.0.0/0) sert de solution de repli, typiquement pour envoyer tout le trafic non reconnu vers la sortie Internet."
      - texte: "La première route ajoutée manuellement à la table de routage"
        correcte: false
        explication: "L'ordre d'ajout des routes n'a pas de rapport avec la définition de la route par défaut, qui est identifiée par son préfixe le moins spécifique (0.0.0.0/0)."
      - texte: "Une route qui ne peut jamais être remplacée par une route plus spécifique"
        correcte: false
        explication: "C'est l'inverse : une route plus spécifique est toujours préférée à la route par défaut si elle correspond mieux à la destination (principe du plus long préfixe correspondant)."
      - texte: "Une route uniquement utilisée pour le trafic interne au réseau local"
        correcte: false
        explication: "La route par défaut sert typiquement à acheminer le trafic externe (vers Internet par exemple), pas spécifiquement le trafic interne au LAN."
  - question: "Dans une table de routage, si plusieurs routes correspondent à une même adresse de destination, laquelle le routeur choisit-il ?"
    type: "unique"
    reponses:
      - texte: "La route dont le préfixe (masque) est le plus long, c'est-à-dire la plus spécifique"
        correcte: true
        explication: "Le principe du plus long préfixe correspondant (longest prefix match) fait toujours préférer la route la plus spécifique disponible, quelle que soit sa source (statique ou dynamique)."
      - texte: "La route ajoutée en dernier dans la configuration, peu importe sa spécificité"
        correcte: false
        explication: "L'ordre d'ajout des routes n'entre pas en compte ; c'est la spécificité du préfixe qui détermine la route choisie."
      - texte: "Toujours la route par défaut, si elle existe"
        correcte: false
        explication: "La route par défaut est justement la moins spécifique possible ; elle n'est utilisée qu'en dernier recours, quand aucune route plus spécifique ne correspond."
      - texte: "La route ayant la plus petite adresse IP de tronçon suivant (next hop)"
        correcte: false
        explication: "La valeur numérique de l'adresse du tronçon suivant n'entre pas en jeu dans le choix ; seule la spécificité du préfixe compte pour ce choix."
  - question: "Qu'est-ce que la distance administrative (administrative distance) sur un routeur Cisco ?"
    type: "unique"
    reponses:
      - texte: "Une valeur de fiabilité utilisée pour départager plusieurs sources de routage différentes vers la même destination"
        correcte: true
        explication: "Quand plusieurs sources (statique, OSPF, EIGRP...) proposent une route vers la même destination avec la même spécificité, le routeur retient celle dont la distance administrative est la plus basse (la plus fiable par convention)."
      - texte: "La distance physique en kilomètres entre deux routeurs"
        correcte: false
        explication: "La distance administrative est une valeur de confiance abstraite propre à Cisco IOS, sans rapport avec une distance géographique réelle."
      - texte: "Le nombre de sauts (hops) entre la source et la destination"
        correcte: false
        explication: "Le nombre de sauts est une métrique utilisée par certains protocoles comme RIP, distincte de la distance administrative qui compare des sources de routage entre elles."
      - texte: "Le temps de propagation d'un paquet sur le lien"
        correcte: false
        explication: "Ce temps correspond à la latence, une notion différente de la distance administrative qui est une valeur fixe de confiance par protocole."
  - question: "Par défaut sur Cisco IOS, quelle distance administrative est la plus basse (donc la plus préférée) entre une route statique et une route apprise par OSPF ?"
    type: "unique"
    reponses:
      - texte: "La route statique (distance administrative de 1, contre 110 pour OSPF)"
        correcte: true
        explication: "Une route statique a par défaut une distance administrative de 1 (très fiable), contre 110 pour OSPF ; en cas d'égalité de spécificité, la route statique l'emporte par défaut."
      - texte: "La route OSPF, toujours préférée à n'importe quelle route statique"
        correcte: false
        explication: "C'est l'inverse par défaut : une route statique (distance 1) est préférée à une route OSPF (distance 110), sauf configuration explicite contraire (route statique flottante)."
      - texte: "Les deux ont exactement la même distance administrative par défaut"
        correcte: false
        explication: "Les distances administratives par défaut diffèrent nettement : 1 pour une route statique, 110 pour OSPF."
      - texte: "La distance administrative ne s'applique pas aux routes statiques"
        correcte: false
        explication: "Les routes statiques ont bien une distance administrative par défaut (1), comme toute autre source de routage."
  - question: "Quel est le rôle du routeur désigné (DR) dans OSPF sur un réseau multi-accès comme Ethernet ?"
    type: "unique"
    reponses:
      - texte: "Réduire le nombre d'adjacences OSPF nécessaires en centralisant les échanges d'information de routage sur ce segment"
        correcte: true
        explication: "Sur un réseau multi-accès, chaque routeur forme une adjacence complète avec le DR (et le BDR) plutôt qu'avec tous ses voisins, réduisant significativement le trafic d'échange de routes."
      - texte: "Chiffrer les échanges OSPF entre les routeurs du segment"
        correcte: false
        explication: "Le DR ne chiffre rien ; son rôle est de centraliser les échanges d'information de routage, pas la sécurité cryptographique des échanges."
      - texte: "Attribuer des adresses IP aux autres routeurs du segment"
        correcte: false
        explication: "L'attribution d'adresses IP n'est pas une fonction d'OSPF ni du rôle de DR ; c'est le rôle de DHCP le cas échéant."
      - texte: "Remplacer le besoin d'un routeur de secours en cas de panne"
        correcte: false
        explication: "C'est justement le rôle du BDR (routeur désigné de secours) d'assurer la continuité si le DR tombe en panne, pas l'inverse."
  - question: "Que se passe-t-il si deux routeurs OSPF voisins ont des zones (areas) OSPF différentes configurées sur l'interface qui les relie ?"
    type: "unique"
    reponses:
      - texte: "L'adjacence OSPF ne se forme pas, les routeurs restent bloqués dans un état de voisinage incomplet"
        correcte: true
        explication: "OSPF exige que les paramètres de zone correspondent sur une même liaison ; une incohérence de zone (comme d'autres paramètres tels que la zone, le masque ou les timers hello/dead) empêche la formation normale de l'adjacence."
      - texte: "Les routeurs forment quand même une adjacence normale, sans aucun problème"
        correcte: false
        explication: "Une incohérence de zone entre deux voisins directs empêche justement la formation correcte de l'adjacence OSPF, ce n'est pas sans conséquence."
      - texte: "Le trafic est automatiquement routé via un protocole de secours comme RIP"
        correcte: false
        explication: "OSPF ne bascule pas automatiquement vers un autre protocole de routage en cas d'échec d'adjacence ; il faut corriger la configuration."
      - texte: "Cela n'affecte que le trafic IPv6, jamais IPv4"
        correcte: false
        explication: "Ce problème d'incohérence de zone touche OSPF de la même façon en IPv4 (OSPFv2) qu'en IPv6 (OSPFv3), ce n'est pas spécifique à une version d'IP."
  - question: "Quels sont les timers par défaut (hello et dead) d'OSPF sur un réseau Ethernet (broadcast) ?"
    type: "unique"
    reponses:
      - texte: "10 secondes pour le hello, 40 secondes pour le dead"
        correcte: true
        explication: "Sur un segment de type broadcast comme Ethernet, OSPF envoie un paquet hello toutes les 10 secondes par défaut, et considère un voisin perdu après 4 hello manqués, soit 40 secondes (dead timer)."
      - texte: "5 secondes pour le hello, 15 secondes pour le dead"
        correcte: false
        explication: "Ces valeurs ne correspondent pas aux timers par défaut d'OSPF sur un réseau broadcast, qui sont respectivement 10 et 40 secondes."
      - texte: "30 secondes pour le hello, 180 secondes pour le dead"
        correcte: false
        explication: "Ces valeurs correspondent davantage aux timers historiques de RIP, pas aux timers par défaut d'OSPF sur un segment broadcast."
      - texte: "1 seconde pour le hello, 3 secondes pour le dead"
        correcte: false
        explication: "Ces valeurs sont trop agressives pour les timers OSPF par défaut sur Ethernet, qui sont de 10 et 40 secondes."
  - question: "Qu'est-ce qu'une liste de contrôle d'accès standard (ACL standard) sur un routeur Cisco peut filtrer ?"
    type: "unique"
    reponses:
      - texte: "Uniquement en fonction de l'adresse IP source du paquet"
        correcte: true
        explication: "Une ACL standard (numérotée 1 à 99, ou 1300 à 1999 en version étendue numérotée) ne peut filtrer que sur l'adresse IP source, contrairement à une ACL étendue bien plus riche en critères."
      - texte: "L'adresse IP source, l'adresse IP destination et le port"
        correcte: false
        explication: "Cette richesse de critères correspond à une ACL étendue, pas à une ACL standard limitée à l'adresse source uniquement."
      - texte: "Uniquement l'adresse MAC de destination"
        correcte: false
        explication: "Le filtrage par adresse MAC n'est pas la fonction des ACL IP standards, qui filtrent sur l'adresse IP source."
      - texte: "Le contenu applicatif chiffré d'un paquet HTTPS"
        correcte: false
        explication: "Une ACL standard n'inspecte pas le contenu applicatif, encore moins un contenu chiffré ; elle se limite à l'en-tête IP source."
  - question: "Quelle est la principale différence entre une ACL standard et une ACL étendue sur Cisco IOS ?"
    type: "unique"
    reponses:
      - texte: "L'ACL étendue peut filtrer sur l'adresse source, l'adresse destination, le protocole et le port, alors que l'ACL standard ne filtre que sur l'adresse source"
        correcte: true
        explication: "L'ACL étendue offre une granularité bien plus fine (source, destination, protocole, port), ce qui la rend adaptée à des règles précises, contrairement à l'ACL standard plus limitée."
      - texte: "L'ACL standard est plus récente que l'ACL étendue"
        correcte: false
        explication: "C'est l'inverse historiquement ; dans tous les cas, la distinction pertinente porte sur les critères de filtrage disponibles, pas sur l'ancienneté."
      - texte: "L'ACL étendue ne peut être appliquée qu'en sortie (out), jamais en entrée (in)"
        correcte: false
        explication: "Une ACL étendue, comme une ACL standard, peut être appliquée en entrée ou en sortie d'une interface selon le besoin."
      - texte: "Il n'existe aucune différence fonctionnelle entre les deux types d'ACL"
        correcte: false
        explication: "Leur richesse de critères de filtrage diffère nettement, ce n'est pas une distinction purement nominale."
  - question: "Pourquoi place-t-on généralement une ACL étendue le plus près possible de la source du trafic à filtrer, et une ACL standard le plus près possible de la destination ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'une ACL étendue peut cibler précisément le trafic indésirable sans bloquer par erreur d'autres flux légitimes provenant de la même source, alors qu'une ACL standard, plus large, risque de bloquer tout le trafic d'une source si elle est appliquée trop tôt"
        correcte: true
        explication: "Une ACL standard ne filtrant que sur l'adresse source bloquerait tout le trafic de cette source si elle était appliquée près de l'origine ; il est donc préférable de l'appliquer près de la destination pour ne bloquer que le trafic vers cette destination précise."
      - texte: "Parce que les ACL étendues ne peuvent techniquement pas être configurées près de la destination"
        correcte: false
        explication: "Une ACL étendue peut techniquement être placée n'importe où, mais la placer près de la source évite de gaspiller de la bande passante en transportant du trafic qui sera de toute façon rejeté plus loin."
      - texte: "Parce que cette règle n'a aucune justification technique, c'est purement une convention arbitraire"
        correcte: false
        explication: "Cette convention repose sur une vraie justification technique liée à la précision du filtrage et à l'efficacité réseau, pas sur un choix arbitraire."
      - texte: "Parce qu'une ACL standard ne peut être configurée que sur la dernière interface du réseau"
        correcte: false
        explication: "Une ACL standard peut être appliquée sur n'importe quelle interface ; le principe de bonne pratique conseille simplement de la placer près de la destination pour plus de précision."
  - question: "Que représente un masque générique (wildcard mask) dans une ACL Cisco, par exemple 0.0.0.255 ?"
    type: "unique"
    reponses:
      - texte: "Il indique quels bits de l'adresse doivent correspondre exactement (0) et lesquels sont ignorés (1) lors de la comparaison"
        correcte: true
        explication: "Un wildcard mask fonctionne à l'inverse d'un masque de sous-réseau classique : un bit à 0 signifie correspondance exacte exigée, un bit à 1 signifie que ce bit est ignoré dans la comparaison."
      - texte: "Il fonctionne exactement comme un masque de sous-réseau classique, sans aucune différence"
        correcte: false
        explication: "Le wildcard mask inverse la logique du masque de sous-réseau classique (0 pour exiger une correspondance, 1 pour l'ignorer), ce n'est pas la même interprétation."
      - texte: "Il chiffre l'adresse IP contenue dans la règle d'ACL"
        correcte: false
        explication: "Un wildcard mask ne chiffre rien, il définit simplement quelle portion de l'adresse doit correspondre lors du filtrage."
      - texte: "Il ne s'applique qu'aux adresses de destination, jamais aux adresses source"
        correcte: false
        explication: "Un wildcard mask peut s'appliquer aussi bien à l'adresse source qu'à l'adresse destination dans une règle d'ACL."
  - question: "Quel wildcard mask correspond exactement au sous-réseau 192.168.10.0/24 dans une ACL Cisco ?"
    type: "unique"
    reponses:
      - texte: "0.0.0.255"
        correcte: true
        explication: "Pour un /24, les 24 premiers bits doivent correspondre exactement (0) et les 8 derniers bits sont ignorés (255 en wildcard), soit 0.0.0.255."
      - texte: "255.255.255.0"
        correcte: false
        explication: "255.255.255.0 est le masque de sous-réseau classique pour un /24, pas le wildcard mask correspondant, qui est son complément 0.0.0.255."
      - texte: "0.0.0.0"
        correcte: false
        explication: "0.0.0.0 comme wildcard exigerait une correspondance exacte sur les 32 bits, ce qui correspondrait à un hôte unique (/32), pas à tout un sous-réseau /24."
      - texte: "255.255.0.0"
        correcte: false
        explication: "Cette valeur correspondrait à un masque classique /16, pas au wildcard mask d'un /24."
  - question: "Où doit-on placer une ACL implicite 'deny any' en fin de liste sur Cisco IOS ?"
    type: "unique"
    reponses:
      - texte: "Elle n'a pas besoin d'être écrite explicitement : Cisco IOS l'ajoute automatiquement à la fin de toute ACL"
        correcte: true
        explication: "Toute ACL Cisco se termine par un deny any implicite non visible dans la configuration, qui bloque tout trafic ne correspondant à aucune règle explicite précédente."
      - texte: "Elle doit obligatoirement être placée en première ligne de l'ACL"
        correcte: false
        explication: "Placer un deny any en première ligne bloquerait immédiatement tout le trafic, empêchant les règles suivantes de jamais s'appliquer ; le deny any implicite est toujours en toute fin, pas en tête."
      - texte: "Elle ne s'applique qu'aux ACL étendues, jamais aux ACL standards"
        correcte: false
        explication: "Le deny any implicite final s'applique aussi bien aux ACL standards qu'étendues, sans distinction."
      - texte: "Elle doit être désactivée manuellement pour que l'ACL fonctionne correctement"
        correcte: false
        explication: "Le deny any implicite fait partie intégrante du fonctionnement normal d'une ACL Cisco ; il ne se désactive pas et n'a pas besoin de l'être."
  - question: "Quelle est la différence entre NAT statique et NAT dynamique ?"
    type: "unique"
    reponses:
      - texte: "Le NAT statique associe une adresse privée à une adresse publique fixe et permanente, le NAT dynamique pioche dans un pool d'adresses publiques disponibles"
        correcte: true
        explication: "Le NAT statique crée une correspondance fixe un-à-un (utile pour un serveur interne accessible depuis Internet), tandis que le NAT dynamique attribue une adresse publique disponible dans un pool, de façon temporaire."
      - texte: "Le NAT dynamique nécessite obligatoirement un pare-feu, contrairement au NAT statique"
        correcte: false
        explication: "Les deux types de NAT peuvent fonctionner sur un routeur sans pare-feu dédié ; la distinction porte sur la fixité de la correspondance d'adresses, pas sur la présence d'un pare-feu."
      - texte: "Le NAT statique ne fonctionne qu'avec IPv6, le NAT dynamique qu'avec IPv4"
        correcte: false
        explication: "Le NAT, statique ou dynamique, est un mécanisme historiquement associé à IPv4 ; cette distinction de version d'IP n'est pas ce qui sépare les deux types."
      - texte: "Il n'existe aucune différence pratique entre les deux"
        correcte: false
        explication: "La fixité (ou non) de la correspondance d'adresses est une différence pratique essentielle entre NAT statique et NAT dynamique."
  - question: "Qu'est-ce que le PAT (Port Address Translation), aussi appelé NAT overload ?"
    type: "unique"
    reponses:
      - texte: "Une forme de NAT qui permet à plusieurs adresses privées de partager une seule adresse IP publique, en les distinguant par leur numéro de port"
        correcte: true
        explication: "PAT (souvent utilisé sur les box Internet grand public) traduit de nombreuses adresses privées vers une unique adresse publique, en attribuant un port source différent à chaque session pour les distinguer."
      - texte: "Une méthode qui n'autorise qu'une seule machine à accéder à Internet à la fois"
        correcte: false
        explication: "C'est justement l'inverse : PAT permet à de nombreuses machines d'accéder simultanément à Internet en partageant une seule adresse publique."
      - texte: "Un protocole de chiffrement du trafic sortant vers Internet"
        correcte: false
        explication: "PAT ne chiffre rien, il s'agit uniquement d'une technique de traduction et de partage d'adresses IP."
      - texte: "Une technique réservée exclusivement aux gros opérateurs télécoms, jamais utilisée en petite entreprise"
        correcte: false
        explication: "PAT est au contraire extrêmement répandu, y compris sur les box Internet des particuliers et petites entreprises, pas réservé aux grands opérateurs."
  - question: "Sur un routeur Cisco, quelle direction de NAT désigne la commande ip nat inside par rapport à ip nat outside ?"
    type: "unique"
    reponses:
      - texte: "ip nat inside marque l'interface côté réseau privé (interne), ip nat outside marque l'interface côté réseau public (Internet)"
        correcte: true
        explication: "Ces commandes indiquent au routeur quelle interface fait face au réseau interne à traduire et laquelle fait face à l'extérieur, condition nécessaire au bon fonctionnement du NAT/PAT configuré."
      - texte: "Les deux commandes sont interchangeables, sans effet sur le fonctionnement du NAT"
        correcte: false
        explication: "L'orientation inside/outside est essentielle : inverser ces commandes casserait la logique de traduction NAT configurée."
      - texte: "ip nat inside active le chiffrement du trafic sortant"
        correcte: false
        explication: "Ces commandes ne concernent que la direction du NAT (interne ou externe), pas le chiffrement, qui relève d'un mécanisme distinct (VPN, TLS...)."
      - texte: "ip nat outside désigne l'interface qui distribue les adresses IP privées via DHCP"
        correcte: false
        explication: "La distribution DHCP est une fonction séparée du NAT ; ip nat outside désigne uniquement l'interface tournée vers le réseau public."
  - question: "Qu'est-ce que le DHCP relay (ou ip helper-address sur Cisco) permet de faire ?"
    type: "unique"
    reponses:
      - texte: "Transmettre les requêtes DHCP d'un client vers un serveur DHCP situé sur un autre sous-réseau, via le routeur"
        correcte: true
        explication: "Par défaut, les requêtes DHCP (diffusées en broadcast) ne traversent pas les routeurs ; ip helper-address configure le routeur pour relayer ces requêtes vers un serveur DHCP distant, en dehors du sous-réseau local du client."
      - texte: "Chiffrer les échanges DHCP entre le client et le serveur"
        correcte: false
        explication: "Le DHCP relay ne chiffre rien, il se contente de retransmettre les requêtes vers un serveur distant."
      - texte: "Remplacer complètement le besoin d'un serveur DHCP"
        correcte: false
        explication: "Le DHCP relay a justement besoin d'un serveur DHCP existant ailleurs sur le réseau ; il ne le remplace pas, il permet seulement de l'atteindre depuis un autre sous-réseau."
      - texte: "Empêcher tout hôte de recevoir une adresse IP par DHCP"
        correcte: false
        explication: "C'est l'inverse : le DHCP relay a pour but de permettre à des hôtes distants de recevoir malgré tout une adresse IP via DHCP."
  - question: "À quoi sert la sécurité de port (port security) sur un switch Cisco ?"
    type: "unique"
    reponses:
      - texte: "À limiter ou contrôler les adresses MAC autorisées à communiquer sur un port de switch donné"
        correcte: true
        explication: "Port security peut limiter le nombre d'adresses MAC apprises sur un port, ou restreindre l'accès à des adresses MAC spécifiques, une mesure de sécurité de base contre les branchements non autorisés."
      - texte: "À chiffrer tout le trafic circulant sur le port concerné"
        correcte: false
        explication: "Port security ne chiffre rien ; son rôle est de contrôler quelles adresses MAC peuvent utiliser le port, pas de sécuriser le contenu du trafic."
      - texte: "À attribuer automatiquement une adresse IP à l'équipement connecté sur ce port"
        correcte: false
        explication: "L'attribution d'adresse IP relève de DHCP, sans rapport avec la sécurité de port qui contrôle les adresses MAC autorisées."
      - texte: "À convertir automatiquement le port en trunk"
        correcte: false
        explication: "Port security n'a aucun rapport avec le mode trunk ou access d'un port ; c'est une fonction de contrôle d'accès par adresse MAC."
  - question: "Sur Cisco IOS, quelle action de violation de sécurité de port (port security) bloque le trafic non autorisé mais laisse le port physiquement actif, sans générer d'incrément de compteur de violation ?"
    type: "unique"
    reponses:
      - texte: "Restrict"
        correcte: true
        explication: "Le mode restrict bloque le trafic des adresses MAC non autorisées tout en gardant le port actif, et journalise/incrémente un compteur de violations (contrairement à protect qui ne compte pas les violations, et shutdown qui désactive le port)."
      - texte: "Shutdown"
        correcte: false
        explication: "Le mode shutdown désactive complètement le port en cas de violation, ce qui nécessite une intervention manuelle pour le réactiver, contrairement à restrict qui garde le port actif."
      - texte: "Protect"
        correcte: false
        explication: "Le mode protect bloque aussi le trafic non autorisé et garde le port actif, mais sans journaliser ni compter les violations, contrairement à restrict qui les compte."
      - texte: "Disable"
        correcte: false
        explication: "Disable n'est pas un des trois modes de violation standards de port security sur Cisco IOS (qui sont protect, restrict et shutdown)."
  - question: "Qu'est-ce qu'un EtherChannel sur des switches Cisco ?"
    type: "unique"
    reponses:
      - texte: "Le regroupement logique de plusieurs liens physiques entre deux équipements en un seul lien logique, pour la redondance et l'agrégation de bande passante"
        correcte: true
        explication: "EtherChannel combine par exemple 2 ou 4 liens physiques en un lien logique unique, ce qui augmente la bande passante disponible et assure une continuité si un des liens tombe, tout en évitant que STP ne bloque les liens redondants."
      - texte: "Un protocole de chiffrement des liens entre deux switches"
        correcte: false
        explication: "EtherChannel n'a pas de fonction de chiffrement ; c'est une technique d'agrégation de liens, pas de sécurité cryptographique."
      - texte: "Une méthode pour attribuer des adresses IP statiques aux switches"
        correcte: false
        explication: "L'attribution d'adresses IP n'a aucun rapport avec le rôle d'EtherChannel, qui concerne l'agrégation de liens physiques."
      - texte: "Un mécanisme qui remplace complètement le besoin de STP sur tout le réseau"
        correcte: false
        explication: "EtherChannel réduit le nombre de liens que STP doit considérer (en les regroupant en un seul lien logique), mais STP continue de fonctionner normalement ailleurs sur le réseau."
      
  - question: "Quel est le rôle général d'un protocole FHRP (First Hop Redundancy Protocol), comme HSRP ou VRRP ?"
    type: "unique"
    reponses:
      - texte: "Fournir une adresse de passerelle virtuelle partagée par plusieurs routeurs, pour assurer la continuité si le routeur actif tombe en panne"
        correcte: true
        explication: "Un FHRP comme HSRP (propriétaire Cisco) ou VRRP (standard) permet à plusieurs routeurs de partager une adresse IP virtuelle de passerelle, avec bascule automatique vers un routeur de secours en cas de panne du routeur actif."
      - texte: "Répartir le trafic de façon égale entre tous les postes clients du réseau"
        correcte: false
        explication: "Un FHRP concerne la redondance de la passerelle par défaut pour les clients, pas la répartition du trafic entre postes clients."
      - texte: "Chiffrer les communications entre les routeurs et les postes clients"
        correcte: false
        explication: "Un FHRP ne chiffre rien ; son rôle est d'assurer la continuité de service de la passerelle par défaut, pas la sécurité cryptographique des échanges."
      - texte: "Attribuer dynamiquement des adresses IP aux postes clients du réseau"
        correcte: false
        explication: "L'attribution d'adresses IP est le rôle de DHCP, sans rapport avec la fonction de redondance de passerelle assurée par un FHRP."
  - question: "Quelle est la principale différence entre HSRP et VRRP ?"
    type: "unique"
    reponses:
      - texte: "HSRP est un protocole propriétaire Cisco, VRRP est un standard ouvert défini par l'IETF, utilisable entre équipements de plusieurs constructeurs"
        correcte: true
        explication: "HSRP (Hot Standby Router Protocol) est spécifique à Cisco, tandis que VRRP (Virtual Router Redundancy Protocol) est un standard interopérable entre équipements de différents fabricants."
      - texte: "VRRP ne fonctionne qu'avec IPv6, HSRP uniquement avec IPv4"
        correcte: false
        explication: "Les deux protocoles ont des variantes ou usages compatibles avec IPv4 comme IPv6 selon les versions ; ce n'est pas la distinction principale entre eux."
      - texte: "HSRP nécessite obligatoirement un serveur DHCP, pas VRRP"
        correcte: false
        explication: "Ni HSRP ni VRRP ne dépendent d'un serveur DHCP ; ce sont des protocoles de redondance de passerelle, indépendants de l'attribution d'adresses aux clients."
      - texte: "Il n'existe aucune différence entre les deux, ce sont deux noms pour le même protocole"
        correcte: false
        explication: "Leur origine (propriétaire Cisco contre standard ouvert) constitue une différence réelle et significative en pratique."
  - question: "Dans le contexte IPv6, à quoi correspond une adresse de type link-local (commençant par fe80::) ?"
    type: "unique"
    reponses:
      - texte: "Une adresse valable uniquement sur le lien local, non routable au-delà, automatiquement générée sur chaque interface"
        correcte: true
        explication: "Chaque interface IPv6 génère automatiquement une adresse link-local (fe80::/10), utilisée notamment pour la découverte de voisins et certains protocoles de routage, mais jamais routée au-delà du lien local."
      - texte: "Une adresse publique routable directement sur Internet"
        correcte: false
        explication: "C'est l'inverse : une adresse link-local n'est jamais routée au-delà du lien local, contrairement à une adresse globale unicast qui peut être routée sur Internet."
      - texte: "L'équivalent IPv6 d'une adresse de broadcast IPv4"
        correcte: false
        explication: "IPv6 ne possède pas de broadcast à proprement parler ; le rôle équivalent est assuré par le multicast, pas par les adresses link-local."
      - texte: "Une adresse réservée uniquement à la configuration manuelle, jamais générée automatiquement"
        correcte: false
        explication: "C'est l'inverse : une adresse link-local est générée automatiquement dès qu'IPv6 est activé sur une interface, sans configuration manuelle nécessaire."
  - question: "Quel mécanisme IPv6 permet à un hôte de configurer automatiquement sa propre adresse IPv6 globale sans serveur DHCP, à partir des informations annoncées par le routeur ?"
    type: "unique"
    reponses:
      - texte: "SLAAC (Stateless Address Autoconfiguration)"
        correcte: true
        explication: "SLAAC permet à un hôte de construire son adresse IPv6 à partir du préfixe annoncé par le routeur (via Router Advertisement) et de son propre identifiant d'interface, sans nécessiter de serveur DHCP."
      - texte: "NAT64"
        correcte: false
        explication: "NAT64 permet la traduction entre réseaux IPv6 et IPv4, sans rapport avec l'auto-configuration d'adresse d'un hôte."
      - texte: "ARP"
        correcte: false
        explication: "ARP est un protocole IPv4 pour résoudre une adresse IP en adresse MAC ; IPv6 utilise NDP (Neighbor Discovery Protocol) pour un rôle équivalent, mais ce n'est pas ce qui permet l'auto-configuration d'adresse globale."
      - texte: "PAT"
        correcte: false
        explication: "PAT est une technique de traduction d'adresses IPv4, sans rapport avec l'auto-configuration d'adresse IPv6."
  - question: "Qu'est-ce que le protocole NDP (Neighbor Discovery Protocol) en IPv6 ?"
    type: "unique"
    reponses:
      - texte: "Un ensemble de mécanismes qui remplace notamment ARP pour découvrir les adresses MAC des voisins et détecter les routeurs sur le lien"
        correcte: true
        explication: "NDP assure en IPv6 des fonctions équivalentes à ARP (résolution d'adresse), en plus de la découverte de routeurs et de l'auto-configuration, via des messages ICMPv6 spécifiques."
      - texte: "Un protocole de chiffrement des communications IPv6"
        correcte: false
        explication: "NDP ne chiffre rien ; c'est un protocole de découverte de voisinage et de routeurs, pas un mécanisme de sécurité cryptographique."
      - texte: "Un protocole utilisé uniquement pour la messagerie électronique"
        correcte: false
        explication: "NDP n'a aucun rapport avec la messagerie ; c'est un protocole réseau de couche basse pour la découverte de voisinage en IPv6."
      - texte: "L'équivalent IPv6 du protocole DHCP, sans aucun lien avec ARP"
        correcte: false
        explication: "NDP intègre des fonctions équivalentes à ARP (résolution d'adresse) et complète, plutôt que remplace entièrement, les mécanismes d'attribution d'adresse comme DHCPv6."
  - question: "Quel type de liaison WAN dédiée relie deux sites via une ligne louée point à point auprès d'un opérateur, sans partage avec d'autres clients ?"
    type: "unique"
    reponses:
      - texte: "Une ligne louée (leased line)"
        correcte: true
        explication: "Une ligne louée offre une bande passante dédiée et garantie entre deux points précis, contrairement à des technologies partagées comme le haut débit grand public."
      - texte: "Une connexion ADSL grand public"
        correcte: false
        explication: "L'ADSL grand public partage l'infrastructure de l'opérateur avec d'autres abonnés, contrairement à une ligne louée dédiée."
      - texte: "Le Wi-Fi public"
        correcte: false
        explication: "Le Wi-Fi public est un accès partagé et non dédié, sans rapport avec une liaison WAN point à point dédiée."
      - texte: "Le Bluetooth"
        correcte: false
        explication: "Bluetooth est une technologie de très courte portée pour réseaux personnels, sans rapport avec une liaison WAN entre deux sites distants."
  - question: "Quelle affirmation décrit correctement le rôle général de MPLS dans un réseau WAN d'opérateur ?"
    type: "unique"
    reponses:
      - texte: "Acheminer le trafic via des labels plutôt que par un examen complet de l'en-tête IP à chaque saut, pour accélérer et faciliter l'ingénierie de trafic"
        correcte: true
        explication: "MPLS (Multiprotocol Label Switching) insère un label qui guide l'acheminement du trafic à travers le réseau de l'opérateur, permettant notamment de la qualité de service et une commutation plus efficace que le seul routage IP classique."
      - texte: "MPLS est un protocole exclusivement utilisé pour le Wi-Fi domestique"
        correcte: false
        explication: "MPLS est une technologie d'infrastructure WAN d'opérateur, sans rapport avec le Wi-Fi domestique grand public."
      - texte: "MPLS remplace complètement le besoin d'adresses IP dans le réseau"
        correcte: false
        explication: "MPLS fonctionne en complément d'IP, pas à sa place ; les adresses IP restent utilisées aux extrémités du réseau."
      - texte: "MPLS est un protocole de chiffrement de bout en bout des données"
        correcte: false
        explication: "MPLS n'est pas un mécanisme de chiffrement ; il concerne l'acheminement efficace du trafic dans le réseau de l'opérateur."
  - question: "Quel est l'objectif principal du protocole Syslog dans un réseau ?"
    type: "unique"
    reponses:
      - texte: "Centraliser la collecte des journaux d'événements générés par les équipements réseau vers un serveur dédié"
        correcte: true
        explication: "Syslog permet à des équipements (routeurs, switches, serveurs) d'envoyer leurs messages de journalisation vers un serveur central, facilitant la supervision et l'analyse a posteriori."
      - texte: "Chiffrer automatiquement toutes les communications réseau"
        correcte: false
        explication: "Syslog ne chiffre rien par défaut ; son rôle est la centralisation de journaux d'événements, pas la sécurité cryptographique du trafic."
      - texte: "Attribuer des adresses IP dynamiques aux équipements réseau"
        correcte: false
        explication: "C'est le rôle de DHCP, sans rapport avec la fonction de journalisation centralisée de Syslog."
      - texte: "Remplacer le besoin de sauvegarder la configuration des équipements"
        correcte: false
        explication: "Syslog journalise des événements, il ne sauvegarde pas la configuration d'un équipement ; ce sont deux fonctions distinctes."
  - question: "À quoi sert SNMP dans la supervision d'un réseau ?"
    type: "unique"
    reponses:
      - texte: "À interroger et superviser à distance l'état et les statistiques des équipements réseau (charge CPU, trafic, interfaces...)"
        correcte: true
        explication: "SNMP (Simple Network Management Protocol) permet à un serveur de supervision d'interroger des équipements réseau ou de recevoir des alertes (trap) sur leur état de fonctionnement."
      - texte: "À chiffrer les communications entre deux routeurs"
        correcte: false
        explication: "SNMP n'est pas un protocole de chiffrement de communication ; son rôle est la supervision et la collecte d'informations d'état des équipements."
      - texte: "À attribuer des adresses IP aux équipements du réseau"
        correcte: false
        explication: "L'attribution d'adresses IP est le rôle de DHCP, sans rapport avec la fonction de supervision assurée par SNMP."
      - texte: "À router le trafic entre plusieurs réseaux IP"
        correcte: false
        explication: "SNMP est un protocole de gestion et de supervision, il ne participe pas à la fonction de routage du trafic réseau."
  - question: "Que signifie l'acronyme AAA dans le contexte de la sécurité réseau (authentification, contrôle d'accès) ?"
    type: "unique"
    reponses:
      - texte: "Authentication, Authorization, Accounting"
        correcte: true
        explication: "AAA regroupe trois fonctions complémentaires : authentifier l'identité d'un utilisateur, autoriser certaines actions selon ses droits, et comptabiliser (journaliser) ce qu'il a fait."
      - texte: "Access, Availability, Auditing"
        correcte: false
        explication: "Ce développé n'est pas celui de l'acronyme AAA en sécurité réseau, qui désigne Authentication, Authorization, Accounting."
      - texte: "Advanced Authentication Algorithm"
        correcte: false
        explication: "Ce développé n'existe pas comme définition standard d'AAA ; l'acronyme correct regroupe Authentication, Authorization et Accounting."
      - texte: "Automatic Address Assignment"
        correcte: false
        explication: "Ce développé correspondrait davantage à une fonction de type DHCP, sans rapport avec la définition sécuritaire d'AAA."
  - question: "Quels protocoles sont couramment utilisés pour centraliser l'authentification AAA vers un serveur dédié (comme un contrôleur d'accès réseau) ?"
    type: "unique"
    reponses:
      - texte: "RADIUS et TACACS+"
        correcte: true
        explication: "RADIUS (standard ouvert) et TACACS+ (propriétaire Cisco, avec chiffrement plus complet) sont les deux protocoles les plus courants pour centraliser l'authentification, l'autorisation et la traçabilité (AAA)."
      - texte: "DHCP et DNS"
        correcte: false
        explication: "DHCP et DNS assurent respectivement l'attribution d'adresses IP et la résolution de noms, sans rapport avec la centralisation de l'authentification AAA."
      - texte: "HTTP et FTP"
        correcte: false
        explication: "HTTP et FTP sont des protocoles applicatifs de navigation et de transfert de fichiers, sans rapport avec la centralisation AAA."
      - texte: "STP et VTP"
        correcte: false
        explication: "STP et VTP concernent respectively la prévention des boucles de couche 2 et la synchronisation de VLAN entre switches, sans rapport avec l'authentification AAA."
  - question: "Quelle est la différence essentielle entre un port en mode access et un port en mode trunk sur un switch ?"
    type: "unique"
    reponses:
      - texte: "Un port access appartient à un seul VLAN et ne transmet pas de tag VLAN, un port trunk peut transporter le trafic de plusieurs VLAN avec des tags"
        correcte: true
        explication: "Un port access relie typiquement un poste utilisateur à un seul VLAN sans marquage, tandis qu'un port trunk relie généralement deux switches (ou un switch à un routeur) en transportant plusieurs VLAN identifiés par leurs tags 802.1Q."
      - texte: "Un port trunk ne peut relier qu'un seul poste utilisateur à la fois"
        correcte: false
        explication: "C'est l'inverse : le port trunk est justement conçu pour transporter le trafic de plusieurs VLAN, typiquement entre équipements réseau, pas pour un poste utilisateur unique."
      - texte: "Un port access transporte toujours plusieurs VLAN simultanément"
        correcte: false
        explication: "C'est l'inverse : un port access est associé à un seul VLAN, contrairement au port trunk qui peut en transporter plusieurs."
      - texte: "Il n'existe aucune différence de configuration entre les deux modes"
        correcte: false
        explication: "Les deux modes se configurent différemment (switchport mode access contre switchport mode trunk) et ont un comportement distinct vis-à-vis des VLAN."
  - question: "Quel est le rôle du protocole VTP (VLAN Trunking Protocol) sur des switches Cisco ?"
    type: "unique"
    reponses:
      - texte: "Synchroniser automatiquement la base de données des VLAN entre plusieurs switches reliés par des liens trunk"
        correcte: true
        explication: "VTP permet de propager la création, la suppression ou la modification de VLAN depuis un switch serveur vers des switches clients, évitant de configurer manuellement chaque VLAN sur chaque switch."
      - texte: "Chiffrer le trafic transitant sur les liens trunk"
        correcte: false
        explication: "VTP ne chiffre rien ; son rôle est la synchronisation de la configuration des VLAN entre switches, pas la sécurité du trafic."
      - texte: "Élire automatiquement le pont racine du réseau commuté"
        correcte: false
        explication: "L'élection du pont racine est une fonction de STP, pas de VTP, qui se concentre sur la synchronisation des VLAN."
      - texte: "Attribuer des adresses IP aux switches du réseau"
        correcte: false
        explication: "L'attribution d'adresses IP n'a aucun rapport avec la fonction de VTP, dédiée à la synchronisation des VLAN entre switches."
  - question: "Pourquoi la configuration erronée du mode VTP peut-elle être risquée sur un réseau de production ?"
    type: "unique"
    reponses:
      - texte: "Un switch configuré en mode serveur VTP avec un numéro de révision plus élevé peut écraser la base de VLAN de tout le domaine, supprimant potentiellement des VLAN existants"
        correcte: true
        explication: "VTP propage la configuration ayant le numéro de révision le plus élevé ; brancher par erreur un switch avec une configuration VTP plus récente (même vide ou erronée) peut supprimer les VLAN existants sur tout le domaine, un incident classique bien documenté."
      - texte: "VTP peut désactiver totalement l'accès à Internet de toute l'entreprise en quelques secondes"
        correcte: false
        explication: "VTP agit sur la synchronisation des VLAN entre switches, pas directement sur l'accès Internet, même si des conséquences indirectes sur la connectivité locale sont possibles en cas d'incident VLAN."
      - texte: "VTP n'a aucun risque connu, c'est un protocole sans effet de bord"
        correcte: false
        explication: "L'incident de VTP écrasant une base de VLAN existante est un cas bien connu et documenté, ce n'est pas un protocole sans risque en cas de mauvaise configuration."
      - texte: "VTP chiffre automatiquement les données, un mauvais réglage bloque tout chiffrement"
        correcte: false
        explication: "VTP ne gère aucun chiffrement, cette affirmation ne correspond pas à sa fonction réelle de synchronisation de VLAN."
  - question: "Quel protocole propriétaire Cisco négocie automatiquement le mode trunk ou access entre deux ports de switch reliés ?"
    type: "unique"
    reponses:
      - texte: "DTP (Dynamic Trunking Protocol)"
        correcte: true
        explication: "DTP négocie automatiquement si un lien doit devenir un trunk ou rester en access, selon les modes configurés sur chaque extrémité."
      - texte: "VTP"
        correcte: false
        explication: "VTP synchronise la base de VLAN entre switches, il ne négocie pas le mode trunk ou access d'un port."
      - texte: "STP"
        correcte: false
        explication: "STP prévient les boucles de commutation, sans rapport avec la négociation du mode trunk ou access."
      - texte: "CDP"
        correcte: false
        explication: "CDP découvre les équipements Cisco voisins directement connectés, sans rapport avec la négociation trunk/access."
  - question: "Pourquoi désactive-t-on souvent DTP (avec switchport nonegotiate) sur les ports trunk en production ?"
    type: "unique"
    reponses:
      - texte: "Pour éviter qu'un attaquant ne négocie un lien trunk depuis un simple port utilisateur, ce qui donnerait accès à tous les VLAN"
        correcte: true
        explication: "Un port en mode dynamic auto/desirable peut être amené à négocier un trunk avec un équipement connecté, y compris potentiellement malveillant ; désactiver la négociation et fixer explicitement le mode réduit ce risque de sécurité."
      - texte: "Parce que DTP ralentit fortement les performances du lien trunk"
        correcte: false
        explication: "DTP n'a pas d'impact significatif sur la performance en régime établi ; la préoccupation principale de sa désactivation est la sécurité, pas la vitesse."
      - texte: "Parce que DTP n'est compatible qu'avec les liens fibre, jamais le cuivre"
        correcte: false
        explication: "DTP fonctionne aussi bien sur liaison cuivre que fibre ; ce n'est pas une limitation de support physique."
      - texte: "Parce qu'un trunk ne peut fonctionner qu'avec DTP activé, il ne peut jamais être fixé manuellement"
        correcte: false
        explication: "Un trunk peut parfaitement être configuré de façon fixe et statique (switchport mode trunk avec nonegotiate), sans dépendre de DTP."
  - question: "Quels protocoles permettent de négocier et surveiller dynamiquement les membres d'un EtherChannel ?"
    type: "unique"
    reponses:
      - texte: "LACP (standard) et PAgP (propriétaire Cisco)"
        correcte: true
        explication: "LACP (IEEE 802.3ad, interopérable) et PAgP (propriétaire Cisco) permettent de négocier dynamiquement la formation d'un EtherChannel et de réagir automatiquement si un lien membre tombe."
      - texte: "OSPF et EIGRP"
        correcte: false
        explication: "OSPF et EIGRP sont des protocoles de routage de couche 3, sans rapport avec la négociation d'un EtherChannel de couche 2."
      - texte: "DTP et VTP"
        correcte: false
        explication: "DTP négocie le mode trunk/access et VTP synchronise les VLAN ; ni l'un ni l'autre ne gère la négociation d'un EtherChannel."
      - texte: "HSRP et VRRP"
        correcte: false
        explication: "HSRP et VRRP sont des protocoles de redondance de passerelle (FHRP), sans rapport avec l'agrégation de liens EtherChannel."
  - question: "À quoi sert le paramètre de priorité (priority) dans HSRP ou VRRP ?"
    type: "unique"
    reponses:
      - texte: "À déterminer quel routeur du groupe devient actif (ou maître), le plus haut valeur l'emportant"
        correcte: true
        explication: "Le routeur avec la priorité la plus élevée dans le groupe FHRP devient le routeur actif (HSRP) ou maître (VRRP), gérant le trafic pour l'adresse IP virtuelle partagée."
      - texte: "À chiffrer les échanges entre les routeurs du groupe de redondance"
        correcte: false
        explication: "La priorité ne chiffre rien ; elle sert uniquement à départager quel routeur devient actif dans le groupe de redondance."
      - texte: "À définir l'adresse IP virtuelle partagée par le groupe"
        correcte: false
        explication: "L'adresse IP virtuelle est configurée séparément ; la priorité sert seulement à élire le routeur actif parmi le groupe."
      - texte: "À limiter le nombre de clients pouvant utiliser la passerelle virtuelle"
        correcte: false
        explication: "La priorité ne limite aucun nombre de clients ; elle détermine seulement quel routeur du groupe assure activement le rôle de passerelle."
  - question: "Que fait le mécanisme de préemption (preempt) dans un groupe HSRP ?"
    type: "unique"
    reponses:
      - texte: "Il permet à un routeur de priorité supérieure de reprendre automatiquement le rôle actif dès qu'il redevient disponible, même si un autre routeur assurait déjà ce rôle"
        correcte: true
        explication: "Sans preempt, un routeur qui redevient disponible après une panne reste en secours (standby) même s'il a une priorité plus haute que le routeur actif actuel ; avec preempt activé, il reprend automatiquement le rôle actif."
      - texte: "Il empêche définitivement un routeur de secours de devenir actif un jour"
        correcte: false
        explication: "C'est l'inverse : preempt permet justement à un routeur de reprendre le rôle actif s'il le mérite par sa priorité, une fois qu'il redevient disponible."
      - texte: "Il chiffre les échanges de messages HSRP entre les routeurs du groupe"
        correcte: false
        explication: "La préemption ne concerne pas le chiffrement ; elle régit uniquement la reprise du rôle actif selon la priorité."
      - texte: "Il synchronise automatiquement la configuration VLAN entre les routeurs du groupe"
        correcte: false
        explication: "La synchronisation de VLAN est une fonction de VTP, sans rapport avec la préemption HSRP qui concerne l'élection du routeur actif."
  - question: "Quel paramètre OSPF sert de métrique de base pour calculer le coût d'une route, par défaut lié à la bande passante de l'interface ?"
    type: "unique"
    reponses:
      - texte: "Le coût OSPF (cost), inversement proportionnel à la bande passante de l'interface (bande passante de référence divisée par la bande passante de l'interface)"
        correcte: true
        explication: "OSPF calcule un coût par interface en divisant une bande passante de référence (100 Mbit/s par défaut) par la bande passante réelle de l'interface ; plus la bande passante est élevée, plus le coût est bas et la route préférée."
      - texte: "Le nombre de sauts (hop count) entre la source et la destination"
        correcte: false
        explication: "Le nombre de sauts est la métrique de RIP, pas d'OSPF, qui se base sur le coût lié à la bande passante."
      - texte: "La distance administrative de la route"
        correcte: false
        explication: "La distance administrative compare des sources de routage différentes entre elles, ce n'est pas la métrique interne utilisée par OSPF pour comparer des chemins au sein du même protocole."
      - texte: "Le délai de propagation mesuré en temps réel sur chaque lien"
        correcte: false
        explication: "OSPF utilise un coût statique basé sur la bande passante configurée, pas une mesure de délai en temps réel."
  - question: "Pourquoi la bande passante de référence par défaut d'OSPF (100 Mbit/s) pose-t-elle un problème sur des réseaux modernes avec des liens de plusieurs Gbit/s ?"
    type: "unique"
    reponses:
      - texte: "Tous les liens à 100 Mbit/s ou plus obtiennent le même coût minimal (1), ce qui empêche OSPF de distinguer un lien Gigabit d'un lien 10 Gigabit"
        correcte: true
        explication: "Sans ajuster la bande passante de référence (auto-cost reference-bandwidth), tous les liens égaux ou supérieurs à 100 Mbit/s se voient attribuer le coût minimal de 1, rendant OSPF incapable de préférer un lien plus rapide parmi eux."
      - texte: "OSPF refuse de fonctionner sur des interfaces de plus de 100 Mbit/s"
        correcte: false
        explication: "OSPF fonctionne parfaitement sur des interfaces à très haut débit ; le problème est seulement une perte de granularité dans le calcul du coût, pas un dysfonctionnement du protocole."
      - texte: "Cela provoque systématiquement une boucle de routage"
        correcte: false
        explication: "Ce problème de bande passante de référence entraîne un choix de route sous-optimal potentiel, pas une boucle de routage à proprement parler."
      - texte: "Cela empêche toute adjacence OSPF de se former sur ces liens"
        correcte: false
        explication: "Les adjacences OSPF se forment normalement sur ces liens ; le souci concerne uniquement la granularité du calcul de coût, pas la formation des voisinages."
  - question: "Pourquoi utilise-t-on souvent une interface loopback comme router-id sur un routeur OSPF ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'une interface loopback ne tombe jamais physiquement en panne, garantissant un router-id stable tant que le routeur fonctionne"
        correcte: true
        explication: "Contrairement à une interface physique qui peut tomber (câble débranché, port en panne), une interface loopback reste toujours active tant que le routeur est allumé, assurant la stabilité du router-id utilisé notamment par OSPF."
      - texte: "Parce qu'une interface loopback offre un débit plus élevé que les interfaces physiques"
        correcte: false
        explication: "Une interface loopback est purement logicielle et n'a pas de notion de débit physique ; son intérêt ici est la stabilité, pas la performance."
      - texte: "Parce qu'OSPF ne peut fonctionner sans au moins une interface loopback configurée"
        correcte: false
        explication: "OSPF peut fonctionner sans aucune interface loopback ; il choisira alors un router-id parmi les adresses IP des interfaces physiques actives, mais son choix sera moins stable dans le temps."
      - texte: "Parce qu'une interface loopback est automatiquement chiffrée par défaut"
        correcte: false
        explication: "Une interface loopback n'a pas de propriété de chiffrement particulière ; l'intérêt de son usage pour le router-id est uniquement sa stabilité."
  - question: "À quoi sert la commande passive-interface dans un protocole de routage dynamique comme OSPF ?"
    type: "unique"
    reponses:
      - texte: "À empêcher l'envoi de messages de protocole de routage sur une interface donnée, tout en continuant à annoncer son réseau"
        correcte: true
        explication: "passive-interface arrête l'émission (et la réception) de paquets hello sur une interface (souvent une interface orientée utilisateurs finaux), réduisant le trafic inutile et le risque qu'un voisin non désiré s'y forme, tout en gardant le réseau de cette interface annoncé dans le protocole."
      - texte: "À désactiver complètement l'interface physique concernée"
        correcte: false
        explication: "passive-interface ne désactive pas l'interface elle-même ni sa connectivité IP normale ; elle arrête seulement l'échange de messages du protocole de routage sur cette interface."
      - texte: "À forcer l'interface à devenir un trunk"
        correcte: false
        explication: "Cette commande concerne le comportement du protocole de routage, sans rapport avec le mode trunk ou access d'un port de switch."
      - texte: "À chiffrer les échanges de routage sur l'interface concernée"
        correcte: false
        explication: "passive-interface ne chiffre rien ; son rôle est uniquement de limiter l'émission des messages du protocole de routage sur cette interface."
  - question: "Quelle est la différence entre un réseau OSPF de type broadcast et un réseau de type point-to-point, en matière d'élection de DR/BDR ?"
    type: "unique"
    reponses:
      - texte: "Un réseau de type broadcast (comme Ethernet) élit un DR et un BDR, alors qu'un réseau point-to-point n'en a pas besoin, puisqu'il ne relie que deux routeurs"
        correcte: true
        explication: "L'élection de DR/BDR sert à réduire les adjacences sur un segment multi-accès partagé par plusieurs routeurs ; sur une liaison point-to-point qui ne relie que deux routeurs, cette optimisation n'a pas lieu d'être."
      - texte: "Un réseau point-to-point élit toujours un DR, contrairement à un réseau broadcast"
        correcte: false
        explication: "C'est l'inverse : c'est le réseau de type broadcast qui élit un DR/BDR, pas le point-to-point qui n'en a pas besoin."
      - texte: "Les deux types de réseau fonctionnent de façon strictement identique en OSPF"
        correcte: false
        explication: "Leur comportement diffère précisément sur la nécessité ou non d'élire un DR/BDR, une différence significative de fonctionnement."
      - texte: "Un réseau broadcast ne peut jamais former d'adjacence OSPF"
        correcte: false
        explication: "Un réseau broadcast forme parfaitement des adjacences OSPF, notamment via ses routeurs DR et BDR ; ce n'est pas une limitation de ce type de réseau."
  - question: "Que signifie l'acronyme QoS et quel est son objectif général sur un réseau ?"
    type: "unique"
    reponses:
      - texte: "Quality of Service : prioriser certains types de trafic (comme la voix) par rapport à d'autres, pour garantir une meilleure expérience malgré une bande passante limitée"
        correcte: true
        explication: "La QoS permet de classer et de prioriser le trafic sensible à la latence ou à la perte de paquets (voix, vidéo) par rapport à du trafic moins critique (transfert de fichiers), notamment en cas de congestion."
      - texte: "Quick Operating System, un mode de démarrage rapide des routeurs"
        correcte: false
        explication: "Ce développé n'existe pas ; QoS signifie Quality of Service, et concerne la priorisation du trafic réseau, pas un mode de démarrage."
      - texte: "Query Origin Service, un mécanisme de résolution de noms de domaine"
        correcte: false
        explication: "Ce développé n'existe pas ; QoS n'a aucun rapport avec la résolution de noms, c'est un mécanisme de gestion de priorité du trafic."
      - texte: "Un protocole qui chiffre uniquement le trafic vocal (voix sur IP)"
        correcte: false
        explication: "La QoS ne chiffre rien ; son rôle est de prioriser certains flux de trafic, pas de les sécuriser par chiffrement."
  - question: "Pourquoi le trafic de voix sur IP (VoIP) est-il particulièrement sensible et souvent prioritaire dans une politique de QoS ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'il est très sensible à la latence, à la gigue et à la perte de paquets, qui dégradent immédiatement la qualité audio perçue"
        correcte: true
        explication: "Contrairement à un transfert de fichier qui peut tolérer un délai supplémentaire sans conséquence visible, un appel vocal en temps réel devient rapidement inaudible ou haché en cas de latence, de gigue ou de perte excessive."
      - texte: "Parce que la VoIP consomme systématiquement plus de bande passante que n'importe quel autre type de trafic"
        correcte: false
        explication: "La VoIP consomme en réalité relativement peu de bande passante comparée à un flux vidéo ou un gros transfert de fichiers ; sa priorité tient à sa sensibilité au délai, pas à son volume."
      - texte: "Parce que la VoIP n'utilise jamais le protocole IP, contrairement à son nom"
        correcte: false
        explication: "La VoIP transporte justement la voix sur un réseau IP, comme son nom l'indique ; ce n'est pas la raison de sa sensibilité particulière en QoS."
      - texte: "Parce que la VoIP est un protocole propriétaire Cisco, non standardisé"
        correcte: false
        explication: "La VoIP repose sur des standards ouverts (comme SIP et RTP), utilisés par de nombreux fabricants, ce n'est pas une raison propre à Cisco."
  - question: "Quelle est la différence entre une ACL numérotée et une ACL nommée sur Cisco IOS ?"
    type: "unique"
    reponses:
      - texte: "Une ACL nommée utilise un nom explicite plutôt qu'un numéro, ce qui facilite son identification, et permet d'éditer ou de supprimer une ligne précise plus facilement"
        correcte: true
        explication: "Une ACL nommée (ip access-list extended NOM_ACL) offre une meilleure lisibilité qu'un simple numéro, et permet une gestion plus fine des lignes individuelles, notamment avec des numéros de séquence."
      - texte: "Une ACL numérotée ne peut filtrer que le trafic IPv6, une ACL nommée uniquement IPv4"
        correcte: false
        explication: "Le choix entre numérotée et nommée ne détermine pas la version d'IP filtrée ; les deux formats peuvent s'appliquer à IPv4 comme IPv6 selon la syntaxe utilisée."
      - texte: "Une ACL nommée ne peut contenir qu'une seule règle, contrairement à une ACL numérotée"
        correcte: false
        explication: "Une ACL nommée peut contenir autant de règles qu'une ACL numérotée ; ce n'est pas une limitation liée au nommage."
      - texte: "Il n'existe aucune différence fonctionnelle entre les deux formats"
        correcte: false
        explication: "Le format nommé apporte des avantages pratiques réels de lisibilité et de gestion des lignes, ce n'est pas une distinction purement esthétique sans conséquence."
  - question: "Quelle commande Cisco IOS affiche le contenu et les compteurs de correspondance de toutes les ACL configurées sur un routeur ?"
    type: "unique"
    reponses:
      - texte: "show access-lists"
        correcte: true
        explication: "show access-lists affiche toutes les ACL configurées, leurs règles et le nombre de paquets ayant correspondu à chacune, utile pour vérifier qu'une ACL fonctionne comme prévu."
      - texte: "show ip route"
        correcte: false
        explication: "show ip route affiche la table de routage, pas le contenu des ACL."
      - texte: "show running-config interface"
        correcte: false
        explication: "Cette commande montre la configuration d'une interface, y compris quelle ACL y est appliquée, mais pas le détail des compteurs de correspondance comme show access-lists."
      - texte: "show vlan brief"
        correcte: false
        explication: "show vlan brief affiche les VLAN configurés, sans rapport avec le contenu des ACL."
  - question: "Quelle commande Cisco IOS affiche les traductions NAT actuellement actives sur un routeur ?"
    type: "unique"
    reponses:
      - texte: "show ip nat translations"
        correcte: true
        explication: "show ip nat translations liste les correspondances NAT actives entre adresses internes et externes, un outil essentiel pour vérifier ou dépanner une configuration NAT/PAT."
      - texte: "show ip nat statistics uniquement, sans autre commande utile"
        correcte: false
        explication: "show ip nat statistics donne des compteurs globaux utiles en complément, mais la commande de référence pour voir chaque traduction active reste show ip nat translations."
      - texte: "show access-lists"
        correcte: false
        explication: "show access-lists affiche les ACL, pas les traductions NAT actives."
      - texte: "show ip route"
        correcte: false
        explication: "show ip route affiche la table de routage, sans rapport avec les traductions NAT."
  - question: "Quelle commande Cisco IOS affiche l'état des adjacences OSPF (voisins découverts, état, priorité) ?"
    type: "unique"
    reponses:
      - texte: "show ip ospf neighbor"
        correcte: true
        explication: "show ip ospf neighbor liste les voisins OSPF découverts, leur état (par exemple FULL) et leur rôle (DR, BDR ou simple voisin)."
      - texte: "show ip route ospf"
        correcte: false
        explication: "show ip route ospf affiche uniquement les routes apprises via OSPF dans la table de routage, pas l'état des adjacences elles-mêmes."
      - texte: "show cdp neighbors"
        correcte: false
        explication: "show cdp neighbors affiche les équipements Cisco directement connectés (via CDP), indépendamment d'OSPF."
      - texte: "show vlan brief"
        correcte: false
        explication: "show vlan brief affiche les VLAN configurés, sans rapport avec les adjacences OSPF."
  - question: "Qu'est-ce que le protocole CDP (Cisco Discovery Protocol) permet de découvrir ?"
    type: "unique"
    reponses:
      - texte: "Les équipements Cisco directement connectés, avec des informations comme leur modèle, leur adresse IP et l'interface de connexion"
        correcte: true
        explication: "CDP est un protocole propriétaire Cisco de découverte de voisinage de couche 2, très utile pour cartographier rapidement une topologie réseau composée d'équipements Cisco."
      - texte: "Les adresses IP publiques utilisées sur Internet par l'entreprise"
        correcte: false
        explication: "CDP ne fonctionne qu'au niveau local entre équipements directement connectés, sans rapport avec la découverte d'adresses IP publiques sur Internet."
      - texte: "Les mots de passe configurés sur les équipements voisins"
        correcte: false
        explication: "CDP ne révèle jamais de mots de passe ; il partage des informations d'identification de l'équipement (modèle, version, adresses), pas des secrets d'authentification."
      - texte: "Les vulnérabilités logicielles connues des équipements voisins"
        correcte: false
        explication: "CDP ne réalise aucune analyse de vulnérabilité ; c'est un protocole de découverte d'informations basiques sur les équipements Cisco voisins, pas un outil de sécurité."
      
  - question: "Quel est l'équivalent standardisé (non propriétaire) de CDP, utilisable entre équipements de plusieurs constructeurs ?"
    type: "unique"
    reponses:
      - texte: "LLDP (Link Layer Discovery Protocol)"
        correcte: true
        explication: "LLDP est un standard IEEE 802.1AB de découverte de voisinage de couche 2, jouant un rôle similaire à CDP mais interopérable entre équipements de différents fabricants."
      - texte: "VTP"
        correcte: false
        explication: "VTP synchronise la configuration des VLAN entre switches Cisco, sans rapport avec la découverte de voisinage générique."
      - texte: "DTP"
        correcte: false
        explication: "DTP négocie le mode trunk ou access d'un port, sans rapport avec la découverte générique d'équipements voisins."
      - texte: "HSRP"
        correcte: false
        explication: "HSRP est un protocole de redondance de passerelle, sans rapport avec la découverte de voisinage de couche 2."
  - question: "Pourquoi peut-il être risqué de laisser CDP ou LLDP activé sur des ports orientés vers l'extérieur de l'entreprise ou vers des équipements non maîtrisés ?"
    type: "unique"
    reponses:
      - texte: "Parce que ces protocoles diffusent des informations sur l'équipement (modèle, version, adresse IP) qu'un attaquant pourrait exploiter pour cartographier ou cibler le réseau"
        correcte: true
        explication: "CDP et LLDP ne sont pas chiffrés ou authentifiés par défaut ; un attaquant en écoute peut collecter des informations utiles à la reconnaissance d'un réseau avant une attaque plus ciblée."
      - texte: "Parce que ces protocoles ralentissent fortement le débit du lien concerné"
        correcte: false
        explication: "L'impact de CDP/LLDP sur le débit est négligeable ; le risque principal évoqué en sécurité concerne la fuite d'informations, pas la performance."
      - texte: "Parce qu'ils empêchent tout trafic normal de circuler sur le port concerné"
        correcte: false
        explication: "CDP et LLDP fonctionnent en parallèle du trafic normal sans le bloquer ; ce n'est pas leur activation qui empêche la circulation du trafic."
      - texte: "Parce qu'ils désactivent automatiquement le pare-feu du réseau"
        correcte: false
        explication: "CDP et LLDP n'ont aucune interaction avec la configuration du pare-feu ; leur risque concerne uniquement la fuite d'informations de voisinage."
  - question: "Dans une architecture Wi-Fi d'entreprise basée sur un contrôleur (WLC, Wireless LAN Controller), quel est le rôle des points d'accès dits 'légers' (lightweight AP) ?"
    type: "unique"
    reponses:
      - texte: "Relayer le trafic radio des clients tout en déléguant la majorité des décisions de configuration et de gestion au contrôleur central"
        correcte: true
        explication: "Contrairement à un point d'accès autonome qui gère seul sa propre configuration, un AP léger dépend d'un WLC central pour sa configuration, la gestion des canaux radio, la sécurité et l'itinérance entre points d'accès."
      - texte: "Fonctionner de façon totalement indépendante, sans jamais communiquer avec un contrôleur"
        correcte: false
        explication: "C'est justement l'inverse : un AP léger a besoin d'un contrôleur pour fonctionner pleinement, contrairement à un AP autonome qui, lui, est indépendant."
      - texte: "Servir uniquement de répéteur de signal, sans jamais transmettre le trafic des clients au réseau filaire"
        correcte: false
        explication: "Un AP léger relaie bien le trafic des clients vers le réseau filaire (souvent via un tunnel vers le contrôleur), il ne se limite pas à répéter un signal radio."
      - texte: "Remplacer complètement le besoin d'un commutateur dans le réseau local"
        correcte: false
        explication: "Un AP léger se connecte lui-même à un switch du réseau filaire ; il ne remplace pas le rôle de commutation d'un switch."
  - question: "Quel est l'avantage principal d'une architecture Wi-Fi basée sur un contrôleur (WLC) par rapport à des points d'accès autonomes indépendants, dans un grand bâtiment ?"
    type: "unique"
    reponses:
      - texte: "Une gestion centralisée de la configuration, de la sécurité et de l'itinérance (roaming) fluide des clients entre plusieurs points d'accès"
        correcte: true
        explication: "Avec de nombreux points d'accès autonomes, chaque modification (canal, sécurité, SSID) doit être répétée sur chacun individuellement ; un WLC centralise cette gestion et coordonne le roaming des clients sans coupure entre points d'accès."
      - texte: "Une consommation électrique nulle pour tous les points d'accès du bâtiment"
        correcte: false
        explication: "Les points d'accès, léger ou autonome, consomment de l'énergie pour fonctionner ; l'architecture contrôleur n'élimine pas ce besoin, elle ne fait qu'améliorer la gestion centralisée."
      - texte: "La suppression totale du besoin de câblage Ethernet vers les points d'accès"
        correcte: false
        explication: "Les points d'accès, autonomes ou légers, restent généralement reliés au réseau filaire par câble Ethernet (souvent alimentés en PoE) ; l'architecture contrôleur ne change pas ce besoin de câblage."
      - texte: "Une sécurité identique quel que soit le nombre de points d'accès déployés, sans aucun avantage de gestion"
        correcte: false
        explication: "L'avantage principal mis en avant est justement la facilité de gestion centralisée à grande échelle, pas une sécurité par défaut strictement identique sans bénéfice."
  - question: "Qu'est-ce qu'un VLAN voix (voice VLAN) configuré sur un port de switch relié à un téléphone IP avec un PC en aval ?"
    type: "unique"
    reponses:
      - texte: "Un VLAN dédié qui sépare le trafic voix du trafic données du PC connecté au port auxiliaire du téléphone, tout en partageant le même port physique"
        correcte: true
        explication: "Un téléphone IP Cisco dispose souvent d'un port auxiliaire pour brancher un PC ; le voice VLAN permet de marquer le trafic voix séparément (souvent prioritaire en QoS) du trafic données du PC, sur le même câblage physique."
      - texte: "Un VLAN qui bloque automatiquement tout trafic de données sur le port concerné"
        correcte: false
        explication: "Le voice VLAN coexiste avec le VLAN de données du PC connecté en aval, il ne bloque pas le trafic données, il le sépare logiquement du trafic voix."
      - texte: "Un VLAN utilisé exclusivement pour la messagerie vocale des employés"
        correcte: false
        explication: "Le voice VLAN concerne le trafic de téléphonie IP (VoIP) en général, pas spécifiquement un service de messagerie vocale."
      - texte: "Un VLAN qui remplace le besoin de configurer un port en mode access"
        correcte: false
        explication: "Un port avec voice VLAN reste configuré en mode access pour le VLAN de données, avec en complément la commande spécifique de voice VLAN pour le trafic téléphonique."
  - question: "Quelle fonctionnalité STP permet à un port connecté à un poste utilisateur final de passer immédiatement en état de transmission, sans attendre les délais normaux d'écoute et d'apprentissage ?"
    type: "unique"
    reponses:
      - texte: "PortFast"
        correcte: true
        explication: "PortFast est destiné aux ports d'accès reliés à des postes finaux (pas à d'autres switches), leur évitant d'attendre les 30 à 50 secondes de convergence STP normale à chaque branchement, ce qui accélère par exemple l'obtention d'une adresse DHCP au démarrage."
      - texte: "BPDU Guard"
        correcte: false
        explication: "BPDU Guard protège un port PortFast en le désactivant s'il reçoit une BPDU inattendue, mais ce n'est pas lui qui accélère le passage en transmission ; c'est le rôle de PortFast."
      - texte: "Root Guard"
        correcte: false
        explication: "Root Guard empêche un port de devenir un chemin vers un nouveau pont racine non désiré, sans rapport avec l'accélération du passage en transmission d'un port utilisateur."
      - texte: "UplinkFast"
        correcte: false
        explication: "UplinkFast accélère la convergence STP côté liens montants (uplinks) redondants d'un switch d'accès, un cas d'usage différent de PortFast destiné aux ports utilisateurs finaux."
  - question: "Pourquoi ne doit-on jamais activer PortFast sur un port relié à un autre switch ?"
    type: "unique"
    reponses:
      - texte: "Parce que cela risquerait de créer temporairement une boucle de commutation avant que STP ait eu le temps de détecter correctement la topologie"
        correcte: true
        explication: "PortFast fait l'hypothèse qu'aucun autre switch (donc aucune boucle potentielle) n'est connecté sur ce port ; l'activer vers un autre switch contourne les vérifications de sécurité de STP et peut provoquer une boucle avant sa détection."
      - texte: "Parce que PortFast est physiquement incompatible avec les ports fibre optique"
        correcte: false
        explication: "PortFast fonctionne aussi bien sur cuivre que fibre ; le problème n'est pas une incompatibilité physique mais un risque de boucle de commutation."
      - texte: "Parce que PortFast désactive automatiquement le port au bout de 30 secondes"
        correcte: false
        explication: "PortFast n'a pas de mécanisme de désactivation automatique après un délai ; le risque réel concerne la formation potentielle de boucles, pas une coupure programmée."
      - texte: "Parce que cela empêcherait toute négociation de vitesse et duplex sur le lien"
        correcte: false
        explication: "La négociation de vitesse et duplex est un mécanisme indépendant de PortFast, qui concerne uniquement le comportement STP du port."
  - question: "Que fait BPDU Guard lorsqu'un port configuré en PortFast reçoit une BPDU (message STP) ?"
    type: "unique"
    reponses:
      - texte: "Il désactive automatiquement le port (err-disable), car la réception d'une BPDU signale qu'un switch non prévu est connecté à un port normalement réservé à un poste final"
        correcte: true
        explication: "BPDU Guard protège l'hypothèse de PortFast (aucun switch derrière ce port) : dès qu'une BPDU y est détectée, le port est immédiatement mis en état err-disable pour éviter tout risque de boucle."
      - texte: "Il ignore simplement la BPDU reçue et continue de fonctionner normalement, sans aucune action"
        correcte: false
        explication: "C'est l'inverse : BPDU Guard réagit activement à la réception d'une BPDU en désactivant le port, plutôt que de l'ignorer silencieusement."
      - texte: "Il transforme automatiquement le port en trunk"
        correcte: false
        explication: "BPDU Guard n'a aucun rapport avec le mode trunk ou access d'un port ; sa seule action est de désactiver le port en cas de réception de BPDU inattendue."
      - texte: "Il élit automatiquement ce port comme nouveau pont racine"
        correcte: false
        explication: "BPDU Guard ne favorise jamais l'élection d'un pont racine ; au contraire, il protège justement contre un changement de topologie non désiré."
  - question: "Quelle est la conséquence typique d'un mismatch (incohérence) de VLAN natif entre les deux extrémités d'un lien trunk 802.1Q ?"
    type: "unique"
    reponses:
      - texte: "Le trafic non tagué de chaque extrémité peut se retrouver mélangé entre deux VLAN différents, provoquant des erreurs de connectivité et des alertes CDP de mismatch natif"
        correcte: true
        explication: "Si chaque switch considère un VLAN natif différent pour le même lien trunk, le trafic non tagué de l'un peut être interprété comme appartenant à un autre VLAN côté distant, un problème que Cisco IOS signale généralement par un message d'avertissement explicite."
      - texte: "Le lien trunk cesse immédiatement de transmettre tout trafic, quel que soit le VLAN"
        correcte: false
        explication: "Le lien trunk continue généralement de fonctionner pour le trafic tagué correctement ; le problème concerne spécifiquement le trafic non tagué du VLAN natif mal aligné."
      - texte: "Cela force automatiquement une réélection du pont racine STP sur tout le réseau"
        correcte: false
        explication: "Un mismatch de VLAN natif ne déclenche pas en soi une réélection de pont racine ; c'est un problème d'incohérence de VLAN, pas de topologie STP."
      - texte: "Cela n'a strictement aucun effet observable sur le réseau"
        correcte: false
        explication: "Ce mismatch a bien un effet observable : des soucis de connectivité pour le trafic natif, et généralement un message d'avertissement affiché par les équipements Cisco détectant l'incohérence."
  - question: "Quel est le VLAN par défaut de tous les ports d'un switch Cisco fraîchement sorti d'usine ?"
    type: "unique"
    reponses:
      - texte: "VLAN 1"
        correcte: true
        explication: "Par défaut, tous les ports d'un switch Cisco neuf appartiennent au VLAN 1, souvent aussi VLAN natif et VLAN de gestion par défaut, ce qui motive la recommandation de le changer en production."
      - texte: "VLAN 0"
        correcte: false
        explication: "VLAN 0 n'est pas un VLAN utilisateur valide dans la configuration standard ; le VLAN par défaut des ports est VLAN 1."
      - texte: "VLAN 999"
        correcte: false
        explication: "VLAN 999 est parfois choisi comme VLAN natif alternatif par bonne pratique de sécurité, mais ce n'est pas le VLAN par défaut d'usine, qui est VLAN 1."
      - texte: "Aucun VLAN par défaut, chaque port doit être assigné manuellement avant toute utilisation"
        correcte: false
        explication: "Un switch Cisco neuf assigne automatiquement tous ses ports au VLAN 1 par défaut, sans configuration manuelle préalable nécessaire pour qu'ils soient fonctionnels."
  - question: "Pourquoi recommande-t-on de ne pas utiliser le VLAN 1 comme VLAN de données ou de gestion en production ?"
    type: "unique"
    reponses:
      - texte: "Parce que VLAN 1 est le VLAN par défaut de tous les équipements et protocoles de gestion (comme CDP, VTP, STP), ce qui en fait une cible privilégiée et un point de risque si mal sécurisé"
        correcte: true
        explication: "VLAN 1 porte par défaut le trafic de nombreux protocoles de contrôle ; le laisser aussi transporter des données utilisateur ou servir de VLAN de gestion élargit la surface d'exposition en cas d'attaque de type VLAN hopping ou d'erreur de configuration."
      - texte: "Parce que VLAN 1 est techniquement limité à 10 hôtes maximum"
        correcte: false
        explication: "VLAN 1 n'a pas de limitation technique de nombre d'hôtes différente des autres VLAN ; la préoccupation est une question de bonne pratique de sécurité, pas de capacité."
      - texte: "Parce que VLAN 1 ne peut pas être routé par un routeur ou un switch de niveau 3"
        correcte: false
        explication: "VLAN 1 peut parfaitement être routé comme n'importe quel autre VLAN ; la recommandation de l'éviter est une question de sécurité, pas de capacité technique de routage."
      - texte: "Parce que VLAN 1 consomme davantage de bande passante que les autres VLAN"
        correcte: false
        explication: "Le numéro de VLAN n'a aucun impact sur la consommation de bande passante ; la recommandation de séparer VLAN 1 du trafic sensible relève de la sécurité, pas de la performance."
  - question: "Quelle est la principale différence entre le haut débit par câble (câblo-opérateur) et l'ADSL comme accès Internet grand public ?"
    type: "unique"
    reponses:
      - texte: "Le câble partage généralement la bande passante du quartier entre plusieurs abonnés sur un même segment, alors que l'ADSL utilise une ligne téléphonique dédiée par abonné jusqu'au central"
        correcte: true
        explication: "L'accès câble mutualise typiquement la capacité entre les abonnés d'un même segment de quartier, tandis que l'ADSL utilise la paire de cuivre téléphonique individuelle de l'abonné jusqu'au central, avec un débit dépendant fortement de la distance à ce central."
      - texte: "Le câble ne peut techniquement pas fournir d'accès Internet, seulement la télévision"
        correcte: false
        explication: "Le câble fournit couramment un accès Internet haut débit en plus de la télévision, via des technologies comme DOCSIS."
      - texte: "L'ADSL nécessite obligatoirement une fibre optique jusqu'au domicile de l'abonné"
        correcte: false
        explication: "L'ADSL utilise justement la ligne téléphonique en cuivre existante, pas une fibre optique jusqu'au domicile, contrairement à des technologies comme la FTTH."
      - texte: "Les deux technologies offrent exactement le même débit garanti en toute circonstance"
        correcte: false
        explication: "Ni le câble (partagé) ni l'ADSL (dépendant de la distance au central) ne garantissent un débit strictement fixe et identique en toute circonstance."
  - question: "Quel est l'avantage principal d'une connexion WAN cellulaire (4G/5G) comme solution de secours (backup) pour un site distant ?"
    type: "unique"
    reponses:
      - texte: "Elle ne nécessite aucun câblage filaire dédié et peut être déployée rapidement en cas de panne du lien principal"
        correcte: true
        explication: "Une connexion cellulaire s'appuie sur le réseau mobile existant, sans câblage à installer, ce qui la rend pratique comme solution de secours rapide si la ligne principale (fibre, ligne louée) tombe en panne."
      - texte: "Elle offre systématiquement une bande passante supérieure à celle d'une ligne louée dédiée"
        correcte: false
        explication: "Une connexion cellulaire offre généralement une bande passante et une fiabilité inférieures à une ligne louée dédiée ; son intérêt est la facilité de déploiement en secours, pas la performance maximale."
      - texte: "Elle élimine tout besoin de routeur sur le site distant"
        correcte: false
        explication: "Un routeur (ou un équipement combiné) reste nécessaire pour interfacer la connexion cellulaire avec le réseau local du site, elle ne supprime pas ce besoin."
      - texte: "Elle est toujours moins chère qu'une ligne louée sur le long terme, sans exception"
        correcte: false
        explication: "Le coût dépend du volume de données consommées et du contrat opérateur ; ce n'est pas systématiquement l'option la moins chère sur le long terme, son atout principal étant la rapidité de déploiement en secours."
  - question: "Quel est le rôle général d'un pare-feu de nouvelle génération (NGFW) par rapport à un pare-feu traditionnel à filtrage de paquets ?"
    type: "unique"
    reponses:
      - texte: "Il inspecte le trafic au niveau applicatif (identification d'applications, prévention d'intrusion, inspection de contenu), en plus du simple filtrage par adresse et port"
        correcte: true
        explication: "Un NGFW ajoute des capacités avancées (inspection applicative, IPS intégré, filtrage d'URL, identification d'utilisateur) par rapport à un pare-feu traditionnel limité au filtrage par adresse IP, port et protocole."
      - texte: "Il ne fonctionne qu'avec IPv6, jamais avec IPv4"
        correcte: false
        explication: "Un NGFW fonctionne aussi bien avec IPv4 qu'IPv6 ; la distinction avec un pare-feu traditionnel porte sur la profondeur d'inspection, pas la version d'IP supportée."
      - texte: "Il remplace complètement le besoin d'un routeur sur le réseau"
        correcte: false
        explication: "Un NGFW complète la fonction de sécurité du réseau, il ne remplace pas la fonction de routage assurée par un routeur, même si certains modèles combinent plusieurs fonctions."
      - texte: "Il ne peut être déployé qu'en coupure sur un lien WAN, jamais en interne sur un LAN"
        correcte: false
        explication: "Un NGFW peut être déployé aussi bien en périphérie (vers Internet) qu'en interne pour segmenter des zones sensibles du réseau local."
  - question: "Que signifie le terme 'convergence' appliqué à un protocole de routage dynamique comme OSPF ?"
    type: "unique"
    reponses:
      - texte: "Le temps nécessaire pour que tous les routeurs du réseau aient une vue cohérente et à jour de la topologie après un changement"
        correcte: true
        explication: "Après une panne de lien ou l'ajout d'un routeur par exemple, la convergence désigne la période durant laquelle les routeurs recalculent leurs routes jusqu'à obtenir une table de routage stable et cohérente entre eux."
      - texte: "La fusion de deux réseaux IP différents en un seul VLAN"
        correcte: false
        explication: "Cette description correspond à une opération de conception réseau, pas à la définition de convergence d'un protocole de routage."
      - texte: "Le chiffrement des mises à jour de routage échangées entre routeurs"
        correcte: false
        explication: "La convergence concerne la stabilisation de la topologie de routage, pas le chiffrement des échanges entre routeurs."
      - texte: "Le nombre maximal de routes qu'un routeur peut stocker dans sa table de routage"
        correcte: false
        explication: "Ce nombre maximal est une limite de capacité matérielle ou logicielle, sans rapport avec la définition de la convergence d'un protocole de routage."
  - question: "Dans une étendue DHCP, à quoi correspond généralement l'option 3 ?"
    type: "unique"
    reponses:
      - texte: "La passerelle par défaut (default gateway) à distribuer aux clients"
        correcte: true
        explication: "L'option DHCP 3 transmet l'adresse de la passerelle par défaut, en complément de l'adresse IP, du masque et d'autres paramètres attribués au client."
      - texte: "L'adresse du serveur DNS"
        correcte: false
        explication: "L'adresse du serveur DNS correspond généralement à l'option DHCP 6, pas à l'option 3."
      - texte: "La durée du bail (lease time) de l'adresse IP"
        correcte: false
        explication: "La durée du bail est un paramètre distinct de l'étendue DHCP, pas l'option 3 qui concerne la passerelle par défaut."
      - texte: "Le nom de domaine DNS du réseau"
        correcte: false
        explication: "Le nom de domaine correspond à une autre option DHCP dédiée, distincte de l'option 3 réservée à la passerelle par défaut."
  - question: "Quelle option DHCP transmet généralement l'adresse du ou des serveurs DNS aux clients ?"
    type: "unique"
    reponses:
      - texte: "L'option 6"
        correcte: true
        explication: "L'option DHCP 6 transmet l'adresse d'un ou plusieurs serveurs DNS, permettant au client de résoudre des noms de domaine sans configuration manuelle."
      - texte: "L'option 3"
        correcte: false
        explication: "L'option 3 correspond à la passerelle par défaut, pas à l'adresse des serveurs DNS."
      - texte: "L'option 51"
        correcte: false
        explication: "L'option 51 correspond à la durée du bail DHCP (lease time), pas à l'adresse des serveurs DNS."
      - texte: "L'option 1"
        correcte: false
        explication: "L'option 1 correspond au masque de sous-réseau, pas à l'adresse des serveurs DNS."
  - question: "Quelles sont les plages de numéros réservées aux ACL IP standards sur Cisco IOS ?"
    type: "unique"
    reponses:
      - texte: "1 à 99, et 1300 à 1999"
        correcte: true
        explication: "Les ACL IP standards utilisent historiquement les numéros 1 à 99, complétés par une plage étendue 1300 à 1999 quand la première a été jugée insuffisante."
      - texte: "100 à 199, et 2000 à 2699"
        correcte: false
        explication: "Cette plage correspond aux ACL IP étendues, pas aux ACL standards."
      - texte: "1 à 1999 sans distinction de type"
        correcte: false
        explication: "Les plages sont bien distinctes entre ACL standards et étendues, ce n'est pas un seul intervalle continu sans distinction."
      - texte: "600 à 699 uniquement"
        correcte: false
        explication: "Cette plage ne correspond pas aux ACL IP standards ; les plages correctes sont 1 à 99 et 1300 à 1999."
  - question: "Quelles sont les plages de numéros réservées aux ACL IP étendues sur Cisco IOS ?"
    type: "unique"
    reponses:
      - texte: "100 à 199, et 2000 à 2699"
        correcte: true
        explication: "Les ACL IP étendues utilisent historiquement les numéros 100 à 199, complétés par la plage étendue 2000 à 2699."
      - texte: "1 à 99, et 1300 à 1999"
        correcte: false
        explication: "Cette plage correspond aux ACL IP standards, pas aux ACL étendues."
      - texte: "1 à 100 uniquement"
        correcte: false
        explication: "Cette plage ne correspond pas exactement aux ACL étendues ; les bonnes plages sont 100 à 199 et 2000 à 2699."
      - texte: "500 à 599 uniquement"
        correcte: false
        explication: "Cette plage ne correspond pas aux ACL IP étendues sur Cisco IOS."
  - question: "Dans une ACL Cisco, à quoi équivaut le mot-clé any utilisé à la place d'une adresse et d'un wildcard mask ?"
    type: "unique"
    reponses:
      - texte: "0.0.0.0 avec un wildcard mask 255.255.255.255, c'est-à-dire n'importe quelle adresse"
        correcte: true
        explication: "any est un raccourci pratique qui évite d'écrire explicitement 0.0.0.0 255.255.255.255, une combinaison où tous les bits d'adresse sont ignorés, correspondant à n'importe quelle adresse source ou destination."
      - texte: "Une seule adresse IP précise, choisie automatiquement par le routeur"
        correcte: false
        explication: "any ne désigne pas une adresse précise, il désigne au contraire l'ensemble de toutes les adresses possibles, sans restriction."
      - texte: "Uniquement les adresses de broadcast du réseau"
        correcte: false
        explication: "any englobe toutes les adresses possibles, pas seulement les adresses de broadcast d'un sous-réseau particulier."
      - texte: "L'équivalent du mot-clé host, ciblant un hôte unique"
        correcte: false
        explication: "C'est l'inverse : host cible une adresse unique précise (wildcard 0.0.0.0), tandis que any englobe toutes les adresses possibles."
  - question: "Dans une ACL nommée avec des numéros de séquence, comment insérer une nouvelle règle entre deux lignes existantes sans recréer toute l'ACL ?"
    type: "unique"
    reponses:
      - texte: "En entrant en mode de configuration de l'ACL nommée et en ajoutant la nouvelle ligne avec un numéro de séquence intermédiaire entre les deux lignes concernées"
        correcte: true
        explication: "Les ACL nommées avec numéros de séquence permettent d'insérer une règle à un endroit précis (par exemple entre la séquence 10 et 20, en utilisant 15), sans devoir supprimer et retaper toute l'ACL comme c'était nécessaire avec les anciennes ACL numérotées sans séquence."
      - texte: "Ce n'est techniquement pas possible, il faut toujours supprimer et recréer l'ACL entière"
        correcte: false
        explication: "C'est justement l'un des avantages des ACL nommées avec numéros de séquence : elles permettent l'insertion ciblée d'une règle sans reconstruire toute la liste."
      - texte: "En redémarrant l'équipement, ce qui réorganise automatiquement les règles"
        correcte: false
        explication: "Un redémarrage ne réorganise pas les règles d'une ACL ; l'insertion se fait directement en configuration via les numéros de séquence."
      - texte: "En changeant le nom de l'ACL, ce qui réinitialise automatiquement sa numérotation"
        correcte: false
        explication: "Changer le nom de l'ACL ne permet pas d'insérer une règle à un endroit précis ; c'est l'usage des numéros de séquence qui le permet directement."
  - question: "Que signifie l'acronyme VLSM, une technique de subdivision d'un espace d'adressage IP ?"
    type: "unique"
    reponses:
      - texte: "Variable Length Subnet Masking : utiliser des masques de longueurs différentes selon les besoins de chaque sous-réseau, plutôt qu'un masque unique fixe"
        correcte: true
        explication: "VLSM permet d'adapter la taille de chaque sous-réseau à son besoin réel (un /30 pour une liaison point-à-point, un /26 pour un site de 50 postes, par exemple), évitant le gaspillage d'un découpage à masque fixe unique."
      - texte: "Very Large Subnet Method, une technique réservée aux très grands réseaux uniquement"
        correcte: false
        explication: "Ce développé n'existe pas ; VLSM signifie Variable Length Subnet Masking, applicable à des réseaux de toute taille, pas seulement les très grands."
      - texte: "Virtual LAN Segmentation Model, un modèle de conception de VLAN"
        correcte: false
        explication: "Ce développé n'existe pas ; VLSM concerne le découpage d'adressage IP avec des masques variables, pas la conception de VLAN."
      - texte: "Voice LAN Subnet Management, une technique de gestion du trafic voix"
        correcte: false
        explication: "Ce développé n'existe pas ; VLSM n'a aucun rapport spécifique avec le trafic voix, c'est une technique générale de subdivision d'adressage IP."
  - question: "Quel est l'avantage principal d'un switch multicouche (L3) avec des SVI pour le routage inter-VLAN, comparé à un routeur externe en router-on-a-stick ?"
    type: "unique"
    reponses:
      - texte: "Un débit de routage généralement bien plus élevé, le routage étant réalisé en matériel (ASIC) plutôt que via une seule interface physique partagée entre tous les VLAN"
        correcte: true
        explication: "Le router-on-a-stick fait transiter tout le trafic inter-VLAN par une seule interface physique (même si logiquement divisée en sous-interfaces), ce qui peut devenir un goulot d'étranglement ; un switch L3 route en matériel à travers son fond de panier, offrant un débit bien supérieur."
      - texte: "Un coût toujours inférieur à celui d'un routeur externe, sans exception"
        correcte: false
        explication: "Un switch multicouche capable de routage L3 peut être plus coûteux qu'un simple routeur ; l'avantage mis en avant est la performance, pas systématiquement le coût."
      - texte: "La suppression totale du besoin de VLAN sur le réseau"
        correcte: false
        explication: "Les deux approches (router-on-a-stick et switch L3) reposent toujours sur l'existence de VLAN à router entre eux, elles ne suppriment ni l'une ni l'autre ce besoin."
      - texte: "Un chiffrement natif automatique du trafic inter-VLAN"
        correcte: false
        explication: "Ni le router-on-a-stick ni le switch L3 ne chiffrent automatiquement le trafic inter-VLAN par défaut ; l'avantage du switch L3 concerne la performance de routage, pas la sécurité cryptographique."
  - question: "Comment le coût STP (802.1D classique) d'un port varie-t-il généralement en fonction de la vitesse du lien ?"
    type: "unique"
    reponses:
      - texte: "Plus la vitesse du lien est élevée, plus le coût STP associé est faible, rendant ce chemin plus attractif"
        correcte: true
        explication: "STP attribue un coût inversement proportionnel à la bande passante du lien (par exemple 19 pour du Gigabit contre 100 pour du Fast Ethernet dans les valeurs standard 802.1D révisées) : un lien plus rapide est donc préféré dans le calcul du meilleur chemin vers le pont racine."
      - texte: "Le coût STP est toujours identique quelle que soit la vitesse du lien"
        correcte: false
        explication: "Le coût STP dépend justement de la vitesse du lien par défaut ; ce n'est pas une valeur fixe indépendante de la bande passante."
      - texte: "Plus la vitesse du lien est élevée, plus le coût STP associé est élevé"
        correcte: false
        explication: "C'est l'inverse : un lien plus rapide obtient un coût STP plus faible, ce qui le rend préférable dans le calcul du meilleur chemin."
      - texte: "Le coût STP dépend uniquement de la longueur physique du câble, jamais de sa vitesse"
        correcte: false
        explication: "Le coût STP standard se base sur la bande passante du lien, pas sur sa longueur physique."
  - question: "Quelle commande Cisco IOS change le VLAN natif d'un port configuré en trunk ?"
    type: "unique"
    reponses:
      - texte: "switchport trunk native vlan <numéro>"
        correcte: true
        explication: "Cette commande, appliquée sous l'interface concernée, définit explicitement quel VLAN sera considéré comme natif (non tagué) sur ce lien trunk, une bonne pratique pour éviter le VLAN 1 par défaut."
      - texte: "switchport access vlan <numéro>"
        correcte: false
        explication: "Cette commande définit le VLAN d'un port en mode access, pas le VLAN natif d'un port en mode trunk."
      - texte: "switchport mode trunk uniquement, sans autre paramètre possible"
        correcte: false
        explication: "switchport mode trunk active seulement le mode trunk ; le VLAN natif se configure séparément avec switchport trunk native vlan."
      - texte: "vlan database <numéro>"
        correcte: false
        explication: "Cette syntaxe historique concernait la création de VLAN dans une base de données VLAN, pas la définition du VLAN natif d'un trunk."
---
