import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html',
    styleUrl: './binding.component.css',
    imports: [FormsModule]
}) 
export class BindingComponent  {

  titre: string = "Demo de Data Binding Interpolation (avec {{ }} )";

  status: boolean = false;

  nom : string = "valeur de départ";

  changerTitreParEventBinding() {
    if (this.status) {
      this.titre = "Nouveau Titre";
    } else {
      this.titre = "ancien titre";
    }
    this.status = !this.status;
  }
}
