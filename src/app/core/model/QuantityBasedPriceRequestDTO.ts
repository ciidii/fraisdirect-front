export interface QuantityBasedPriceRequestDTO {
  label: string;
  quantity: number;
  price: number;
  around: string;  // Adjust the type if AROUND is an enum or a specific class.
}
