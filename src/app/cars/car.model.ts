export class Car {
    public maker: string;
    public year: number;
    public model: string;
    public imagePath: string;

    constructor(maker: string, year: number, model: string, imagePath: string) {
        this.maker = maker;
        this.year = year;
        this.model = model;
        this.imagePath = imagePath;
    }
}
