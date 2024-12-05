import {Injectable} from '@angular/core';
import {ProductResponseDTO} from "../model/ProductResponseDTO";
import {ProductPriceService} from "./product-price.service";
import {AuthState} from "../model/AuthState";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: ProductResponseDTO[] = JSON.parse(localStorage.getItem("cardItems"+'cardItems') || '[]');

  constructor(private priceService: ProductPriceService,private authState:AuthState) {
    this.items.forEach(item => this.loadProductPrice(item));
  }

  addToCart(product: ProductResponseDTO) {
    if (!this.checkIfProductAdded(product)) {
      this.items.push({...product, quantity: 1});
      this.loadProductPrice(product);
      localStorage.setItem('cardItems'+this.authState.user.id, JSON.stringify(this.items));
    }
  }

  private loadProductPrice(product: ProductResponseDTO) {
    this.priceService.getProductPrice(product.productID).subscribe({
      next: data => {
        product.productPrice = data.data;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  getItems() {
    return this.items;
  }

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  deleteItems(product: ProductResponseDTO) {
    this.items = this.items.filter(i => i.productID !== product.productID);
    localStorage.setItem('cardItems'+this.authState.user.id, JSON.stringify(this.items));
  }

  increaseQuantity(productID: number) {
    let item = this.items.find(i => i.productID === productID);
    if (item) {
      item.quantity++;
    }
    localStorage.setItem('cardItems'+this.authState.user.id, JSON.stringify(this.items));
  }

  decrementQuantity(productID: number) {
    let item = this.items.find(i => i.productID === productID);
    if (item && item.quantity > 1) {
      item.quantity--;
    }
    localStorage.setItem('cardItems'+this.authState.user.id, JSON.stringify(this.items));
  }

  computeProductPrice(product: ProductResponseDTO): number {
    let productTotalPrice = 0;
    if (product.productPrice && product.productPrice.basedPriceID) {
      if (product.productPrice.priceModel === "WEIGHT") {
        productTotalPrice = (product.productPrice.basedPriceID.price * product.quantity) / product.productPrice.basedPriceID.wight;
      } else if (product.productPrice.priceModel === "QUANTITY") {
        productTotalPrice = (product.productPrice.basedPriceID.price * product.quantity) / product.productPrice.basedPriceID.quantity;
      }
    }
    return productTotalPrice;
  }

  computeTotalCart() {
    let totalCart = 0;
    this.items.forEach((item) => {
      totalCart += this.computeProductPrice(item);
    })
    return totalCart;
  }

  checkIfProductAdded(product: ProductResponseDTO) {
    return this.items.some(item => item.productID === product.productID);
  }
}
