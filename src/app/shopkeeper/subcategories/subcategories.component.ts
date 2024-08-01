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
    nameSubCategory: null,
    descriptionSubCategorie:null,
    subCategoryAttributeKey: {
      attributeId: null,
      categoryId: null
    }
  };

  constructor(private categoryService: CategoryService) {}

  onSubmit() {
    this.categoryService.createSubCategory(this.subCategoryAttributes)
      .subscribe(
        response => {
          console.log('Sous-catégorie créée avec succès !', response);
        },
        error => {
          console.error('Erreur lors de la création de la sous-catégorie :', error);
        }
      );
  }


}
