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
 
  categories! : Categorie[];
 // newIdCat! : number;
 // newCategorie! : Categorie;

  constructor(private produitService : ProduitService, private router : Router) {
  
  }

  ngOnInit(): void {
    this.categories = this.produitService.listeCategorie();
  }

  newProduit = new Produit();

  message? : string;

  addProduit() {
    console.log(this.newProduit);
   // this.newCategorie = this.produitService.consulterCategorie(this.newIdCat);
  //  this.newProduit.categorie = this.newCategorie;
    this.produitService.ajouterProduit(this.newProduit).subscribe(prod => {
      console.log(prod);
    });

    this.message = "Produit " + this.newProduit.nomProduit + " ajouté avec succès";
    this.router.navigate(['produits']);
  }
  
}
