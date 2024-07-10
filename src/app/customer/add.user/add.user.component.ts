import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {User} from "../../core/model/User";
import {UserService} from "../../core/service/UserService";


@Component({
  selector: 'app-add.user',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add.user.component.html',
  styleUrl: './add.user.component.css'
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmPassword')!.value
      ? null : {mismatch: true};
  }

  onSubmit() {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      this.userService.addUser(newUser).subscribe(response => {
        console.log('User added successfully', response);
      }, error => {
        console.error('Error adding user', error);
      });
    }
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    }, {validator: this.passwordMatchValidator});

  }
}
