import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Environment} from "./environment.service";
import {Observable} from "rxjs";
import {WightBasedPriceResponseDTO} from "../model/WightBasedPriceResponseDTO";
import {QuantityBasedPriceResponseDTO} from "../model/QuantityBasedPriceResponseDTO";
import {ResponseEntityApi} from "../model/ResponseEntityApi";

@Injectable({
  providedIn: 'root'
})
export class WeightBasedPriceService {

  private apiUrl = this.environment.url + "weight-price";
  constructor(private http: HttpClient, private environment: Environment) {
  }
  getAll():Observable<ResponseEntityApi<Array<QuantityBasedPriceResponseDTO>>>{
    return this.http.get<ResponseEntityApi<Array<QuantityBasedPriceResponseDTO>>>(this.apiUrl)
  }
}
