import { Component, OnInit } from '@angular/core';
import { NgForOf } from "@angular/common";
import { CategoryResponseDTO } from "../../core/model/CategoryResponseDTO";
import { CategoryService } from "../../core/service/categoryService";
import { RequestPageableVO } from "../../core/model/RequestPageableVO";
import { SubCategoryResponseDTO } from "../../core/model/SubCategoryResponseDTO";
import {PaginationState} from "../../core/model/PaginationState";
@Component({
  selector: 'app-presentation-page',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.css']
})
export class PresentationPageComponent implements OnInit {
  public categories!: Array<CategoryResponseDTO>;
  public subcategories!: Array<SubCategoryResponseDTO>;
  public paginationStates: { [subCategoryID: number]: PaginationState } = {};

  products = [
    { nameCategory: 'Pommes', imageUrl: '/assets/images/pomme.jpg', description: 'Des pommes fraîches et croquantes, parfaites pour une collation saine.' },
    { nameCategory: 'Bananes', imageUrl: '/assets/images/banane.jpg', description: 'Bananes mûres et délicieuses, idéales pour un apport rapide en énergie.' },
    { nameCategory: 'Carottes', imageUrl: '/assets/images/carotte.jpg', description: 'Carottes fraîches et croquantes, parfaites pour les salades et les plats cuisinés.' },
    { nameCategory: 'Oranges', imageUrl: '/assets/images/orange.jpg', description: 'Oranges juteuses et sucrées, parfaites pour un jus frais et délicieux.' },
    { nameCategory: 'Tomates', imageUrl: '/assets/images/tomate.jpg', description: 'Tomates rouges et mûres, idéales pour les salades et les sauces.' },
    { nameCategory: 'Poires', imageUrl: '/assets/images/poire.jpg', description: 'Poires juteuses et sucrées, parfaites pour un dessert ou une collation.' },
    { nameCategory: 'Concombres', imageUrl: '/assets/images/concombre.jpg', description: 'Concombres frais et croquants, parfaits pour les salades et les sandwichs.' },
    { nameCategory: 'Fraises', imageUrl: '/assets/images/fraise.jpg', description: 'Fraises sucrées et juteuses, parfaites pour les desserts et les salades de fruits.' },
    { nameCategory: 'Courgettes', imageUrl: '/assets/images/courgette.jpg', description: 'Courgettes vertes et fraîches, idéales pour les sautés et les plats cuits au four.' },
    { nameCategory: 'Raisins', imageUrl: '/assets/images/raisin.jpg', description: 'Raisins sucrés et juteux, parfaits pour une collation ou pour garnir les salades.' },
    { nameCategory: 'Salades', imageUrl: '/assets/images/salade.jpg', description: 'Salades vertes et croquantes, idéales pour accompagner vos repas.' },
    { nameCategory: 'Avocats', imageUrl: '/assets/images/avocat.jpg', description: 'Avocats crémeux et savoureux, parfaits pour les salades, les toasts, et les guacamoles.' },
    { nameCategory: 'Aubergines', imageUrl: '/assets/images/aubergine.jpg', description: 'Aubergines fraîches et savoureuses, parfaites pour les plats méditerranéens.' },
    { nameCategory: 'Oignons', imageUrl: '/assets/images/onion.jpg', description: 'Oignons frais et croquants, parfaits pour les salades et les plats cuisinés.' },
    { nameCategory: 'Piments', imageUrl: '/assets/images/piment.jpg', description: 'Piments frais et épicés, parfaits pour ajouter du piquant à vos plats.' },
  ];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories(new RequestPageableVO(1, 10)).subscribe({
      next: response => {
        this.categories = response.items;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  get paginatedCategories() {
    return (subCategoryID: number) => {
      const state = this.paginationStates[subCategoryID];
      if (state) {
        const start = state.currentPage * state.itemsPerPage;
        const end = start + state.itemsPerPage;
        return this.products.slice(start, end);
      }
      return [];
    };
  }

  nextPage(subCategoryID: number) {
    const state = this.paginationStates[subCategoryID];
    if (state && (state.currentPage + 1) * state.itemsPerPage < this.products.length) {
      state.currentPage++;
    }
  }

  previousPage(subCategoryID: number) {
    const state = this.paginationStates[subCategoryID];
    if (state && state.currentPage > 0) {
      state.currentPage--;
    }
  }

  getSubCategories(categoryID: number) {
    this.categoryService.getSubCategoriesByCategoryID(new RequestPageableVO(1, 10), categoryID).subscribe({
      next: response => {
        this.subcategories = response.items;
        // Initialiser l'état de pagination pour chaque sous-catégorie
        this.subcategories.forEach(sc => {
          if (!this.paginationStates[sc.subCategoryID]) {
            this.paginationStates[sc.subCategoryID] = { currentPage: 0, itemsPerPage: 3 };
          }
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
