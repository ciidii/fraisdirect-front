import { CategoryResponseDTO } from './CategoryResponseDTO';
import { AttributeResponseDTO } from './AttributeResponseDTO';

export interface SubCategoryResponseDTO {
  subCategoryID: number;
  nameSubCategory: string;
  descriptionSubCategory: string;
  category: CategoryResponseDTO;
  attributes: AttributeResponseDTO[];
}
