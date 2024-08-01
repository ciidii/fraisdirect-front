import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Environment} from "./environment.service";
import {PaymentResponse} from "../model/PaymentResponse";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient,private environment:Environment) { }
  pay(invoice:any):Observable<PaymentResponse>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post<PaymentResponse>(this.environment.url + "payments/create-invoice", invoice, {headers})
  }
}
