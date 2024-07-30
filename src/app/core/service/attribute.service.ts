import {Attribute, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environement';
import {ResponseEntityApi} from "../model/ResponseEntityApi";
import {AttributeResponseDTO} from "../model/AttributeResponseDTO";
import {Environment} from "./environment.service";
import {AttributeRequestDTO} from "../model/AttributeRequestDTO";

@Injectable({
  providedIn: 'root'
})
export class AttributeService {
  constructor(private http: HttpClient,private environment:Environment) { }
  public getAttributes(): Observable<ResponseEntityApi<Array<AttributeResponseDTO>>> {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    };
    return this.http.get<ResponseEntityApi<Array<AttributeResponseDTO>>>(
      this.environment.url + "attributes/all",
      options
    );
  }
  createAttribute(attribute: AttributeRequestDTO): Observable<ResponseEntityApi<AttributeResponseDTO>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ResponseEntityApi<AttributeResponseDTO>>(this.environment.url+"attributes", attribute, { headers });
  }
}
