import { CarEditComponent } from './cars/car-edit/car-edit.component';
import { CarStartComponent } from './cars/car-start/car-start.component';

import { Routes, RouterModule } from "@angular/router";
import { CarsComponent } from "app/cars/cars.component";
import { CarDetailComponent } from "app/cars/car-detail/car-detail.component";
import { NgModule } from "@angular/core";
import { CarAddComponent } from "app/cars/car-add/car-add.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/cars', pathMatch: 'full' },
    { path: 'cars', component: CarsComponent, children: [
        { path: '', component: CarStartComponent },
        { path: 'add', component: CarEditComponent},
        { path: ':id', component: CarDetailComponent},
        { path: ':id/edit', component: CarEditComponent }
    ]}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}