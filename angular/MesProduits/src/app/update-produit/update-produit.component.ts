import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-produit.component.html'
})
export class UpdateProduitComponent implements OnInit{

  currentProduit = new Produit();
  categories! : Categorie[];
  updatedCatId! : number;
  
  constructor(private activateRoute : ActivatedRoute, private router : Router, private produitService : ProduitService) {

  }
  ngOnInit(): void {   
    this.currentProduit = this.produitService.consulterProduit(this.activateRoute.snapshot.params['idProduit']);
    this.categories = this.produitService.listeCategorie();
    this.updatedCatId = this.currentProduit.categorie.idCat;
    console.log(this.currentProduit);
  }


  modifierProduit() : void {
    this.currentProduit.categorie = this.produitService.consulterCategorie(this.updatedCatId);
    this.produitService.miseAJourProduit(this.currentProduit);
    this.router.navigate(['produits']);
  }
}
