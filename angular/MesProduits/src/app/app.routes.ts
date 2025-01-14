import { Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';


export const routes: Routes = [
   { path : "produits", component : ProduitsComponent },
   { path : "add-produit", component : AddProduitComponent },
   { path : "updateProduit/:idProduit",  component : UpdateProduitComponent},
   { path : "rechercheParCategorie", component : RechercheParCategorieComponent},
   { path : "rechercheParNom", component : RechercheParNomComponent}, 
   { path : "listerCategories", component : ListeCategoriesComponent},
   { path : "",  redirectTo:"produits", pathMatch:"full"}
   
];
