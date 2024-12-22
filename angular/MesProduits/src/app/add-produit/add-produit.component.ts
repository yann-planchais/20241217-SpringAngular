import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent implements OnInit {
 
  constructor(private produitService : ProduitService) {
  
  }

  ngOnInit(): void {
  }

  newProduit = new Produit();

  message? : string;

  addProduit() {
    console.log(this.newProduit);

    this.produitService.ajouterProduit(this.newProduit);
    this.message = "Produit " + this.newProduit.nomProduit + " ajouté avec succès";
  }
  
}
