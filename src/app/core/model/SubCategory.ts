import {CategoryResponseDTO} from "./CategoryResponseDTO";
import {AttributeResponseDTO} from "./AttributeResponseDTO";

export interface SubCategoryRequestDTO {
  nameSubCategory: string;
  descriptionSubCategory: string;
  category: CategoryResponseDTO;
  attributes: AttributeResponseDTO[];
}
