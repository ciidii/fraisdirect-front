import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ResponsePageableApi} from "../model/ResponsePageableApi";
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class gestionproductService {

  private baseUrl = 'http://localhost:8080/fraisdirect/api/v1/catalogue';

  constructor(private http: HttpClient) { }

  getAllProducts(page: number, rpp: number, status: number): Observable<ResponsePageableApi<Product[]>> {
    const params = { page: page.toString(), rpp: rpp.toString(), status: status.toString() };
    return this.http.get<ResponsePageableApi<Product[]>>(`${this.baseUrl}/all`, { params });
  }
}
