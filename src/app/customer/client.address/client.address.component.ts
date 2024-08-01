import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-client.address',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './client.address.component.html',
  styleUrl: './client.address.component.css'
})
export class ClientAddressComponent implements OnInit{


  addressForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      primaryPhonePrefix: ['+221', Validators.required],
      primaryPhone: ['', Validators.required],
      secondaryPhonePrefix: ['+221'],
      secondaryPhone: [''],
      address: ['', Validators.required],
      additionalInfo: [''],
      region: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addressForm.valid) {
      console.log('Form Data:', this.addressForm.value);
      // Envoyer les données du formulaire
    } else {
      console.log('Formulaire invalide');
    }
  }

  onCancel() {
    this.addressForm.reset();
  }
}
