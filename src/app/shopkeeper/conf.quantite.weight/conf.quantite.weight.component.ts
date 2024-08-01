import { Component } from '@angular/core';
import { PriceService } from '../../core/service/price.service';
import { FormsModule } from '@angular/forms';
import { WightBasedPriceRequestDTO } from '../../core/model/WightBasedPriceRequestDTO';
import {AROUND} from "../../core/model/AROUND";

@Component({
  selector: 'app-conf.quantite.weight',
  templateUrl: './conf.quantite.weight.component.html',
  styleUrls: ['./conf.quantite.weight.component.css'],
  standalone: true,
  imports: [
    FormsModule
  ],
})
export class ConfQuantiteWeightComponent {
  label: string = '';
  wight: number = 0; 
  price: number = 0;
  around: string = '';

  constructor(private priceService: PriceService) {
  }

  submitForm(): void {
    let request:WightBasedPriceRequestDTO = { 
      label: this.label,
      wight: this.wight,
      price: this.price,
      around: AROUND.UP
    };

    this.priceService.createWeightBasedPrice(request).subscribe(
      () => {
        console.log('Prix basé sur le poids créé avec succès.');
        this.resetForm();
      },
      error => {
        console.error('Erreur lors de la création du prix basé sur le poids : ', error);
        
      }
    );
  }

  resetForm(): void {
    this.label = '';
    this.price = 0;
    this.around = '';
    this.wight=0;
  }
}
