import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-produits',
  imports: [CommonModule, RouterLink],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {


  produits?: Produit[]; // un tableau de produits

  constructor(private produitService: ProduitService, private router: Router) {
    //  this.produits = [];
  }


  ngOnInit(): void {
    this.chargerProduits()
  }


  chargerProduits(): void {
    this.produitService.listeProduits().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
    });
  }

  supprimerProduit(prod: Produit) {
    console.log("front : " + prod.idProduit);
    let conf = confirm("Etes-vous sur ?");
    if (conf) {
      this.produitService.supprimerProduit(prod.idProduit!).subscribe(() => {
        console.log("produit supprimé");
        this.chargerProduits();
      });
    } else {
      console.log("Annulé par l'utilisateur");
    }
  }

  /**
  * OLD PART SANS APPEL A SPRING
  */

  supprimerProduit_OldTableau(prod: Produit) {
    console.log("front : " + prod.idProduit);
    let conf = confirm("Etes-vous sure ?");
    if (conf) {
      this.produitService.supprimerProduit_OldTableau(prod);
    } else {
      console.log("Annulé par l'utilisateur");
    }
  }

}
