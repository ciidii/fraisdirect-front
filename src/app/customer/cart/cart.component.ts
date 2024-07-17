import {Component, Inject, OnInit} from '@angular/core';
import {JsonPipe, NgForOf} from "@angular/common";
import {CartService} from "../../core/service/cart.service";
import {UtilsService} from "../../core/service/utils.service";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  constructor(public cartService:CartService,public utilsService:UtilsService) {
  }

  ngOnInit(): void {
  }

  onDecreaseQuantity(productID:number) {
    this.cartService.decrementQuantity(productID)
  }

  onIncreaseQuantity(productID:number) {
    this.cartService.increaseQuantity(productID)
  }


  onRemoveFromCart(product:any) {
    this.cartService.deleteItems(product)
  }
}
