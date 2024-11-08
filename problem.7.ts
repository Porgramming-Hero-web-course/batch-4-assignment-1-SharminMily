//Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car{
    constructor(public make: string, public model: string, public year: number) {}

getCarAge(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

const car1 = new Car("Honda", "Civic", 2018);
const car2 = new Car("BMW", "GM23", 2023);
// console.log(car1.getCarAge()); 
// console.log(car2.getCarAge()); 