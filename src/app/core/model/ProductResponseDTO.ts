import {SubCategoryResponseDTO} from "./SubCategoryResponseDTO";
import {ProductPriceDTO} from "./ProductPriceDTO";

export interface ProductResponseDTO {
  productID: number;
  name:string;
  codeProduct: string;
  description: string;
  basicPrice: number;
  quantity: number;
  status: boolean;
  images: string[];
  subCategoryResponseDTO: SubCategoryResponseDTO;
  productPrice:ProductPriceDTO<any>
}
