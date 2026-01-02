import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  loginForm!: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  defaultValues = {
    email: '123@gmail.com',
    password: '123456',
    newPassword: 'sdfsdfsdf'
  }

  getFormControl(formControlName: string): FormControl {
    return this.loginForm.get(formControlName) as FormControl;
  }

  submit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      });
    } else {
      console.log('Form is invalid');
    }
  }

  reset() {
    this.loginForm.setValue(this.defaultValues);
  }

}
