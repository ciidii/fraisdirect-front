import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/fraisdirect/api/v1/catalogue';

  constructor(private http: HttpClient) { }

  addProduct(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(error: any) {
    console.error('Erreur dans le service ProductService :', error);
    return throwError(error);
  }
}
