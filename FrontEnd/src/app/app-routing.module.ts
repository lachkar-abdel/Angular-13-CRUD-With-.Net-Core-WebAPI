import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './components/auth/login/login.component';
import { HomeDashComponent } from './components/dashboard/content/homeDashboard/homedash.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShowproduitComponent } from './components/Home/components/showproduit/showproduit.component';

import { homeComponent } from './components/Home/components/home.component';
import { HomeIndComponent } from './components/Home/components/homeInd/homeInd.component';
import { ProduitComponent } from './components/dashboard/content/produit/produit.component';
import { CategorieComponent } from './components/dashboard/content/categorie/categorie.component';
import { MadeComponent } from './components/Home/components/made/made.component';





const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeDashComponent
      },

      {path:'produit',component:ProduitComponent},
      {path:'categorie',component:CategorieComponent},

      { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ],

  },
  {
    path: 'home',
    component: homeComponent,
    children: [
      
      {
        path: 'homeInd',
        component: MadeComponent,
        pathMatch: 'full'
      },
      {
        path: 'made',
        component: MadeComponent,
        pathMatch: 'full'
      },

    ],

  },

  {
    path: '',
    component: homeComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: HomeIndComponent,
        pathMatch: 'full'
      },
     
    ]
  },

  { path: 'login', component: LoginComponent },
  {
    path: 'showproduit/:id',
    component: ShowproduitComponent,

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
