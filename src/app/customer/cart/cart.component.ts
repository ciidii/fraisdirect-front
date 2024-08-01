import {Component, OnInit} from '@angular/core';
import {JsonPipe, NgForOf} from "@angular/common";
import {CartService} from "../../core/service/cart.service";
import {UtilsService} from "../../core/service/utils.service";
import {ProductResponseDTO} from "../../core/model/ProductResponseDTO";
import {OrderRequestDTO} from "../../core/model/OrderRequestDTO";
import {AuthState} from "../../core/model/AuthState";
import {Router, RouterLink} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {OrderService} from "../../core/service/OrderService";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf,
    RouterLink
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']

})
export class CartComponent implements OnInit {

  constructor(
    public cartService: CartService,
    public utilsService: UtilsService,
  ) {
  }

  ngOnInit(): void {
  }

  onDecreaseQuantity(productID: number) {
    this.cartService.decrementQuantity(productID);
  }

  onIncreaseQuantity(productID: number) {
    this.cartService.increaseQuantity(productID);
  }

  computeProductPrice(product: ProductResponseDTO): number {
    return this.cartService.computeProductPrice(product);
  }

  onRemoveFromCart(product: any) {
    this.cartService.deleteItems(product);
  }

}
