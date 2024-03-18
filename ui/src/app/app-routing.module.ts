import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { NewdeliveryComponent } from './newdelivery/newdelivery.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {  path:'login',component : LoginComponent, },
  {  path:'delivery',component : DeliveryComponent, },
  {  path:'newdelivery',component : NewdeliveryComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
