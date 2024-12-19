import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produits',
  imports: [CommonModule],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {

  produits: string[]; // un tableau de chaines de caractères représentant la liste des produits

  constructor() {
    this.produits = ["PC Asus", "Imprimante Epson", "Tablette samsung"];
  }
}
