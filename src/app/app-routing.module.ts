import { NgModule } from '@angular/core';
import { DefaultTitleStrategy, RouterModule, Routes } from '@angular/router';
import { CreateLaptopComponent } from './create-laptop/create-laptop.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';

import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { LaptopUpdateComponent } from './laptop-update/laptop-update.component';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { BrandListComponent } from './brand-list/brand-list.component';



const routes: Routes = [
  {path:'create-laptop',component:CreateLaptopComponent},
  {path:'laptop-list',component:LaptopListComponent},
  {path:'laptop-details/:id',component:LaptopDetailsComponent},
  {path:'laptop-update/:id',component:LaptopUpdateComponent},
  {path:'create-brand',component:CreateBrandComponent},
  {path:'brand-list',component:BrandListComponent}
  
  


];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
