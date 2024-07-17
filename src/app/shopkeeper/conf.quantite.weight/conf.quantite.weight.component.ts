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
  wight: number = 0; // Correction orthographique ici
  price: number = 0;
  around: string = '';

  constructor(private priceService: PriceService) {
    console.log('Valeur de weight dans le constructeur :', this.wight);
  }

  submitForm(): void {
    const request = {
      label: this.label,
      weight: this.wight, // Utilisation correcte de 'weight'
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
        console.log('Wight :', this.wight);
      }
    );
  }

  resetForm(): void {
    this.label = '';
    this.price = 0;
    this.around = '';
  }
}
