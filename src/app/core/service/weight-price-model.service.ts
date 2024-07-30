import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WightBasedPriceRequestDTO} from '../model/WightBasedPriceRequestDTO';
import {environment} from '../../environement';
import {ResponseEntityApi} from "../model/ResponseEntityApi";

@Injectable({
  providedIn: 'root'
})
export class WeightPriceModelService {
  private baseUrl = `${environment.apiUrl}/weight-price`;

  constructor(private http: HttpClient) {
  }

  createWeightBasedPrice(request: WightBasedPriceRequestDTO): Observable<void> {
    return this.http.post<void>(this.baseUrl, request);
  }

  checkLabelExists(label: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/exists?label=${label}`);
  }

  getAllModels(): Observable<ResponseEntityApi<any>> {
    return this.http.get<ResponseEntityApi<any>>(`${this.baseUrl}/all`);
  }

}
