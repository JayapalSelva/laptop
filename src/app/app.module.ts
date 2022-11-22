import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateLaptopComponent } from './create-laptop/create-laptop.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';
import { LaptopUpdateComponent } from './laptop-update/laptop-update.component';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { BrandListComponent } from './brand-list/brand-list.component';


@NgModule({
  declarations: [
    AppComponent,
  
    CreateLaptopComponent,
    LaptopListComponent,
    LaptopDetailsComponent,
    LaptopUpdateComponent,
    CreateBrandComponent,
    BrandListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
