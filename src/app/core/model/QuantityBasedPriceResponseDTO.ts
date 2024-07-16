import {AROUND} from "./AROUND";

export interface QuantityBasedPriceResponseDTO {
  quantityBasedPriceID?: number;
  label: string;
  quantity: number;
  price: number;
  around: AROUND;
}
