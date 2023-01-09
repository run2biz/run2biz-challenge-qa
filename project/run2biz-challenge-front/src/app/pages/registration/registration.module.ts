import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [RegistrationComponent],
})
export class RegistrationModule {}
