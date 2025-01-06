import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-produits',
  imports: [CommonModule, RouterLink],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {


  produits!: Produit[]; // un tableau de produits

  constructor(private produitService: ProduitService) {
  //  this.produits = [];
  }


  ngOnInit(): void {
    this.produitService.listeProduits().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
    });
  }

  supprimerProduit(prod: Produit) {
    console.log("front : " + prod.idProduit);
    let conf = confirm("Etes-vous sure ?");
    if (conf) {
      this.produitService.supprimerProduit(prod);
    } else {
      console.log("Annulé par l'utilisateur");
    }
  }

}
