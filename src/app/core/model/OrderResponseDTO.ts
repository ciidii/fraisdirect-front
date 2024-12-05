import {ORDER_STATE} from './ORDER_STATE';

export interface OrderResponseDTO {
  orderID: number;
  customerID: number;
  orderDate: string;
  orderState: ORDER_STATE;
}
