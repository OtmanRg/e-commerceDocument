import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { FrontComponent } from './front/front.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AdminComponent,
    FrontComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
  ]
})
export class LayoutModule { }


