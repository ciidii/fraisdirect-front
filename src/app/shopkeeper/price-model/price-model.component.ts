import { Component } from '@angular/core';
import {WeightPriceModelComponent} from "../weight-price-model/weight-price-model.component";
import {QuantityPriceModelComponent} from "../quantity-price-model/quantity-price-model.component";

@Component({
  selector: 'app-price-model',
  standalone: true,
  imports: [
    WeightPriceModelComponent,
    QuantityPriceModelComponent
  ],
  templateUrl: './price-model.component.html',
  styleUrl: './price-model.component.css'
})
export class PriceModelComponent {

}
