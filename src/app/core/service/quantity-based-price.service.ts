import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Environment} from "./environment.service";
import {Observable} from "rxjs";
import {WightBasedPriceResponseDTO} from "../model/WightBasedPriceResponseDTO";
import {ResponseEntityApi} from "../model/ResponseEntityApi";

@Injectable({
  providedIn: 'root'
})
export class QuantityBasedPriceService {
  private apiUrl = this.environment.url + "quantity-base-pricing";
  constructor(private http: HttpClient, private environment: Environment) {
  }
  getAll():Observable<ResponseEntityApi<Array<WightBasedPriceResponseDTO>>>{
    return this.http.get<ResponseEntityApi<Array<WightBasedPriceResponseDTO>>>(this.apiUrl)
  }
}
