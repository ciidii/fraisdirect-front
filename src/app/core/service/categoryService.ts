import {Injectable} from "@angular/core";
import {Environment} from "./environment.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {RequestPageableVO} from "../model/RequestPageableVO";
import {CategoryResponseDTO} from "../model/CategoryResponseDTO";
import {Observable} from "rxjs";
import {ResponsePageableApi} from "../model/ResponsePageableApi";
import {SubCategoryResponseDTO} from "../model/SubCategoryResponseDTO";
import {ResponseEntityApi} from "../model/ResponseEntityApi";

@Injectable({providedIn: "root"})
export class CategoryService {
  constructor(private environment: Environment, private http: HttpClient) {
  }

    public getCategories(): Observable<ResponseEntityApi<Array<CategoryResponseDTO>>> {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    }
    return this.http.get<ResponseEntityApi<Array<CategoryResponseDTO>>>(this.environment.url + "categories/all", options);

  }

  public getSubCategoriesByCategoryID(requestPageableVO: RequestPageableVO, categoryID: number): Observable<ResponsePageableApi<Array<SubCategoryResponseDTO>>> {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
      params: new HttpParams().set("page", requestPageableVO.page).set("rpp", requestPageableVO.rpp).set("categoryID", categoryID)
    }
    return this.http.get<ResponsePageableApi<Array<SubCategoryResponseDTO>>>(this.environment.url + "subcategories/by-category-id", options);
  }

  public getSubCategories(): Observable<ResponseEntityApi<Array<SubCategoryResponseDTO>>> {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    }
    return this.http.get<ResponseEntityApi<Array<SubCategoryResponseDTO>>>(this.environment.url + "subcategories/all", options);
  }
}
