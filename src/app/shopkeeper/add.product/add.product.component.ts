import {SubCategory} from "../../core/model/SubCategory";
import {ProductService} from "../../core/service/ProductService";
import {Component, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CategoryService} from "../../core/service/categoryService";
import {SubCategoryResponseDTO} from "../../core/model/SubCategoryResponseDTO";

@Component({
  selector: 'app-add-product',
  templateUrl: './add.product.component.html',
  styleUrls: ['./add.product.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  subCategories!: Array<SubCategoryResponseDTO>;
  images!: File[];

  constructor(private fb: FormBuilder, private productService: ProductService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      codeProduct: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      nameProduct: [''],
      description: [''],
      basicPrice: [0, [Validators.required]],
      status: [false],
      quantity: [0, [Validators.required]],
      subCategory: ['', [Validators.required]],
      images: [null, [Validators.required]]
    });
    this.categoryService.getSubCategories().subscribe({
      next: data => {
        this.subCategories = data.data;
      },
      error:err => {
        console.log(err);
      }
    })
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      this.images = files;
      this.productForm.patchValue({
        images: files
      });
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formData = new FormData();
      formData.append('codeProduct', this.productForm.get('codeProduct')!.value);
      formData.append('description', this.productForm.get('description')!.value);
      formData.append('basicPrice', this.productForm.get('basicPrice')!.value);
      formData.append('status', this.productForm.get('status')!.value);
      formData.append('quantity', this.productForm.get('quantity')!.value);
      formData.append('name', this.productForm.get('nameProduct')!.value);
      formData.append('subCategory', this.productForm.get("subCategory")!.value);

      for (let image of this.images) {
        formData.append('images', image);
      }

      this.productService.addProduct(formData).subscribe({
        next: response => {
          console.log(response);
          this.productForm.reset();
        },
        error: err => {
          console.log(err);
        }
      });
    } else {
      this.validateAllFormFields(this.productForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else {
        control!.markAsTouched({onlySelf: true});
      }
    });
  }
}
