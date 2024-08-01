import { Injectable } from "@angular/core";
import { Environment } from "./environment.service";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { RequestPageableVO } from "../model/RequestPageableVO";
import { CategoryResponseDTO } from "../model/CategoryResponseDTO";
import { Observable } from "rxjs";
import { ResponsePageableApi } from "../model/ResponsePageableApi";
import { SubCategoryResponseDTO } from "../model/SubCategoryResponseDTO";
import { ResponseEntityApi } from "../model/ResponseEntityApi";
import { Category } from "../model/Category";

@Injectable({ providedIn: "root" })
export class CategoryService {
  private apiUrl = this.environment.url + "categories/";

  constructor(private environment: Environment, private http: HttpClient) {}

  public getCategories(): Observable<ResponseEntityApi<Array<CategoryResponseDTO>>> {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    };
    return this.http.get<ResponseEntityApi<Array<CategoryResponseDTO>>>(this.apiUrl + "all", options);
  }

  public getSubCategoriesByCategoryID(
    requestPageableVO: RequestPageableVO,
    categoryID: number
  ): Observable<ResponsePageableApi<Array<SubCategoryResponseDTO>>> {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
      params: new HttpParams()
        .set("page", requestPageableVO.page)
        .set("rpp", requestPageableVO.rpp)
        .set("categoryID", categoryID.toString())
    };
    return this.http.get<ResponsePageableApi<Array<SubCategoryResponseDTO>>>(
      this.environment.url + "subcategories/by-category-id",
      options
    );
  }

  public getSubCategories(): Observable<ResponseEntityApi<Array<SubCategoryResponseDTO>>> {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    };
    return this.http.get<ResponseEntityApi<Array<SubCategoryResponseDTO>>>(
      this.environment.url + "subcategories/all",
      options
    );
  }

  public createCategory(category: Category): Observable<Category> {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    };
    return this.http.post<Category>(this.apiUrl + "create", category, options);
  }
  // Méthode pour créer une sous-catégorie
  public createSubCategory(subCategory: SubCategoryResponseDTO): Observable<SubCategoryResponseDTO> {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    };
    return this.http.post<SubCategoryResponseDTO>(this.apiUrl + "subcategories/add", subCategory, options);
  }
}
