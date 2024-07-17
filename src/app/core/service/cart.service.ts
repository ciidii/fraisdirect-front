import {Injectable} from '@angular/core';
import {ProductResponseDTO} from "../model/ProductResponseDTO";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: ProductResponseDTO[] = JSON.parse(localStorage.getItem("cardItems")||'[]');

  constructor() {
  }

  addToCart(product: ProductResponseDTO) {
    this.items.push({...product, quantity: 1})
    localStorage.setItem('cardItems',JSON.stringify(this.items))
  }

  getItems() {
    return this.items;
  }
  getTotalItems(){
    let totalItem = 0;
    this.items.forEach((item)=>{
        totalItem +=item.quantity;
    })
    return totalItem;
  }

  deleteItems(product: ProductResponseDTO) {
    this.items = this.items.filter(i => i.productID !== product.productID)
    localStorage.setItem('cardItems',JSON.stringify(this.items))
  }

  increaseQuantity(productID: number) {
    let item = this.items.find(i => i.productID === productID)
    if (item) {
      item.quantity++;
    }
    localStorage.setItem('cardItems',JSON.stringify(this.items))
  }

  decrementQuantity(productID: number) {
    let item = this.items.find(i => i.productID === productID)
    if (item) {
      item.quantity--;
    }
    localStorage.setItem('cardItems',JSON.stringify(this.items))
  }
  getTotal(){
    this.items.reduce((acc,item)=>{
      return acc + 10*item.quantity;
    },0)
  }
}
