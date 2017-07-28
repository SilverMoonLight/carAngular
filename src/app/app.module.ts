import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarService } from "app/cars/car.service";
import { CarItemComponent } from './cars/car-list/car-item/car-item.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from "app/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarListComponent,
    CarDetailComponent,
    CarItemComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
