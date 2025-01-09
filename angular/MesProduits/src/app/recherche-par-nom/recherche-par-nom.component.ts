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
  
  
  nomAChercher! : string;
  produits? : Produit[];

  constructor(private produitService : ProduitService) {

  }
  
  ngOnInit(): void {
  }

  rechercherParNom() : void {
    if(this.nomAChercher != null && this.nomAChercher.trim().length > 0) {
    this.produitService.rechercherParNom(this.nomAChercher).subscribe (prods => this.produits = prods);
    } else {
      this.produitService.listeProduits().subscribe(prods => this.produits = prods);
    }
  }

}
