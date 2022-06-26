import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllvisitorRoutingModule } from './allvisitor-routing.module';
import { AllvisitorComponent } from './allvisitor.component';


@NgModule({
  declarations: [
    AllvisitorComponent
  ],
  imports: [
    CommonModule,
    AllvisitorRoutingModule
  ]
})
export class AllvisitorModule { }
