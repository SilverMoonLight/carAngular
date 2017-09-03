import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CarService } from "app/cars/car.service";

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private carService: CarService, 
    private router: Router) { }

  ngOnInit() {
  }

}
