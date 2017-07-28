import { Component, OnInit } from '@angular/core';
import { Car } from "app/cars/car.model";
import { CarService } from "app/cars/car.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car: Car;
  id: number;

  constructor(private carService: CarService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.car = this.carService.getCar(this.id);
        });
  }

  onEditCar() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteCar() {
    this.carService.deleteCar(this.id);
    this.router.navigate(['/cars']);
  }

}
