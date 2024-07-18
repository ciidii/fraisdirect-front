import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../core/service/categoryService';


@Component({
  selector: 'app-subcategories',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './subcategories.component.html',
  styleUrl: './subcategories.component.css'
})
export class SubcategoriesComponent {
  subCategoryAttributes: any = {
    subCategoryAttributeKey: {
      attributeId: null,
      categoryId: null
    }
  };

  constructor(private categoryService: CategoryService) {}

  onSubmit() {
    // Appel à un service pour créer une nouvelle sous-catégorie
    this.categoryService.createSubCategory(this.subCategoryAttributes)
      .subscribe(
        response => {
          console.log('Sous-catégorie créée avec succès !', response);
          // Ajouter ici la gestion des réponses ou des messages de confirmation
        },
        error => {
          console.error('Erreur lors de la création de la sous-catégorie :', error);
          // Gérer les erreurs et afficher des messages appropriés à l'utilisateur
        }
      );
  }


}
