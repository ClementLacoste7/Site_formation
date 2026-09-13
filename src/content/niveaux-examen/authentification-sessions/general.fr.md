---
titre: "Quizz : Authentification et gestion des sessions"
description: "30 questions couvrant tout le cours : mots de passe, sessions et cookies, JWT, 2FA, OAuth et les failles classiques."
slug: "quizz"
examen: "authentification-sessions"
niveau: "general"
ordre: 1
nombreQuizz: 2
questionsParQuizz: 15
publie: true
pool:
  - question: "Pourquoi stocker un mot de passe haché (avec sel) plutôt qu'en clair est-il la base de toute gestion sérieuse des mots de passe ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'en cas de fuite de la base de données, l'attaquant récupère des empreintes irréversibles plutôt que les mots de passe directement exploitables"
        correcte: true
        explication: "Le hachage salé limite considérablement l'exploitation d'une fuite de base de données, comparé à un stockage en clair qui exposerait immédiatement tous les mots de passe des utilisateurs."
      - texte: "Parce que le hachage accélère la vitesse de connexion des utilisateurs"
        correcte: false
        explication: "Le hachage n'a pas d'effet notable sur la vitesse de connexion perçue par l'utilisateur ; son intérêt est la sécurité en cas de fuite, pas la performance."
      - texte: "Parce que le hachage permet de récupérer facilement un mot de passe oublié"
        correcte: false
        explication: "C'est l'inverse : le hachage étant irréversible, il est impossible de retrouver le mot de passe original, ce qui impose une procédure de réinitialisation plutôt qu'une récupération directe."
      - texte: "Parce que la loi interdit le stockage de mots de passe en clair dans tous les pays"
        correcte: false
        explication: "Le hachage est une bonne pratique de sécurité largement recommandée, pas une obligation légale universelle identique dans tous les pays."
  - question: "Qu'est-ce qu'une politique de mot de passe robuste vise principalement à accomplir ?"
    type: "unique"
    reponses:
      - texte: "Augmenter le nombre de combinaisons possibles, rendant une attaque par force brute ou par dictionnaire beaucoup plus longue à réussir"
        correcte: true
        explication: "Une longueur suffisante et une variété de caractères élargissent considérablement l'espace des mots de passe possibles à essayer pour un attaquant, augmentant le temps nécessaire à une attaque exhaustive."
      - texte: "Empêcher complètement toute connexion au compte, même pour l'utilisateur légitime"
        correcte: false
        explication: "Une politique de mot de passe robuste vise à sécuriser l'accès, pas à empêcher l'utilisateur légitime de se connecter avec son mot de passe correct."
      - texte: "Réduire la taille de la base de données de l'application"
        correcte: false
        explication: "La politique de mot de passe n'a aucun rapport avec la taille de la base de données ; son objectif est la robustesse de l'authentification."
      - texte: "Accélérer le temps de chargement des pages du site"
        correcte: false
        explication: "La politique de mot de passe concerne la sécurité de l'authentification, sans effet sur la performance de chargement des pages."
  - question: "Qu'est-ce qu'un cookie de session permet de faire, sachant que HTTP est nativement sans état ?"
    type: "unique"
    reponses:
      - texte: "Reconnaître un même client au fil de plusieurs requêtes successives, en lui associant un identifiant que le serveur retrouve pour reconstituer son état de connexion"
        correcte: true
        explication: "Le cookie transmet un identifiant de session à chaque requête, permettant au serveur de savoir quel utilisateur est à l'origine de la requête, palliant l'absence de mémoire native entre requêtes de HTTP."
      - texte: "Chiffrer automatiquement toutes les données échangées entre le client et le serveur"
        correcte: false
        explication: "Un cookie de session ne chiffre rien par lui-même ; le chiffrement du transport est assuré séparément par HTTPS."
      - texte: "Stocker directement le mot de passe de l'utilisateur en clair dans le navigateur"
        correcte: false
        explication: "Un cookie de session contient généralement un identifiant opaque, pas le mot de passe de l'utilisateur en clair."
      - texte: "Empêcher complètement l'utilisateur de se déconnecter du site"
        correcte: false
        explication: "Un cookie de session permet au contraire une déconnexion propre en invalidant la session côté serveur, il ne l'empêche pas."
  - question: "Pourquoi l'attribut HttpOnly d'un cookie de session est-il une protection importante contre le vol de session via une faille XSS ?"
    type: "unique"
    reponses:
      - texte: "Il empêche JavaScript côté client d'accéder au contenu du cookie, rendant ce cookie invisible et inexfiltrable même si un script malveillant s'exécute sur la page"
        correcte: true
        explication: "Même en cas de XSS réussie, un cookie marqué HttpOnly reste inaccessible via document.cookie, neutralisant ce vecteur spécifique de vol de session."
      - texte: "Il chiffre automatiquement le contenu du cookie"
        correcte: false
        explication: "HttpOnly ne chiffre pas le cookie, il en restreint l'accès depuis JavaScript ; le chiffrement en transit est assuré séparément par HTTPS."
      - texte: "Il empêche complètement l'utilisation de cookies sur le site"
        correcte: false
        explication: "HttpOnly ne bloque pas l'usage du cookie lui-même pour maintenir la session, il en restreint seulement l'accès par JavaScript."
      - texte: "Il prolonge automatiquement la durée de vie du cookie indéfiniment"
        correcte: false
        explication: "La durée de vie d'un cookie est gérée par un attribut distinct, sans rapport avec HttpOnly qui concerne uniquement l'accès JavaScript."
  - question: "Qu'est-ce qu'un jeton JWT (JSON Web Token) contient typiquement ?"
    type: "unique"
    reponses:
      - texte: "Des informations sur l'utilisateur ou la session, signées numériquement pour garantir leur intégrité, sans être nécessairement chiffrées"
        correcte: true
        explication: "Un JWT combine un en-tête, une charge utile (les informations) et une signature qui permet de vérifier que le contenu n'a pas été altéré depuis son émission, même si son contenu reste lisible par défaut."
      - texte: "Un mot de passe stocké en clair pour un accès rapide"
        correcte: false
        explication: "Un JWT ne stocke pas typiquement un mot de passe en clair ; il contient des informations de session ou d'identité signées."
      - texte: "Une clé de chiffrement symétrique partagée entre deux serveurs"
        correcte: false
        explication: "Un JWT est un jeton d'information signé, pas une clé de chiffrement en tant que telle."
      - texte: "Le code source de l'application qui l'a généré"
        correcte: false
        explication: "Un JWT contient des données d'identité ou de session, jamais le code source de l'application émettrice."
  - question: "Pourquoi est-il risqué de faire confiance au contenu d'un JWT sans jamais vérifier sa signature côté serveur ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'un attaquant pourrait modifier le contenu du jeton, par exemple pour élever ses propres privilèges, si le serveur ne vérifie pas que la signature correspond toujours au contenu reçu"
        correcte: true
        explication: "Le contenu d'un JWT non chiffré reste lisible et potentiellement modifiable ; seule la vérification de la signature garantit que le contenu reçu n'a pas été altéré depuis son émission."
      - texte: "Parce qu'un JWT expire automatiquement au bout de cinq minutes dans tous les cas"
        correcte: false
        explication: "La durée de validité d'un JWT est configurable, ce n'est pas une règle fixe ; le risque réel concerne l'absence de vérification de son intégrité."
      - texte: "Parce qu'un JWT ne peut techniquement pas être lu par un humain"
        correcte: false
        explication: "Un JWT non chiffré est au contraire facilement décodable et lisible ; le risque concerne sa modification non détectée, pas son illisibilité."
      - texte: "Parce que les JWT ne fonctionnent que sur des applications mobiles"
        correcte: false
        explication: "Les JWT sont utilisés aussi bien dans des applications web que mobiles ou des API, sans limitation à un seul type de plateforme."
  - question: "Qu'est-ce que l'authentification à deux facteurs (2FA) ajoute par rapport à un simple mot de passe ?"
    type: "unique"
    reponses:
      - texte: "L'exigence d'un second élément de preuve d'identité, d'une catégorie différente (comme un code temporaire reçu sur un appareil possédé), rendant une usurpation bien plus difficile qu'avec un seul mot de passe volé"
        correcte: true
        explication: "Même si un attaquant obtient le mot de passe de la victime, il lui manquerait encore le second facteur pour compléter l'authentification, ce qui réduit fortement le risque de compromission par simple vol de mot de passe."
      - texte: "Le remplacement complet du mot de passe par un unique code temporaire"
        correcte: false
        explication: "2FA combine généralement le mot de passe existant avec un second facteur, plutôt que de le remplacer entièrement."
      - texte: "Une deuxième adresse e-mail pour recevoir les notifications du compte"
        correcte: false
        explication: "2FA concerne un second facteur d'authentification pour se connecter, pas une adresse e-mail supplémentaire de notification."
      - texte: "Le chiffrement automatique de toutes les données de l'utilisateur"
        correcte: false
        explication: "2FA renforce l'authentification, elle ne chiffre pas automatiquement les données de l'utilisateur par elle-même."
  - question: "Quels sont les trois grandes catégories de facteurs d'authentification (quelque chose que l'on...) ?"
    type: "unique"
    reponses:
      - texte: "Sait (mot de passe), possède (téléphone, carte), est (biométrie)"
        correcte: true
        explication: "Ces trois catégories (connaissance, possession, inhérence) sont la base de la conception de l'authentification multifacteur, chaque facteur supplémentaire venant idéalement d'une catégorie différente."
      - texte: "Voit, entend, touche"
        correcte: false
        explication: "Cette classification par sens humains ne correspond pas aux catégories standards de facteurs d'authentification."
      - texte: "Achète, installe, configure"
        correcte: false
        explication: "Ces actions ne correspondent à aucune catégorie standard de facteur d'authentification."
      - texte: "Lit, écrit, exécute"
        correcte: false
        explication: "Ces permissions de fichier n'ont aucun rapport avec les catégories de facteurs d'authentification."
  - question: "Qu'est-ce que OAuth 2.0 permet de faire, dans le contexte d'une connexion via un compte tiers (comme Google ou GitHub) ?"
    type: "unique"
    reponses:
      - texte: "Déléguer une autorisation d'accès limitée à certaines informations, sans jamais partager le mot de passe du compte tiers avec le site demandeur"
        correcte: true
        explication: "OAuth permet à un utilisateur d'accorder à une application un accès restreint à certaines de ses données (comme son adresse e-mail) via le fournisseur d'identité tiers, sans jamais révéler son mot de passe de ce compte tiers au site qui demande l'accès."
      - texte: "Chiffrer automatiquement toutes les communications d'un site web"
        correcte: false
        explication: "OAuth concerne la délégation d'autorisation d'accès, sans rapport direct avec le chiffrement général des communications d'un site."
      - texte: "Remplacer complètement le besoin d'authentification sur le site demandeur"
        correcte: false
        explication: "OAuth délègue la vérification d'identité au fournisseur tiers, mais une forme d'authentification (via ce tiers) reste bien nécessaire, ce n'est pas une suppression totale de l'authentification."
      - texte: "Créer automatiquement un nouveau mot de passe pour chaque site visité"
        correcte: false
        explication: "OAuth ne génère pas de nouveaux mots de passe ; il délègue l'autorisation d'accès sans jamais transmettre ni créer de mot de passe supplémentaire."
  - question: "Pourquoi la connexion via un compte tiers (OAuth) est-elle considérée comme plus sûre que de créer un compte avec un nouveau mot de passe sur chaque site visité ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'elle évite la multiplication de mots de passe potentiellement faibles ou réutilisés sur de nombreux sites, en centralisant l'authentification chez un fournisseur d'identité généralement mieux sécurisé"
        correcte: true
        explication: "Chaque nouveau mot de passe créé est un risque supplémentaire (oubli, réutilisation, faiblesse) ; en centralisant l'authentification via un fournisseur tiers robuste, OAuth réduit ce risque tout en simplifiant l'expérience utilisateur."
      - texte: "Parce qu'elle chiffre automatiquement toutes les données de l'utilisateur sur le site visité"
        correcte: false
        explication: "OAuth ne garantit pas automatiquement le chiffrement des données du site visité ; son intérêt de sécurité vient de la centralisation de l'authentification, pas du chiffrement des données stockées."
      - texte: "Parce qu'elle est légalement obligatoire sur tous les sites web"
        correcte: false
        explication: "Il n'existe pas d'obligation légale d'utiliser OAuth ; c'est un choix technique et de sécurité, pas une exigence réglementaire universelle."
      - texte: "Parce qu'elle empêche complètement toute usurpation d'identité, sans exception"
        correcte: false
        explication: "OAuth réduit certains risques mais ne garantit pas une protection absolue contre toute usurpation, notamment si le compte du fournisseur d'identité lui-même est compromis."
  - question: "Qu'est-ce qu'une attaque de fixation de session (session fixation) exploite ?"
    type: "unique"
    reponses:
      - texte: "La possibilité pour un attaquant d'imposer à l'avance un identifiant de session connu à une victime, puis de réutiliser ce même identifiant une fois que la victime s'est authentifiée avec"
        correcte: true
        explication: "Si l'application ne régénère pas l'identifiant de session après une authentification réussie, un attaquant qui a préalablement fixé un identifiant connu chez la victime peut ensuite l'utiliser lui-même pour accéder à la session désormais authentifiée."
      - texte: "Le vol direct du mot de passe de la victime via un keylogger"
        correcte: false
        explication: "Cette description correspond à une attaque distincte (keylogging), pas à la fixation de session qui exploite spécifiquement la non-régénération de l'identifiant de session."
      - texte: "Une vulnérabilité qui ne peut affecter que les sites sans HTTPS"
        correcte: false
        explication: "La fixation de session est une faille de logique applicative liée à la gestion des identifiants de session, indépendante du chiffrement HTTPS de la connexion."
      - texte: "Une technique de défense qui empêche tout vol de session"
        correcte: false
        explication: "La fixation de session est une technique d'attaque, pas une mesure de défense ; la défense correspondante consiste justement à régénérer l'identifiant de session après authentification."
  - question: "Pourquoi régénérer l'identifiant de session immédiatement après une authentification réussie est-il recommandé comme défense contre la fixation de session ?"
    type: "unique"
    reponses:
      - texte: "Parce que cela invalide tout identifiant de session que l'attaquant aurait pu fixer à l'avance, l'obligeant à connaître le nouvel identifiant généré après authentification, qu'il ne peut normalement pas obtenir"
        correcte: true
        explication: "En générant un nouvel identifiant de session au moment précis où l'utilisateur s'authentifie, l'application invalide tout identifiant préalablement connu ou imposé par un attaquant, neutralisant ainsi la fixation de session."
      - texte: "Parce que cela accélère le temps de connexion de l'utilisateur"
        correcte: false
        explication: "La régénération de l'identifiant de session est une mesure de sécurité, sans effet notable sur la vitesse de connexion perçue par l'utilisateur."
      - texte: "Parce que cela chiffre automatiquement le mot de passe de l'utilisateur"
        correcte: false
        explication: "La régénération de l'identifiant de session concerne la gestion de session, sans rapport avec le chiffrement du mot de passe lui-même."
      - texte: "Parce que cela empêche complètement l'utilisateur de rester connecté plus de cinq minutes"
        correcte: false
        explication: "La régénération de l'identifiant de session ne limite pas la durée de connexion de l'utilisateur ; son rôle est d'invalider un ancien identifiant potentiellement compromis, pas de raccourcir la session."
  - question: "Qu'est-ce que l'expiration d'une session après une période d'inactivité vise à protéger ?"
    type: "unique"
    reponses:
      - texte: "Réduire le risque qu'une session restée ouverte sur un poste partagé ou abandonné soit exploitée par une autre personne ayant physiquement accès à cet appareil"
        correcte: true
        explication: "Sans expiration automatique, une session oubliée ouverte sur un ordinateur public ou partagé resterait valide indéfiniment, un risque réel qu'une déconnexion automatique après inactivité vise à limiter."
      - texte: "Réduire la consommation de bande passante du serveur"
        correcte: false
        explication: "L'expiration de session est une mesure de sécurité liée au risque d'accès non autorisé, pas une optimisation de la consommation réseau du serveur."
      - texte: "Empêcher complètement l'utilisateur de se reconnecter par la suite"
        correcte: false
        explication: "Une session expirée n'empêche pas une reconnexion ultérieure normale de l'utilisateur ; elle invalide seulement la session existante restée inactive."
      - texte: "Accélérer automatiquement le chargement des pages suivantes"
        correcte: false
        explication: "L'expiration de session n'a pas d'effet sur la performance de chargement des pages ; son objectif est la sécurité contre un accès non autorisé."
  - question: "Pourquoi le principe du moindre privilège s'applique-t-il aussi à la gestion des sessions et des comptes, au-delà du simple choix d'un mot de passe robuste ?"
    type: "unique"
    reponses:
      - texte: "Parce que même une session légitimement authentifiée ne devrait accorder que les droits strictement nécessaires à l'utilisateur concerné, limitant l'impact si cette session venait malgré tout à être compromise"
        correcte: true
        explication: "Un compte utilisateur standard ne devrait par exemple jamais disposer par défaut de droits d'administration qu'il n'utilise pas, afin qu'une session compromise ne permette pas automatiquement une prise de contrôle complète du système."
      - texte: "Parce que cela accélère la vitesse de connexion de l'utilisateur"
        correcte: false
        explication: "Le principe du moindre privilège concerne l'étendue des droits accordés, sans effet sur la vitesse de connexion perçue."
      - texte: "Parce que cela supprime le besoin d'authentification pour les comptes à faible privilège"
        correcte: false
        explication: "Le moindre privilège ne supprime jamais le besoin d'authentification ; il limite seulement les droits accordés une fois l'authentification effectuée."
      - texte: "Parce que la loi impose ce principe uniquement dans le secteur bancaire"
        correcte: false
        explication: "Le principe du moindre privilège est une bonne pratique de sécurité applicable largement, pas une obligation légale réservée à un seul secteur d'activité."
  - question: "Qu'est-ce qu'une attaque par réutilisation d'identifiants (credential stuffing) exploite ?"
    type: "unique"
    reponses:
      - texte: "Le fait que de nombreux utilisateurs réutilisent le même mot de passe sur plusieurs sites, un attaquant testant automatiquement des identifiants volés sur un site vers d'autres services"
        correcte: true
        explication: "Une fuite de mots de passe sur un service compromis devient exploitable ailleurs si la victime a réutilisé les mêmes identifiants sur un autre site, ce qui explique pourquoi la réutilisation de mots de passe reste une pratique fortement déconseillée."
      - texte: "Une faille technique qui permet de deviner un mot de passe en une seule tentative grâce à l'intelligence artificielle"
        correcte: false
        explication: "Le credential stuffing repose sur le test répété d'identifiants déjà connus provenant d'une fuite, pas sur une devinette réussie en une seule tentative par un système d'intelligence artificielle."
      - texte: "Une technique de chiffrement renforcé des mots de passe"
        correcte: false
        explication: "Le credential stuffing est une technique d'attaque exploitant la réutilisation de mots de passe, pas une technique défensive de chiffrement."
      - texte: "Une attaque qui ne peut viser que des comptes administrateurs"
        correcte: false
        explication: "Le credential stuffing peut viser n'importe quel compte utilisateur ayant réutilisé ses identifiants ailleurs, pas exclusivement des comptes administrateurs."
  - question: "Comment un gestionnaire de mots de passe aide-t-il à se prémunir contre le credential stuffing ?"
    type: "unique"
    reponses:
      - texte: "En facilitant la génération et la mémorisation d'un mot de passe unique et robuste pour chaque service, réduisant ainsi le risque qu'une fuite sur un site expose aussi les autres comptes de l'utilisateur"
        correcte: true
        explication: "Sans gestionnaire de mots de passe, la tentation de réutiliser le même mot de passe partout est forte par simplicité de mémorisation ; un gestionnaire permet d'avoir un mot de passe distinct et fort pour chaque service sans effort de mémorisation supplémentaire."
      - texte: "En chiffrant automatiquement tout le trafic réseau de l'utilisateur, comme un VPN"
        correcte: false
        explication: "Un gestionnaire de mots de passe protège le stockage et la génération des identifiants, il ne chiffre pas le trafic réseau comme le ferait un VPN."
      - texte: "En empêchant complètement toute fuite de données chez les sites visités"
        correcte: false
        explication: "Un gestionnaire de mots de passe ne peut pas empêcher une fuite de données côté serveur d'un site tiers ; il limite seulement l'impact d'une telle fuite en évitant la réutilisation du même mot de passe ailleurs."
      - texte: "En remplaçant complètement le besoin d'authentification multifacteur"
        correcte: false
        explication: "Un gestionnaire de mots de passe complète l'authentification multifacteur, il ne la remplace pas ; combiner les deux renforce encore davantage la sécurité globale."
  - question: "Qu'est-ce qu'un jeton de rafraîchissement (refresh token), utilisé en complément d'un jeton d'accès de courte durée dans certains systèmes d'authentification par jeton ?"
    type: "unique"
    reponses:
      - texte: "Un jeton de longue durée, stocké de façon plus sécurisée, qui permet d'obtenir un nouveau jeton d'accès une fois que l'ancien a expiré, sans obliger l'utilisateur à ressaisir ses identifiants"
        correcte: true
        explication: "En limitant la durée de vie du jeton d'accès (utilisé à chaque requête), on réduit l'impact d'un vol éventuel ; le jeton de rafraîchissement, utilisé plus rarement et mieux protégé, permet de renouveler l'accès sans réauthentification complète de l'utilisateur."
      - texte: "Un jeton qui remplace définitivement le besoin de tout mot de passe"
        correcte: false
        explication: "Le jeton de rafraîchissement complète un système d'authentification existant, il ne supprime pas nécessairement le besoin initial d'authentification avec un mot de passe ou un autre facteur."
      - texte: "Un jeton qui chiffre automatiquement toutes les communications de l'application"
        correcte: false
        explication: "Le jeton de rafraîchissement sert à renouveler l'accès, il n'a pas de fonction de chiffrement des communications de l'application."
      - texte: "Un jeton visible et modifiable directement par l'utilisateur dans l'interface"
        correcte: false
        explication: "Un jeton de rafraîchissement est généralement stocké de façon sécurisée et invisible pour l'utilisateur, pas exposé et modifiable directement dans l'interface."
  - question: "Pourquoi le jeton d'accès a-t-il généralement une durée de vie plus courte que le jeton de rafraîchissement dans ce type de système ?"
    type: "unique"
    reponses:
      - texte: "Parce que le jeton d'accès est utilisé plus fréquemment (à chaque requête), l'exposant davantage à un risque d'interception, alors qu'une courte durée de vie limite la fenêtre d'exploitation possible en cas de vol"
        correcte: true
        explication: "Si un jeton d'accès est intercepté, sa courte durée de vie limite la période pendant laquelle un attaquant pourrait l'utiliser, un compromis entre sécurité et confort d'utilisation, le jeton de rafraîchissement permettant de renouveler l'accès sans réauthentification complète."
      - texte: "Parce que le jeton d'accès prend plus de place en mémoire que le jeton de rafraîchissement"
        correcte: false
        explication: "La taille en mémoire n'est pas la raison de cette différence de durée de vie ; c'est la fréquence d'exposition et le risque associé qui motivent ce choix de conception."
      - texte: "Parce que le jeton de rafraîchissement est plus facile à deviner par un attaquant"
        correcte: false
        explication: "C'est l'inverse qui est recherché : le jeton de rafraîchissement, bien que de plus longue durée, est généralement mieux protégé (stockage plus sécurisé, usage moins fréquent) que le jeton d'accès."
      - texte: "Parce que la loi impose une durée de vie maximale identique pour tous les types de jetons"
        correcte: false
        explication: "Il n'existe pas d'obligation légale universelle fixant une durée identique pour tous les jetons ; ce choix relève d'une décision de conception technique de sécurité."
  - question: "Pourquoi la déconnexion (logout) doit-elle invalider la session côté serveur, pas seulement supprimer le cookie côté navigateur ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'un cookie volé avant la déconnexion resterait exploitable par un attaquant si la session correspondante restait valide côté serveur, malgré la suppression du cookie sur le poste de la victime"
        correcte: true
        explication: "Si seule la suppression du cookie côté navigateur était effectuée, un attaquant ayant déjà copié ce cookie avant la déconnexion pourrait continuer à l'utiliser pour accéder au compte, tant que la session reste valide côté serveur ; invalider réellement la session ferme cette possibilité."
      - texte: "Parce que la suppression du cookie côté navigateur est techniquement impossible en JavaScript"
        correcte: false
        explication: "La suppression d'un cookie côté navigateur est tout à fait possible techniquement ; le problème soulevé ici n'est pas une impossibilité technique, mais l'insuffisance de cette seule action pour une déconnexion réellement sécurisée."
      - texte: "Parce que cela accélère la vitesse de connexion du prochain utilisateur"
        correcte: false
        explication: "L'invalidation de session côté serveur est une mesure de sécurité, sans rapport avec la vitesse de connexion d'un futur utilisateur."
      - texte: "Parce que la loi interdit la suppression de cookies sans validation préalable du serveur"
        correcte: false
        explication: "Il n'existe pas d'obligation légale de ce type ; l'invalidation côté serveur est une bonne pratique de sécurité, motivée par la protection contre un cookie potentiellement déjà compromis."
---
