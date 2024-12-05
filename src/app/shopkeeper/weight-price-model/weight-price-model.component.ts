import {Component} from '@angular/core';
import {WeightPriceModelService} from '../../core/service/weight-price-model.service';
import {FormsModule} from '@angular/forms';
import {ToastrService} from "ngx-toastr";
import {WightBasedPriceRequestDTO} from "../../core/model/WightBasedPriceRequestDTO";
import {AROUND} from "../../core/model/AROUND";
import {CommonModule, NgIf} from "@angular/common";
import {LabelUniqueDirective} from "../../core/directive/label-unique.directive";

@Component({
  selector: 'app-weight-price-model',
  templateUrl: './weight-price-model.component.html',
  styleUrls: ['./weight-price-model.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    LabelUniqueDirective
  ],
})
export class WeightPriceModelComponent {
  label: string = '';
  wight: number = 0; // Correction orthographique ici
  price: number = 0;
  around: string = '';

  constructor(private priceService: WeightPriceModelService, private toaster:ToastrService) {
    console.log('Valeur de weight dans le constructeur :', this.wight);
  }

  submitForm(): void {
    let  request:WightBasedPriceRequestDTO = {
      label: this.label,
      wight: this.wight, // Utilisation correcte de 'weight'
      price: this.price,
      around: AROUND.DOWN
    };

    this.priceService.createWeightBasedPrice(request).subscribe(
      () => {
        this.toaster.success('Prix basé sur le poids créé avec succès.')
        this.resetForm();
      },
      error => {
        this.toaster.error('Erreur lors de la création du prix basé sur le poids : ', error);
      }
    );
  }

  resetForm(): void {
    this.label = '';
    this.price = 0;
    this.around = '';
  }
}
