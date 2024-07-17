import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WightBasedPriceRequestDTO } from '../model/WightBasedPriceRequestDTO';
import { environment } from '../../environement';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  private baseUrl = `${environment.apiUrl}/weight-price`;

  constructor(private http: HttpClient) {}

  createWeightBasedPrice(request: WightBasedPriceRequestDTO): Observable<void> {
    return this.http.post<void>(this.baseUrl, request);
  }
}
