import { Maker } from './maker.model';
import { Car } from 'app/cars/car.model';
import 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers, Jsonp } from "@angular/http";

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private jsonp: Jsonp) {}

    getCars() {
        return this.http.get('http://localhost:8060/Cars/cars');
            
    }

    updateCar(car: Car, maker: Maker) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.put('http://localhost:8060/Cars/car', {"id": car.id, "description": "Cool car", "imagePath": car.imagePath,"door": 4,
    "miles": 10, "year": car.year, "model": car.model, "passengers": 2, "price": 27000.00, "maker": { "id": maker.id, "name": maker.name } }, 
        options).subscribe((response: Response) => {
            console.log(response);
        });
    }

    addCar(car: Car, maker: Maker) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post('http://localhost:8060/Cars/car', {"description": "Cool car", "imagePath": car.imagePath,"door": 4,
    "miles": 10, "year": car.year, "model": car.model, "passengers": 2, "price": 27000.00, "maker": { "id": maker.id, "name": maker.name } }, 
        options).subscribe((response: Response) => {
    })
    }
    
    findMakerbyName(name: string) {
        return this.http.get('http://localhost:8060/Cars/maker?name=' + name).toPromise();
    }

    addMaker(name: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8060/Cars/maker', {'name':name}, options).toPromise();
    }

    deleteCar(car: Car) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, body: car });
        return this.http.delete('http://localhost:8060/Cars/car', options).toPromise();
    }
}