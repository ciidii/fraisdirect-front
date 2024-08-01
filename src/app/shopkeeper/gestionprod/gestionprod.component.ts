import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { Product } from "../../core/model/Product";
import { gestionproductService } from "../../core/service/gestionproductService";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestionprod',
  templateUrl: './gestionprod.component.html',
  styleUrls: ['./gestionprod.component.css'],
  imports: [
    NgxPaginationModule,
    CommonModule,
    FormsModule
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestionprodComponent implements OnInit {

  products: Product[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  selectedProduct: Product | null = null;

  constructor(private gestionproductService: gestionproductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.gestionproductService.getAllProducts(this.currentPage, this.itemsPerPage, 0).subscribe(
      response => {
        this.products = response.items;
        this.totalItems = response.records;
      },
      error => {
        console.log('Error fetching products:', error);
        // Gérer l'erreur ici (affichage d'un message d'erreur à l'utilisateur, etc.)
      }
    );
  }

  editProduct(product: Product) {
    this.selectedProduct = { ...product }; // Création d'une copie du produit sélectionné pour l'édition
  }

  updateProduct() {
    if (this.selectedProduct) {
      this.gestionproductService.updateProduit(this.selectedProduct).subscribe(
        () => {
          console.log('Produit mis à jour avec succès');
          this.loadProducts(); // Recharger la liste des produits après la mise à jour
          this.selectedProduct = null; // Réinitialiser le produit sélectionné
        },
        error => {
          console.error('Erreur lors de la mise à jour du produit : ', error);
        }
      );
    }
  }

  cancelEdit() {
    this.selectedProduct = null; // Réinitialiser le produit sélectionné
  }

  supprimerProduit(productid: number | undefined): void {
    if (productid === undefined) {
      console.error('Product ID is undefined');
      return;
    }

    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      this.gestionproductService.deleteProduit(productid).subscribe(
        () => {
          console.log('Produit supprimé avec succès');
          this.loadProducts(); // Recharger la liste des produits après suppression
        },
        error => {
          console.error('Erreur lors de la suppression du produit : ', error);
        }
      );
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadProducts();
  }
}
