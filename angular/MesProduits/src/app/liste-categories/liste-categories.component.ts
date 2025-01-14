import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { ProduitService } from '../services/produit.service';
import { UpdateCategoriesComponent } from "../update-categories/update-categories.component";

@Component({
  selector: 'app-liste-categories',
  imports: [UpdateCategoriesComponent],
  templateUrl: './liste-categories.component.html',
  styleUrl: './liste-categories.component.css'
})
export class ListeCategoriesComponent implements OnInit {

categories! : Categorie[];
updatedCategorie : Categorie={"idCat":0, "nomCat": ""};
constructor(private produitsService : ProduitService) {

}

  ngOnInit(): void {
    this.produitsService.listeCategorie().subscribe(cat => this.categories = cat );
  }


}
