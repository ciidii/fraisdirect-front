import {Attribute, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environement';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {
  private apiUrl = `${environment.apiUrl}/subcategories/attributes`;

  constructor(private http: HttpClient) { }

  // Récupérer tous les attributs
  getAllAttributes(): Observable<Attribute[]> {
    return this.http.get<Attribute[]>(this.apiUrl);
  }

  // Créer un nouvel attribut
  createAttribute(attribute: Attribute): Observable<Attribute> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Attribute>(this.apiUrl, attribute, { headers });
  }

  // Ajoutez d'autres méthodes selon vos besoins (update, delete, etc.)
}
