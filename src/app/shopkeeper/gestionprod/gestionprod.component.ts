import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import {Product} from "../../core/model/Product";
import {gestionproductService} from "../../core/service/gestionproductService";


@Component({
  selector: 'app-gestionprod',
  templateUrl: './gestionprod.component.html',
  styleUrls: ['./gestionprod.component.css'],
  imports: [
    NgxPaginationModule,
    CommonModule
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestionprodComponent implements OnInit {

  products: Product[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

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

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadProducts();
  }
}
