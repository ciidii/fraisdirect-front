import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../core/service/login.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../core/service/UserService";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-authentification',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})
export class AuthentificationComponent implements OnInit{
  formGroup!: FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: LoginService, private userService: UserService,private toasterService:ToastrService) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        email: this.formBuilder.control('', [Validators.required]),
        password: this.formBuilder.control('', [Validators.required])
      })

  }

  handleLogin() {
    let identifier = this.formGroup.value.email;
    let password = this.formGroup.value.password;
    this.authService.login(identifier, password).subscribe({
      next: data => {
        this.authService.loadProfile(data);
      },
      error:err => {
        if (err.status==400){
          this.errorMessage="Vérifier vos coordonées"
        }else {
          this.errorMessage="Un problème inattendu est survenue au niveau server veillez reéssez plustart"
        }
      }
    })
  }

}
