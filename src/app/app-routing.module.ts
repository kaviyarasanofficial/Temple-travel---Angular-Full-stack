import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { RegistrationFormComponent } from './Pages/registration-form/registration-form.component';
import { LoginComponent } from './Pages/login/login.component';
const routes: Routes = [
  // { path: ' ', component: AppComponent },
  {path:'',component:HomeComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: RegistrationFormComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
