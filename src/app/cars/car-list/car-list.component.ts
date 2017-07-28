import { Component, OnInit, OnDestroy } from '@angular/core';
import { Car } from "app/cars/car.model";
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { CarService } from "app/cars/car.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit, OnDestroy {

  cars: Car[];
  subscription: Subscription;

  constructor(private carService: CarService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.carService.carsChanged
      .subscribe(
        (cars: Car[]) => {
          this.cars = cars;
        }
      );
      this.cars = this.carService.getCars();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
