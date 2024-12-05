import {AROUND} from "./AROUND";

export interface QuantityBasedPriceResponseDTO {
  id?: number;
  label: string;
  quantity: number;
  price: number;
  around: AROUND;
}
