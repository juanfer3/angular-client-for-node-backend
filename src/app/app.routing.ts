import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanDeactivate } from '@angular/router';

/*Modulos*/
import { GaleryComponent } from './Components/Galery/galery/galery.component';
import { GaleryFormComponent } from './Components/Galery/galery-form/galery-form.component';

//import { PageNoFoundComponent } from './Components/page-no-found/page-no-found.component';


const App_Routes: Routes = [
  /*
  {
    path: '', component: HomeComponent,
  },
  /* */
  {
    path: 'galery', component: GaleryComponent
  },
  {
    path: 'galery/create', component: GaleryFormComponent
  },
  /*
  {
    path: 'eventos/edit/:id', component: FormEventoEditComponent,
  },
  /* */
  //{ path: '**', component: PageNoFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(App_Routes);
