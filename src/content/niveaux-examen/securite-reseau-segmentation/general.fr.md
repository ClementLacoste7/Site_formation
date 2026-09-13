---
titre: "Quizz : Sécurité réseau et segmentation"
description: "30 questions couvrant tout le cours : rappels TCP/IP, pare-feu, VLAN, VPN, détection de scan réseau et architecture réseau sécurisée."
slug: "quizz"
examen: "securite-reseau-segmentation"
niveau: "general"
ordre: 1
nombreQuizz: 2
questionsParQuizz: 15
publie: true
pool:
  - question: "Quel est le rôle de la couche réseau (IP) dans le modèle TCP/IP ?"
    type: "unique"
    reponses:
      - texte: "Acheminer les paquets entre des réseaux différents, en se basant sur l'adresse IP de destination"
        correcte: true
        explication: "La couche réseau (IP) permet le routage des paquets d'un réseau à un autre, chaque routeur traversé prenant une décision d'acheminement basée sur l'adresse IP de destination."
      - texte: "Garantir la livraison fiable et ordonnée des données, avec accusé de réception"
        correcte: false
        explication: "Cette garantie de fiabilité est assurée par TCP à la couche transport, pas par IP à la couche réseau."
      - texte: "Attribuer une adresse MAC unique à chaque carte réseau"
        correcte: false
        explication: "L'attribution de l'adresse MAC est faite par le fabricant de la carte réseau, une adresse de couche liaison de données, pas de couche réseau IP."
      - texte: "Afficher le contenu d'une page web dans le navigateur"
        correcte: false
        explication: "L'affichage du contenu relève de la couche application (comme HTTP), pas de la couche réseau IP qui se limite à l'acheminement des paquets."
  - question: "Quelle est la différence essentielle entre TCP et UDP à la couche transport ?"
    type: "unique"
    reponses:
      - texte: "TCP établit une connexion et garantit la livraison fiable et ordonnée des données, UDP est plus simple et rapide mais sans garantie de livraison ni d'ordre"
        correcte: true
        explication: "TCP convient aux échanges nécessitant une fiabilité totale (comme le chargement d'une page web), tandis qu'UDP est privilégié quand la rapidité prime sur la fiabilité absolue (comme certains flux vidéo ou jeux en temps réel)."
      - texte: "UDP garantit toujours la livraison des données, contrairement à TCP"
        correcte: false
        explication: "C'est l'inverse : c'est TCP qui garantit la livraison fiable des données, pas UDP qui ne fournit aucune garantie de ce type."
      - texte: "TCP et UDP sont deux noms pour le même protocole, sans différence réelle"
        correcte: false
        explication: "Leur comportement diffère nettement en matière de fiabilité et d'établissement de connexion, ce n'est pas une simple synonymie."
      - texte: "UDP ne peut être utilisé que sur des réseaux locaux, jamais sur Internet"
        correcte: false
        explication: "UDP est couramment utilisé sur Internet, notamment pour des services comme le streaming ou le DNS, pas exclusivement sur des réseaux locaux."
  - question: "Quel est le rôle principal d'un pare-feu (firewall) dans une architecture réseau ?"
    type: "unique"
    reponses:
      - texte: "Filtrer le trafic réseau entrant et sortant selon des règles de sécurité définies, formant une barrière de contrôle entre des zones de confiance différentes"
        correcte: true
        explication: "Un pare-feu autorise ou bloque des connexions selon des critères comme l'adresse IP, le port ou le protocole, contrôlant ainsi les échanges entre des zones de niveaux de confiance différents, comme le réseau interne et Internet."
      - texte: "Chiffrer automatiquement tout le trafic réseau qui le traverse"
        correcte: false
        explication: "Le chiffrement du trafic n'est pas la fonction principale d'un pare-feu classique, dont le rôle est le filtrage selon des règles, pas nécessairement le chiffrement."
      - texte: "Attribuer des adresses IP aux équipements du réseau"
        correcte: false
        explication: "L'attribution d'adresses IP est le rôle de DHCP, sans rapport avec la fonction de filtrage assurée par un pare-feu."
      - texte: "Sauvegarder automatiquement les données transitant sur le réseau"
        correcte: false
        explication: "La sauvegarde de données est une fonction distincte, sans rapport avec le rôle de filtrage réseau d'un pare-feu."
  - question: "Quelle est la différence entre un pare-feu à filtrage de paquets simple et un pare-feu à état (stateful firewall) ?"
    type: "unique"
    reponses:
      - texte: "Un pare-feu à état garde en mémoire le contexte des connexions déjà établies, lui permettant d'autoriser automatiquement le trafic retour légitime d'une connexion initiée en interne, contrairement à un filtrage de paquets simple qui examine chaque paquet indépendamment sans mémoire de contexte"
        correcte: true
        explication: "Un pare-feu à état simplifie considérablement l'écriture des règles (pas besoin d'autoriser explicitement chaque trafic de retour) tout en offrant une meilleure sécurité, puisqu'il peut détecter un paquet de retour qui ne correspond à aucune connexion légitimement établie."
      - texte: "Un pare-feu à filtrage simple chiffre le trafic, contrairement au pare-feu à état"
        correcte: false
        explication: "Ni l'un ni l'autre type de pare-feu classique ne chiffre nécessairement le trafic par défaut ; leur différence porte sur la prise en compte ou non du contexte de connexion."
      - texte: "Les deux types de pare-feu ont un fonctionnement strictement identique"
        correcte: false
        explication: "Leur prise en compte ou non du contexte des connexions diffère nettement, ce n'est pas une équivalence stricte."
      - texte: "Un pare-feu à état ne peut filtrer que le trafic sortant, jamais entrant"
        correcte: false
        explication: "Un pare-feu à état peut filtrer aussi bien le trafic entrant que sortant, ce n'est pas une limitation à une seule direction."
  - question: "Qu'est-ce qu'un VLAN (Virtual LAN) permet de faire sur un réseau local ?"
    type: "unique"
    reponses:
      - texte: "Segmenter logiquement un réseau physique en plusieurs réseaux distincts, isolant le trafic entre groupes d'équipements sans nécessiter un câblage physique séparé pour chacun"
        correcte: true
        explication: "Un VLAN permet par exemple de séparer logiquement le trafic du service comptabilité de celui du service technique sur le même commutateur physique, chaque VLAN formant son propre domaine de diffusion isolé des autres."
      - texte: "Chiffrer automatiquement tout le trafic réseau du VLAN"
        correcte: false
        explication: "Un VLAN segmente le trafic, il ne le chiffre pas automatiquement ; le chiffrement nécessiterait un mécanisme distinct comme un VPN."
      - texte: "Augmenter automatiquement la bande passante totale disponible sur le réseau"
        correcte: false
        explication: "Un VLAN segmente logiquement le trafic, il n'augmente pas en lui-même la bande passante physique totale disponible sur le réseau."
      - texte: "Remplacer complètement le besoin d'un pare-feu entre les segments"
        correcte: false
        explication: "Un VLAN segmente le trafic de couche 2, mais un contrôle plus fin entre segments (comme un pare-feu ou des ACL) reste souvent nécessaire pour une sécurité complète entre VLAN."
  - question: "Pourquoi segmenter un réseau en plusieurs VLAN constitue-t-il une mesure de sécurité utile, au-delà de la simple organisation logique du trafic ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'elle limite la propagation d'une compromission : un attaquant ayant accès à un segment ne peut pas automatiquement atteindre les autres segments sans franchir des contrôles supplémentaires"
        correcte: true
        explication: "Sans segmentation, un poste compromis sur un réseau plat pourrait potentiellement communiquer directement avec n'importe quel autre équipement du même réseau ; la segmentation en VLAN limite cette portée par défaut, un attaquant devant franchir des contrôles supplémentaires (comme un routage inter-VLAN filtré) pour atteindre un autre segment."
      - texte: "Parce qu'elle chiffre automatiquement les données de chaque segment séparément"
        correcte: false
        explication: "La segmentation en VLAN ne chiffre rien par elle-même ; son intérêt de sécurité vient de la limitation de la portée d'une compromission potentielle, pas du chiffrement."
      - texte: "Parce qu'elle élimine complètement tout risque de cyberattaque sur le réseau"
        correcte: false
        explication: "La segmentation réduit certains risques mais n'élimine jamais totalement la possibilité d'une cyberattaque ; c'est une mesure de réduction de risque, pas une garantie absolue."
      - texte: "Parce qu'elle est légalement obligatoire pour tout réseau d'entreprise"
        correcte: false
        explication: "Il n'existe pas d'obligation légale universelle de segmenter tout réseau d'entreprise ; c'est une bonne pratique de sécurité recommandée, pas une exigence réglementaire généralisée dans tous les contextes."
  - question: "Qu'est-ce qu'un VPN (réseau privé virtuel) apporte principalement lors d'un accès distant au réseau de l'entreprise ?"
    type: "unique"
    reponses:
      - texte: "Une connexion chiffrée à travers un réseau non sûr (comme Internet), protégeant la confidentialité du trafic entre l'utilisateur distant et le réseau de l'entreprise"
        correcte: true
        explication: "Un VPN établit un tunnel chiffré, empêchant un tiers en écoute sur le réseau intermédiaire (par exemple un Wi-Fi public) de lire ou modifier facilement le trafic de l'utilisateur accédant à distance aux ressources internes de l'entreprise."
      - texte: "Une augmentation garantie de la vitesse de connexion Internet de l'utilisateur"
        correcte: false
        explication: "Un VPN n'augmente pas la vitesse de connexion ; il peut même légèrement la réduire à cause du chiffrement et du détour par un serveur intermédiaire."
      - texte: "La suppression complète du besoin d'authentification pour accéder aux ressources internes"
        correcte: false
        explication: "Un VPN sécurise le transport des données, il ne supprime pas le besoin d'authentification pour accéder ensuite aux ressources internes protégées."
      - texte: "Un antivirus intégré qui protège l'ordinateur distant contre tous les types de malwares"
        correcte: false
        explication: "Un VPN sécurise la connexion réseau, il ne remplace pas la fonction d'un antivirus dédié à la détection de logiciels malveillants sur le poste."
  - question: "Quelle est la différence entre un VPN de site à site et un VPN d'accès distant ?"
    type: "unique"
    reponses:
      - texte: "Un VPN de site à site relie deux réseaux entiers via leurs passerelles respectives, un VPN d'accès distant relie un utilisateur individuel isolé au réseau de l'entreprise"
        correcte: true
        explication: "Le VPN de site à site fonctionne en permanence entre deux passerelles pour interconnecter deux sites complets, tandis que le VPN d'accès distant est typiquement établi à la demande depuis le poste d'un utilisateur nomade vers une passerelle d'entreprise."
      - texte: "Un VPN de site à site nécessite obligatoirement un client logiciel installé sur chaque poste utilisateur"
        correcte: false
        explication: "C'est l'inverse : c'est le VPN d'accès distant qui repose généralement sur un client logiciel installé sur le poste de l'utilisateur, tandis que le VPN de site à site est transparent pour les utilisateurs, géré au niveau des passerelles."
      - texte: "Un VPN d'accès distant relie toujours deux data centers entre eux"
        correcte: false
        explication: "Relier deux data centers entre eux est un cas d'usage typique du VPN de site à site, pas du VPN d'accès distant destiné à un utilisateur individuel."
      - texte: "Il n'existe aucune différence pratique entre les deux types de VPN"
        correcte: false
        explication: "Leur architecture et leur cas d'usage diffèrent nettement (interconnexion de sites contre accès individuel distant), ce n'est pas une distinction purement nominale."
  - question: "Qu'est-ce qu'un scan de ports permet à un attaquant (ou un testeur autorisé) de découvrir sur une machine cible ?"
    type: "unique"
    reponses:
      - texte: "Quels services réseau sont actifs et à l'écoute sur la machine, en testant systématiquement une plage de ports"
        correcte: true
        explication: "En envoyant des requêtes vers différents ports, un scan révèle quels services sont potentiellement exposés (un serveur web, du SSH), une information de base pour orienter la suite d'une reconnaissance réseau."
      - texte: "Le mot de passe administrateur de la machine cible"
        correcte: false
        explication: "Un scan de ports révèle les services actifs, pas les mots de passe des comptes présents sur la machine."
      - texte: "Le contenu complet des fichiers stockés sur la machine"
        correcte: false
        explication: "Un scan de ports identifie les services réseau actifs, il ne donne pas directement accès au contenu des fichiers stockés sur la machine."
      - texte: "L'identité complète de l'administrateur de la machine"
        correcte: false
        explication: "Un scan de ports fournit une information technique sur les services réseau exposés, pas l'identité personnelle de l'administrateur du système."
  - question: "Quel comportement réseau caractéristique un système de détection d'intrusion (IDS) surveille-t-il typiquement pour repérer un scan de ports en cours ?"
    type: "unique"
    reponses:
      - texte: "Un très grand nombre de tentatives de connexion vers de nombreux ports différents d'une même machine, en peu de temps, depuis une même source"
        correcte: true
        explication: "Un trafic normal cible généralement un nombre restreint de ports connus et utiles ; un balayage systématique de nombreux ports différents en peu de temps constitue un motif caractéristique typique d'un scan de reconnaissance, détectable par des règles adaptées."
      - texte: "Une seule connexion HTTPS normale vers un serveur web légitime"
        correcte: false
        explication: "Une connexion HTTPS unique et normale ne présente pas le motif caractéristique d'un scan de ports, qui se distingue par de nombreuses tentatives vers des ports variés."
      - texte: "Le simple fait qu'un utilisateur consulte une page web depuis son domicile"
        correcte: false
        explication: "Cette activité de navigation normale ne correspond en rien au motif caractéristique d'un scan de ports."
      - texte: "L'envoi d'un unique e-mail professionnel standard"
        correcte: false
        explication: "L'envoi d'un e-mail normal n'a aucun rapport avec le motif réseau caractéristique recherché pour détecter un scan de ports."
  - question: "Qu'est-ce qu'une zone démilitarisée (DMZ) dans une architecture réseau d'entreprise ?"
    type: "unique"
    reponses:
      - texte: "Un segment réseau intermédiaire, isolé à la fois du réseau interne et d'Internet, où sont placés les services devant être accessibles depuis l'extérieur"
        correcte: true
        explication: "En plaçant les services exposés (comme un serveur web public) dans une DMZ plutôt que directement dans le réseau interne, une compromission éventuelle de ce service reste plus difficilement exploitable pour atteindre les ressources internes sensibles, grâce aux règles de pare-feu séparant chaque zone."
      - texte: "Un réseau réservé exclusivement aux communications militaires"
        correcte: false
        explication: "Le terme DMZ, emprunté par analogie au vocabulaire militaire, désigne en informatique un segment réseau intermédiaire d'entreprise, sans usage militaire réel."
      - texte: "Un type de VPN utilisé pour les connexions à distance des employés"
        correcte: false
        explication: "Une DMZ est un segment réseau isolé, distinct d'un VPN qui est un mécanisme de connexion chiffrée à distance."
      - texte: "Une zone du réseau où aucune règle de sécurité ne s'applique"
        correcte: false
        explication: "C'est l'inverse : une DMZ est justement fortement contrôlée par des règles de pare-feu strictes entre elle et les autres zones, pas une zone sans aucune règle."
  - question: "Pourquoi placer un serveur web public accessible depuis Internet dans une DMZ, plutôt que directement dans le réseau interne de l'entreprise ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'un serveur exposé publiquement présente un risque de compromission plus élevé, et l'isoler dans une DMZ limite l'impact d'une éventuelle compromission sur le reste du réseau interne sensible"
        correcte: true
        explication: "Si ce serveur web était directement connecté au réseau interne et venait à être compromis, un attaquant pourrait potentiellement l'utiliser comme point de départ pour atteindre directement des ressources internes sensibles ; la DMZ ajoute une barrière supplémentaire entre ce serveur exposé et le cœur du réseau interne."
      - texte: "Parce qu'un serveur placé en DMZ devient automatiquement plus rapide à répondre aux requêtes"
        correcte: false
        explication: "Le placement en DMZ est une décision de sécurité architecturale, sans rapport avec un gain de performance de réponse du serveur."
      - texte: "Parce que la loi interdit d'héberger un serveur public dans le réseau interne d'une entreprise"
        correcte: false
        explication: "Il n'existe pas d'interdiction légale de ce type ; le placement en DMZ est une bonne pratique de sécurité architecturale, pas une obligation légale."
      - texte: "Parce qu'un serveur en DMZ ne peut techniquement pas être piraté"
        correcte: false
        explication: "Un serveur en DMZ reste vulnérable à une compromission potentielle ; la DMZ limite l'impact d'une telle compromission sur le reste du réseau, elle ne rend pas le serveur totalement invulnérable."
  - question: "Quel est l'objectif d'une architecture réseau segmentée en couches (accès, distribution, cœur), au-delà de la simple séparation en VLAN ?"
    type: "unique"
    reponses:
      - texte: "Structurer le réseau par fonction, facilitant sa gestion, sa sécurisation et sa capacité à évoluer, plutôt que de tout mélanger dans une topologie plate difficile à maintenir et à sécuriser à mesure que le réseau grandit"
        correcte: true
        explication: "En séparant les rôles (les commutateurs proches des utilisateurs, l'agrégation de trafic avec application de politiques, le cœur dédié au transport rapide), il devient plus facile de localiser une panne, d'appliquer des règles de sécurité cohérentes et de faire évoluer le réseau que dans une architecture plate où tous les équipements jouent des rôles mélangés."
      - texte: "Réduire automatiquement le coût total des équipements réseau, quelle que soit la taille du réseau"
        correcte: false
        explication: "Ce modèle hiérarchique n'est pas systématiquement moins coûteux ; son intérêt principal est organisationnel et opérationnel, pas une garantie de réduction de coût."
      - texte: "Éliminer complètement le besoin de VLAN dans le réseau"
        correcte: false
        explication: "Les VLAN restent pleinement utilisés et pertinents dans une architecture en couches, notamment gérés au niveau de la couche accès ; ce modèle ne supprime pas ce besoin."
      - texte: "Supprimer complètement tout risque de panne réseau"
        correcte: false
        explication: "Aucune architecture ne supprime totalement le risque de panne ; ce modèle vise plutôt à mieux localiser et limiter l'impact d'une panne, pas à l'éliminer entièrement."
  - question: "Pourquoi une architecture réseau avec des liens redondants entre équipements nécessite-t-elle un protocole comme Spanning Tree (STP) pour éviter les boucles ?"
    type: "unique"
    reponses:
      - texte: "Parce que sans mécanisme anti-boucle, une trame de diffusion (broadcast) pourrait circuler indéfiniment entre les liens redondants, se multipliant jusqu'à saturer le réseau (tempête de broadcast)"
        correcte: true
        explication: "STP calcule un arbre logique sans boucle en désactivant certains ports redondants, prévenant les tempêtes de broadcast tout en conservant les liens physiques redondants disponibles en cas de panne d'un lien actif."
      - texte: "Parce que les liens redondants chiffrent automatiquement le trafic qui les traverse"
        correcte: false
        explication: "Les liens redondants n'ont pas de rapport avec le chiffrement du trafic ; STP concerne la prévention des boucles de commutation, pas la sécurité cryptographique."
      - texte: "Parce qu'un réseau sans liens redondants fonctionne toujours plus mal qu'un réseau avec des liens redondants"
        correcte: false
        explication: "L'absence de redondance n'est pas en soi un problème de boucle ; c'est justement la présence de liens redondants sans mécanisme anti-boucle qui crée le risque de tempête de broadcast que STP prévient."
      - texte: "Parce que STP attribue automatiquement des adresses IP à tous les équipements du réseau"
        correcte: false
        explication: "STP opère en couche 2 pour prévenir les boucles de commutation, sans rapport avec l'attribution d'adresses IP, qui relève de DHCP à la couche réseau."
  - question: "Qu'est-ce que le NAT (Network Address Translation) permet de faire, en résumé ?"
    type: "unique"
    reponses:
      - texte: "Traduire des adresses IP privées en une (ou plusieurs) adresse IP publique, permettant à des hôtes internes non routables sur Internet de communiquer malgré tout avec l'extérieur"
        correcte: true
        explication: "Le NAT permet à des hôtes utilisant des adresses privées (comme 192.168.x.x) de communiquer sur Internet via une adresse publique partagée, un mécanisme central de la plupart des passerelles Internet grand public comme professionnelles."
      - texte: "Chiffrer automatiquement tout le trafic réseau sortant vers Internet"
        correcte: false
        explication: "Le NAT traduit des adresses, il ne chiffre rien par lui-même ; le chiffrement du trafic nécessiterait un mécanisme distinct comme un VPN ou HTTPS."
      - texte: "Attribuer automatiquement des adresses IP aux hôtes du réseau local"
        correcte: false
        explication: "C'est le rôle de DHCP, une fonction distincte du NAT même si souvent combinée sur le même équipement de passerelle."
      - texte: "Résoudre des noms de domaine en adresses IP"
        correcte: false
        explication: "C'est le rôle de DNS, sans rapport avec la traduction d'adresses réalisée par le NAT."
  - question: "Pourquoi une adresse IP privée (comme 192.168.1.10) ne peut-elle pas être directement contactée depuis Internet, sans mécanisme comme le NAT ?"
    type: "unique"
    reponses:
      - texte: "Parce que les plages d'adresses privées définies par la RFC 1918 ne sont, par convention, jamais routées par les routeurs d'Internet, restant valides uniquement au sein d'un réseau local"
        correcte: true
        explication: "Les routeurs d'Internet sont configurés pour ignorer ou rejeter le trafic destiné à ces plages réservées, ce qui garantit qu'une même adresse privée peut être réutilisée sans conflit dans de nombreux réseaux locaux différents à travers le monde, à condition qu'un mécanisme comme le NAT gère la traduction vers une adresse publique pour sortir vers Internet."
      - texte: "Parce que les adresses privées sont techniquement plus courtes que les adresses publiques"
        correcte: false
        explication: "Les adresses privées et publiques IPv4 ont exactement le même format sur 32 bits ; ce n'est pas une différence de longueur qui explique leur non-routabilité, mais une convention de routage."
      - texte: "Parce qu'une adresse privée change automatiquement toutes les heures"
        correcte: false
        explication: "Une adresse privée peut rester stable dans le temps (statique) ou changer selon la configuration DHCP, mais ce n'est pas une rotation automatique horaire qui explique sa non-routabilité sur Internet."
      - texte: "Parce que le protocole HTTP interdit l'usage d'adresses privées"
        correcte: false
        explication: "HTTP fonctionne parfaitement avec des adresses privées au sein d'un réseau local ; la non-routabilité sur Internet est une convention de routage réseau, sans rapport avec le protocole applicatif HTTP."
  - question: "Qu'est-ce qu'une liste de contrôle d'accès (ACL) sur un routeur permet de faire ?"
    type: "unique"
    reponses:
      - texte: "Filtrer le trafic réseau selon des critères définis (adresse source, destination, port, protocole), autorisant ou bloquant certains flux entre segments réseau"
        correcte: true
        explication: "Une ACL complète souvent la segmentation en VLAN en ajoutant un contrôle plus fin sur quel trafic est autorisé à circuler entre deux segments, plutôt que de tout autoriser ou tout bloquer globalement entre eux."
      - texte: "Chiffrer automatiquement tout le trafic filtré par la liste"
        correcte: false
        explication: "Une ACL filtre le trafic selon des critères définis, elle ne le chiffre pas ; le chiffrement nécessiterait un mécanisme distinct."
      - texte: "Attribuer des adresses IP dynamiques aux équipements du réseau"
        correcte: false
        explication: "L'attribution d'adresses IP est le rôle de DHCP, sans rapport avec la fonction de filtrage d'une ACL."
      - texte: "Synchroniser l'horloge de tous les équipements du réseau"
        correcte: false
        explication: "La synchronisation d'horloge est assurée par un protocole comme NTP, sans rapport avec la fonction de filtrage de trafic d'une ACL."
  - question: "Pourquoi une entreprise choisirait-elle de segmenter son réseau Wi-Fi invité (guest network) du réseau interne des employés ?"
    type: "unique"
    reponses:
      - texte: "Pour permettre aux visiteurs d'accéder à Internet sans leur donner accès aux ressources internes sensibles de l'entreprise, comme des serveurs de fichiers"
        correcte: true
        explication: "En isolant le trafic des invités du réseau interne, l'entreprise limite le risque qu'un appareil visiteur potentiellement compromis n'atteigne des ressources sensibles internes, une application concrète du principe de segmentation réseau."
      - texte: "Pour offrir un débit Internet plus rapide aux invités qu'aux employés"
        correcte: false
        explication: "L'objectif principal de cette séparation est la sécurité par isolation, pas nécessairement d'offrir un débit supérieur aux visiteurs."
      - texte: "Pour éviter de payer un abonnement Internet supplémentaire pour les invités"
        correcte: false
        explication: "Le réseau invité utilise généralement la même connexion Internet que le réseau principal ; l'intérêt de la séparation est la sécurité, pas une question d'abonnement distinct."
      - texte: "Pour empêcher totalement les invités de se connecter à Internet"
        correcte: false
        explication: "C'est l'inverse : le réseau invité vise justement à leur permettre un accès Internet, tout en les isolant des ressources internes sensibles."
---
