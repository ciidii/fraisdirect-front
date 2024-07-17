import { Component } from '@angular/core';
import { PriceService } from '../../core/service/price.service';
import { FormsModule } from '@angular/forms';

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
  weight: number = 0;
  price: number = 0;
  around: string = '';

  constructor(private priceService: PriceService) {}

  submitForm(): void {
    const request = {
      label: this.label,
      weight: this.weight,
      price: this.price,
      around: this.around
    };

    // @ts-ignore
    this.priceService.createWeightBasedPrice(request).subscribe(
      () => {
        console.log('Prix basé sur le poids créé avec succès.');
        this.resetForm();
      },
      error => {
        console.error('Erreur lors de la création du prix basé sur le poids : ', error);
        // Ici, vous pouvez ajouter une logique pour afficher un message d'erreur à l'utilisateur
      }
    );
  }

  resetForm(): void {
    this.label = '';
    this.weight = 0;
    this.price = 0;
    this.around = '';
  }
}
