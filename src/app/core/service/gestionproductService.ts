import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ResponsePageableApi } from "../model/ResponsePageableApi";
import { Product } from "../model/Product";

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

  deleteProduit(id: number | undefined): Observable<any> {
    if (id === undefined) {
      throw new Error('Product ID is undefined');
    }
    return this.http.delete<any>(`${this.baseUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error during product deletion:', error);
        return throwError(() => new Error('Error during product deletion'));
      })
    );
  }


  updateProduit(product: Product): Observable<any> {
    if (!product.productID) {
      throw new Error('Product ID is required');
    }
    return this.http.put<any>(`${this.baseUrl}/${product.productID}`, product);
  }
}
