import {Component, OnInit} from '@angular/core';
import {JsonPipe, NgForOf} from "@angular/common";
import {CartService} from "../../core/service/cart.service";
import {UtilsService} from "../../core/service/utils.service";
import {ProductResponseDTO} from "../../core/model/ProductResponseDTO";
import {OrderRequestDTO} from "../../core/model/OrderRequestDTO";
import {ORDER_STATE} from "../../core/model/ORDER_STATE";
import {AuthState} from "../../core/model/AuthState";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {OrderService} from "../../core/service/OrderService";
import {empty} from "rxjs";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']

})
export class CartComponent implements OnInit {
   private  orderRequestDTO: OrderRequestDTO;

  constructor(
    public cartService: CartService,
    public utilsService: UtilsService,
    private authState: AuthState,
    private router: Router,
    private toastr: ToastrService,
    private orderService: OrderService
  ) {
    this.orderRequestDTO = new OrderRequestDTO();
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

  onOrder() {
    this.finalPreparation();
    this.orderService.order(this.orderRequestDTO).subscribe({
      next: (response) => {
        this.toastr.info("Commande passée avec succès");
      },
      error: err => {
        this.toastr.error("Un problème est survenu lors du passage de la commande");
      }
    });
  }

  finalPreparation() {
    if (this.authState.authenticated && this.authState.user.id != null) {
      this.orderRequestDTO.customerID = this.authState.user.id;
      this.prepareOrder();
    } else {
      this.toastr.error("Un compte est nécessaire pour passer une commande", "Compte requis");
      this.router.navigateByUrl("/customer/login").then(r => false);
    }
  }

  prepareOrder() {
    let cart = this.cartService.getItems();
    this.orderRequestDTO.orderState = ORDER_STATE.PENDING;
    this.orderRequestDTO.orderDetails = [];
    cart.forEach((cartElm) => {
      let orderDetail: { quantity: number; productID: number } = {
        productID: cartElm.productID,
        quantity: cartElm.quantity
      };
      this.orderRequestDTO.orderDetails.push(orderDetail);
    });
  }

  protected readonly empty = empty;
}
