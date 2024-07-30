import {Injectable} from "@angular/core";
import {Environment} from "./environment.service";
import {Observable} from "rxjs";
import {ResponseEntityApi} from "../model/ResponseEntityApi";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environement";

@Injectable({providedIn:"root"})
export class QuantityPriceModelService{

  constructor(private http:HttpClient) {
  }
  private baseUrl = `${environment.apiUrl}/quantity-base-pricing`;
  createQuantityBasedPrice(data:any):Observable<ResponseEntityApi<any>>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ResponseEntityApi<any>>(this.baseUrl,JSON.stringify(data),{headers})
  }
  getAllModels(): Observable<ResponseEntityApi<any>> {
    return this.http.get<ResponseEntityApi<any>>(`${this.baseUrl}/all`);
  }
}
