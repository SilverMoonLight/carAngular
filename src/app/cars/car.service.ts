import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Car } from "app/cars/car.model";

@Injectable()
export class CarService {
  carsChanged = new Subject<Car[]>();

  private cars: Car[] = [
    new Car("Honda",2016,"Civic","https://goo.gl/g8Hzos"),
    new Car("Tesla", 2014, "Model S", "https://goo.gl/RLb2Kh"),
    new Car("Dodge", 2013, "Charger", "https://goo.gl/282egm")
  ];

  getCars() {
    return this.cars.slice();
  }

  getCar(index: number) {
    return this.cars[index];
  }

  addCar(car: Car) {
    this.cars.push(car);
    this.carsChanged.next(this.cars.slice());
  }

  updateCar(index: number, car: Car) {
    this.cars[index] = car;
    this.carsChanged.next(this.cars.slice());
  }

  deleteCar(index: number) {
    this.cars.splice(index, 1);
    this.carsChanged.next(this.cars.slice());
  }

}
