import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { Exo1Component } from './exo1/exo1.component';
import { SharedModule } from '../shared/shared.module';
import { Exo2Component } from './exo2/exo2.component';
import { ShowListComponent } from './exo2/show-list/show-list.component';
import { FormsModule } from '@angular/forms';
import { Exo3Component } from './exo3/exo3.component';
import { ShoppingListComponent } from './exo3/shopping-list/shopping-list.component';


@NgModule({
  declarations: [
    ExoComponent,
    Exo1Component,
    Exo2Component,
    ShowListComponent,
    Exo3Component,
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    SharedModule,
    // FormsModule
  ]
})
export class ExoModule { }
