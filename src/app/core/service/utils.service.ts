import { Injectable } from '@angular/core';
import {ProductResponseDTO} from "../model/ProductResponseDTO";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  formatImage(image: string): string | undefined {
    if (image !== undefined) {
      return `data:image/png;base64,${image}`;
    }
    return "";
  }
  displayProductPrice(product:ProductResponseDTO){
    let price="";
    if(product.productPrice?.priceModel=="WEIGHT"){
      price = product.productPrice?.basedPriceID?.wight + ' kg /' + product.productPrice?.basedPriceID?.price + ' F CFA';
      return price;
    }else if(product.productPrice.priceModel=="QUANTITY"){
      price  = product.productPrice.basedPriceID.quantity+ ' F CFA /' + product.productPrice?.basedPriceID?.quantity + ' unités';
      return price;
    }else
      return price;
  }
}
