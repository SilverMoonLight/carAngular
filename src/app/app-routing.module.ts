
import { Routes, RouterModule } from "@angular/router";
import { CarsComponent } from "app/cars/cars.component";
import { CarDetailComponent } from "app/cars/car-detail/car-detail.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
    { path: '', redirectTo: '/cars', pathMatch: 'full' },
    { path: 'cars', component: CarsComponent, children: [
        { path: ':id', component: CarDetailComponent}
    ]}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}