import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-add.product',
  standalone: true,
  imports: [
    ReactiveFormsModule,

  ],
  templateUrl: './add.product.component.html',
  styleUrl: './add.product.component.css'
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      codeProduct: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      description: [''],
      basicPrice: ['', Validators.required],
      status: [false],
      quantity: [0],
      subCategory: ['', Validators.required],
      images: [[]]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      // Perform API call or other operations with this.productForm.value
    }
  }

}
