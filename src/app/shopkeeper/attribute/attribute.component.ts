import {Attribute, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AttributeService } from '../../core/service/attribute.service';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css'],
  standalone: true, // Ajoutez cette ligne
  imports: [
    FormsModule
  ]
})
export class AttributeComponent implements OnInit {
  attributes: Attribute[] | undefined;
  subCategoryAttributes = {
    subCategoryAttributeKey: {
      attributeId: 0,
      categoryId: 0
    }
  };

  constructor(private attributeService: AttributeService) { }

  ngOnInit(): void {
    this.loadAttributes();
  }

  loadAttributes(): void {
    this.attributeService.getAllAttributes().subscribe(
      attributes => {
        this.attributes = attributes;
      },
      error => {
        console.error('Erreur lors du chargement des attributs', error);
      }
    );
  }

  onSubmit(form: NgForm): void {
    this.attributeService.createAttribute(form.value).subscribe(
      newAttribute => {
        console.log('Attribut ajouté avec succès', newAttribute);
        this.loadAttributes(); // Recharger la liste après l'ajout
        form.reset(); // Réinitialiser le formulaire après soumission
      },
      error => {
        console.error('Erreur lors de l\'ajout de l\'attribut', error);
      }
    );
  }
}
