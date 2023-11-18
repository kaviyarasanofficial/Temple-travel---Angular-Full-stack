import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { UsersService } from './Services/users.service';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannarComponent } from './Pages/bannar/bannar.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { TemplesComponent } from './Pages/temples/temples.component';
import { FormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './Pages/registration-form/registration-form.component';
import { LoginComponent } from './Pages/login/login.component';
import { UserDataService } from './Shared/usershared.service';
import { AuthService } from './Services/usersAuth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BannarComponent,
    FooterComponent,
    ContactComponent,
    TemplesComponent,
    RegistrationFormComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    UsersService,
    UserDataService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }