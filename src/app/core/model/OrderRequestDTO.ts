import {OrderDetailsRequestDTO} from './OrderDetailsRequestDTO';
import {ORDER_STATE} from "./ORDER_STATE";

export class OrderRequestDTO {
  public customerID!: number;
  public orderState!: ORDER_STATE;
  public orderDetails!: any[];
  constructor() {
    this.orderDetails = [];
  }
}
