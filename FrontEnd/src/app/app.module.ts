import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MDBBootstrapModule, ModalModule } from 'angular-bootstrap-md';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedService } from './shared.service';

import { FooterComponent } from './components/dashboard/footer/footer.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { CommonModule } from '@angular/common';


import { TruncatePipe } from './helpers/pipes/truncate.pipe';
import { DateAgoPipe } from './helpers/pipes/dateAgo.pipe';
import { homeComponent} from './components/Home/components/home.component';

import { HomeIndComponent } from './components/Home/components/homeInd/homeInd.component';
import { CategorieComponent } from './components/dashboard/content/categorie/categorie.component';
import { AddEditCatComponent } from './components/dashboard/content/categorie/add-edit-cat/add-edit-cat.component';
import { ShowPdtComponent } from './components/dashboard/content/produit/show-pdt/show-pdt.component';
import { ShowCatComponent } from './components/dashboard/content/categorie/show-cat/show-cat.component';
import { ProduitComponent } from './components/dashboard/content/produit/produit.component';
import { AddEditPdtComponent } from './components/dashboard/content/produit/add-edit-pdt/add-edit-pdt.component';
import { ShowproduitComponent } from './components/Home/components/showproduit/showproduit.component';
import { MadeComponent } from './components/Home/components/made/made.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { HomeDashComponent } from './components/dashboard/content/homeDashboard/homedash.component';




@NgModule({
   entryComponents: [
   ],
   declarations: [
      AppComponent,
      LoginComponent,
      FooterComponent,
      NavbarComponent,
      SidebarComponent,
      DashboardComponent,
      homeComponent,
      HomeIndComponent,
      MadeComponent,
      TruncatePipe,
      CategorieComponent,
      ShowCatComponent,
      AddEditCatComponent,
      ProduitComponent,
      ShowPdtComponent,
      AddEditPdtComponent,
      DateAgoPipe,
      ShowproduitComponent,
      HomeDashComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      
      ImageCropperModule,
      ReactiveFormsModule,
      FormsModule

   ],
   providers: [
      { provide: SharedService }
   ],
   bootstrap: [
      AppComponent
   ],
   
   exports: [ MadeComponent ],
   
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
