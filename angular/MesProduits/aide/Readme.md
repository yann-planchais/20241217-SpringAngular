# installation de bootstrap : npm i bootstrap
    Bootstrap est une collection d'outils utiles à la création du design (graphisme, animation et interactions avec la page dans le navigateur, etc.) de sites et d'applications web. 
    C'est un ensemble qui contient des codes HTML et CSS, des formulaires, boutons, outils de navigation et autres éléments interactifs, ainsi que des extensions JavaScript en option. C'est l'un des projets les plus populaires sur la plate-forme de gestion de développement GitHub.

 # Commande ng build
    => va transformer toutes les classes TypeScript en JS pour le déploiement   
        sous Output location: \dist\mes-produits
 ## Fichier de configuration
    ### creation du package des fichiers d'environnement
        => ng generate environments

    on fait ng build --configuration developement (si dans le répertoire environments, on a un fichier nommé environment.development.ts)
        => dans le fichier angular.json dans partie build>configurations>development>fileReplacements on voir qu'il va remmplacer les fichiers

# on crée le composant web
   =>   ng g c produits

# on crée le premier composant web
    => ng g c produits
    => on modifie le app.routes.ts pour rajouter la route vers ce composant
    => on modifie la page app.component.html  avec  routerLink="/produits" pour référencer le lien vers cette route
    => on modifie le app.component.ts  : on import la balise routerLink

# on crée le 2eme composant : add-produit
    => ajout du formulaire

# on crée le service
    => créer le répertoire service
    => ng g s produit
    => creation de la liste des produits dans le service
    => injection du service produit dans le constructeur de ts produits et add-produits
    => création des méthodes d'appel au service.
    
# on crée la suppression des produits
    => création du bouton
    => modification de la classe service.

# création de la modification d'un produit
    => création composant web de modification d'un produit
    => ajout bouton afin de modifier dans la page de la liste des produits
    => mise en place des redirections avec RouterLink
    => Attention au format de la date du formulaire : on doit séparer l'aller du retour avec un formalisme yyyy-MM-dd pour le 1Er affichage
        Sinon ça ne fonctionne pas au 1er affichage : on a pas la date

# Recherche 
    ## Par Appel serveur : un bouton sur lequel on appuie pour lancer la requête côté serveur
    ## Par filtre coté Angular : coté html dans l'input  : #searchTerm (keyup)="rechercherParNomParFiltreCoteAngular(searchTerm.value)"
    ## Par pipe : on crée un nouveau composant ng g pipe searchFilter

