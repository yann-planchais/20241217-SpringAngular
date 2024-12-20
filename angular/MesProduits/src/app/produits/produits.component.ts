import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../../../services/produit.service';

@Component({
  selector: 'app-produits',
  imports: [ CommonModule],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit{

  produits: Produit[]; // un tableau de produits

  constructor(private produitService : ProduitService) { 
    this.produits=[];
  }


  ngOnInit(): void {
    this.produits = this.produitService.listeProduits();
  }
}
