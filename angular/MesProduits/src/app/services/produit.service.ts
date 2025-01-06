import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits: Produit[];
  categories : Categorie[];

  constructor() {
    this.categories = [{idCat : 1, nomCat : 'PC'}, {idCat : 2, nomCat : 'Imprimante'}]
    this.produits = [
      { idProduit: 1, nomProduit: "PC Asus", prixProduit: 3000.600, categorie : this.categories[0], dateCreation: new Date("01/14/2011") },
      { idProduit: 2, nomProduit: "Imprimante Epson", prixProduit: 450,  categorie : this.categories[1], dateCreation: new Date("12/17/2010") },
      { idProduit: 3, nomProduit: "Tablette Samsung", prixProduit: 900.123,  categorie : this.categories[0], dateCreation: new Date("02/20/2020") }
    ];

  }

  listeProduits(): Produit[] {
    return this.produits;
  }

  ajouterProduit(prod: Produit) {
    this.produits.push(prod);
  }

  supprimerProduit(prod: Produit) {
    console.log("service : " + prod);
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    } else {
      console.log("Produit non trouvé : " + prod.idProduit);
    }
  }

  consulterProduit(id: number): Produit {
    return this.produits.find(p => p.idProduit == id)!;
  }

  miseAJourProduit(prod : Produit)  {
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1); // on supprime
      this.produits.splice(index, 0, prod); // on ajoute
      
    } else {
      console.log("Produit non trouvé : " + prod.idProduit);
    }
  }

  listeCategorie() : Categorie[] {
    return this.categories;
  }

  consulterCategorie(id: number) : Categorie {
    return this.categories.find(cat => cat.idCat == id)!;
  }
}
