import {AROUND} from "./AROUND";

export interface WightBasedPriceResponseDTO {
  id: number;
  label: string;
  wight: number;
  price: number;
  around: AROUND;
}
