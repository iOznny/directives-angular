import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { AddComponent } from './pages/add/add.component';

@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})

export class ProductsModule { }
