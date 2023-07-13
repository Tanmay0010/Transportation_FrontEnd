import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { GetCarComponent } from './Components/get-car/get-car.component';
import { GetCarsComponent } from './Components/get-cars/get-cars.component';
import { DeleteCarComponent } from './Components/delete-car/delete-car.component';
import { AddCarComponent } from './Components/add-car/add-car.component';
import { EditCarComponent } from './Components/edit-car/edit-car.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    GetCarComponent,
    GetCarsComponent,
    DeleteCarComponent,
    AddCarComponent,
    EditCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
