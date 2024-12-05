import {Component, OnInit} from '@angular/core';
import {ProductResponseDTO} from "../../core/model/ProductResponseDTO";
import {ProductService} from "../../core/service/ProductService";
import {ToastrService} from "ngx-toastr";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {WeightBasedPriceService} from "../../core/service/weight-based-price.service";
import {QuantityBasedPriceService} from "../../core/service/quantity-based-price.service";
import {ProductPriceService} from "../../core/service/product-price.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-conf.product',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    JsonPipe,
    NgIf
  ],
  templateUrl: './conf-product-price.html',
  styleUrl: './conf-product-price.css'
})
export class ConfProductPrice implements OnInit {
  notSalableProduct!: ProductResponseDTO[];
  formGroup!:FormGroup
  listOfPrices!:any
  status=false;
  constructor(private productService: ProductService,
              private toaster: ToastrService,
              private fb:FormBuilder,
              private weightBasedService:WeightBasedPriceService,
              private quantityBasedService:QuantityBasedPriceService,
              private productPriceService:ProductPriceService
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      product:['',Validators.required],
      priceModel:['',Validators.required],
      basedPriceID:['',Validators.required],
      status:[this.status,Validators.required]
    })
    this.productService.getNotConfigProduct().subscribe({
      next: response => {
        this.notSalableProduct = response.data;
      },
      error: err => {
        this.toaster.error("Une erreur s'est produite lors du chargment des produit" + err)
      }
    })

  }

  getWeightPrices() {
    this.formGroup.get("basedPriceID")?.setValue(null)
    this.weightBasedService.getAll().subscribe({
      next:response=>{
        if (response.status=="OK"){

          this.listOfPrices = response.data;
        }else {
          this.toaster.error("Une erreur c'est produite "+response.error)
        }
      },
      error:error=>{
        this.toaster.error("Une erreur c'est produite "+error)
      }
    })
  }

  getQuantityPrices() {
    this.formGroup.get("basedPriceID")?.setValue(null)
    this.quantityBasedService.getAll().subscribe({
      next:response=>{
        if (response.status=="OK"){
          this.listOfPrices = response.data;
        }else {
          this.toaster.error("Une erreur c'est produite "+response.error)
        }
      },
      error:error=>{
        this.toaster.error("Une erreur c'est produite "+error)
      }
    })
  }

  setStatus() {
    this.status != this.status
  }

  confPrice() {
    this.productPriceService.configProductPrice(this.formGroup.value).subscribe({
      next:response=>{
        if (response.status=="OK"){
          this.toaster.success("Produit paramétrer avec succées")
        }else {
          this.toaster.error("Une erreur s'est produit lors de l'ajout du produit")
        }
      },
      error:err => {
        this.toaster.error("Une erreur s'est produit lors de l'ajout du produit"+err)
      }
    })
  }
}
