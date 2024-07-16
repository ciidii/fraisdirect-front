import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CategoryResponseDTO} from "../../core/model/CategoryResponseDTO";
import {CategoryService} from "../../core/service/categoryService";
import {RequestPageableVO} from "../../core/model/RequestPageableVO";
import {SubCategoryResponseDTO} from "../../core/model/SubCategoryResponseDTO";
import {PaginationState} from "../../core/model/PaginationState";
import {CatalogueService} from "../../core/service/catalogue.service";
import {ProductResponseDTO} from "../../core/model/ProductResponseDTO";
import {Router, RouterLink} from "@angular/router";
import {PriceService} from "../../core/service/pricies.service";
import {ProductPriceDTO} from "../../core/model/ProductPriceDTO";
import {PriceModel} from "../../core/model/PriceModel";

@Component({
  selector: 'app-presentation-page',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.css']
})
export class PresentationPageComponent implements OnInit {
  public categories!: Array<CategoryResponseDTO>;
  public subcategories!: Array<SubCategoryResponseDTO>;
  public paginationStates: { [subCategoryID: number]: PaginationState } = {};
  public productsBySubCategory: { [subCategoryID: number]: Array<ProductResponseDTO> } = {};
  public productPrice!: ProductPriceDTO<any>;

  constructor(
    private categoryService: CategoryService,
    private catalogueService: CatalogueService,
    private route: Router,
    private priceService: PriceService
  ) {
  }

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

  get paginatedProducts() {
    return (subCategoryID: number) => {
      const state = this.paginationStates[subCategoryID];
      if (state && this.productsBySubCategory[subCategoryID]) {
        const start = state.currentPage * state.itemsPerPage;
        const end = start + state.itemsPerPage;
        return this.productsBySubCategory[subCategoryID].slice(start, end);
      }
      return [];
    };
  }

  nextPage(subCategoryID: number) {
    const state = this.paginationStates[subCategoryID];
    if (state && (state.currentPage + 1) * state.itemsPerPage < (this.productsBySubCategory[subCategoryID]?.length || 0)) {
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
        this.subcategories.forEach(sc => {
          this.getProductsBySubcategoryId(sc.subCategoryID);
          if (!this.paginationStates[sc.subCategoryID]) {
            this.paginationStates[sc.subCategoryID] = {currentPage: 0, itemsPerPage: 3};
          }
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }

  getProductsBySubcategoryId(subcategoryID: number) {
    this.catalogueService.getProductBySubCategory(new RequestPageableVO(1, 10), subcategoryID).subscribe({
      next: response => {
        this.productsBySubCategory[subcategoryID] = response.items;
        this.productsBySubCategory[subcategoryID].forEach(product => {
          this.getProductPrice(product);
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }

  getProductPrice(product: ProductResponseDTO) {
    this.priceService.getProductPrice(product.productID).subscribe({
      next: response => {
        product.productPrice = response.data;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  formatImage(image: string): string | undefined {
    if (image !== undefined) {
      return `data:image/png;base64,${image}`;
    }
    return "";
  }

  handleDescription(productID: number) {
    this.route.navigateByUrl(`/product-details/${productID}`);
  }

  protected readonly PriceModel = PriceModel;
}
