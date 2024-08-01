import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CartService} from "../../core/service/cart.service";
import {PaymentService} from "../../core/service/payment.service";
import {ToastrService} from "ngx-toastr";
import {ORDER_STATE} from "../../core/model/ORDER_STATE";
import {OrderService} from "../../core/service/OrderService";
import {OrderRequestDTO} from "../../core/model/OrderRequestDTO";
import {AuthState} from "../../core/model/AuthState";

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})
export class OrderConfirmationComponent implements OnInit{
  private orderRequestDTO: OrderRequestDTO;
  orderDetails = {
    firstName: 'Diallo',
    lastName: 'CIDI',
    address: 'Ucad',
    phone: '+221782156437',
    city: 'Amitié 3',
    region: 'Dakar',
    items: [
      { name: 'Produit A', quantity: 2, price: 5000 },
      { name: 'Produit B', quantity: 1, price: 3000 }
    ],
    totalPrice: this.cartService.computeTotalCart()
  };

  constructor(
              private router: Router,
              private paymentService:PaymentService,
              private cartService:CartService,
              private toaster:ToastrService,
              private orderService:OrderService,
              private toastr:ToastrService,
              private authState:AuthState
  ) {
    this.orderRequestDTO=new OrderRequestDTO();
  }

  ngOnInit(): void {
  }

  onConfirm() {
    let invoice = {
      invoice:{
        items:{

        },
        total_amount:this.cartService.computeTotalCart()
      }
    }
    invoice.invoice.items = this.cartService.getItems()
    console.log(invoice)
    this.paymentService.pay(invoice).subscribe({
      next:resp=>{
        if (resp.response_code=="00"){
          this.onOrder()
          window.location.href = resp.response_text;
        }else {
          this.toaster.error("Une erreur c'est produit lors du payment")
        }
      },
      error:err => {
        console.log(err)
      }
    })
  }

  onCancel() {
    this.router.navigateByUrl('/customer/cart').then(r => false);
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
}
