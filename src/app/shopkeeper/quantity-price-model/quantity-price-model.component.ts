import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {WeightPriceModelService} from "../../core/service/weight-price-model.service";
import {QuantityPriceModelService} from "../../core/service/quantity-price-model.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-quantity-price-model',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './quantity-price-model.component.html',
  styleUrl: './quantity-price-model.component.css'
})
export class QuantityPriceModelComponent {
  label: string = '';
  quantity: number = 0;
  price: number = 0;
  around: string = '';

  constructor(private priceService: WeightPriceModelService,
              private quantityPriceModel:QuantityPriceModelService,
              private toaster:ToastrService
  )
  {
    console.log('Valeur de weight dans le constructeur :', this.quantity);
  }

  submitForm(): void {
    const request = {
      label: this.label,
      weight: this.quantity,
      price: this.price,
      around: this.around
    };

    console.log(request)
    this.quantityPriceModel.createQuantityBasedPrice(request).subscribe(
      data => {
        this.toaster.success("Modèle ajouter avec succées")
        this.resetForm();
      },
      error => {
        this.toaster.error("Erreur lors de la création du prix basé sur le poids")
        console.log('Wight :', this.quantity);
      }
    );
  }

  resetForm(): void {
    this.label = '';
    this.price = 0;
    this.around = '';
  }
}
