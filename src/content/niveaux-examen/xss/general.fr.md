---
titre: "Quizz : Cross-Site Scripting (XSS)"
description: "30 questions couvrant tout le cours : principe de la faille, XSS réfléchie, stockée, DOM-based, vol de session et protection."
slug: "quizz"
examen: "xss"
niveau: "general"
ordre: 1
nombreQuizz: 2
questionsParQuizz: 15
publie: true
pool:
  - question: "Qu'est-ce qu'une faille XSS (Cross-Site Scripting), dans son principe général ?"
    type: "unique"
    reponses:
      - texte: "La possibilité d'injecter et de faire exécuter du code JavaScript non prévu dans le navigateur d'une victime, via une page web vulnérable"
        correcte: true
        explication: "Quand une application affiche sans échappement approprié un contenu contrôlé par un attaquant, ce contenu peut inclure du code JavaScript qui s'exécutera dans le contexte de la page pour tout visiteur qui la consulte."
      - texte: "Une attaque qui exploite exclusivement une faille du serveur de base de données"
        correcte: false
        explication: "XSS cible le navigateur des visiteurs d'une page web, pas directement la base de données du serveur, contrairement à l'injection SQL."
      - texte: "Une technique légitime d'affichage dynamique de contenu personnalisé"
        correcte: false
        explication: "XSS est une vulnérabilité exploitable de façon malveillante, pas une technique légitime de personnalisation d'affichage."
      - texte: "Une attaque qui ne peut viser que des sites utilisant PHP"
        correcte: false
        explication: "XSS peut affecter des applications construites avec n'importe quel langage côté serveur, dès lors que le contenu affiché côté navigateur n'est pas correctement échappé."
  - question: "Quelle est la caractéristique principale d'une XSS réfléchie (reflected XSS) ?"
    type: "unique"
    reponses:
      - texte: "Le script malveillant est renvoyé immédiatement dans la réponse du serveur, généralement à partir d'un paramètre de la requête (comme un paramètre d'URL), sans être stocké durablement"
        correcte: true
        explication: "Dans une XSS réfléchie, le payload transite en général directement via l'URL ou un champ de formulaire soumis, et l'attaquant doit convaincre la victime de cliquer sur un lien spécialement forgé pour déclencher l'exécution du script."
      - texte: "Le script est stocké de façon permanente dans la base de données du site, affectant tous les visiteurs futurs sans lien spécifique nécessaire"
        correcte: false
        explication: "Cette caractéristique correspond à la XSS stockée, pas à la XSS réfléchie qui ne persiste pas au-delà de la requête immédiate."
      - texte: "Le script s'exécute uniquement côté serveur, jamais dans le navigateur de la victime"
        correcte: false
        explication: "Une XSS, réfléchie ou non, s'exécute par définition dans le navigateur de la victime, pas côté serveur."
      - texte: "Cette faille ne peut être exploitée que via une connexion HTTPS"
        correcte: false
        explication: "La XSS réfléchie ne dépend pas du protocole de transport ; elle peut se produire aussi bien en HTTP qu'en HTTPS selon la vulnérabilité de la page concernée."
  - question: "Pourquoi une XSS réfléchie nécessite-t-elle généralement que la victime clique sur un lien spécialement conçu par l'attaquant ?"
    type: "unique"
    reponses:
      - texte: "Parce que le payload malveillant est typiquement inclus dans les paramètres de l'URL elle-même, et n'est donc déclenché que lorsque cette URL précise est visitée"
        correcte: true
        explication: "Contrairement à une XSS stockée qui affecte tous les visiteurs d'une page normale, la XSS réfléchie exige que la victime accède spécifiquement à l'URL contenant le payload, souvent via un lien envoyé par e-mail ou message, ce qui explique le recours fréquent à des techniques d'ingénierie sociale pour inciter au clic."
      - texte: "Parce que la XSS réfléchie ne fonctionne que sur les appareils mobiles"
        correcte: false
        explication: "La XSS réfléchie fonctionne indépendamment du type d'appareil utilisé, ce n'est pas une limitation aux appareils mobiles."
      - texte: "Parce que le navigateur bloque automatiquement tout script sans clic préalable de l'utilisateur"
        correcte: false
        explication: "Un navigateur n'exige pas de clic préalable pour exécuter du JavaScript présent sur une page chargée ; le besoin du clic vient du fait que le payload est encodé dans l'URL spécifique visitée, pas d'un blocage systématique du navigateur."
      - texte: "Parce que la XSS réfléchie exige une authentification préalable de la victime"
        correcte: false
        explication: "Une XSS réfléchie peut affecter des pages accessibles sans authentification préalable ; ce n'est pas une condition nécessaire à son exploitation."
  - question: "Quelle est la caractéristique principale d'une XSS stockée (stored XSS) ?"
    type: "unique"
    reponses:
      - texte: "Le script malveillant est enregistré de façon persistante côté serveur (par exemple dans un commentaire ou un profil), et s'exécute pour chaque visiteur qui consulte ensuite la page concernée, sans lien spécifique nécessaire"
        correcte: true
        explication: "Une XSS stockée est généralement considérée comme plus dangereuse qu'une XSS réfléchie car elle affecte potentiellement tous les visiteurs normaux de la page, sans qu'aucun lien piégé particulier ne soit nécessaire, contrairement à la XSS réfléchie."
      - texte: "Le script n'est jamais sauvegardé et disparaît immédiatement après son exécution"
        correcte: false
        explication: "C'est l'inverse : la persistance du script côté serveur est justement la caractéristique distinctive de la XSS stockée, par opposition à la XSS réfléchie qui ne persiste pas."
      - texte: "Cette faille ne peut affecter qu'un seul visiteur à la fois, jamais plusieurs simultanément"
        correcte: false
        explication: "C'est l'inverse : une XSS stockée peut affecter potentiellement tous les visiteurs consultant la page infectée, ce qui la rend souvent plus dangereuse qu'une XSS réfléchie limitée à ceux ayant cliqué sur un lien spécifique."
      - texte: "Elle nécessite que l'attaquant envoie un lien spécifique à chaque victime"
        correcte: false
        explication: "C'est l'inverse : la XSS stockée ne nécessite justement pas de lien spécifique par victime, contrairement à la XSS réfléchie, puisque le script s'exécute pour tout visiteur normal de la page infectée."
  - question: "Pourquoi un champ de commentaire non protégé sur un site web est-il un exemple classique de vecteur d'exploitation pour une XSS stockée ?"
    type: "unique"
    reponses:
      - texte: "Parce que le contenu du commentaire est enregistré côté serveur puis réaffiché tel quel à tous les visiteurs de la page, sans échappement, permettant à un script malveillant inséré une fois d'être exécuté par tous les futurs lecteurs"
        correcte: true
        explication: "Si l'application ne neutralise pas les balises HTML/JavaScript avant de stocker et réafficher un commentaire, un attaquant peut poster un commentaire contenant un script qui s'exécutera dans le navigateur de chaque personne consultant ensuite cette page de commentaires."
      - texte: "Parce que les commentaires sont automatiquement exécutés par le serveur avant leur stockage"
        correcte: false
        explication: "Le script XSS s'exécute dans le navigateur des visiteurs qui consultent la page, pas côté serveur au moment du stockage du commentaire."
      - texte: "Parce que seuls les commentaires anonymes peuvent contenir du code malveillant"
        correcte: false
        explication: "Le risque de XSS stockée dépend de l'absence de protection sur le contenu affiché, pas du caractère anonyme ou identifié de l'auteur du commentaire."
      - texte: "Parce que les commentaires sont toujours limités à 140 caractères"
        correcte: false
        explication: "La limite de caractères, si elle existe, n'a aucun rapport avec la vulnérabilité à la XSS stockée, qui dépend de l'absence d'échappement du contenu affiché."
  - question: "Qu'est-ce qu'une XSS basée sur le DOM (DOM-based XSS) a de particulier par rapport à une XSS réfléchie ou stockée classique ?"
    type: "unique"
    reponses:
      - texte: "Le script malveillant s'exécute uniquement à cause d'une manipulation du DOM réalisée par du JavaScript côté client, sans que le contenu malveillant transite nécessairement par le serveur ou apparaisse dans la réponse HTTP elle-même"
        correcte: true
        explication: "Dans une XSS DOM-based, la vulnérabilité réside dans le code JavaScript de la page elle-même, qui lit une source contrôlée par l'attaquant (comme le fragment d'URL après #) et l'insère dans le DOM de façon non sécurisée, sans que le serveur ne voie jamais nécessairement ce contenu transiter dans la requête HTTP."
      - texte: "Elle ne peut jamais affecter le navigateur de la victime, uniquement le serveur"
        correcte: false
        explication: "C'est l'inverse : une XSS DOM-based, comme toute XSS, s'exécute bien dans le navigateur de la victime, pas sur le serveur."
      - texte: "Elle nécessite obligatoirement que le contenu malveillant soit stocké en base de données"
        correcte: false
        explication: "Contrairement à une XSS stockée, la XSS DOM-based ne nécessite pas de stockage persistant en base de données ; elle peut se produire entièrement côté client, à partir d'une source comme l'URL de la page."
      - texte: "Elle ne peut être détectée qu'en analysant les journaux du serveur"
        correcte: false
        explication: "Comme la vulnérabilité DOM-based peut ne jamais transiter par le serveur, l'analyse des journaux serveur seule est souvent insuffisante pour la détecter ; il faut analyser le code JavaScript côté client lui-même."
  - question: "Pourquoi le fragment d'URL après le symbole # (comme dans exemple.fr/page#donnee) est-il un vecteur classique de XSS DOM-based ?"
    type: "unique"
    reponses:
      - texte: "Parce que ce fragment n'est jamais envoyé au serveur (il reste uniquement côté navigateur), mais reste accessible et lisible par le JavaScript de la page via window.location.hash, un vecteur souvent négligé par les défenses côté serveur"
        correcte: true
        explication: "Comme les défenses classiques comme la validation serveur ne voient jamais ce fragment (il n'est jamais transmis dans la requête HTTP), toute la responsabilité de sa sécurisation repose sur le code JavaScript côté client qui le lit, ce qui en fait un vecteur souvent sous-estimé pour la XSS DOM-based."
      - texte: "Parce que ce fragment est automatiquement exécuté comme du code JavaScript par tous les navigateurs"
        correcte: false
        explication: "Le fragment d'URL n'est pas automatiquement exécuté comme du code ; c'est seulement si le JavaScript de la page le lit et l'insère de façon non sécurisée dans le DOM que l'exécution malveillante devient possible."
      - texte: "Parce que ce fragment est toujours visible directement dans les journaux du serveur"
        correcte: false
        explication: "C'est l'inverse : le fragment après # n'est justement jamais envoyé au serveur, donc jamais visible dans ses journaux d'accès."
      - texte: "Parce que ce fragment ne peut contenir que des chiffres, jamais de code"
        correcte: false
        explication: "Le fragment d'URL peut contenir n'importe quelle chaîne de caractères, y compris un payload de script, sans restriction technique à des chiffres uniquement."
  - question: "Qu'est-ce que le vol de session (session hijacking) via XSS exploite typiquement ?"
    type: "unique"
    reponses:
      - texte: "L'accès du script malveillant injecté au cookie de session de la victime (si celui-ci n'est pas protégé par l'attribut HttpOnly), permettant à l'attaquant de l'exfiltrer et de l'utiliser pour usurper la session authentifiée de la victime"
        correcte: true
        explication: "Une fois qu'un script s'exécute dans le contexte de la page via XSS, il peut généralement lire document.cookie et envoyer discrètement cette information vers un serveur contrôlé par l'attaquant, qui peut ensuite réutiliser ce cookie pour se faire passer pour la victime, sans jamais connaître son mot de passe."
      - texte: "Le déchiffrement direct du mot de passe de la victime stocké en base de données"
        correcte: false
        explication: "Le vol de session via XSS cible le cookie de session actif, pas directement le mot de passe stocké en base de données, protégé par d'autres mécanismes comme le hachage."
      - texte: "L'installation d'un logiciel malveillant permanent sur l'ordinateur de la victime"
        correcte: false
        explication: "Le vol de session via XSS exploite le contexte de la page web dans le navigateur, il n'installe pas nécessairement de logiciel malveillant persistant sur le système de la victime."
      - texte: "Le blocage complet de l'accès de la victime à sa messagerie électronique"
        correcte: false
        explication: "Le vol de session vise à usurper l'identité de la victime sur le service concerné, pas à lui bloquer l'accès à sa messagerie électronique."
  - question: "Comment l'attribut HttpOnly appliqué à un cookie de session protège-t-il contre le vol de ce cookie via une XSS ?"
    type: "unique"
    reponses:
      - texte: "Il empêche JavaScript côté client d'accéder au contenu du cookie via document.cookie, rendant ce cookie invisible et inexfiltrable même si un script malveillant s'exécute sur la page"
        correcte: true
        explication: "Même en cas de XSS réussie permettant l'exécution de JavaScript arbitraire, un cookie marqué HttpOnly reste inaccessible à ce script : il n'est transmis qu'automatiquement par le navigateur lors des requêtes HTTP, jamais lisible directement en JavaScript, ce qui neutralise ce vecteur spécifique de vol de session."
      - texte: "Il chiffre automatiquement le contenu du cookie de session"
        correcte: false
        explication: "HttpOnly ne chiffre pas le cookie, il en restreint l'accès depuis JavaScript ; le chiffrement du cookie en transit est assuré séparément par HTTPS."
      - texte: "Il empêche complètement l'utilisation de cookies sur le site concerné"
        correcte: false
        explication: "HttpOnly ne bloque pas l'usage du cookie lui-même, qui continue de fonctionner normalement pour maintenir la session ; il en restreint seulement l'accès par JavaScript."
      - texte: "Il supprime automatiquement le cookie après chaque requête"
        correcte: false
        explication: "HttpOnly ne modifie pas la durée de vie du cookie ; il concerne uniquement sa visibilité vis-à-vis du JavaScript côté client."
  - question: "Pourquoi l'attribut HttpOnly seul ne protège-t-il pas contre tous les impacts possibles d'une XSS, même s'il neutralise le vol direct du cookie de session ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'un script malveillant exécuté via XSS peut réaliser de nombreuses autres actions dans le contexte de la page (modifier son contenu, capturer des saisies clavier, effectuer des requêtes au nom de la victime), au-delà du simple vol de cookie"
        correcte: true
        explication: "HttpOnly neutralise spécifiquement un vecteur (le vol du cookie de session), mais un attaquant capable d'exécuter du JavaScript arbitraire sur la page peut par exemple afficher un faux formulaire de connexion pour capturer les identifiants, ou effectuer des actions directement au nom de la victime pendant qu'elle est connectée."
      - texte: "Parce que HttpOnly n'est pris en charge par aucun navigateur moderne"
        correcte: false
        explication: "HttpOnly est largement pris en charge par tous les navigateurs modernes ; le problème n'est pas son support technique mais le fait qu'il ne couvre qu'un seul vecteur spécifique d'impact d'une XSS."
      - texte: "Parce que HttpOnly rend le site totalement inaccessible aux utilisateurs légitimes"
        correcte: false
        explication: "HttpOnly n'affecte en rien l'accessibilité normale du site pour les utilisateurs légitimes ; il restreint uniquement l'accès JavaScript au cookie concerné."
      - texte: "Parce qu'une XSS ne peut de toute façon jamais être corrigée une fois découverte"
        correcte: false
        explication: "Une XSS peut parfaitement être corrigée en amont, notamment par un échappement approprié du contenu affiché ; HttpOnly est une mesure défensive complémentaire, pas une preuve d'impossibilité de correction."
  - question: "Qu'est-ce que l'échappement de sortie (output encoding) consiste à faire, en défense contre XSS ?"
    type: "unique"
    reponses:
      - texte: "Transformer les caractères spéciaux HTML (comme < et >) en leur équivalent codé (comme &lt; et &gt;) avant d'afficher une donnée fournie par l'utilisateur, pour qu'elle soit interprétée comme du texte affiché et non comme du code exécutable"
        correcte: true
        explication: "En encodant les caractères qui donneraient normalement un sens particulier au HTML (comme l'ouverture d'une balise <script>), l'échappement de sortie garantit que le contenu utilisateur s'affiche littéralement comme texte, sans jamais être interprété comme une instruction par le navigateur."
      - texte: "Supprimer complètement toute donnée fournie par l'utilisateur avant affichage"
        correcte: false
        explication: "L'échappement ne supprime pas le contenu, il le transforme pour qu'il soit affiché de façon sûre comme texte, sans en perdre le sens littéral pour le lecteur."
      - texte: "Chiffrer le contenu affiché à l'écran, le rendant illisible pour l'utilisateur"
        correcte: false
        explication: "L'échappement de sortie garde le contenu parfaitement lisible pour l'utilisateur ; il neutralise seulement son interprétation comme code exécutable par le navigateur."
      - texte: "Rediriger automatiquement l'utilisateur vers une autre page en cas de contenu suspect"
        correcte: false
        explication: "L'échappement transforme la représentation du contenu affiché, il ne provoque aucune redirection de page."
  - question: "Pourquoi le contexte d'affichage (à l'intérieur d'une balise HTML, dans un attribut, dans du JavaScript) influence-t-il la méthode d'échappement à appliquer pour se protéger d'une XSS ?"
    type: "unique"
    reponses:
      - texte: "Parce que chaque contexte a ses propres caractères spéciaux et règles d'interprétation ; un échappement conçu pour du HTML classique peut être insuffisant ou inadapté si la donnée est en réalité insérée dans un attribut ou un bloc JavaScript"
        correcte: true
        explication: "Par exemple, échapper uniquement les caractères < et > protège bien un contenu HTML classique, mais reste insuffisant si la donnée est insérée à l'intérieur d'une chaîne JavaScript, où des guillemets non échappés pourraient permettre à un attaquant de sortir de cette chaîne pour injecter du code."
      - texte: "Le contexte d'affichage n'a en réalité aucune importance, un seul type d'échappement suffit toujours"
        correcte: false
        explication: "C'est l'inverse : le contexte détermine précisément quels caractères sont dangereux et comment les neutraliser correctement, un échappement universel unique n'étant pas toujours suffisant."
      - texte: "Le contexte d'affichage ne concerne que la couleur du texte affiché à l'écran"
        correcte: false
        explication: "Le contexte d'affichage fait référence à l'endroit syntaxique où la donnée est insérée dans le document (HTML, attribut, script), pas à une propriété visuelle comme la couleur."
      - texte: "Seul le contexte JavaScript nécessite un échappement, jamais le HTML classique"
        correcte: false
        explication: "Tous les contextes, y compris le HTML classique, nécessitent un échappement approprié adapté à leurs propres règles d'interprétation, pas seulement le contexte JavaScript."
  - question: "Qu'est-ce qu'une politique de sécurité de contenu (CSP, Content Security Policy) apporte comme protection complémentaire contre une XSS ?"
    type: "unique"
    reponses:
      - texte: "Elle permet de restreindre les sources autorisées à exécuter du script sur la page, ce qui peut empêcher l'exécution d'un script injecté via XSS s'il provient d'une source non explicitement autorisée par la politique"
        correcte: true
        explication: "Même si un attaquant parvient à injecter du code via une faille XSS non corrigée, une CSP bien configurée peut bloquer son exécution effective, offrant une couche de défense en profondeur supplémentaire en attendant que la vulnérabilité sous-jacente soit corrigée dans le code."
      - texte: "Elle corrige automatiquement toute vulnérabilité XSS présente dans le code de l'application"
        correcte: false
        explication: "CSP est une mesure de mitigation côté navigateur, elle ne modifie ni ne corrige le code source vulnérable de l'application elle-même."
      - texte: "Elle chiffre automatiquement tout le contenu de la page affichée"
        correcte: false
        explication: "CSP restreint les sources de contenu exécutable autorisées, elle ne chiffre pas le contenu de la page."
      - texte: "Elle empêche complètement tout visiteur d'accéder à la page concernée"
        correcte: false
        explication: "CSP ne bloque pas l'accès général à la page pour les visiteurs légitimes ; elle restreint uniquement certaines sources de contenu exécutable."
  - question: "Pourquoi préfère-t-on généralement éviter le JavaScript inline (directement dans un attribut HTML comme onclick=\"...\") au profit de gestionnaires d'événements attachés via addEventListener, en partie pour des raisons de sécurité ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'une politique CSP stricte peut bloquer l'exécution de JavaScript inline par défaut, une mesure de sécurité efficace contre certaines XSS qui deviendrait inapplicable si le code légitime lui-même dépend massivement du JavaScript inline"
        correcte: true
        explication: "Une CSP configurée pour bloquer le JavaScript inline (sans utiliser de nonce ou hash spécifique) empêche à la fois un script légitime inline ET un script malveillant injecté de s'exécuter ; en structurant son propre code sans JavaScript inline, une application peut adopter une CSP plus stricte et donc plus protectrice."
      - texte: "Parce que le JavaScript inline est plus lent à exécuter que addEventListener"
        correcte: false
        explication: "La différence de performance entre les deux approches n'est pas significative dans ce contexte ; la préoccupation principale évoquée est la compatibilité avec une CSP stricte, pas la vitesse d'exécution."
      - texte: "Parce que le JavaScript inline ne fonctionne que sur Internet Explorer"
        correcte: false
        explication: "Le JavaScript inline fonctionne sur tous les navigateurs modernes ; ce n'est pas une limitation de compatibilité qui motive cette recommandation, mais une raison de sécurité liée à la CSP."
      - texte: "Parce qu'addEventListener chiffre automatiquement le code JavaScript associé"
        correcte: false
        explication: "addEventListener n'a aucune fonction de chiffrement ; son intérêt de sécurité dans ce contexte vient de sa compatibilité avec une CSP stricte bloquant le JavaScript inline."
  - question: "Pourquoi l'utilisation de innerHTML pour insérer une donnée fournie par l'utilisateur dans une page est-elle risquée, par rapport à l'utilisation de textContent ?"
    type: "unique"
    reponses:
      - texte: "innerHTML interprète la chaîne fournie comme du HTML, ce qui exécute potentiellement toute balise ou script qu'elle contient, alors que textContent l'insère toujours comme du texte brut, sans jamais l'interpréter comme du code"
        correcte: true
        explication: "Si la donnée utilisateur insérée via innerHTML contient une balise <script> ou un gestionnaire d'événement malveillant, le navigateur peut l'exécuter, alors que textContent affiche systématiquement le contenu tel quel, comme du texte littéral, sans jamais risquer une interprétation exécutable, quel que soit son contenu."
      - texte: "innerHTML est plus lent à exécuter que textContent, sans autre différence"
        correcte: false
        explication: "La différence essentielle entre les deux n'est pas une question de vitesse, mais d'interprétation du contenu inséré comme code HTML exécutable ou comme simple texte."
      - texte: "textContent ne fonctionne que sur des éléments de type paragraphe (p)"
        correcte: false
        explication: "textContent fonctionne sur n'importe quel élément du DOM, pas exclusivement les paragraphes ; ce n'est pas une limitation propre à cette propriété."
      - texte: "innerHTML et textContent ont un comportement strictement identique face à du contenu contenant des balises HTML"
        correcte: false
        explication: "Leur comportement diffère précisément sur ce point : innerHTML interprète les balises HTML contenues, textContent les affiche telles quelles comme texte brut, sans interprétation."
  - question: "Dans le contexte de frameworks JavaScript modernes comme React, comment ces frameworks aident-ils par défaut à réduire le risque de XSS lors de l'affichage de données dynamiques ?"
    type: "unique"
    reponses:
      - texte: "Ils échappent automatiquement par défaut le contenu inséré dynamiquement dans le JSX, sauf si le développeur utilise explicitement une méthode marquée comme dangereuse (comme dangerouslySetInnerHTML) pour contourner volontairement cette protection"
        correcte: true
        explication: "Cette protection par défaut réduit significativement le risque de XSS accidentelle, mais reste contournable : un développeur qui utilise sciemment dangerouslySetInnerHTML (ou l'équivalent dans un autre framework) réintroduit le même risque qu'un innerHTML classique non protégé, s'il ne fait pas lui-même attention au contenu inséré."
      - texte: "Ils rendent techniquement impossible toute forme de XSS, quelle que soit la façon dont le code est écrit"
        correcte: false
        explication: "Aucun framework ne rend une XSS totalement impossible ; des méthodes explicites de contournement de la protection par défaut (comme dangerouslySetInnerHTML) réintroduisent le risque si elles sont mal utilisées."
      - texte: "Ils chiffrent automatiquement toutes les données affichées par l'application"
        correcte: false
        explication: "Ces frameworks échappent le contenu affiché pour éviter une interprétation comme code exécutable, ils ne le chiffrent pas pour en assurer la confidentialité."
      - texte: "Ils empêchent complètement l'utilisation de JavaScript dans l'application"
        correcte: false
        explication: "Ces frameworks sont eux-mêmes basés sur JavaScript et l'utilisent massivement ; leur protection contre XSS concerne l'échappement automatique du contenu affiché, pas une interdiction générale de JavaScript."
  - question: "Qu'est-ce qu'un défacement de site web (defacement) réalisé via une XSS stockée illustre concrètement ?"
    type: "unique"
    reponses:
      - texte: "La modification visible du contenu affiché d'une page pour tous ses visiteurs, par exemple en remplaçant son apparence normale par un message de l'attaquant, démontrant l'impact direct d'un script malveillant persistant"
        correcte: true
        explication: "Bien que moins dangereux qu'un vol de session silencieux, un défacement visible démontre concrètement qu'un script arbitraire s'exécute pour tous les visiteurs de la page infectée, souvent utilisé comme preuve de concept ou revendication par l'attaquant."
      - texte: "Une technique de chiffrement du contenu d'une page pour la rendre illisible"
        correcte: false
        explication: "Un défacement modifie visiblement l'apparence de la page pour tous ses visiteurs, il ne la chiffre pas pour la rendre illisible."
      - texte: "Une mesure de sécurité légitime appliquée par l'administrateur du site"
        correcte: false
        explication: "Un défacement est une action malveillante réalisée par un attaquant exploitant une vulnérabilité, pas une mesure de sécurité légitime prise par l'administrateur du site."
      - texte: "Une attaque qui ne peut affecter que la base de données, jamais l'apparence visible du site"
        correcte: false
        explication: "C'est l'inverse : un défacement modifie justement l'apparence visible du site pour ses visiteurs, une conséquence directement observable de la XSS exploitée."
  - question: "Pourquoi un attaquant pourrait-il utiliser une XSS pour afficher un faux formulaire de connexion par-dessus la page légitime, plutôt que de simplement voler le cookie de session ?"
    type: "unique"
    reponses:
      - texte: "Parce que cette technique permet de capturer directement les identifiants de la victime en clair (nom d'utilisateur et mot de passe), une information potentiellement réutilisable ailleurs, contournant même une protection comme HttpOnly qui empêcherait le vol du cookie"
        correcte: true
        explication: "Si le cookie de session est protégé par HttpOnly, l'attaquant ne peut pas le voler directement via JavaScript ; afficher un faux formulaire de connexion (phishing local via XSS) devient alors une stratégie alternative pour obtenir directement les identifiants de la victime, potentiellement réutilisables sur d'autres services."
      - texte: "Parce que cette technique est plus rapide à mettre en œuvre que la lecture du cookie de session"
        correcte: false
        explication: "La rapidité de mise en œuvre n'est pas la motivation principale ; c'est plutôt le contournement d'une protection comme HttpOnly et l'obtention d'informations potentiellement réutilisables ailleurs qui expliquent ce choix."
      - texte: "Parce que le vol de cookie de session est techniquement impossible via JavaScript, quelle que soit la configuration"
        correcte: false
        explication: "Le vol de cookie de session via JavaScript reste possible si le cookie n'est pas protégé par HttpOnly ; le faux formulaire est une stratégie alternative, pas la seule option technique disponible dans tous les cas."
      - texte: "Parce que cette technique fonctionne uniquement sur les sites qui n'utilisent pas de cookies du tout"
        correcte: false
        explication: "Cette technique peut être utilisée sur des sites utilisant des cookies, précisément pour contourner une protection sur le cookie existant, pas seulement sur des sites sans cookies."
  - question: "Qu'est-ce que le sandboxing d'une iframe (via l'attribut sandbox) peut apporter comme protection dans le contexte d'un contenu potentiellement affecté par une XSS ?"
    type: "unique"
    reponses:
      - texte: "Il restreint les capacités du contenu chargé dans l'iframe (comme l'exécution de scripts ou l'accès au document parent), limitant l'impact d'un script malveillant qui s'y exécuterait malgré tout"
        correcte: true
        explication: "Un contenu isolé dans une iframe avec sandbox=\"allow-scripts\" (sans allow-same-origin par exemple) peut exécuter du JavaScript, mais reste incapable d'accéder au document parent ou à son stockage, limitant considérablement les dégâts possibles même en cas de script malveillant exécuté à l'intérieur."
      - texte: "Il empêche complètement tout script de s'exécuter dans l'iframe, quelle que soit sa configuration"
        correcte: false
        explication: "Le sandboxing peut autoriser l'exécution de scripts (via allow-scripts) tout en restreignant d'autres capacités ; ce n'est pas un blocage total et systématique de tout JavaScript."
      - texte: "Il chiffre automatiquement le contenu affiché à l'intérieur de l'iframe"
        correcte: false
        explication: "Le sandboxing restreint les capacités du contenu de l'iframe, il ne chiffre pas ce contenu."
      - texte: "Il accélère automatiquement le chargement du contenu de l'iframe"
        correcte: false
        explication: "Le sandboxing est une mesure de sécurité et d'isolation, sans effet direct sur la vitesse de chargement du contenu."
  - question: "Pourquoi tester manuellement une entrée avec un payload simple comme <script>alert('XSS')</script> reste-t-il une technique de base utile pour repérer une vulnérabilité XSS potentielle ?"
    type: "unique"
    reponses:
      - texte: "Parce que si une fenêtre d'alerte s'affiche effectivement lors de la consultation de la page, cela prouve que le contenu injecté a été interprété comme du code exécutable plutôt que comme du texte inerte, révélant l'absence d'échappement"
        correcte: true
        explication: "Ce test simple et visible sert de preuve de concept rapide : l'apparition de l'alerte confirme sans ambiguïté que le navigateur a exécuté le script injecté, ce qui indiquerait une vulnérabilité XSS exploitable si ce comportement n'était pas attendu par le développeur."
      - texte: "Parce que ce payload corrige automatiquement toute vulnérabilité détectée"
        correcte: false
        explication: "Ce payload sert uniquement à détecter et démontrer une vulnérabilité, il ne corrige rien dans le code de l'application testée."
      - texte: "Parce que ce payload ne fonctionne que sur les sites utilisant Internet Explorer"
        correcte: false
        explication: "Ce test de détection fonctionne sur tous les navigateurs modernes exécutant du JavaScript standard, ce n'est pas une limitation à un navigateur particulier."
      - texte: "Parce que ce payload chiffre automatiquement la page testée"
        correcte: false
        explication: "Ce payload est un test de détection de vulnérabilité, il n'a aucune fonction de chiffrement de la page."
  - question: "Pourquoi la neutralisation du contenu affiché dans les attributs HTML (comme un attribut title ou alt rempli avec une donnée utilisateur) nécessite-t-elle une attention particulière, en plus du texte affiché normalement entre balises ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'un attaquant peut fermer prématurément l'attribut avec un guillemet, puis ajouter un nouvel attribut d'événement (comme onmouseover) ou une nouvelle balise, sans jamais avoir besoin d'utiliser explicitement une balise <script>"
        correcte: true
        explication: "Une protection qui ne bloquerait que la chaîne littérale <script> serait insuffisante contre un payload comme \" onmouseover=\"alert(1) inséré dans un attribut, qui exploite une syntaxe différente pour déclencher l'exécution de JavaScript sans jamais utiliser de balise script explicite."
      - texte: "Parce que les attributs HTML ne peuvent techniquement jamais contenir de données utilisateur"
        correcte: false
        explication: "Les attributs HTML peuvent parfaitement contenir des données fournies par l'utilisateur (comme la valeur d'un attribut title personnalisé), ce qui est justement la source du risque évoqué ici."
      - texte: "Parce que les navigateurs interdisent par défaut tout attribut contenant plus de dix caractères"
        correcte: false
        explication: "Il n'existe pas de telle limitation générale sur la longueur des attributs HTML dans les navigateurs modernes."
      - texte: "Parce que les attributs HTML sont toujours affichés en majuscules, contrairement au texte normal"
        correcte: false
        explication: "La casse d'affichage des attributs n'a aucun rapport avec le risque de XSS spécifique aux attributs, qui concerne plutôt l'échappement des guillemets et caractères spéciaux."
  - question: "Qu'est-ce qu'un bac à sable web isolé (comme une iframe avec sandbox strict, sans allow-same-origin) utilisé pédagogiquement pour démontrer des attaques XSS permet de garantir ?"
    type: "unique"
    reponses:
      - texte: "Que le code de démonstration exécuté (même une véritable XSS reproduite volontairement) reste totalement isolé de la page qui l'héberge, sans pouvoir accéder à son contenu ou son stockage réel"
        correcte: true
        explication: "Cette isolation stricte permet de montrer concrètement le fonctionnement d'une XSS réelle dans un cadre pédagogique sécurisé, sans risque que la démonstration n'affecte réellement la page hôte, ses cookies ou son contenu, contrairement à ce que ferait la même faille sur un vrai site vulnérable."
      - texte: "Que l'utilisateur ne peut jamais voir le résultat visuel du code exécuté"
        correcte: false
        explication: "Le bac à sable affiche bien le résultat visuel du code exécuté à l'intérieur de l'iframe isolée, ce n'est pas cela qui est empêché, mais son accès au document parent."
      - texte: "Que le code exécuté dans le bac à sable est automatiquement plus rapide que sur un site réel"
        correcte: false
        explication: "L'isolation d'un bac à sable n'a pas d'effet particulier sur la vitesse d'exécution du code, son but est la sécurité de la démonstration, pas la performance."
      - texte: "Que toute tentative de XSS y est automatiquement bloquée, empêchant toute démonstration réelle"
        correcte: false
        explication: "C'est l'inverse : le bac à sable permet justement de laisser s'exécuter une vraie démonstration de XSS, tout en garantissant que son impact reste contenu et sans conséquence réelle grâce à l'isolation."
  - question: "Pourquoi une iframe utilisée pour démontrer une XSS doit-elle utiliser sandbox=\"allow-scripts\" SANS allow-same-origin ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'ajouter allow-same-origin redonnerait à l'iframe un accès à l'origine réelle de la page hôte, annulant l'isolation et permettant potentiellement au script de démonstration d'accéder au vrai stockage ou aux vrais cookies de la page parente"
        correcte: true
        explication: "Sans allow-same-origin, l'iframe est traitée comme une origine opaque distincte : le script exécuté à l'intérieur peut s'exécuter (allow-scripts) mais reste incapable d'accéder au localStorage, aux cookies ou au DOM de la page hôte réelle, une isolation essentielle pour une démonstration pédagogique sûre d'une XSS réelle."
      - texte: "Parce que allow-same-origin empêcherait techniquement tout script de s'exécuter dans l'iframe"
        correcte: false
        explication: "allow-same-origin ne bloque pas l'exécution de scripts ; c'est allow-scripts qui l'autorise. Le problème avec allow-same-origin combiné à allow-scripts est qu'il redonnerait un accès réel à l'origine de la page hôte, ce qui casserait l'isolation recherchée."
      - texte: "Parce que ces deux attributs sont strictement incompatibles et ne peuvent jamais être utilisés ensemble"
        correcte: false
        explication: "Techniquement, ces deux attributs peuvent être combinés dans une iframe sandbox, mais cette combinaison est justement dangereuse dans un contexte de démonstration de XSS car elle réduit l'isolation espérée."
      - texte: "Parce que allow-same-origin ralentit le chargement de la page de plus de moitié"
        correcte: false
        explication: "La préoccupation n'est pas une question de performance de chargement, mais bien le niveau d'isolation de sécurité offert par l'iframe sandboxée."
  - question: "Qu'est-ce qu'un attaquant pourrait faire d'autre, au-delà du vol de session, en exploitant une XSS stockée sur un site de commerce en ligne où un utilisateur reste connecté ?"
    type: "unique"
    reponses:
      - texte: "Déclencher silencieusement des actions au nom de la victime pendant qu'elle consulte la page infectée, comme modifier son adresse de livraison ou passer une commande, en réutilisant sa session déjà authentifiée"
        correcte: true
        explication: "Puisque le script s'exécute dans le contexte authentifié de la victime, il peut envoyer des requêtes vers l'application avec les mêmes droits qu'elle, sans jamais avoir besoin de voler explicitement son mot de passe ou même son cookie de session pour agir en son nom pendant qu'elle est sur la page."
      - texte: "Modifier directement le solde bancaire de la victime sans passer par aucune requête vers l'application"
        correcte: false
        explication: "Un script XSS agit dans le contexte du navigateur et de l'application web ciblée ; il ne peut pas modifier directement un solde bancaire externe sans passer par les mécanismes et requêtes de l'application elle-même."
      - texte: "Bloquer physiquement l'accès Internet de la victime"
        correcte: false
        explication: "Une XSS s'exécute dans le contexte d'une page web, elle n'a pas la capacité de couper physiquement l'accès Internet de la victime."
      - texte: "Chiffrer automatiquement le disque dur de l'ordinateur de la victime"
        correcte: false
        explication: "Cette action correspondrait à un ransomware, un type de malware différent, pas à l'exploitation typique d'une XSS dans le navigateur."
  - question: "Pourquoi certains sites affichent-ils un aperçu ou demandent-ils une confirmation avant d'exécuter une action sensible (comme un virement ou une suppression de compte), même pour un utilisateur déjà authentifié ?"
    type: "unique"
    reponses:
      - texte: "Pour réduire le risque qu'une action sensible soit déclenchée silencieusement et automatiquement par un script malveillant (via XSS ou CSRF), en exigeant une interaction ou une confirmation explicite de l'utilisateur humain"
        correcte: true
        explication: "Une étape de confirmation supplémentaire (parfois avec ressaisie du mot de passe pour les actions les plus critiques) complique la tâche d'un script automatisé cherchant à déclencher cette action à l'insu de l'utilisateur, une mesure de défense en profondeur complémentaire aux protections techniques comme l'échappement ou les jetons CSRF."
      - texte: "Uniquement pour ralentir délibérément l'expérience utilisateur, sans aucune justification de sécurité"
        correcte: false
        explication: "Bien que cela ajoute une étape supplémentaire pour l'utilisateur, la justification principale de cette pratique est bien liée à la sécurité contre des actions automatisées non désirées, pas un ralentissement gratuit sans raison."
      - texte: "Parce que la loi interdit toute action sensible sans confirmation explicite, dans tous les pays"
        correcte: false
        explication: "Il n'existe pas d'obligation légale universelle de ce type dans tous les pays ; c'est une bonne pratique de sécurité recommandée, pas une exigence légale généralisée."
      - texte: "Uniquement pour des raisons esthétiques d'interface utilisateur"
        correcte: false
        explication: "La justification principale de cette pratique est la sécurité contre des actions automatisées non désirées, pas un choix purement esthétique d'interface."
  - question: "Quelle est la différence fondamentale entre une XSS et une injection SQL, en termes de cible de l'exécution du code injecté ?"
    type: "unique"
    reponses:
      - texte: "Une XSS exécute du code (JavaScript) dans le navigateur de la victime, alors qu'une injection SQL exécute du code (SQL) sur le serveur de base de données"
        correcte: true
        explication: "Bien que les deux exploitent un défaut de validation ou d'échappement d'une entrée utilisateur, leur cible d'exécution diffère fondamentalement : le navigateur d'un tiers pour XSS, le serveur de base de données lui-même pour l'injection SQL, ce qui entraîne des impacts et des défenses de nature différente."
      - texte: "Les deux techniques exécutent exactement le même type de code, sur la même cible"
        correcte: false
        explication: "Leur code injecté (JavaScript contre SQL) et leur cible d'exécution (navigateur contre serveur de base de données) diffèrent nettement, ce n'est pas une équivalence stricte."
      - texte: "Une injection SQL s'exécute toujours dans le navigateur, jamais sur le serveur"
        correcte: false
        explication: "C'est l'inverse : une injection SQL s'exécute sur le serveur de base de données, pas dans le navigateur d'un visiteur comme le fait une XSS."
      - texte: "Une XSS ne peut jamais affecter d'autres utilisateurs que celui qui l'a découverte"
        correcte: false
        explication: "Une XSS stockée en particulier peut affecter potentiellement tous les visiteurs consultant la page infectée, pas seulement la personne qui a découvert ou exploité la faille initialement."
  - question: "Pourquoi la protection contre XSS et la protection contre l'injection SQL sont-elles toutes deux nécessaires sur une même application web, sans que l'une ne remplace l'autre ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'elles neutralisent des vecteurs d'attaque différents (l'exécution de code côté navigateur contre l'exécution de code côté base de données), une application pouvant être vulnérable à l'une, à l'autre, ou aux deux simultanément et indépendamment"
        correcte: true
        explication: "Corriger uniquement l'injection SQL (par exemple avec des requêtes préparées) ne protège en rien contre une XSS non traitée par ailleurs (comme un défaut d'échappement de sortie), les deux vulnérabilités touchant des couches et des mécanismes de protection entièrement distincts."
      - texte: "Parce qu'une seule mesure de sécurité, comme un antivirus, protège automatiquement contre les deux à la fois"
        correcte: false
        explication: "Un antivirus classique installé sur un poste ne protège pas une application web contre ces deux vulnérabilités, qui nécessitent des mesures spécifiques (requêtes préparées pour SQL, échappement de sortie pour XSS) au niveau du code de l'application elle-même."
      - texte: "Parce que corriger l'injection SQL corrige automatiquement toute vulnérabilité XSS présente sur le même site"
        correcte: false
        explication: "Ce sont deux vulnérabilités indépendantes touchant des couches différentes de l'application ; corriger l'une ne corrige en rien l'autre si elle existe séparément."
      - texte: "Parce que XSS et injection SQL ne peuvent techniquement jamais coexister sur la même application"
        correcte: false
        explication: "Une même application peut tout à fait présenter à la fois une vulnérabilité XSS et une vulnérabilité d'injection SQL simultanément, ce sont des failles indépendantes l'une de l'autre."
  - question: "Qu'est-ce qu'un test d'intrusion incluant une recherche de XSS chercherait typiquement à vérifier dans un rapport final, au-delà de la simple présence de la faille ?"
    type: "unique"
    reponses:
      - texte: "L'impact concret potentiel de la faille (vol de session possible ou non selon la présence de HttpOnly, actions réalisables au nom de la victime), pour aider à prioriser sa correction selon sa gravité réelle"
        correcte: true
        explication: "Un rapport de test d'intrusion sérieux ne se contente généralement pas de signaler la présence théorique d'une XSS ; il évalue et documente son impact réel possible (par exemple si le cookie de session est exfiltrable ou protégé), ce qui aide l'équipe technique à prioriser correctement les corrections selon leur gravité effective."
      - texte: "Uniquement le nombre exact de lignes de code contenant la faille, sans autre analyse"
        correcte: false
        explication: "Un rapport de qualité va au-delà d'un simple comptage de lignes de code ; il analyse l'impact réel et le contexte d'exploitation de la vulnérabilité identifiée."
      - texte: "Le prix de vente du logiciel affecté par la vulnérabilité"
        correcte: false
        explication: "Un rapport de test d'intrusion technique se concentre sur l'impact de sécurité de la vulnérabilité, sans rapport avec une évaluation commerciale du prix du logiciel."
      - texte: "Le nom complet du développeur ayant introduit la faille dans le code"
        correcte: false
        explication: "Un rapport de test d'intrusion professionnel se concentre sur la vulnérabilité technique et son impact, pas sur l'identification nominative et la responsabilisation individuelle d'un développeur précis."
  - question: "Pourquoi corriger une XSS le plus tôt possible dans le cycle de développement (plutôt que juste avant la mise en production) est-il généralement recommandé, un principe similaire à celui vu pour d'autres vulnérabilités ?"
    type: "unique"
    reponses:
      - texte: "Parce qu'une faille découverte et corrigée tôt dans le développement coûte généralement bien moins cher et est plus simple à corriger qu'une fois le code déjà déployé et potentiellement exploité en production"
        correcte: true
        explication: "Ce principe de correction précoce (shift-left), déjà évoqué pour la sécurité en général, s'applique tout autant à une XSS : plus la détection intervient tard dans le cycle de vie du logiciel, plus la correction devient coûteuse et risquée, notamment si la faille a déjà été exploitée en conditions réelles."
      - texte: "Parce qu'une XSS ne peut techniquement être corrigée qu'avant la mise en production, jamais après"
        correcte: false
        explication: "Une XSS peut techniquement être corrigée à tout moment, y compris après une mise en production ; la recommandation de correction précoce est une question de coût et de risque, pas d'impossibilité technique de correction tardive."
      - texte: "Parce que les utilisateurs ne remarquent jamais une XSS corrigée après la mise en production"
        correcte: false
        explication: "Cette affirmation n'est pas la justification du principe de correction précoce, qui repose sur la réduction du coût et du risque d'exploitation, pas sur la perception des utilisateurs."
      - texte: "Parce que la correction d'une XSS nécessite toujours une réécriture complète de l'application"
        correcte: false
        explication: "La correction d'une XSS nécessite généralement des modifications ciblées (comme ajouter un échappement manquant), pas systématiquement une réécriture complète de l'application entière."
---
