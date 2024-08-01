import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Attribute } from '../../core/model/attribute';
import { AttributeService } from '../../core/service/attribute.service';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css'
})
export class AttributeComponent  {
  attributes: Attribute= {
   attributeName: '',
    attributeDescription:''
  };
  constructor( private attributeService:AttributeService) {}
  
  onSubmit()
  {
    this.attributeService.createAttribute(this.attributes).subscribe(
      response => {
        console.log('attributes ajoutée avec succès', response);
        this.attributes = {attributeName: '', attributeDescription: '' }; // Réinitialiser le formulaire
      },
      error => {
        console.error('Erreur lors de l\'ajout de la catégorie', error);
      }
    );
  }
}
