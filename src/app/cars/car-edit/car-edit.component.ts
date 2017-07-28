import { Params } from '@angular/router';
import { Router } from '@angular/router';
import { CarService } from 'app/cars/car.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  id: number;
  editMode = false;
  carForm: FormGroup;

  constructor(private route: ActivatedRoute, 
    private carService: CarService, 
    private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit() {
    
    if(this.editMode) {
      this.carService.updateCar(this.id, this.carForm.value);
    } else {
      this.carService.addCar(this.carForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let carMaker = '';
    let carModel = '';
    let carImagePath = '';
    let carYear = 0;

    if(this.editMode) {
      const car = this.carService.getCar(this.id);
      carMaker = car.maker;
      carModel = car.model;
      carImagePath = car.imagePath;
      carYear = car.year;
    }

    this.carForm = new FormGroup({
      'maker': new FormControl(carMaker, Validators.required),
      'imagePath': new FormControl(carImagePath, Validators.required),
      'model': new FormControl(carModel, Validators.required),
      'year': new FormControl(carYear, Validators.required)
    })
  }

}
