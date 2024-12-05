import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SubCategoryResponseDTO} from "../model/SubCategoryResponseDTO";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Environment} from "./environment.service";
import {ResponseEntityApi} from "../model/ResponseEntityApi";

@Injectable({providedIn:"root"})
export class SubcategoryService{
  constructor(private environment: Environment, private http: HttpClient) {
  }
  public createSubCategory(subCategory: any): Observable<ResponseEntityApi<SubCategoryResponseDTO>> {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    };
    return this.http.post<ResponseEntityApi<SubCategoryResponseDTO>>(this.environment.url + "subcategories", JSON.stringify(subCategory), options);
  }
}
