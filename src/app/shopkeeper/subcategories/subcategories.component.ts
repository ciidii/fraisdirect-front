import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CategoryService} from '../../core/service/categoryService';
import {CategoryResponseDTO} from "../../core/model/CategoryResponseDTO";
import {AttributeResponseDTO} from "../../core/model/AttributeResponseDTO";
import {JsonPipe, NgForOf} from "@angular/common";
import {AttributeService} from "../../core/service/attribute.service";
import {SubcategoryService} from "../../core/service/subcategory.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-subcategories',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgForOf, JsonPipe],
  templateUrl: './subcategories.component.html',
  styleUrl: './subcategories.component.css'
})
export class SubcategoriesComponent implements OnInit {

  subCategoryForm!: FormGroup;
  categories: CategoryResponseDTO[] = [];
  attributes: AttributeResponseDTO[] = [];

  constructor(private fb: FormBuilder,
              private categoryService: CategoryService,
              private attributeService: AttributeService,
              private subcategoryService: SubcategoryService,
              private toaster:ToastrService
  ) {
  }

  ngOnInit() {
    this.subCategoryForm = this.fb.group({
      nameSubCategory: ['', Validators.required],
      descriptionSubCategory: ['', Validators.required],
      categoryID: ['', Validators.required],
      attributeID: ['', Validators.required],
      attributes: this.fb.array([])
    });

    this.categoryService.getCategories().subscribe({
      next: data => {
        this.categories = data.data;
      },
      error: err => {
        console.log(err);
      }
    });

    this.attributeService.getAttributes().subscribe({
      next: data => {
        this.attributes = data.data;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  onSubmit() {
    this.subcategoryService.createSubCategory(this.subCategoryForm.value).subscribe({
      next: response => {
        this.toaster.success("Ajout nvalider")
        this.subCategoryForm.reset();
      },
      error:err => {
        alert("Ajout échouer")
      }
    })
    console.log(this.subCategoryForm.value)
  }

  get additionalAttributes() {
    return this.subCategoryForm.get('attributes') as FormArray;
  }

  addAttribute() {
    const attributeGroup = this.fb.group({
      attributeName: ['', Validators.required],
      attributeDescription: ['', Validators.required]
    });
    this.additionalAttributes.push(attributeGroup);
  }

  removeAttribute(index: number) {
    this.additionalAttributes.removeAt(index);
  }
}
