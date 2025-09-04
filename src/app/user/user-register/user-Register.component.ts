import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-Register',

  templateUrl: './user-Register.component.html',
  styleUrls: ['./user-Register.component.css'],
  imports: [ReactiveFormsModule, CommonModule, NgIf]
})
export class UserRegisterComponent implements OnInit {

  registerationForm!: FormGroup;
  user: User = {} as User;
  userSubmitted = true;
  constructor(private fb: FormBuilder, private userService: UserServiceService) { }

  ngOnInit() {
    // this.registerationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   Email: new FormControl(null, [Validators.required, Validators.email]),
    //   Password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   ConfirmPassword: new FormControl(null, [Validators.required]),
    //   Mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, this.passwordMatchingValidator);
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registerationForm = this.fb.group({
      userName: [null, Validators.required],
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, [Validators.required, Validators.minLength(8)]],
      ConfirmPassword: [null, [Validators.required]],
      Mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, { validators: this.passwordMatchingValidator });
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
    console.log(this.registerationForm.value);

     if (this.registerationForm.valid) {
    this.user = Object.assign(this.user, this.registerationForm.value);
    this.userService.addUser(this.userdata());
    this.registerationForm.reset();
    this.userSubmitted = false;
    }
  }

  userdata(): User {
    return this.user={
      userName: this.userName.value,
      Email: this.email.value,
      Password: this.password.value,
      Mobile: this.mobile.value
    };
  }

}
