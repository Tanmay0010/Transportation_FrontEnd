import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './Components/add-car/add-car.component';
import { DeleteCarComponent } from './Components/delete-car/delete-car.component';
import { EditCarComponent } from './Components/edit-car/edit-car.component';
import { GetCarComponent } from './Components/get-car/get-car.component';
import { GetCarsComponent } from './Components/get-cars/get-cars.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path:'add-car',component:AddCarComponent},
  {path:'delete-car',component:DeleteCarComponent},
  {path:'edit-car',component:EditCarComponent},
  {path:'get-car',component:GetCarComponent},
  {path:'get-cars',component:GetCarsComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
