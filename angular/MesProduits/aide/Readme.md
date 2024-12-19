# installation de bootstrap : npm i bootstrap
    Bootstrap est une collection d'outils utiles à la création du design (graphisme, animation et interactions avec la page dans le navigateur, etc.) de sites et d'applications web. 
    C'est un ensemble qui contient des codes HTML et CSS, des formulaires, boutons, outils de navigation et autres éléments interactifs, ainsi que des extensions JavaScript en option. C'est l'un des projets les plus populaires sur la plate-forme de gestion de développement GitHub.
    

on crée le composant web
   =>   ng g c produits

on crée le premier composant web
    => ng g c produits
    => on modifie le app.routes.ts pour rajouter la route vers ce composant
    => on modifie la page app.component.html  avec  routerLink="/produits" pour référencer le lien vers cette route
    => on modifie le app.component.ts  : on import la balise routerLink
