import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { CreateproductComponent } from './component/createproduct/createproduct.component';
import { ViewproductComponent } from './component/viewproduct/viewproduct.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:HomeComponent,
    children:[
      {path:'create',component:CreateproductComponent},
      {path:'view',component:ViewproductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
