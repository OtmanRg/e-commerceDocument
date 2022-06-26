import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { FrontComponent } from './layout/front/front.component';

const routes: Routes = [
  {path:'',component: FrontComponent, children:[
    {path:'', loadChildren: ()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'loginuser', loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule)}
  ]},
  {path:'admin', component : AdminComponent,children:[
 {path:'dashboard', loadChildren: ()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
 {path:'allvisitor', loadChildren: ()=>import('./views/admin/allvisitor/allvisitor.module').then(m=>m.AllvisitorModule)},
 {path:'loginadmin', loadChildren:()=>import('./views/admin/loginadmin/loginadmin.module').then(m=>m.LoginadminModule) }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
