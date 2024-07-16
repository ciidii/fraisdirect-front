import {PriceModel} from "./PriceModel";

export interface ProductPriceDTO<T> {
  productPriceModel: number;
  product: number;
  priceModel:string;
  basedPriceID: T;
  status: boolean;
}
