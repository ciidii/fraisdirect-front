import {Injectable} from "@angular/core";
import {Environment} from "./environment.service";
import {Observable} from "rxjs";
import {ResponsePageableApi} from "../model/ResponsePageableApi";
import {ProductResponseDTO} from "../model/ProductResponseDTO";
import {RequestPageableVO} from "../model/RequestPageableVO";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {ResponseEntityApi} from "../model/ResponseEntityApi";

@Injectable({
  providedIn: "root"
})
export class CatalogueService {
  constructor(private environment: Environment, private http: HttpClient) {
  }

  public getProductBySubCategory(requestPageableVO: RequestPageableVO, subcategoryID: number): Observable<ResponsePageableApi<Array<ProductResponseDTO>>> {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
      params: new HttpParams().set("page", requestPageableVO.page).set("rpp", requestPageableVO.rpp).set("subcategoryID", subcategoryID).set("status",2)
    }
    return this.http.get<ResponsePageableApi<Array<ProductResponseDTO>>>(this.environment.url + "catalogue/product-by-subcategory", options);

  }

  public getProductByProductID(productID:number): Observable<ResponseEntityApi<ProductResponseDTO>>{
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
      params: new HttpParams().set("productID",productID)
    }
    return this.http.get<ResponseEntityApi<ProductResponseDTO>>(this.environment.url + "catalogue", options);

  }

}
