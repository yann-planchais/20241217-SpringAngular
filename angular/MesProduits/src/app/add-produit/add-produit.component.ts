import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent implements OnInit {
 
  
  newProduit = new Produit();

  message? : string;
  categories! : Categorie[];

 newIdCat! : number;
 newCategorie! : Categorie;

  constructor(private produitService : ProduitService, private router : Router) {
  
  }

  ngOnInit(): void {
    this.produitService.listeCategorie().subscribe(cat => this.categories = cat);
  }


  addProduit() {
    console.log("[ADD] nouveau produit : " + JSON.stringify(this.newProduit));


    this.newProduit.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;

    this.produitService.ajouterProduit(this.newProduit).subscribe(prod => {
      console.log("[AJOUT] produit ajouté : " + prod);
    });

    this.message = "Produit " + this.newProduit.nomProduit + " ajouté avec succès";
    this.router.navigate(['produits']);
  }
  
}
