import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  loading = false;

  get invalidForm() {
    return this.form.invalid;
  }

  get emailInputError() {
    return this.form.controls.email.errors && this.form.controls.email.touched;
  }

  get passwordInputError() {
    return (
      this.form.controls.password.errors && this.form.controls.password.touched
    );
  }

  constructor(
    private fb: FormBuilder,
    private api: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.api.login(this.form.value).subscribe(
      (response) => {
        console.log('response', response);
        alert('Login realizado com sucesso!');
        this.form.reset();
        this.loading = false;
      },
      () => (this.loading = false)
    );
  }

  goToRegister() {
    this.router.navigate(['/cadastrar']);
  }
}
