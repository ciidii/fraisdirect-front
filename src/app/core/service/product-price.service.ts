import {Injectable} from "@angular/core";
import {Environment} from "./environment.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {ResponseEntityApi} from "../model/ResponseEntityApi";
import {ProductPriceDTO} from "../model/ProductPriceDTO";
import {Observable} from "rxjs";
import {ProductPriceModelRequestDTO} from "../model/ProductPriceModelRequestDTO";

@Injectable({
  providedIn: "root"
})
export class ProductPriceService {

  constructor(private environment: Environment, private http: HttpClient) {
  }

  getProductPrice(productID: number) {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
      params: new HttpParams().set("productID", productID)
    }
    return this.http.get<ResponseEntityApi<ProductPriceDTO<any>>>(this.environment.url + "product-price/product-price", options);
  }

  configProductPrice(productPriceRequest: ProductPriceModelRequestDTO): Observable<ResponseEntityApi<any>> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post<ResponseEntityApi<any>>(this.environment.url + "product-price", productPriceRequest, {headers})
  }
}
