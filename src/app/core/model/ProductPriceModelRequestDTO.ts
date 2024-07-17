export interface ProductPriceModelRequestDTO {
  product: number;
  priceModel: string;  // Adjust the type if PRICE_MODEL is an enum or a specific class.
  basedPriceID: number;
  status: boolean;
}
