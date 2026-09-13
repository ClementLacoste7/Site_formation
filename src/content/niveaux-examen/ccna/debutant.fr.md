---
titre: "CCNA : Débutant"
description: "Les bases indispensables : modèle OSI/TCP-IP, adressage IPv4, rôle des équipements, câblage et protocoles courants."
slug: "debutant"
examen: "ccna"
niveau: "debutant"
ordre: 1
nombreQuizz: 3
questionsParQuizz: 20
publie: true
pool:
  - question: "Combien de couches compte le modèle OSI ?"
    type: "unique"
    reponses:
      - texte: "7"
        correcte: true
        explication: "Le modèle OSI compte 7 couches : physique, liaison de données, réseau, transport, session, présentation, application."
      - texte: "4"
        correcte: false
        explication: "4 couches correspond au modèle TCP/IP simplifié, pas au modèle OSI qui en compte 7."
      - texte: "5"
        correcte: false
        explication: "Le modèle OSI compte 7 couches, pas 5."
      - texte: "9"
        correcte: false
        explication: "Le modèle OSI compte 7 couches, pas 9."
  - question: "À quelle couche du modèle OSI appartient un commutateur (switch) qui prend ses décisions sur l'adresse MAC ?"
    type: "unique"
    reponses:
      - texte: "Couche 2, liaison de données"
        correcte: true
        explication: "L'adresse MAC est une information de couche 2 (liaison de données) : un switch classique commute les trames sur cette base."
      - texte: "Couche 3, réseau"
        correcte: false
        explication: "La couche 3 traite les adresses IP, c'est le rôle d'un routeur, pas d'un switch classique basé sur les adresses MAC."
      - texte: "Couche 1, physique"
        correcte: false
        explication: "La couche physique ne connaît que des signaux électriques ou optiques, pas d'adresses MAC."
      - texte: "Couche 4, transport"
        correcte: false
        explication: "La couche transport gère les ports (TCP/UDP), pas les adresses MAC."
  - question: "Quelle est la plage d'adresses IPv4 privées de classe C la plus couramment utilisée en petit réseau ?"
    type: "unique"
    reponses:
      - texte: "192.168.0.0 à 192.168.255.255"
        correcte: true
        explication: "192.168.0.0/16 est la plage privée de classe C, très utilisée dans les réseaux domestiques et petites entreprises."
      - texte: "10.0.0.0 à 10.255.255.255"
        correcte: false
        explication: "Cette plage est une plage privée, mais de classe A, plus vaste, typiquement utilisée en grande entreprise."
      - texte: "172.16.0.0 à 172.31.255.255"
        correcte: false
        explication: "Cette plage est une plage privée, mais de classe B."
      - texte: "224.0.0.0 à 239.255.255.255"
        correcte: false
        explication: "Cette plage correspond aux adresses multicast, pas à une plage privée unicast."
  - question: "Que signifie l'acronyme DHCP ?"
    type: "unique"
    reponses:
      - texte: "Dynamic Host Configuration Protocol"
        correcte: true
        explication: "DHCP attribue automatiquement une configuration IP (adresse, masque, passerelle, DNS) aux hôtes d'un réseau."
      - texte: "Domain Host Control Protocol"
        correcte: false
        explication: "Ce développé n'existe pas : l'acronyme correct est Dynamic Host Configuration Protocol."
      - texte: "Direct Hardware Communication Protocol"
        correcte: false
        explication: "Ce développé n'existe pas : l'acronyme correct est Dynamic Host Configuration Protocol."
      - texte: "Data Host Configuration Process"
        correcte: false
        explication: "Ce développé n'existe pas : l'acronyme correct est Dynamic Host Configuration Protocol."
  - question: "Quel port TCP est utilisé par défaut par HTTPS ?"
    type: "unique"
    reponses:
      - texte: "443"
        correcte: true
        explication: "HTTPS utilise le port TCP 443 par défaut."
      - texte: "80"
        correcte: false
        explication: "Le port 80 est celui de HTTP non chiffré, pas de HTTPS."
      - texte: "21"
        correcte: false
        explication: "Le port 21 est celui de FTP (canal de contrôle)."
      - texte: "22"
        correcte: false
        explication: "Le port 22 est celui de SSH."
  - question: "Quel équipement relie plusieurs réseaux IP différents et prend ses décisions de transmission sur l'adresse IP de destination ?"
    type: "unique"
    reponses:
      - texte: "Un routeur"
        correcte: true
        explication: "Un routeur fonctionne à la couche 3 et achemine les paquets entre réseaux différents en se basant sur l'adresse IP de destination."
      - texte: "Un switch"
        correcte: false
        explication: "Un switch relie des équipements au sein d'un même réseau local en se basant sur l'adresse MAC, pas l'adresse IP."
      - texte: "Un hub"
        correcte: false
        explication: "Un hub se contente de répéter le signal électrique sur tous ses ports, sans aucune intelligence de couche 2 ou 3."
      - texte: "Un point d'accès Wi-Fi"
        correcte: false
        explication: "Un point d'accès relie des clients sans fil à un réseau filaire existant, il ne route pas entre réseaux IP différents."
  - question: "Combien de bits compose une adresse IPv4 ?"
    type: "unique"
    reponses:
      - texte: "32"
        correcte: true
        explication: "Une adresse IPv4 est codée sur 32 bits, répartis en 4 octets de 8 bits."
      - texte: "64"
        correcte: false
        explication: "32 bits pour IPv4 ; 128 bits pour IPv6, pas 64."
      - texte: "128"
        correcte: false
        explication: "128 bits correspond à une adresse IPv6, pas IPv4."
      - texte: "16"
        correcte: false
        explication: "Une adresse IPv4 est codée sur 32 bits, pas 16."
  - question: "Quel masque de sous-réseau correspond à la notation CIDR /24 ?"
    type: "unique"
    reponses:
      - texte: "255.255.255.0"
        correcte: true
        explication: "/24 signifie 24 bits à 1 pour la partie réseau, soit 255.255.255.0 en notation décimale pointée."
      - texte: "255.255.0.0"
        correcte: false
        explication: "255.255.0.0 correspond à /16, pas /24."
      - texte: "255.0.0.0"
        correcte: false
        explication: "255.0.0.0 correspond à /8, pas /24."
      - texte: "255.255.255.128"
        correcte: false
        explication: "255.255.255.128 correspond à /25, pas /24."
  - question: "Quel protocole traduit un nom de domaine en adresse IP ?"
    type: "unique"
    reponses:
      - texte: "DNS"
        correcte: true
        explication: "DNS (Domain Name System) résout un nom de domaine en adresse IP."
      - texte: "DHCP"
        correcte: false
        explication: "DHCP attribue une configuration IP, il ne traduit pas de nom de domaine."
      - texte: "ARP"
        correcte: false
        explication: "ARP traduit une adresse IP en adresse MAC sur le réseau local, pas un nom de domaine."
      - texte: "FTP"
        correcte: false
        explication: "FTP est un protocole de transfert de fichiers, sans rapport avec la résolution de noms."
  - question: "Quelle commande Cisco IOS affiche la table de routage ?"
    type: "unique"
    reponses:
      - texte: "show ip route"
        correcte: true
        explication: "show ip route affiche la table de routage IPv4 d'un routeur Cisco."
      - texte: "show interfaces"
        correcte: false
        explication: "show interfaces affiche l'état des interfaces, pas la table de routage."
      - texte: "show running-config"
        correcte: false
        explication: "show running-config affiche la configuration active, pas spécifiquement la table de routage."
      - texte: "show vlan brief"
        correcte: false
        explication: "show vlan brief affiche les VLAN configurés, pas la table de routage."
  - question: "Que fait le protocole ARP ?"
    type: "unique"
    reponses:
      - texte: "Il associe une adresse IP à une adresse MAC sur le réseau local"
        correcte: true
        explication: "ARP (Address Resolution Protocol) permet à un hôte de découvrir l'adresse MAC correspondant à une adresse IP du même réseau local."
      - texte: "Il attribue automatiquement une adresse IP à un hôte"
        correcte: false
        explication: "C'est le rôle de DHCP, pas d'ARP."
      - texte: "Il chiffre le trafic réseau"
        correcte: false
        explication: "ARP ne chiffre rien : il résout des adresses, ce n'est pas un protocole de sécurité."
      - texte: "Il route les paquets entre réseaux distants"
        correcte: false
        explication: "ARP fonctionne uniquement sur le réseau local, il ne route pas entre réseaux distants."
  - question: "Une adresse IPv4 se terminant par .255 dans un réseau /24 correspond généralement à :"
    type: "unique"
    reponses:
      - texte: "L'adresse de broadcast du sous-réseau"
        correcte: true
        explication: "Dans un /24, la dernière adresse (hôte à tous les bits à 1) est réservée à la diffusion (broadcast) du sous-réseau."
      - texte: "L'adresse réseau du sous-réseau"
        correcte: false
        explication: "L'adresse réseau est celle avec tous les bits d'hôte à 0, pas à 1 (ex. .0 dans un /24 classique)."
      - texte: "La passerelle par défaut, toujours"
        correcte: false
        explication: "La passerelle peut être configurée sur n'importe quelle adresse valide, ce n'est pas systématiquement .255."
      - texte: "Une adresse invalide qui ne doit jamais être utilisée"
        correcte: false
        explication: "Elle est valide en tant qu'adresse de broadcast, seulement non attribuable à un hôte."
  - question: "Quel câble utiliser pour relier directement deux ordinateurs sans switch, avec du matériel Ethernet ancien (non auto-MDIX) ?"
    type: "unique"
    reponses:
      - texte: "Un câble croisé (crossover)"
        correcte: true
        explication: "Un câble croisé inverse les paires d'émission et de réception, nécessaire pour relier deux équipements identiques sans switch sur du matériel ancien."
      - texte: "Un câble droit (straight-through)"
        correcte: false
        explication: "Un câble droit sert à relier deux équipements différents (PC vers switch), pas deux équipements identiques sans switch sur du matériel ancien."
      - texte: "Un câble coaxial"
        correcte: false
        explication: "Le câble coaxial n'est pas le support Ethernet standard actuel."
      - texte: "Une fibre optique monomode"
        correcte: false
        explication: "La fibre optique est utilisée pour de longues distances ou du haut débit, pas pour ce cas simple de deux PC directement reliés."
  - question: "Quel est le rôle principal d'un pare-feu (firewall) ?"
    type: "unique"
    reponses:
      - texte: "Filtrer le trafic réseau selon des règles de sécurité"
        correcte: true
        explication: "Un pare-feu autorise ou bloque le trafic réseau en fonction de règles définies (adresses, ports, protocoles)."
      - texte: "Attribuer des adresses IP aux hôtes"
        correcte: false
        explication: "C'est le rôle de DHCP, pas d'un pare-feu."
      - texte: "Traduire les noms de domaine en adresses IP"
        correcte: false
        explication: "C'est le rôle de DNS, pas d'un pare-feu."
      - texte: "Amplifier le signal réseau sur de longues distances"
        correcte: false
        explication: "Ce rôle correspond à un répéteur, pas à un pare-feu."
  - question: "Combien d'adresses IP utilisables pour des hôtes contient un sous-réseau /30 ?"
    type: "unique"
    reponses:
      - texte: "2"
        correcte: true
        explication: "Un /30 contient 4 adresses au total, dont une adresse réseau et une adresse de broadcast, soit 2 adresses utilisables."
      - texte: "4"
        correcte: false
        explication: "4 est le nombre total d'adresses du sous-réseau, pas le nombre d'adresses utilisables (il faut retirer réseau et broadcast)."
      - texte: "8"
        correcte: false
        explication: "8 adresses utilisables correspondrait à un sous-réseau plus grand qu'un /30."
      - texte: "1"
        correcte: false
        explication: "Un /30 offre 2 adresses utilisables, pas 1."
  - question: "Quelle topologie physique relie tous les équipements à un point central unique, comme un switch ?"
    type: "unique"
    reponses:
      - texte: "En étoile"
        correcte: true
        explication: "La topologie en étoile relie chaque équipement à un point central (switch ou hub), la plus courante dans les réseaux modernes."
      - texte: "En bus"
        correcte: false
        explication: "La topologie en bus relie tous les équipements sur un même câble partagé, sans point central."
      - texte: "En anneau"
        correcte: false
        explication: "La topologie en anneau relie chaque équipement à ses deux voisins, formant une boucle fermée."
      - texte: "Maillée"
        correcte: false
        explication: "La topologie maillée relie chaque équipement à plusieurs autres directement, sans point central unique."
  - question: "Quel protocole de la couche transport garantit la livraison fiable des données, avec accusés de réception ?"
    type: "unique"
    reponses:
      - texte: "TCP"
        correcte: true
        explication: "TCP (Transmission Control Protocol) établit une connexion, accuse réception des segments et retransmet les données perdues."
      - texte: "UDP"
        correcte: false
        explication: "UDP est un protocole sans connexion, sans garantie de livraison ni accusé de réception."
      - texte: "IP"
        correcte: false
        explication: "IP est un protocole de couche réseau, sans garantie de livraison fiable."
      - texte: "ICMP"
        correcte: false
        explication: "ICMP sert aux messages de contrôle et de diagnostic (comme ping), pas au transport fiable de données applicatives."
  - question: "À quoi sert la commande ping ?"
    type: "unique"
    reponses:
      - texte: "À tester la connectivité réseau vers une adresse IP en mesurant le temps de réponse"
        correcte: true
        explication: "ping envoie des requêtes ICMP Echo Request et mesure le temps de réponse, un outil de base pour tester la connectivité."
      - texte: "À afficher la table de routage d'un routeur"
        correcte: false
        explication: "C'est le rôle de la commande show ip route, pas de ping."
      - texte: "À attribuer une adresse IP à une interface"
        correcte: false
        explication: "L'attribution d'adresse IP se fait via la configuration de l'interface (ou DHCP), pas via ping."
      - texte: "À chiffrer une connexion réseau"
        correcte: false
        explication: "ping ne chiffre rien, c'est un simple outil de diagnostic de connectivité."
  - question: "Quelle affirmation décrit correctement une adresse MAC ?"
    type: "unique"
    reponses:
      - texte: "C'est une adresse physique sur 48 bits, unique à chaque carte réseau"
        correcte: true
        explication: "Une adresse MAC est codée sur 48 bits (6 octets), attribuée par le fabricant de la carte réseau et normalement unique."
      - texte: "Elle change automatiquement à chaque connexion au réseau"
        correcte: false
        explication: "Une adresse MAC est en principe fixe, gravée par le fabricant, contrairement à une adresse IP qui peut changer dynamiquement."
      - texte: "Elle sert à identifier un réseau entier, pas un équipement"
        correcte: false
        explication: "Une adresse MAC identifie un équipement précis, pas un réseau entier."
      - texte: "Elle est codée sur 32 bits comme une adresse IPv4"
        correcte: false
        explication: "Une adresse MAC est codée sur 48 bits, pas 32."
  - question: "Dans le modèle OSI, quelle unité de données (PDU) est traitée à la couche transport ?"
    type: "unique"
    reponses:
      - texte: "Le segment"
        correcte: true
        explication: "La couche transport manipule des segments (TCP) ou des datagrammes (UDP), terme générique souvent simplifié en segment au niveau CCNA."
      - texte: "La trame"
        correcte: false
        explication: "La trame est l'unité de la couche liaison de données (couche 2), pas de la couche transport."
      - texte: "Le paquet"
        correcte: false
        explication: "Le paquet est l'unité de la couche réseau (couche 3), pas de la couche transport."
      - texte: "Le bit"
        correcte: false
        explication: "Le bit est l'unité de la couche physique (couche 1), pas de la couche transport."
  - question: "Quelle unité de données est traitée à la couche réseau (couche 3) du modèle OSI ?"
    type: "unique"
    reponses:
      - texte: "Le paquet"
        correcte: true
        explication: "La couche réseau manipule des paquets, encapsulant les segments de la couche transport avec les adresses IP source et destination."
      - texte: "La trame"
        correcte: false
        explication: "La trame est l'unité de la couche liaison de données, pas de la couche réseau."
      - texte: "Le segment"
        correcte: false
        explication: "Le segment est l'unité de la couche transport, pas de la couche réseau."
      - texte: "Le signal"
        correcte: false
        explication: "Le signal correspond à la couche physique, pas à la couche réseau."
  - question: "Quelle unité de données est traitée à la couche liaison de données (couche 2) du modèle OSI ?"
    type: "unique"
    reponses:
      - texte: "La trame"
        correcte: true
        explication: "La couche liaison de données encapsule les paquets dans des trames, en ajoutant les adresses MAC source et destination."
      - texte: "Le paquet"
        correcte: false
        explication: "Le paquet appartient à la couche réseau, pas à la couche liaison de données."
      - texte: "Le segment"
        correcte: false
        explication: "Le segment appartient à la couche transport, pas à la couche liaison de données."
      - texte: "Le message"
        correcte: false
        explication: "Ce terme générique n'est pas l'unité standard utilisée pour la couche liaison de données au sens OSI."
  - question: "Quelle est l'adresse IP de bouclage (loopback) standard en IPv4 ?"
    type: "unique"
    reponses:
      - texte: "127.0.0.1"
        correcte: true
        explication: "127.0.0.1 (et plus largement tout le bloc 127.0.0.0/8) est réservé au bouclage local, pour tester la pile IP de la machine elle-même."
      - texte: "0.0.0.0"
        correcte: false
        explication: "0.0.0.0 représente une adresse non spécifiée ou une route par défaut, pas le bouclage."
      - texte: "255.255.255.255"
        correcte: false
        explication: "255.255.255.255 est l'adresse de broadcast limité, pas le bouclage."
      - texte: "169.254.0.1"
        correcte: false
        explication: "169.254.0.0/16 est la plage APIPA, attribuée automatiquement en l'absence de serveur DHCP, pas le bouclage."
  - question: "Une machine Windows affiche une adresse IP commençant par 169.254. Que peut-on en déduire ?"
    type: "unique"
    reponses:
      - texte: "Elle n'a pas réussi à contacter de serveur DHCP et s'est auto-attribué une adresse APIPA"
        correcte: true
        explication: "169.254.0.0/16 est la plage APIPA (Automatic Private IP Addressing), utilisée par défaut quand aucun serveur DHCP ne répond."
      - texte: "Elle est configurée avec une adresse IP publique valide"
        correcte: false
        explication: "169.254.0.0/16 est une plage privée réservée à l'auto-configuration, jamais une adresse publique routable sur Internet."
      - texte: "Elle utilise IPv6 plutôt qu'IPv4"
        correcte: false
        explication: "169.254.x.x est une adresse IPv4 classique, sans rapport avec IPv6."
      - texte: "Elle est correctement configurée par un serveur DHCP"
        correcte: false
        explication: "Une adresse APIPA signale au contraire l'échec de la découverte DHCP, pas une attribution DHCP réussie."
  - question: "Quel est le masque par défaut d'une adresse IPv4 de classe A ?"
    type: "unique"
    reponses:
      - texte: "255.0.0.0"
        correcte: true
        explication: "La classe A utilise par défaut un masque /8, soit 255.0.0.0."
      - texte: "255.255.0.0"
        correcte: false
        explication: "255.255.0.0 (/16) est le masque par défaut de la classe B, pas de la classe A."
      - texte: "255.255.255.0"
        correcte: false
        explication: "255.255.255.0 (/24) est le masque par défaut de la classe C, pas de la classe A."
      - texte: "255.255.255.252"
        correcte: false
        explication: "255.255.255.252 (/30) n'est le masque par défaut d'aucune classe historique."
  - question: "Quel est le masque par défaut d'une adresse IPv4 de classe B ?"
    type: "unique"
    reponses:
      - texte: "255.255.0.0"
        correcte: true
        explication: "La classe B utilise par défaut un masque /16, soit 255.255.0.0."
      - texte: "255.0.0.0"
        correcte: false
        explication: "255.0.0.0 (/8) est le masque par défaut de la classe A, pas de la classe B."
      - texte: "255.255.255.0"
        correcte: false
        explication: "255.255.255.0 (/24) est le masque par défaut de la classe C, pas de la classe B."
      - texte: "255.255.255.255"
        correcte: false
        explication: "Ce masque ne correspond à aucune classe par défaut, il désigne une adresse hôte unique."
  - question: "À quelle plage d'adresses correspond la classe A en IPv4 ?"
    type: "unique"
    reponses:
      - texte: "1.0.0.0 à 126.255.255.255"
        correcte: true
        explication: "La classe A couvre les adresses dont le premier octet va de 1 à 126 (127 étant réservé au bouclage)."
      - texte: "128.0.0.0 à 191.255.255.255"
        correcte: false
        explication: "Cette plage correspond à la classe B, pas à la classe A."
      - texte: "192.0.0.0 à 223.255.255.255"
        correcte: false
        explication: "Cette plage correspond à la classe C, pas à la classe A."
      - texte: "224.0.0.0 à 239.255.255.255"
        correcte: false
        explication: "Cette plage correspond à la classe D, réservée au multicast, pas à la classe A."
  - question: "Quel type de communication réseau envoie des données à un seul destinataire précis ?"
    type: "unique"
    reponses:
      - texte: "Unicast"
        correcte: true
        explication: "Unicast désigne une communication entre un émetteur et un unique destinataire identifié."
      - texte: "Broadcast"
        correcte: false
        explication: "Broadcast envoie les données à tous les hôtes du réseau local, pas à un seul destinataire."
      - texte: "Multicast"
        correcte: false
        explication: "Multicast envoie les données à un groupe d'hôtes abonnés, pas à un seul destinataire."
      - texte: "Anycast"
        correcte: false
        explication: "Anycast achemine vers le membre le plus proche d'un groupe, pas systématiquement vers un destinataire unique fixe."
  - question: "Quel type de communication réseau envoie des données à tous les hôtes d'un même réseau local ?"
    type: "unique"
    reponses:
      - texte: "Broadcast"
        correcte: true
        explication: "Broadcast diffuse les données à tous les hôtes du réseau local, par exemple l'adresse de broadcast d'un sous-réseau."
      - texte: "Unicast"
        correcte: false
        explication: "Unicast cible un seul destinataire précis, pas tous les hôtes du réseau."
      - texte: "Multicast"
        correcte: false
        explication: "Multicast cible un groupe d'hôtes abonnés, pas nécessairement tous les hôtes du réseau."
      - texte: "Loopback"
        correcte: false
        explication: "Le loopback boucle le trafic vers la machine elle-même, sans rapport avec la diffusion réseau."
  - question: "Quelle est la principale différence entre un hub et un switch ?"
    type: "unique"
    reponses:
      - texte: "Le switch apprend les adresses MAC et n'envoie une trame que vers le bon port, le hub répète le signal sur tous ses ports"
        correcte: true
        explication: "Un hub fonctionne en couche 1 et diffuse le signal reçu sur tous les ports (un seul domaine de collision) ; un switch fonctionne en couche 2 et cible le port du destinataire grâce à sa table d'adresses MAC."
      - texte: "Le hub est plus rapide que le switch"
        correcte: false
        explication: "C'est l'inverse en pratique : un switch offre de meilleures performances car il évite les collisions inutiles, contrairement à un hub."
      - texte: "Le switch fonctionne uniquement en Wi-Fi, le hub uniquement en filaire"
        correcte: false
        explication: "Les deux sont des équipements filaires classiques ; leur différence porte sur le mode de transmission (diffusion contre commutation ciblée), pas sur le support Wi-Fi ou filaire."
      - texte: "Il n'y a aucune différence, ce sont deux noms pour le même équipement"
        correcte: false
        explication: "Leur fonctionnement diffère nettement, le switch étant bien plus intelligent et efficace que le hub."
  - question: "Quel est le rôle d'un point d'accès Wi-Fi (access point) ?"
    type: "unique"
    reponses:
      - texte: "Permettre à des clients sans fil de rejoindre un réseau filaire existant"
        correcte: true
        explication: "Un point d'accès relie les clients Wi-Fi au réseau câblé, agissant comme un pont entre les deux mondes."
      - texte: "Attribuer des adresses IP à tous les hôtes du réseau"
        correcte: false
        explication: "C'est le rôle de DHCP, pas spécifiquement celui d'un point d'accès (même si un routeur Wi-Fi grand public combine souvent les deux fonctions)."
      - texte: "Router le trafic entre Internet et le réseau local"
        correcte: false
        explication: "C'est le rôle d'un routeur ; un point d'accès pur ne fait qu'étendre la connectivité sans fil, sans fonction de routage."
      - texte: "Filtrer le trafic selon des règles de sécurité"
        correcte: false
        explication: "C'est le rôle d'un pare-feu, pas d'un point d'accès."
  - question: "Que signifie SSID dans le contexte du Wi-Fi ?"
    type: "unique"
    reponses:
      - texte: "Le nom du réseau sans fil, diffusé ou masqué par le point d'accès"
        correcte: true
        explication: "SSID (Service Set Identifier) est le nom qui identifie un réseau Wi-Fi, affiché lors de la recherche de réseaux disponibles."
      - texte: "Le mot de passe du réseau Wi-Fi"
        correcte: false
        explication: "Le mot de passe est une information distincte, liée à la méthode de sécurité (WPA2 par exemple), pas au SSID lui-même."
      - texte: "L'adresse MAC du point d'accès"
        correcte: false
        explication: "L'adresse MAC du point d'accès est une information technique distincte, appelée BSSID, pas le SSID."
      - texte: "La bande de fréquence utilisée (2,4 GHz ou 5 GHz)"
        correcte: false
        explication: "La bande de fréquence est un paramètre radio distinct du nom du réseau."
      
  - question: "Quel protocole de sécurité Wi-Fi est aujourd'hui recommandé plutôt que WEP, jugé obsolète et non sûr ?"
    type: "unique"
    reponses:
      - texte: "WPA2 (ou WPA3)"
        correcte: true
        explication: "WEP est cassé depuis longtemps et ne doit plus être utilisé ; WPA2, et de plus en plus WPA3, sont les standards recommandés."
      - texte: "WEP"
        correcte: false
        explication: "WEP est justement le protocole obsolète à éviter, facilement cassable avec des outils courants."
      - texte: "FTP"
        correcte: false
        explication: "FTP est un protocole de transfert de fichiers, sans rapport avec la sécurité du Wi-Fi."
      - texte: "SNMP"
        correcte: false
        explication: "SNMP sert à la supervision d'équipements réseau, sans rapport avec la sécurité du Wi-Fi."
  - question: "Quelle commande Cisco IOS permet de passer du mode d'exécution utilisateur au mode privilégié ?"
    type: "unique"
    reponses:
      - texte: "enable"
        correcte: true
        explication: "enable fait passer du mode utilisateur (invite >) au mode privilégié (invite #), qui donne accès à davantage de commandes."
      - texte: "configure terminal"
        correcte: false
        explication: "configure terminal fait passer du mode privilégié au mode de configuration globale, une étape après enable."
      - texte: "exit"
        correcte: false
        explication: "exit fait revenir en arrière d'un niveau, l'inverse de ce qui est demandé."
      - texte: "write memory"
        correcte: false
        explication: "write memory sauvegarde la configuration, sans rapport avec le changement de mode."
  - question: "Quelle commande Cisco IOS permet de passer du mode privilégié au mode de configuration globale ?"
    type: "unique"
    reponses:
      - texte: "configure terminal"
        correcte: true
        explication: "configure terminal (souvent abrégé conf t) fait passer du mode privilégié (#) au mode de configuration globale (config)#."
      - texte: "enable"
        correcte: false
        explication: "enable fait passer du mode utilisateur au mode privilégié, une étape avant configure terminal."
      - texte: "show running-config"
        correcte: false
        explication: "show running-config affiche la configuration active, sans changer de mode de configuration."
      - texte: "reload"
        correcte: false
        explication: "reload redémarre l'équipement, sans rapport avec le passage en mode de configuration."
  - question: "Quelle commande sauvegarde la configuration active (running-config) comme configuration de démarrage (startup-config) sur un équipement Cisco ?"
    type: "unique"
    reponses:
      - texte: "copy running-config startup-config"
        correcte: true
        explication: "Cette commande copie la configuration actuellement active en mémoire vive vers la mémoire NVRAM, pour qu'elle soit conservée après redémarrage."
      - texte: "show running-config"
        correcte: false
        explication: "show running-config affiche seulement la configuration active, sans la sauvegarder."
      - texte: "no shutdown"
        correcte: false
        explication: "no shutdown active une interface, sans rapport avec la sauvegarde de configuration."
      - texte: "reload"
        correcte: false
        explication: "reload redémarre l'équipement ; sans sauvegarde préalable, les changements non enregistrés seraient perdus."
  - question: "Sur un équipement Cisco, quelle commande active une interface qui a été désactivée ?"
    type: "unique"
    reponses:
      - texte: "no shutdown"
        correcte: true
        explication: "Les interfaces sont désactivées (shutdown) par défaut sur certains équipements ; no shutdown les active."
      - texte: "shutdown"
        correcte: false
        explication: "shutdown désactive l'interface, c'est l'inverse de l'action demandée."
      - texte: "no interface"
        correcte: false
        explication: "Cette commande n'active pas une interface ; elle n'a pas ce rôle dans la syntaxe Cisco IOS standard."
      - texte: "enable interface"
        correcte: false
        explication: "Cette syntaxe n'existe pas pour activer une interface ; la commande correcte est no shutdown."
  - question: "Quelle commande affiche un résumé de l'état (up/down) et de l'adresse IP de toutes les interfaces d'un routeur Cisco ?"
    type: "unique"
    reponses:
      - texte: "show ip interface brief"
        correcte: true
        explication: "show ip interface brief liste chaque interface avec son adresse IP et son état, un des premiers réflexes de diagnostic."
      - texte: "show ip route"
        correcte: false
        explication: "show ip route affiche la table de routage, pas un résumé des interfaces."
      - texte: "show vlan brief"
        correcte: false
        explication: "show vlan brief affiche les VLAN configurés sur un switch, pas l'état des interfaces d'un routeur."
      - texte: "show version"
        correcte: false
        explication: "show version affiche des informations sur le matériel et la version d'IOS, pas l'état des interfaces."
  - question: "Que signifie l'acronyme LAN ?"
    type: "unique"
    reponses:
      - texte: "Local Area Network"
        correcte: true
        explication: "Un LAN (réseau local) couvre une zone géographique restreinte, comme un bâtiment ou un site."
      - texte: "Long Access Network"
        correcte: false
        explication: "Ce développé n'existe pas ; l'acronyme correct est Local Area Network."
      - texte: "Line Attached Node"
        correcte: false
        explication: "Ce développé n'existe pas ; l'acronyme correct est Local Area Network."
      - texte: "Large Area Node"
        correcte: false
        explication: "Ce développé n'existe pas ; l'acronyme correct est Local Area Network."
  - question: "Que signifie l'acronyme WAN ?"
    type: "unique"
    reponses:
      - texte: "Wide Area Network"
        correcte: true
        explication: "Un WAN (réseau étendu) relie des sites géographiquement éloignés, par exemple via Internet ou une liaison opérateur."
      - texte: "Wireless Access Network"
        correcte: false
        explication: "Ce développé n'existe pas ; l'acronyme correct est Wide Area Network."
      - texte: "Web Access Node"
        correcte: false
        explication: "Ce développé n'existe pas ; l'acronyme correct est Wide Area Network."
      - texte: "Wired Area Node"
        correcte: false
        explication: "Ce développé n'existe pas ; l'acronyme correct est Wide Area Network."
  - question: "Quelle est la principale différence entre un LAN et un WAN ?"
    type: "unique"
    reponses:
      - texte: "Un LAN couvre une zone restreinte (un bâtiment, un site), un WAN relie des sites distants entre eux"
        correcte: true
        explication: "L'échelle géographique est la distinction principale : LAN pour un site unique, WAN pour interconnecter des sites éloignés."
      - texte: "Un LAN utilise uniquement le Wi-Fi, un WAN uniquement le câble"
        correcte: false
        explication: "Les deux types de réseaux peuvent utiliser des supports filaires ou sans fil ; la distinction porte sur la portée géographique, pas le support physique."
      - texte: "Un WAN est toujours plus rapide qu'un LAN"
        correcte: false
        explication: "C'est généralement l'inverse : un LAN offre typiquement des débits plus élevés qu'un WAN, plus coûteux à grande distance."
      - texte: "Il n'y a aucune différence technique entre les deux"
        correcte: false
        explication: "La portée géographique et les technologies employées diffèrent nettement entre un LAN et un WAN."
  - question: "Quel port TCP est utilisé par défaut par SSH ?"
    type: "unique"
    reponses:
      - texte: "22"
        correcte: true
        explication: "SSH (Secure Shell) utilise le port TCP 22 par défaut, pour l'administration distante sécurisée."
      - texte: "23"
        correcte: false
        explication: "Le port 23 est celui de Telnet, l'ancêtre non chiffré de SSH."
      - texte: "21"
        correcte: false
        explication: "Le port 21 est celui du canal de contrôle FTP."
      - texte: "25"
        correcte: false
        explication: "Le port 25 est celui de SMTP, utilisé pour l'envoi d'e-mails."
  - question: "Quel port TCP est utilisé par défaut par Telnet ?"
    type: "unique"
    reponses:
      - texte: "23"
        correcte: true
        explication: "Telnet utilise le port TCP 23 par défaut, un protocole d'administration distante non chiffré, aujourd'hui déconseillé."
      - texte: "22"
        correcte: false
        explication: "Le port 22 est celui de SSH, la version chiffrée et sécurisée qui remplace Telnet."
      - texte: "80"
        correcte: false
        explication: "Le port 80 est celui de HTTP, sans rapport avec Telnet."
      - texte: "53"
        correcte: false
        explication: "Le port 53 est celui de DNS, sans rapport avec Telnet."
  - question: "Pourquoi préfère-t-on SSH à Telnet pour administrer un équipement à distance ?"
    type: "unique"
    reponses:
      - texte: "SSH chiffre la session, y compris les identifiants, alors que Telnet transmet tout en clair"
        correcte: true
        explication: "Telnet envoie les identifiants et les commandes en clair sur le réseau, interceptables par un tiers ; SSH chiffre l'ensemble de la session."
      - texte: "Telnet ne fonctionne que sur les switches, SSH uniquement sur les routeurs"
        correcte: false
        explication: "Les deux protocoles fonctionnent aussi bien sur des switches que des routeurs ; leur différence porte sur la sécurité, pas le type d'équipement."
      - texte: "SSH est plus rapide mais moins fiable que Telnet"
        correcte: false
        explication: "La différence essentielle entre les deux protocoles est la sécurité (chiffrement), pas la vitesse ou la fiabilité de la connexion."
      - texte: "Il n'y a aucune différence pratique entre les deux"
        correcte: false
        explication: "La différence de sécurité est majeure : Telnet est aujourd'hui déconseillé au profit de SSH."
  - question: "Quel port UDP est utilisé par le serveur DHCP pour répondre à un client ?"
    type: "unique"
    reponses:
      - texte: "68"
        correcte: true
        explication: "Le serveur DHCP écoute sur le port UDP 67, et répond au client sur le port UDP 68."
      - texte: "67"
        correcte: false
        explication: "Le port UDP 67 est celui utilisé par le serveur DHCP pour recevoir les requêtes des clients, pas pour répondre."
      - texte: "53"
        correcte: false
        explication: "Le port 53 est celui de DNS, sans rapport avec DHCP."
      - texte: "80"
        correcte: false
        explication: "Le port 80 est celui de HTTP, sans rapport avec DHCP."
  - question: "Quel port TCP est utilisé par défaut par le protocole SMTP pour l'envoi d'e-mails ?"
    type: "unique"
    reponses:
      - texte: "25"
        correcte: true
        explication: "SMTP (Simple Mail Transfer Protocol) utilise traditionnellement le port TCP 25 pour l'envoi de courrier électronique."
      - texte: "110"
        correcte: false
        explication: "Le port 110 est celui de POP3, utilisé pour la réception d'e-mails, pas l'envoi."
      - texte: "143"
        correcte: false
        explication: "Le port 143 est celui de IMAP, utilisé pour la réception d'e-mails, pas l'envoi."
      - texte: "443"
        correcte: false
        explication: "Le port 443 est celui de HTTPS, sans rapport direct avec l'envoi d'e-mails par SMTP."
  - question: "Quels sont les deux protocoles courants pour la réception d'e-mails (relève de boîte aux lettres) ?"
    type: "unique"
    reponses:
      - texte: "POP3 et IMAP"
        correcte: true
        explication: "POP3 télécharge et supprime généralement les messages du serveur, IMAP les synchronise en les laissant sur le serveur : deux approches classiques de relève d'e-mails."
      - texte: "SMTP et FTP"
        correcte: false
        explication: "SMTP sert à l'envoi d'e-mails, FTP au transfert de fichiers : ni l'un ni l'autre n'est un protocole de relève de boîte aux lettres."
      - texte: "DNS et DHCP"
        correcte: false
        explication: "DNS résout des noms de domaine, DHCP attribue des adresses IP : aucun des deux ne gère la messagerie."
      - texte: "HTTP et HTTPS"
        correcte: false
        explication: "HTTP et HTTPS servent au web, même si la messagerie web (webmail) les utilise en façade ; ce ne sont pas les protocoles de relève dédiés."
  - question: "Quelle bande de fréquence Wi-Fi offre généralement une portée plus grande mais un débit potentiel plus faible que l'autre ?"
    type: "unique"
    reponses:
      - texte: "2,4 GHz"
        correcte: true
        explication: "La bande 2,4 GHz traverse mieux les obstacles et porte plus loin, au prix d'un débit maximal et d'une capacité en canaux plus faibles que la bande 5 GHz."
      - texte: "5 GHz"
        correcte: false
        explication: "La bande 5 GHz offre généralement un débit plus élevé mais une portée plus réduite que la bande 2,4 GHz."
      - texte: "60 GHz"
        correcte: false
        explication: "La bande 60 GHz (utilisée par certaines technologies très haut débit courte portée) offre une portée encore plus réduite, pas plus grande."
      - texte: "900 MHz"
        correcte: false
        explication: "Cette bande n'est pas une bande Wi-Fi standard grand public."
  - question: "Quel est le rôle principal d'un modem dans une connexion Internet grand public ?"
    type: "unique"
    reponses:
      - texte: "Convertir le signal du réseau de l'opérateur (câble, fibre, ligne téléphonique) en signal exploitable par le réseau local"
        correcte: true
        explication: "Un modem (modulateur-démodulateur) adapte le signal entre le support de l'opérateur et l'équipement du réseau local du client."
      - texte: "Attribuer des adresses IP privées aux appareils du réseau local"
        correcte: false
        explication: "C'est le rôle du serveur DHCP, souvent intégré à la box mais fonctionnellement distinct du modem."
      - texte: "Filtrer le trafic selon des règles de sécurité"
        correcte: false
        explication: "C'est le rôle d'un pare-feu, une fonction parfois intégrée à la box mais distincte de la fonction modem."
      - texte: "Diffuser un réseau Wi-Fi"
        correcte: false
        explication: "C'est le rôle du point d'accès, une fonction parfois intégrée à la box mais distincte de la fonction modem."
  - question: "Que désigne le terme bande passante (bandwidth) en réseau ?"
    type: "unique"
    reponses:
      - texte: "La capacité maximale théorique de transmission d'un lien, généralement exprimée en bits par seconde"
        correcte: true
        explication: "La bande passante représente le débit maximal qu'un lien peut théoriquement supporter, distinct du débit réellement observé."
      - texte: "Le temps que met un paquet pour atteindre sa destination"
        correcte: false
        explication: "Ce délai correspond à la latence, pas à la bande passante."
      - texte: "Le nombre d'équipements connectés à un switch"
        correcte: false
        explication: "Ce nombre n'a pas de rapport direct avec la définition de la bande passante."
      - texte: "La distance maximale que peut parcourir un signal"
        correcte: false
        explication: "La portée d'un signal est une caractéristique distincte de sa bande passante."
  - question: "Que désigne le terme latence en réseau ?"
    type: "unique"
    reponses:
      - texte: "Le délai que met une donnée pour parcourir le réseau entre la source et la destination"
        correcte: true
        explication: "La latence mesure le temps de transit d'une donnée sur le réseau, souvent exprimée en millisecondes."
      - texte: "Le débit maximal théorique d'un lien réseau"
        correcte: false
        explication: "Le débit maximal théorique correspond à la bande passante, pas à la latence."
      - texte: "Le nombre de collisions détectées sur un segment réseau"
        correcte: false
        explication: "Le nombre de collisions est une métrique distincte, sans rapport direct avec la définition de la latence."
      - texte: "La taille maximale d'une trame Ethernet"
        correcte: false
        explication: "La taille maximale d'une trame (MTU) est un paramètre distinct de la latence."
  - question: "Quelle est la différence entre le mode full-duplex et le mode half-duplex sur une liaison réseau ?"
    type: "unique"
    reponses:
      - texte: "En full-duplex, les deux extrémités peuvent émettre et recevoir simultanément ; en half-duplex, une seule direction à la fois"
        correcte: true
        explication: "Le full-duplex permet une communication bidirectionnelle simultanée, contrairement au half-duplex qui alterne émission et réception."
      - texte: "Le half-duplex est toujours plus rapide que le full-duplex"
        correcte: false
        explication: "C'est l'inverse en pratique : le full-duplex offre généralement de meilleures performances en évitant les collisions liées à l'alternance."
      - texte: "Le full-duplex ne fonctionne qu'en Wi-Fi"
        correcte: false
        explication: "Le full-duplex est couramment utilisé sur les liaisons filaires Ethernet modernes, pas seulement en Wi-Fi."
      - texte: "Il n'y a aucune différence pratique entre les deux modes"
        correcte: false
        explication: "La différence de fonctionnement (simultané ou alterné) a un impact réel sur les performances et les collisions."
  - question: "Quelle affirmation décrit correctement le modèle client-serveur ?"
    type: "unique"
    reponses:
      - texte: "Un ou plusieurs serveurs centralisent des ressources ou services, que des clients consomment à la demande"
        correcte: true
        explication: "Le modèle client-serveur repose sur une séparation claire des rôles : le serveur fournit une ressource ou un service, le client la sollicite."
      - texte: "Chaque machine du réseau joue à la fois le rôle de client et de serveur de façon symétrique"
        correcte: false
        explication: "Cette description correspond plutôt au modèle pair-à-pair (peer-to-peer), pas au modèle client-serveur."
      - texte: "Ce modèle n'existe qu'avec des protocoles chiffrés"
        correcte: false
        explication: "Le modèle client-serveur est un principe d'architecture générale, indépendant du chiffrement employé."
      - texte: "Ce modèle ne s'applique qu'aux réseaux sans fil"
        correcte: false
        explication: "Le modèle client-serveur s'applique aussi bien aux réseaux filaires que sans fil, ce n'est pas une distinction pertinente ici."
  - question: "Dans un réseau pair-à-pair (peer-to-peer), comment sont réparties les ressources ?"
    type: "unique"
    reponses:
      - texte: "Chaque machine peut à la fois fournir et consommer des ressources, sans serveur central dédié"
        correcte: true
        explication: "Le modèle pair-à-pair répartit les rôles de client et de serveur entre toutes les machines participantes, sans centralisation."
      - texte: "Un unique serveur centralise obligatoirement toutes les ressources"
        correcte: false
        explication: "Cette centralisation caractérise plutôt le modèle client-serveur, pas le modèle pair-à-pair."
      - texte: "Il ne peut y avoir que deux machines connectées en même temps"
        correcte: false
        explication: "Un réseau pair-à-pair peut réunir un nombre quelconque de machines, pas seulement deux."
      - texte: "Ce modèle nécessite obligatoirement une adresse IP publique fixe"
        correcte: false
        explication: "Le pair-à-pair peut fonctionner avec des adresses privées et des mécanismes de découverte, sans exiger d'IP publique fixe."
  - question: "Que mesure le terme débit (throughput) par rapport à la bande passante ?"
    type: "unique"
    reponses:
      - texte: "Le débit réellement observé sur le lien, souvent inférieur à la bande passante théorique maximale"
        correcte: true
        explication: "La bande passante est une capacité maximale théorique ; le débit (throughput) est ce qui est effectivement mesuré, influencé par la congestion, les erreurs ou le matériel."
      - texte: "Le débit est toujours strictement supérieur à la bande passante"
        correcte: false
        explication: "C'est l'inverse : le débit réel ne peut pas dépasser la bande passante théorique du lien, il en est généralement inférieur."
      - texte: "Débit et bande passante désignent exactement la même mesure"
        correcte: false
        explication: "Ce sont deux notions liées mais distinctes : l'une est théorique (bande passante), l'autre est observée en pratique (débit)."
      - texte: "Le débit ne concerne que les réseaux sans fil"
        correcte: false
        explication: "Le débit s'applique aussi bien aux réseaux filaires que sans fil, ce n'est pas une notion propre au Wi-Fi."
  - question: "Quelle commande Cisco IOS affiche la version du système d'exploitation et des informations matérielles sur l'équipement ?"
    type: "unique"
    reponses:
      - texte: "show version"
        correcte: true
        explication: "show version affiche la version d'IOS, le modèle du matériel, la mémoire disponible et d'autres informations système."
      - texte: "show running-config"
        correcte: false
        explication: "show running-config affiche la configuration active de l'équipement, pas ses informations matérielles ou de version."
      - texte: "show ip route"
        correcte: false
        explication: "show ip route affiche la table de routage, sans rapport avec la version du système."
      - texte: "show interfaces"
        correcte: false
        explication: "show interfaces affiche l'état détaillé des interfaces, pas la version du système."
  - question: "Sur un switch Cisco, quelle commande affiche la table d'adresses MAC apprises ?"
    type: "unique"
    reponses:
      - texte: "show mac address-table"
        correcte: true
        explication: "show mac address-table liste les adresses MAC apprises par le switch et le port associé à chacune."
      - texte: "show ip route"
        correcte: false
        explication: "show ip route affiche la table de routage d'un routeur, pas la table d'adresses MAC d'un switch."
      - texte: "show vlan brief"
        correcte: false
        explication: "show vlan brief affiche les VLAN configurés, pas la table d'adresses MAC."
      - texte: "show cdp neighbors"
        correcte: false
        explication: "show cdp neighbors affiche les équipements Cisco voisins découverts, pas la table d'adresses MAC."
  - question: "Que fait la commande hostname sur un équipement Cisco ?"
    type: "unique"
    reponses:
      - texte: "Elle définit le nom de l'équipement, affiché dans l'invite de commande"
        correcte: true
        explication: "hostname R1 (par exemple) renomme l'équipement en R1, ce qui se reflète immédiatement dans l'invite de commande."
      - texte: "Elle affiche l'adresse IP de l'équipement"
        correcte: false
        explication: "L'affichage de l'adresse IP se fait avec show ip interface brief, pas avec hostname."
      - texte: "Elle redémarre l'équipement"
        correcte: false
        explication: "Le redémarrage se fait avec la commande reload, pas hostname."
      - texte: "Elle sauvegarde la configuration"
        correcte: false
        explication: "La sauvegarde de configuration se fait avec copy running-config startup-config, pas hostname."
  - question: "Quel est le rôle du protocole NTP dans un réseau ?"
    type: "unique"
    reponses:
      - texte: "Synchroniser l'horloge des équipements sur une source de temps commune"
        correcte: true
        explication: "NTP (Network Time Protocol) permet à des équipements de synchroniser leur horloge, essentiel pour corréler des journaux d'événements par exemple."
      - texte: "Attribuer des adresses IP dynamiques"
        correcte: false
        explication: "C'est le rôle de DHCP, pas de NTP."
      - texte: "Chiffrer les communications entre deux hôtes"
        correcte: false
        explication: "NTP ne chiffre rien par défaut, son rôle est uniquement la synchronisation temporelle."
      - texte: "Router les paquets entre réseaux distants"
        correcte: false
        explication: "Le routage est assuré par des protocoles de routage ou des routes statiques, sans rapport avec NTP."
  - question: "Quel type de câble utilise la lumière pour transmettre des données, offrant de grandes distances et une immunité aux interférences électromagnétiques ?"
    type: "unique"
    reponses:
      - texte: "La fibre optique"
        correcte: true
        explication: "La fibre optique transmet des données sous forme de lumière, permettant de longues distances sans dégradation par les interférences électriques."
      - texte: "Le câble à paires torsadées (UTP)"
        correcte: false
        explication: "Le câble UTP transmet des signaux électriques, sensible aux interférences électromagnétiques et limité en distance."
      - texte: "Le câble coaxial"
        correcte: false
        explication: "Le câble coaxial transmet aussi un signal électrique, pas de la lumière."
      - texte: "Le câble téléphonique classique (RJ11)"
        correcte: false
        explication: "Ce câble transmet un signal électrique analogique, sans rapport avec la transmission optique."
  - question: "Quelle catégorie de câble à paires torsadées (UTP) est couramment utilisée pour du Gigabit Ethernet ?"
    type: "unique"
    reponses:
      - texte: "Cat 5e ou Cat 6"
        correcte: true
        explication: "Les câbles Cat 5e et Cat 6 supportent le Gigabit Ethernet sur des distances courantes en réseau local."
      - texte: "Cat 1"
        correcte: false
        explication: "Cat 1 est une catégorie ancienne, destinée à la téléphonie analogique, très en dessous des besoins du Gigabit Ethernet."
      - texte: "Cat 3"
        correcte: false
        explication: "Cat 3 supporte des débits bien plus faibles, insuffisants pour du Gigabit Ethernet fiable."
      - texte: "RG-6"
        correcte: false
        explication: "RG-6 désigne un câble coaxial, pas une catégorie de câble à paires torsadées UTP."
  - question: "Quel connecteur est standard pour les câbles Ethernet à paires torsadées ?"
    type: "unique"
    reponses:
      - texte: "RJ45"
        correcte: true
        explication: "RJ45 est le connecteur standard des câbles Ethernet à paires torsadées, utilisé sur les cartes réseau, switches et routeurs."
      - texte: "RJ11"
        correcte: false
        explication: "RJ11 est le connecteur utilisé pour la téléphonie analogique classique, pas pour l'Ethernet."
      - texte: "USB-C"
        correcte: false
        explication: "USB-C est un connecteur d'alimentation et de données générique, pas le standard Ethernet à paires torsadées."
      - texte: "SC"
        correcte: false
        explication: "Le connecteur SC est utilisé pour la fibre optique, pas pour le câblage cuivre à paires torsadées."
  - question: "Qu'est-ce qu'un domaine de collision ?"
    type: "unique"
    reponses:
      - texte: "Un segment réseau où deux transmissions simultanées peuvent entrer en collision"
        correcte: true
        explication: "Un domaine de collision regroupe les équipements partageant le même support, où une collision peut survenir si deux transmissions ont lieu en même temps."
      - texte: "Un groupe d'adresses IP appartenant au même sous-réseau"
        correcte: false
        explication: "Cette description correspond à un sous-réseau IP, pas à un domaine de collision, qui est un concept de couche 1/2."
      - texte: "L'ensemble des VLAN configurés sur un switch"
        correcte: false
        explication: "L'ensemble des VLAN d'un switch n'est pas la définition d'un domaine de collision."
      - texte: "La zone couverte par un point d'accès Wi-Fi"
        correcte: false
        explication: "Cette zone de couverture radio n'est pas la définition technique d'un domaine de collision."
  - question: "Comment un switch réduit-il les domaines de collision par rapport à un hub ?"
    type: "unique"
    reponses:
      - texte: "Chaque port d'un switch constitue son propre domaine de collision"
        correcte: true
        explication: "Contrairement au hub où tous les ports partagent un seul domaine de collision, chaque port d'un switch (en full-duplex notamment) forme son propre domaine de collision distinct."
      - texte: "Un switch supprime totalement le concept de domaine de collision pour tout le réseau, y compris entre VLAN différents"
        correcte: false
        explication: "Un switch réduit les domaines de collision port par port, mais ne modifie pas les domaines de broadcast, qui restent partagés au sein d'un même VLAN."
      - texte: "Un switch fusionne tous les ports en un seul domaine de collision, comme un hub"
        correcte: false
        explication: "C'est l'inverse : un switch sépare les domaines de collision port par port, contrairement au hub qui les fusionne tous."
      - texte: "Un switch n'a aucun effet sur les domaines de collision"
        correcte: false
        explication: "La segmentation des domaines de collision est justement l'un des principaux avantages du switch par rapport au hub."
  - question: "Qu'est-ce qu'un domaine de broadcast ?"
    type: "unique"
    reponses:
      - texte: "L'ensemble des équipements qui reçoivent une trame de diffusion (broadcast) envoyée par l'un d'entre eux"
        correcte: true
        explication: "Un domaine de broadcast regroupe tous les hôtes atteints par une trame de diffusion, typiquement délimité par les routeurs (ou les VLAN)."
      - texte: "L'ensemble des équipements reliés au même câble coaxial"
        correcte: false
        explication: "Cette description est trop spécifique à une technologie de câblage particulière, pas à la définition générale d'un domaine de broadcast."
      - texte: "Un groupe de serveurs partageant la même adresse MAC"
        correcte: false
        explication: "Deux équipements distincts ne partagent normalement jamais la même adresse MAC ; ce n'est pas la définition d'un domaine de broadcast."
      - texte: "La zone géographique couverte par un opérateur télécom"
        correcte: false
        explication: "Cette notion géographique n'a pas de rapport avec la définition technique d'un domaine de broadcast."
  - question: "Quel équipement délimite les domaines de broadcast par défaut ?"
    type: "unique"
    reponses:
      - texte: "Le routeur"
        correcte: true
        explication: "Un routeur ne relaie pas les broadcasts d'un réseau vers un autre par défaut, ce qui en fait la frontière naturelle des domaines de broadcast."
      - texte: "Le hub"
        correcte: false
        explication: "Un hub relaie tout, y compris les broadcasts, sans jamais les filtrer ni les délimiter."
      - texte: "Le switch, sans VLAN"
        correcte: false
        explication: "Un switch sans VLAN transmet les broadcasts à tous ses ports, il ne délimite donc pas de domaine de broadcast à lui seul."
      - texte: "Le répéteur"
        correcte: false
        explication: "Un répéteur amplifie et relaie le signal sans distinction de type de trame, il ne délimite aucun domaine de broadcast."
  - question: "Que fait un répéteur (repeater) dans un réseau ?"
    type: "unique"
    reponses:
      - texte: "Il régénère et amplifie le signal pour prolonger la distance de transmission"
        correcte: true
        explication: "Un répéteur compense l'affaiblissement du signal sur une longue distance en le régénérant, sans intelligence de couche 2 ou 3."
      - texte: "Il attribue des adresses IP dynamiques aux hôtes"
        correcte: false
        explication: "C'est le rôle de DHCP, pas d'un répéteur."
      - texte: "Il filtre le trafic selon l'adresse MAC de destination"
        correcte: false
        explication: "Ce filtrage par adresse MAC est le rôle d'un switch, pas d'un simple répéteur qui ne fait qu'amplifier le signal."
      - texte: "Il route les paquets entre deux réseaux IP différents"
        correcte: false
        explication: "C'est le rôle d'un routeur, pas d'un répéteur."
  - question: "Quelle affirmation décrit correctement une adresse IP publique par rapport à une adresse IP privée ?"
    type: "unique"
    reponses:
      - texte: "Une adresse publique est routable directement sur Internet, une adresse privée ne l'est pas et nécessite une traduction (NAT) pour sortir vers Internet"
        correcte: true
        explication: "Les adresses privées (comme 192.168.x.x) ne sont pas routées sur Internet ; une passerelle effectue une traduction d'adresse (NAT) pour permettre l'accès à Internet."
      - texte: "Une adresse privée est toujours plus rapide qu'une adresse publique"
        correcte: false
        explication: "La vitesse ne dépend pas du caractère public ou privé de l'adresse, mais du lien et du chemin réseau emprunté."
      - texte: "Une adresse publique et une adresse privée utilisent des formats de bits différents"
        correcte: false
        explication: "Les adresses publiques et privées IPv4 utilisent exactement le même format sur 32 bits, seule leur plage de valeurs et leur usage diffèrent."
      - texte: "Il n'existe aucune différence pratique entre les deux types d'adresses"
        correcte: false
        explication: "La routabilité sur Internet est une différence pratique majeure entre adresse publique et adresse privée."
  - question: "Quelles sont les trois plages d'adresses IPv4 privées définies par la RFC 1918 ?"
    type: "unique"
    reponses:
      - texte: "10.0.0.0/8, 172.16.0.0/12 et 192.168.0.0/16"
        correcte: true
        explication: "La RFC 1918 réserve ces trois plages à un usage privé, non routable directement sur Internet."
      - texte: "127.0.0.0/8, 169.254.0.0/16 et 224.0.0.0/4"
        correcte: false
        explication: "Ces plages correspondent respectivement au bouclage, à l'auto-configuration APIPA et au multicast, pas aux plages privées RFC 1918."
      - texte: "1.0.0.0/8, 2.0.0.0/8 et 3.0.0.0/8"
        correcte: false
        explication: "Ces plages sont des plages publiques allouées, pas les plages privées définies par la RFC 1918."
      - texte: "192.0.0.0/24, 198.18.0.0/15 et 203.0.113.0/24"
        correcte: false
        explication: "Ces plages ont des usages réservés spécifiques (tests, benchmarks, documentation), différents des trois plages privées RFC 1918."
  - question: "Qu'est-ce que le NAT (Network Address Translation) permet de faire, en résumé ?"
    type: "unique"
    reponses:
      - texte: "Traduire des adresses IP privées en une (ou plusieurs) adresse IP publique pour accéder à Internet"
        correcte: true
        explication: "Le NAT permet à des hôtes utilisant des adresses privées non routables de communiquer sur Internet via une adresse publique partagée."
      - texte: "Chiffrer le trafic réseau de bout en bout"
        correcte: false
        explication: "Le NAT traduit des adresses, il ne chiffre rien par lui-même."
      - texte: "Attribuer automatiquement des adresses IP aux hôtes du réseau local"
        correcte: false
        explication: "C'est le rôle de DHCP, une fonction distincte du NAT même si souvent combinée sur le même équipement (box Internet)."
      - texte: "Résoudre des noms de domaine en adresses IP"
        correcte: false
        explication: "C'est le rôle de DNS, sans rapport avec la traduction d'adresses réalisée par le NAT."
  - question: "Combien de bits compose une adresse IPv6 ?"
    type: "unique"
    reponses:
      - texte: "128"
        correcte: true
        explication: "Une adresse IPv6 est codée sur 128 bits, contre 32 bits pour IPv4, offrant un espace d'adressage bien plus vaste."
      - texte: "32"
        correcte: false
        explication: "32 bits correspond à IPv4, pas à IPv6."
      - texte: "64"
        correcte: false
        explication: "64 bits correspond généralement à la partie identifiant d'interface d'une adresse IPv6, pas à l'adresse complète qui fait 128 bits."
      - texte: "48"
        correcte: false
        explication: "48 bits correspond à la taille d'une adresse MAC, pas à une adresse IPv6."
  - question: "Dans quel format s'écrit généralement une adresse IPv6 ?"
    type: "unique"
    reponses:
      - texte: "Huit groupes de quatre chiffres hexadécimaux séparés par des deux-points"
        correcte: true
        explication: "Une adresse IPv6 s'écrit en hexadécimal, sous forme de huit groupes de 16 bits séparés par ':', par exemple 2001:0db8:0000:0000:0000:0000:0000:0001."
      - texte: "Quatre nombres décimaux séparés par des points"
        correcte: false
        explication: "Ce format décimal pointé est celui d'IPv4, pas d'IPv6."
      - texte: "Douze chiffres hexadécimaux séparés par des tirets"
        correcte: false
        explication: "Ce format à douze chiffres hexadécimaux séparés par des tirets ressemble à une adresse MAC, pas à une adresse IPv6."
      - texte: "Une chaîne de 32 bits binaires uniquement"
        correcte: false
        explication: "Bien qu'une adresse soit fondamentalement binaire, sa notation usuelle est hexadécimale, pas une suite brute de 0 et de 1."
  - question: "Pourquoi IPv6 a-t-il été développé pour succéder à IPv4 ?"
    type: "unique"
    reponses:
      - texte: "Pour répondre à l'épuisement des adresses IPv4 disponibles, grâce à un espace d'adressage bien plus vaste"
        correcte: true
        explication: "Avec seulement environ 4,3 milliards d'adresses possibles, IPv4 s'est révélé insuffisant face à la croissance d'Internet ; IPv6 offre un espace d'adressage considérablement plus grand."
      - texte: "Pour remplacer complètement le protocole TCP par un nouveau protocole de transport"
        correcte: false
        explication: "IPv6 reste un protocole de couche réseau, utilisé avec TCP ou UDP en couche transport comme IPv4, il ne remplace pas TCP."
      - texte: "Parce qu'IPv4 ne permettait pas du tout de se connecter à Internet"
        correcte: false
        explication: "IPv4 fonctionne parfaitement pour se connecter à Internet ; le problème est la raréfaction du nombre d'adresses disponibles, pas une incapacité fonctionnelle."
      - texte: "Pour supprimer le besoin d'adresses MAC sur les réseaux locaux"
        correcte: false
        explication: "Les adresses MAC restent utilisées en couche 2 quel que soit le protocole de couche 3 (IPv4 ou IPv6)."
  - question: "Quel logiciel ou service permet de détecter à quelle adresse MAC correspond une adresse IP donnée sur le réseau local, en cas de doute ?"
    type: "unique"
    reponses:
      - texte: "La commande arp (ou la consultation du cache ARP)"
        correcte: true
        explication: "La commande arp -a (ou équivalent) affiche le cache ARP local, associant des adresses IP à des adresses MAC déjà résolues sur le réseau local."
      - texte: "La commande ping uniquement, sans autre outil"
        correcte: false
        explication: "ping teste la connectivité mais n'affiche pas directement l'adresse MAC associée à une adresse IP, contrairement à la commande arp."
      - texte: "Le protocole DHCP"
        correcte: false
        explication: "DHCP attribue des adresses IP, il ne sert pas à consulter une correspondance IP/MAC déjà établie."
      - texte: "Le protocole DNS"
        correcte: false
        explication: "DNS résout des noms de domaine en adresses IP, sans rapport avec la correspondance IP/MAC locale gérée par ARP."
  - question: "Quel est l'objectif principal d'un VPN (réseau privé virtuel) pour un utilisateur distant ?"
    type: "unique"
    reponses:
      - texte: "Établir une connexion chiffrée à travers un réseau public pour accéder de façon sécurisée à un réseau privé distant"
        correcte: true
        explication: "Un VPN crée un tunnel chiffré au-dessus d'un réseau non sûr (comme Internet), permettant d'accéder à des ressources privées comme si l'on était sur place."
      - texte: "Augmenter la bande passante disponible pour l'utilisateur"
        correcte: false
        explication: "Un VPN n'augmente pas la bande passante disponible ; il peut même légèrement la réduire à cause du chiffrement et de l'encapsulation."
      - texte: "Remplacer complètement le besoin d'une adresse IP"
        correcte: false
        explication: "Un VPN attribue généralement une adresse IP virtuelle supplémentaire à l'utilisateur, il ne supprime pas le besoin d'adressage IP."
      - texte: "Attribuer automatiquement un nom de domaine à un serveur"
        correcte: false
        explication: "Cette fonction n'a aucun rapport avec l'objectif d'un VPN, qui est de sécuriser une connexion à distance."
  - question: "Quelle affirmation décrit correctement le rôle d'un antivirus dans une stratégie de sécurité de base ?"
    type: "unique"
    reponses:
      - texte: "Il détecte et bloque des logiciels malveillants connus sur un poste ou un serveur"
        correcte: true
        explication: "Un antivirus s'appuie sur des signatures et des comportements suspects pour identifier et neutraliser des logiciels malveillants."
      - texte: "Il chiffre automatiquement tout le trafic réseau sortant"
        correcte: false
        explication: "Le chiffrement du trafic n'est pas la fonction d'un antivirus, mais plutôt d'un VPN ou de protocoles comme HTTPS."
      - texte: "Il attribue des adresses IP aux équipements du réseau"
        correcte: false
        explication: "L'attribution d'adresses IP est le rôle de DHCP, sans rapport avec un antivirus."
      - texte: "Il remplace totalement le besoin d'un pare-feu"
        correcte: false
        explication: "Antivirus et pare-feu ont des rôles complémentaires mais distincts : l'un détecte des logiciels malveillants, l'autre filtre le trafic réseau."
  - question: "Pourquoi recommande-t-on d'utiliser des mots de passe complexes et uniques pour chaque service ?"
    type: "unique"
    reponses:
      - texte: "Pour limiter les risques si un mot de passe est deviné ou si une base de données est compromise ailleurs"
        correcte: true
        explication: "Un mot de passe faible ou réutilisé permet à un attaquant, une fois un service compromis, de tenter le même mot de passe ailleurs (attaque par réutilisation d'identifiants)."
      - texte: "Parce que les mots de passe complexes consomment moins de bande passante"
        correcte: false
        explication: "La complexité d'un mot de passe n'a aucun rapport avec la consommation de bande passante réseau."
      - texte: "Parce que cela accélère la connexion au service"
        correcte: false
        explication: "La complexité d'un mot de passe n'a aucun impact sur la vitesse de connexion à un service."
      - texte: "Parce que la loi l'exige pour tous les sites web sans exception"
        correcte: false
        explication: "Il s'agit d'une bonne pratique de sécurité largement recommandée, pas d'une obligation légale universelle et systématique."
  - question: "Quelle est la fonction principale d'un serveur proxy pour un réseau d'entreprise ?"
    type: "unique"
    reponses:
      - texte: "Servir d'intermédiaire entre les clients internes et Internet, pouvant filtrer, mettre en cache ou journaliser les requêtes"
        correcte: true
        explication: "Un proxy relaie les requêtes des clients vers Internet, ce qui permet notamment du filtrage de contenu, de la mise en cache ou de la journalisation centralisée."
      - texte: "Attribuer des adresses IP dynamiques aux postes clients"
        correcte: false
        explication: "C'est le rôle de DHCP, une fonction distincte de celle d'un proxy."
      - texte: "Chiffrer physiquement les câbles réseau"
        correcte: false
        explication: "Le chiffrement physique des câbles n'existe pas comme concept ; un proxy agit au niveau applicatif sur les requêtes, pas sur le support physique."
      - texte: "Remplacer le rôle du routeur par défaut du réseau"
        correcte: false
        explication: "Un proxy fonctionne à un niveau applicatif, en complément du routage assuré par le routeur, il ne le remplace pas."
  - question: "Quelle est la différence essentielle entre chiffrement symétrique et chiffrement asymétrique, dans les grandes lignes ?"
    type: "unique"
    reponses:
      - texte: "Le chiffrement symétrique utilise la même clé pour chiffrer et déchiffrer, l'asymétrique utilise une paire de clés publique/privée distinctes"
        correcte: true
        explication: "En chiffrement symétrique, l'émetteur et le récepteur partagent la même clé secrète ; en asymétrique, une clé publique chiffre et seule la clé privée correspondante peut déchiffrer."
      - texte: "Le chiffrement symétrique est toujours plus sûr que l'asymétrique"
        correcte: false
        explication: "Les deux ont des usages complémentaires (souvent combinés en pratique) ; aucun n'est universellement plus sûr, ils répondent à des besoins différents."
      - texte: "Le chiffrement asymétrique n'utilise jamais de clé"
        correcte: false
        explication: "Le chiffrement asymétrique utilise justement une paire de clés (publique et privée), ce n'est pas un chiffrement sans clé."
      - texte: "Ces deux termes désignent exactement la même technique"
        correcte: false
        explication: "Ce sont deux approches de chiffrement fondamentalement différentes dans leur gestion des clés."
  - question: "Que signifie HTTPS par rapport à HTTP ?"
    type: "unique"
    reponses:
      - texte: "HTTPS est la version chiffrée de HTTP, généralement via TLS"
        correcte: true
        explication: "HTTPS ajoute une couche de chiffrement (TLS) à HTTP, protégeant la confidentialité et l'intégrité des échanges avec un site web."
      - texte: "HTTPS est un protocole totalement différent de HTTP, sans aucun rapport"
        correcte: false
        explication: "HTTPS reprend le fonctionnement de HTTP, en y ajoutant une couche de chiffrement TLS, ce n'est pas un protocole indépendant."
      - texte: "HTTPS est plus ancien que HTTP"
        correcte: false
        explication: "HTTP est le protocole originel ; HTTPS est venu par la suite pour y ajouter la sécurité du chiffrement."
      - texte: "HTTPS ne fonctionne que sur les réseaux locaux, jamais sur Internet"
        correcte: false
        explication: "HTTPS est au contraire massivement utilisé sur Internet, pour sécuriser les échanges avec les sites web publics."
      
  - question: "Quel terme désigne l'ensemble des règles et conventions qui permettent à des équipements réseau de communiquer entre eux ?"
    type: "unique"
    reponses:
      - texte: "Un protocole"
        correcte: true
        explication: "Un protocole réseau définit un ensemble de règles formelles (format des messages, ordre des échanges) permettant à des équipements de communiquer correctement."
      - texte: "Un port"
        correcte: false
        explication: "Un port identifie une application ou un service sur un hôte, ce n'est pas la définition d'un protocole."
      - texte: "Une topologie"
        correcte: false
        explication: "Une topologie décrit l'agencement physique ou logique d'un réseau, pas les règles de communication elles-mêmes."
      - texte: "Un domaine"
        correcte: false
        explication: "Un domaine peut désigner un espace de collision, de broadcast ou un nom DNS, mais ce n'est pas la définition d'un protocole."
  - question: "Quelle affirmation décrit correctement le rôle des ports (numéros de port) dans une communication réseau ?"
    type: "unique"
    reponses:
      - texte: "Ils identifient une application ou un service précis sur un hôte donné, en complément de l'adresse IP"
        correcte: true
        explication: "Un port (comme 80 pour HTTP ou 443 pour HTTPS) permet à une même adresse IP d'héberger plusieurs services distincts simultanément."
      - texte: "Ils remplacent complètement le besoin d'une adresse IP"
        correcte: false
        explication: "Les ports fonctionnent en complément de l'adresse IP, ils ne la remplacent jamais ; les deux sont nécessaires pour identifier une communication."
      - texte: "Ils servent uniquement à identifier un fabricant de matériel réseau"
        correcte: false
        explication: "L'identification du fabricant se fait via les premiers octets d'une adresse MAC (OUI), sans rapport avec les numéros de port."
      - texte: "Ils ne concernent que les réseaux sans fil"
        correcte: false
        explication: "Les numéros de port s'appliquent aussi bien aux réseaux filaires que sans fil, ce n'est pas une notion propre au Wi-Fi."
  - question: "Que signifie l'acronyme CSMA/CD, historiquement associé à Ethernet en half-duplex ?"
    type: "unique"
    reponses:
      - texte: "Carrier Sense Multiple Access with Collision Detection"
        correcte: true
        explication: "CSMA/CD est la méthode d'accès historique d'Ethernet : chaque équipement écoute le support avant d'émettre et détecte les collisions si elles surviennent."
      - texte: "Central System Management Access Control Device"
        correcte: false
        explication: "Ce développé n'existe pas ; l'acronyme correct est Carrier Sense Multiple Access with Collision Detection."
      - texte: "Client Server Multiple Address Configuration Data"
        correcte: false
        explication: "Ce développé n'existe pas ; l'acronyme correct est Carrier Sense Multiple Access with Collision Detection."
      - texte: "Common Standard Media Access Connection Device"
        correcte: false
        explication: "Ce développé n'existe pas ; l'acronyme correct est Carrier Sense Multiple Access with Collision Detection."
  - question: "Pourquoi CSMA/CD n'est-il plus vraiment utile sur un réseau moderne entièrement commuté (switchs) en full-duplex ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'en full-duplex, émission et réception empruntent des canaux séparés, rendant les collisions physiquement impossibles"
        correcte: true
        explication: "Le full-duplex sur liaison point à point (chaque port de switch dédié à un seul équipement) élimine le partage du support qui causait les collisions, rendant CSMA/CD obsolète dans ce contexte."
      - texte: "Parce que les adresses IP ont remplacé les adresses MAC"
        correcte: false
        explication: "Les adresses MAC restent utilisées en couche 2 quel que soit le mode duplex ; ce n'est pas lié à la disparition de CSMA/CD."
      - texte: "Parce que le Wi-Fi a complètement remplacé Ethernet filaire"
        correcte: false
        explication: "Ethernet filaire reste très largement utilisé ; ce n'est pas la raison pour laquelle CSMA/CD perd son utilité en environnement commuté full-duplex."
      - texte: "Parce que CSMA/CD n'a jamais fonctionné correctement sur Ethernet"
        correcte: false
        explication: "CSMA/CD a parfaitement fonctionné sur les anciens réseaux Ethernet partagés (avec hub) ; c'est le passage au commutateur full-duplex qui l'a rendu superflu."
  - question: "Quelle norme IEEE définit les réseaux Ethernet filaires ?"
    type: "unique"
    reponses:
      - texte: "IEEE 802.3"
        correcte: true
        explication: "IEEE 802.3 est la famille de normes qui définit Ethernet filaire, ses supports physiques et ses débits."
      - texte: "IEEE 802.11"
        correcte: false
        explication: "IEEE 802.11 définit les réseaux Wi-Fi (sans fil), pas Ethernet filaire."
      - texte: "IEEE 802.1Q"
        correcte: false
        explication: "IEEE 802.1Q définit le marquage VLAN (trunking), une norme complémentaire mais distincte de la définition d'Ethernet lui-même."
      - texte: "IEEE 802.15"
        correcte: false
        explication: "IEEE 802.15 concerne les réseaux personnels sans fil (comme Bluetooth), pas Ethernet filaire."
  - question: "Quelle norme IEEE définit les réseaux locaux sans fil (Wi-Fi) ?"
    type: "unique"
    reponses:
      - texte: "IEEE 802.11"
        correcte: true
        explication: "IEEE 802.11 est la famille de normes qui définit le Wi-Fi, avec ses différentes variantes (802.11n, 802.11ac, 802.11ax, etc.)."
      - texte: "IEEE 802.3"
        correcte: false
        explication: "IEEE 802.3 définit Ethernet filaire, pas le Wi-Fi."
      - texte: "IEEE 802.1D"
        correcte: false
        explication: "IEEE 802.1D définit le protocole Spanning Tree (STP), sans rapport direct avec la définition du Wi-Fi."
      - texte: "IEEE 802.1X"
        correcte: false
        explication: "IEEE 802.1X définit un cadre d'authentification réseau, pas la norme Wi-Fi elle-même."
  - question: "Dans le mnémonique courant pour retenir les 7 couches OSI (de la 1 à la 7), quelle couche vient juste après la couche physique ?"
    type: "unique"
    reponses:
      - texte: "La couche liaison de données"
        correcte: true
        explication: "L'ordre des couches OSI, de bas en haut, est : physique, liaison de données, réseau, transport, session, présentation, application."
      - texte: "La couche réseau"
        correcte: false
        explication: "La couche réseau est la troisième couche, précédée de la couche liaison de données, pas directement après la couche physique."
      - texte: "La couche application"
        correcte: false
        explication: "La couche application est la dernière (septième) couche, tout en haut du modèle, pas juste après la couche physique."
      - texte: "La couche transport"
        correcte: false
        explication: "La couche transport est la quatrième couche, après réseau et liaison de données, pas directement après la couche physique."
  - question: "Quelle couche du modèle OSI gère l'ouverture, le maintien et la fermeture des sessions de communication entre deux applications ?"
    type: "unique"
    reponses:
      - texte: "La couche session (couche 5)"
        correcte: true
        explication: "La couche session gère l'établissement, la synchronisation et la clôture des sessions de dialogue entre applications."
      - texte: "La couche présentation (couche 6)"
        correcte: false
        explication: "La couche présentation s'occupe du format des données (encodage, compression, chiffrement), pas de la gestion des sessions."
      - texte: "La couche transport (couche 4)"
        correcte: false
        explication: "La couche transport gère la fiabilité et le découpage des données (TCP/UDP), pas directement les sessions applicatives."
      - texte: "La couche liaison de données (couche 2)"
        correcte: false
        explication: "La couche liaison de données gère les trames et les adresses MAC sur le lien local, sans rapport avec les sessions applicatives."
  - question: "Quel est le premier réflexe de dépannage recommandé quand un poste utilisateur n'arrive plus à accéder au réseau ?"
    type: "unique"
    reponses:
      - texte: "Vérifier la couche physique : câble branché, voyants de la carte réseau allumés, Wi-Fi activé"
        correcte: true
        explication: "La méthode de dépannage descendante ou ascendante du modèle OSI recommande de commencer par écarter les causes les plus simples et les plus basses, la couche physique en premier."
      - texte: "Reconfigurer immédiatement le pare-feu de l'entreprise"
        correcte: false
        explication: "Modifier le pare-feu est une action lourde et risquée à envisager seulement après avoir écarté les causes les plus simples, pas en premier réflexe."
      - texte: "Changer l'adresse MAC de la carte réseau"
        correcte: false
        explication: "Changer l'adresse MAC n'est pas une étape de dépannage standard pour un simple problème de connectivité basique."
      - texte: "Redémarrer immédiatement tous les routeurs du réseau de l'entreprise"
        correcte: false
        explication: "Redémarrer l'infrastructure centrale pour un problème localisé à un seul poste est disproportionné ; il faut d'abord isoler le problème côté poste concerné."
  - question: "Que vérifie-t-on typiquement avec la commande ipconfig (Windows) ou ifconfig/ip addr (Linux) ?"
    type: "unique"
    reponses:
      - texte: "La configuration IP locale de la machine : adresse IP, masque, passerelle"
        correcte: true
        explication: "Ces commandes affichent la configuration réseau de la machine locale, un point de départ classique pour diagnostiquer un problème de connectivité."
      - texte: "La liste des utilisateurs connectés à un serveur distant"
        correcte: false
        explication: "Ces commandes affichent une configuration locale, pas des informations sur les utilisateurs d'un serveur distant."
      - texte: "La table de routage d'un routeur Cisco distant"
        correcte: false
        explication: "La table de routage d'un routeur Cisco s'obtient avec show ip route sur l'équipement lui-même, pas avec ipconfig ou ifconfig."
      - texte: "Le contenu des journaux système du pare-feu de l'entreprise"
        correcte: false
        explication: "Ces commandes affichent une configuration IP locale, sans rapport avec les journaux d'un pare-feu."
---
