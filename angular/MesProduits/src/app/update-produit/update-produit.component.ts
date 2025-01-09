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
  updatedCatId? : number;
  
  constructor(private activateRoute : ActivatedRoute, private router : Router, private produitService : ProduitService) {

  }
  ngOnInit(): void {   

   this.produitService.listeCategorie().subscribe(cats => this.categories = cats);

   this.produitService.consulterProduit(this.activateRoute.snapshot.params['idProduit']).subscribe( prod => {
    this.currentProduit = prod;
    this.updatedCatId = this.currentProduit.categorie?.idCat;
    console.log('[UPDATE 1] produit récupéré : ' + JSON.stringify(this.currentProduit));
  });
  
  }

  modifierProduit() : void {
    console.log("Produit modifié : " + this.currentProduit.nomProduit);

    this.currentProduit.categorie = this.categories.find(cat => cat.idCat == this.updatedCatId)!;
    this.produitService.miseAJourProduit(this.currentProduit).subscribe(
      {
        next : prod =>  {
          this.router.navigate(['produits']);
          console.log("[UPDATE] produit mis à jour :  " + JSON.stringify(this.currentProduit));},
        error : e => {alert('Erreur lors de la modification : ' + e)}        
      }
    );
     
  }

    /**
     * OLD PART SANS APPEL A SPRING
     */

    modifierProduit_oldTableau() : void {
      //  this.currentProduit.categorie = this.produitService.consulterCategorie(this.updatedCatId);
        this.produitService.miseAJourProduit(this.currentProduit);
        this.router.navigate(['produits']); 
      }

}
