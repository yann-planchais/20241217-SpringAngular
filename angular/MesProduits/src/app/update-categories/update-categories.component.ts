import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-categories',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-categories.component.html',
  styleUrl: './update-categories.component.css'
})
export class UpdateCategoriesComponent {


  @Input()
  categorie! : Categorie;

  @Output()
  categorieUpdated = new EventEmitter<Categorie>();

  // est initialisé dans le composante listeCategorie.html
  @Input()
  dataTest! : string;
  modifierCategorie() {
    this.categorieUpdated.emit(this.categorie);
  }
  
}
