import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllvisitorComponent } from './allvisitor.component';

const routes: Routes = [
  {path:'', component:AllvisitorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllvisitorRoutingModule { }
