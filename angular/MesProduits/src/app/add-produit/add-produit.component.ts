import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent implements OnInit {
 
  constructor() {
  }

  ngOnInit(): void {
  }

  newProduit = new Produit();

  addProduit() {
    console.log(this.newProduit);
  }
  
}
