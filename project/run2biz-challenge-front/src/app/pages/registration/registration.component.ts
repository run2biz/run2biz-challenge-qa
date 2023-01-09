import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    cpf: ['', [Validators.required, Validators.pattern('[0-9 ]*'), Validators.maxLength(11)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get invalidForm() {
    return this.form.invalid;
  }

  get nameInputError() {
    return this.form.controls.name.errors && this.form.controls.name.touched;
  }

  get cpfInputError() {
    return this.form.controls.cpf.errors && this.form.controls.cpf.touched;
  }

  get emailInputError() {
    return this.form.controls.email.errors && this.form.controls.email.touched;
  }

  get passwordInputError() {
    return this.form.controls.password.errors && this.form.controls.password.touched;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value);
  }
}
