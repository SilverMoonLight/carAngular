import { Car } from './car.model';
import { Response } from '@angular/http';
import { Maker } from './maker.model';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { DataStorageService } from './data.storage.service';

@Injectable()
export class CarService {
  carsChanged = new Subject<Car[]>();
  maker;
  constructor(private dataStorage: DataStorageService) { }

  private cars: Car[] = [
    new Car(1, new Maker(1, "Honda"), 2016, "Civic", "https://goo.gl/g8Hzos"),
    new Car(2, new Maker(2, "Tesla"), 2014, "Model S", "https://goo.gl/RLb2Kh"),
    new Car(3, new Maker(3, "Dodge"), 2013, "Charger", "https://goo.gl/282egm")
  ];

  setCars(cars: Car[]) {
    this.cars = cars;
    this.carsChanged.next(this.cars.slice());
  }

  getCars() {
    this.dataStorage.getCars().subscribe((response: Response) => {
      console.log(response.json());
      this.cars = response.json();
      this.carsChanged.next(this.cars.slice());
    });
    return this.cars.slice();
  }

  getCar(index: number): Car {
    return this.cars[index];
  }

  addCar(car: Car) {
    let newCar = new Car(0, new Maker(2, ""), 0, "", "");
    this.setNewData(newCar, car);
    this.getMaker(car.maker).then((res: any) => {
      this.dataStorage.addCar(newCar, res.json());
    });
    this.cars.push(newCar);
    this.carsChanged.next(this.cars.slice());
  }

  updateCar(index: number, data: any) {
    let orignalCar = this.getCar(index);
    this.setNewData(orignalCar, data);
    this.getMaker(orignalCar.maker.name).then((res: any) => {
      console.log(orignalCar);
      console.log(res._body);
      orignalCar.maker.id = res._body.id;
      this.dataStorage.updateCar(orignalCar, res.json());
      this.cars[index] = orignalCar;
      this.carsChanged.next(this.cars.slice());
    });
  }

  deleteCar(index: number) {
    this.dataStorage.deleteCar(this.getCar(index)).then(res => {
      console.log(res);
      this.cars.splice(index, 1);
      this.carsChanged.next(this.cars.slice());
    });
  }

  getMaker(name: any) {
    return this.dataStorage.findMakerbyName(name).then(res => {
      if (res.json().name == null) {
        return this.dataStorage.addMaker(name);
      } else {
        return new Promise((resolve, reject) => {
          if (res.json().name) {
            resolve(res);
          } else {
            reject('error');
          }
        });
      }
    });
  }

  setNewData(car: Car, data: any) {
    car.maker.name = data.maker;
    car.imagePath = data.imagePath;
    car.model = data.model;
    car.year = data.year;
  }

}
