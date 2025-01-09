import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  imports: [FormsModule],
  templateUrl: './recherche-par-categorie.component.html',
  styleUrl: './recherche-par-categorie.component.css'
})
export class RechercheParCategorieComponent implements OnInit{


  idCategorie! : number;
  categories! :Categorie[];
  produits!: Produit[];

  constructor (private produitService  : ProduitService) {
  }

  ngOnInit(): void {
    this.produitService.listeCategorie().subscribe(categoriesRetournees => this.categories = categoriesRetournees);   
  }


 rechercher(): void {
    this.produitService.rechercherParCategorie(this.idCategorie).subscribe(prods => this.produits = prods);
 }

}
