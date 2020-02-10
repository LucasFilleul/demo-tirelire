import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'product/view/:productId', component: ProductDetailsComponent},
  {path: 'product/create', component: AddProductFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
