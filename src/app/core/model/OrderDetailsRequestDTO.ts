export class OrderDetailsRequestDTO {
  private _quantity!: number;
  private _productID!: number;

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get productID(): number {
    return this._productID;
  }

  set productID(value: number) {
    this._productID = value;
  }
}
