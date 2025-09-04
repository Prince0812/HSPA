import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-user-Register',

  templateUrl: './user-Register.component.html',
  styleUrls: ['./user-Register.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class UserRegisterComponent implements OnInit {

  registerationForm!: FormGroup;
  constructor() { }

  ngOnInit() {
    this.registerationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      ConfirmPassword: new FormControl(null, [Validators.required]),
      Mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, this.passwordMatchingValidator);

    this.registerationForm.controls['userName'].setValue('Default Value');
  }

   passwordMatchingValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const group = control as FormGroup;
  const password = group.get('Password')?.value;
  const confirmPassword = group.get('ConfirmPassword')?.value;

  return password === confirmPassword ? null : { notmatched: true };
};

  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registerationForm.get('Email') as FormControl;
  }

  get password() {
    return this.registerationForm.get('Password') as FormControl;
  }

  get confirmPassword() {
    return this.registerationForm.get('ConfirmPassword') as FormControl;
  }

  get mobile() {
    return this.registerationForm.get('Mobile') as FormControl;
  }

  onSubmit() {
    console.log(this.registerationForm);
  }

}
