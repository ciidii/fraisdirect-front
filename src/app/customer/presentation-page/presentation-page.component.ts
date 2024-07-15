import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-presentation-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './presentation-page.component.html',
  styleUrl: './presentation-page.component.css'
})
export class PresentationPageComponent {

}
