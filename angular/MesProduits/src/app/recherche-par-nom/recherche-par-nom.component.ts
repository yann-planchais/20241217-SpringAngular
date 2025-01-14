import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { SearchFilterPipe } from "../search-filter.pipe";


@Component({
  selector: 'app-recherche-par-nom',
  imports: [FormsModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.component.html',
  styleUrl: './recherche-par-nom.component.css'
})
export class RechercheParNomComponent implements OnInit{
  
 
  produitsAppelServeur! : Produit[];
  produitsSansAppelServeur! : Produit[];
  allProduits! : Produit[];

  nomAChercher? : string;
  searchTerm! : string;
  searchTermPipe! : string;

  

  constructor(private produitService : ProduitService) {

  }
  
  ngOnInit(): void {
    this.produitService.listeProduits().subscribe(prods => { 
      this.allProduits = prods;
      this.produitsAppelServeur = prods;
      this.produitsSansAppelServeur = prods;
      console.log("On recupere tous les produits à l'init.");
      console.log(this.allProduits)})
  }

  rechercherParNomParAppelServeur() : void {
    if(this.nomAChercher != null && this.nomAChercher.trim().length > 0) {
    this.produitService.rechercherParNom(this.nomAChercher).subscribe (prods => this.produitsAppelServeur = prods);
    } else {
      this.produitService.listeProduits().subscribe(prods => this.produitsAppelServeur = prods);
    }
  }

  /**
   * Evite un appel serveur : le filtre se fait sur la page seulement
   * Attention : il ne faut pas que la liste this.allProduits soit trop volumineuse.
   * @param pFilterText 
   */
  rechercherParNomParFiltreCoteAngular(pFilterText : string) {
    console.log("on tente le filtre : " + pFilterText);
    this.produitsSansAppelServeur =  this.allProduits.filter(item => item.nomProduit.toLowerCase().includes(pFilterText));
  }


}
