import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanDeactivate } from '@angular/router';

/* Guard */
import { AuthGuard } from "./Services/Auth/auth.guard";

/*Modulos*/
import { GaleryComponent } from './Components/Galery/galery/galery.component';
import { GaleryFormComponent } from './Components/Galery/galery-form/galery-form.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';

//import { PageNoFoundComponent } from './Components/page-no-found/page-no-found.component';


const App_Routes: Routes = [
  /*
  {
    path: '', component: HomeComponent,
  },
  /* */
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'register', component: RegisterComponent,
  },
  {
    path: 'galery', component: GaleryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'galery/create', component: GaleryFormComponent,
    canActivate: [AuthGuard]
  },
  /*
  {
    path: 'eventos/edit/:id', component: FormEventoEditComponent,
  },
  /* */
  //{ path: '**', component: PageNoFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(App_Routes);
