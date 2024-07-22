import { AROUND } from "./AROUND";

export interface WightBasedPriceRequestDTO {
  label: string;
  wight: number;
  price: number;
  around: AROUND;
}
