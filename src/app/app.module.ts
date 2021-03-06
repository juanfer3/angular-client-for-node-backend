import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


//Services
import { GaleryService } from './Services/Galery/galery.service';

import { GaleryComponent } from './Components/Galery/galery/galery.component';
import { GaleryFormComponent } from './Components/Galery/galery-form/galery-form.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    GaleryComponent,
    GaleryFormComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule
  ],
  providers: [
    GaleryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
