import { Maker } from './maker.model';


export class Car {
    public maker: Maker;
    public year: number;
    public model: string;
    public imagePath: string;
    public id: number;
    
    constructor(id: number, maker: Maker, year: number, model: string, imagePath: string) {
        this.id = id;
        this.maker = maker;
        this.year = year;
        this.model = model;
        this.imagePath = imagePath;
    }
}
