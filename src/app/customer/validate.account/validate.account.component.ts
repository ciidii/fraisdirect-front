import { Component } from '@angular/core';
import { NgIf } from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgxSpinnerComponent, NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { UserService } from "../../core/service/UserService";

@Component({
  selector: 'app-validate.account',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgxSpinnerComponent
  ],
  templateUrl: './validate.account.component.html',
  styleUrl: './validate.account.component.css'
})
export class ValidateAccountComponent {

  verifyCodeForm: FormGroup;
  submitted = false;
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private verificationService: UserService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {
    this.verifyCodeForm = this.formBuilder.group({
      code0: ['', [Validators.required, Validators.maxLength(1)]],
      code1: ['', [Validators.required, Validators.maxLength(1)]],
      code2: ['', [Validators.required, Validators.maxLength(1)]],
      code3: ['', [Validators.required, Validators.maxLength(1)]],
      code4: ['', [Validators.required, Validators.maxLength(1)]],
      code5: ['', [Validators.required, Validators.maxLength(1)]]
    });
  }

  ngOnInit(): void {}

  moveFocus(event: any, nextElementId: number | null): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (value.length === 1) {
      if (nextElementId !== null) {
        const nextElement = document.querySelector(`input[formcontrolname=code${nextElementId}]`) as HTMLInputElement;
        if (nextElement) {
          nextElement.focus();
        }
      } else {
        // Si c'est le dernier champ, lancer la vérification automatique
        this.onSubmit();
      }
    } else if (value.length === 0 && nextElementId !== null) {
      // Déplacer le focus vers l'élément précédent si la valeur est vide
      const prevElement = document.querySelector(`input[formcontrolname=code${nextElementId - 1}]`) as HTMLInputElement;
      if (prevElement) {
        prevElement.focus();
      }
    }
  }

  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = null;

    if (this.verifyCodeForm.invalid) {
      return;
    }

    this.loading = true;
    this.spinner.show();

    const code = Object.values(this.verifyCodeForm.controls).map(control => control.value).join('');

    this.verificationService.verifyCode(code).subscribe({
      next: (response) => {
        this.spinner.hide();
        this.loading = false;
        this.setCodeInputColor('success');
        setTimeout(() => {
          this.router.navigate(['/success']);
        }, 1000);
      },
      error: (error) => {
        this.spinner.hide();
        this.loading = false;
        this.setCodeInputColor('error');
        this.errorMessage = error.error.message || 'Verification failed. Please try again.';
      }
    });
  }

  setCodeInputColor(status: 'success' | 'error'): void {
    const color = status === 'success' ? 'green' : 'red';
    Object.keys(this.verifyCodeForm.controls).forEach(key => {
      const input = document.querySelector(`input[formcontrolname=${key}]`) as HTMLInputElement;
      if (input) {
        input.style.borderColor = color;
      }
    });
  }
}
