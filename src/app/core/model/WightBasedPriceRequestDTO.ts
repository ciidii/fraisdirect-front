import { AROUND } from "./AROUND";

export interface WightBasedPriceRequestDTO {
  label: string;
  weight: number;
  price: number;
  around: AROUND;
}
