import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-recherche-par-nom',
  imports: [FormsModule],
  templateUrl: './recherche-par-nom.component.html',
  styleUrl: './recherche-par-nom.component.css'
})
export class RechercheParNomComponent implements OnInit{
  
  nomAChercher? : string;
  produits! : Produit[];
  searchTerm! : string;
  allProduits! : Produit[];
  

  constructor(private produitService : ProduitService) {

  }
  
  ngOnInit(): void {
    this.produitService.listeProduits().subscribe(prods => { 
      this.allProduits = prods;
      this.produits = prods;
      console.log("On recupere tous les produits à l'init.");
      console.log(this.allProduits)})
  }

  rechercherParNomParAppelServeur() : void {
    if(this.nomAChercher != null && this.nomAChercher.trim().length > 0) {
    this.produitService.rechercherParNom(this.nomAChercher).subscribe (prods => this.produits = prods);
    } else {
      this.produitService.listeProduits().subscribe(prods => this.produits = prods);
    }
  }

  /**
   * Evite un appel serveur : le filtre se fait sur la page seulement
   * Attention : il ne faut pas que la liste this.allProduits soit trop volumineuse.
   * @param pFilterText 
   */
  rechercherParNomParFiltreCoteAngular(pFilterText : string) {
    console.log("on tente le filtre : " + pFilterText);
    this.produits =  this.allProduits.filter(item => item.nomProduit.toLowerCase().includes(pFilterText));
  }


}
