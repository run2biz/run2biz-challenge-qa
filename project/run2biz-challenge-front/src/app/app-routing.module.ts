import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home';
import { RegistrationComponent } from './pages/registration';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastrar', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
