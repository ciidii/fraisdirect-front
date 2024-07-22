import {Injectable} from "@angular/core";
import {Environment} from "./environment.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {OrderRequestDTO} from "../model/OrderRequestDTO";
import {Observable} from "rxjs";
import {ResponseEntityApi} from "../model/ResponseEntityApi";
import {OrderResponseDTO} from "../model/OrderResponseDTO";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private environment: Environment, private http: HttpClient) {
  }

  public order(orderRequest: OrderRequestDTO): Observable<ResponseEntityApi<OrderResponseDTO>> {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    };

    return this.http.post<ResponseEntityApi<OrderResponseDTO>>(this.environment.url + "order",JSON.stringify(orderRequest), options);
  }
}
