ng new MonProjet
    => Crée un projet

ng generate component monComposant --skipTests=true  --inlineStyle=true
    --skipTests=true : pour ne pas générer les fichiers de test spec.ts
    --inlineStyle=true : pour ne pas générer le fichier .css
    =>Crée un composant monComposant avec 
        - un repertoire src/app/monComposant
        - un fichier monComposant.component.html
        - un fichier monComposant.ts
        - (un fichier monComposant.css) --inlineStyle=true
        - (un fichier monComposant.spec.ts) -skipTests=true 

ng serve => lance l'application sur le port 4200

TypeOperation           signe           HTML               TYPESCRIPT
  Interpolation         {}                          <=
  Property Binding      []                          <=
  eventBinding          ()                          =>
  2 ways Binding        [()]                        <=>
  