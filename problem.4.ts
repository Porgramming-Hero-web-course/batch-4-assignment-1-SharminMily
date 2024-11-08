// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = {shape: "circle"; radius: number};

type Rectangle = {shape: "rectangle"; width: number; height: number};

type Shape = Circle | Rectangle;

function CalculationShapeArea(shape: Shape)  : number{
    if(shape.shape === "circle"){
        let circleResult = parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
    return circleResult;
    } 
    else if (shape.shape === "rectangle"){
        return shape.width * shape.height
    }
    return 0;
}

// console.log(CalculationShapeArea({ shape: "circle", radius: 5 }))
// console.log(CalculationShapeArea({ shape: "rectangle", width: 4, height: 6 }))