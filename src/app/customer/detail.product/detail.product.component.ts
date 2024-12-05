import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CatalogueService} from "../../core/service/catalogue.service";
import {ProductResponseDTO} from "../../core/model/ProductResponseDTO";
import {NgForOf} from "@angular/common";
import {UtilsService} from "../../core/service/utils.service";
import {CartService} from "../../core/service/cart.service";
import {ProductPriceService} from "../../core/service/product-price.service";

@Component({
  selector: 'app-detail.product',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './detail.product.component.html',
  styleUrl: './detail.product.component.css'
})
export class DetailProductComponent implements OnInit {
  private memberID!: number;
  public product!:ProductResponseDTO;

  constructor(private activeRoute: ActivatedRoute,
              private catalogueService: CatalogueService,
              private priceService:ProductPriceService,
              public utilsService: UtilsService,
              private cartService:CartService

  ) {
  }

  ngOnInit(): void {
    this.memberID = this.activeRoute.snapshot.params['product-id']
    this.catalogueService.getProductByProductID(this.memberID).subscribe({
      next: response => {
        this.product = response.data;
        this.getProductPrice(this.product)
      },error:err => {
        console.log(err)
      }
    })
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

  addCart(product: ProductResponseDTO) {
      this.cartService.addToCart(product)
  }
}
