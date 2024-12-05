import {Attribute, Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AttributeService} from '../../core/service/attribute.service';
import {FormsModule} from '@angular/forms';

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
      attributeName: '',
      attributeDescription: ''
    }
  };

  constructor(private attributeService: AttributeService) {
  }

  ngOnInit(): void {
  }


  onSubmit(form: NgForm): void {
    console.log(form)
    this.attributeService.createAttribute(form.value).subscribe(
      newAttribute => {
        console.log('Attribut ajouté avec succès', newAttribute);
        form.reset();
      },
      error => {
        console.error('Erreur lors de l\'ajout de l\'attribut', error);
      }
    );
  }
}
