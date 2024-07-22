import { Component } from '@angular/core';
import { Category } from '../../core/model/Category';
import { CategoryService } from '../../core/service/categoryService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  category: Category = {
    nameCategory: '',
    description: ''
  };

  constructor(private categoryService: CategoryService) { }

  onSubmit() {
    this.categoryService.createCategory(this.category).subscribe(
      response => {
        console.log('Catégorie ajoutée avec succès', response);
        this.category = { nameCategory: '', description: '' }; // Réinitialiser le formulaire
      },
      error => {
        console.error('Erreur lors de l\'ajout de la catégorie', error);
      }
    );
  }


}
