

// ! תרגיל מסכם מהמצגת

//! 1 ///

class Car {

    numberWheels;
    engineCapacity;
    color;
    constructor(numberWheels, engineCapacity, color) {
        this.numberWheels = numberWheels;
        this.engineCapacity = engineCapacity;
        this.color = color;
    }

    returnToString() {
        return `${this.numberWheels}+${this.engineCapacity}+${this.color}`
    }

// ! 3 

    static showBigeerEngine(CarsArray) {
        let maxEngine = carArray[0]
        for (const items of CarsArray) {
            if (items.engineCapacity > maxEngine.engineCapacity) maxEngine = items;
        }
        return maxEngine
    }

// ! 3 


}

let car1 = new Car(4, 1800, "red");


console.log(car1.returnToString());

class Mercedes extends Car {
    constructor(numberWheels, engineCapacity, color) {
        super(numberWheels, engineCapacity, color)
    }
    returnExtends() {
        return `${super.returnToString()}+${this.constructor.name}`
    }

    // ! 2
   getMercedesNameUpperCase(){
       return this.constructor.name.toUpperCase()
   }

   get nameUpperCase(){
       return this.getMercedesNameUpperCase()
   }
    // ! 2

}

let car2 = new Mercedes(2, 3500, "black");

console.log(car2.returnExtends());

// ! 2
console.log(car2.nameUpperCase); //! הפעלה של פנוקציית get
// ! 2


class BMW extends Car {
    constructor(numberWheels, engineCapacity, color) {
        super(numberWheels, engineCapacity, color)
    }
    returnExtends() {
        return `${super.returnToString()}+${this.constructor.name}`
    }
}

let car3 = new BMW(4, 2500, "black");
console.log(car3.returnExtends());


class Tesla extends Car {
    constructor(numberWheels, engineCapacity, color) {
        super(numberWheels, engineCapacity, color)
    }
    returnExtends() {
        return `${super.returnToString()}+${this.constructor.name}`
    }
}

let car4 = new Tesla(4, 1600, "white");
console.log(car4.returnExtends());

// ! 3 

let carArray = [car1, car2, car3, car4];
console.log(Car.showBigeerEngine(carArray));

// ! 3 




// ! 4 

let Wheels = document.getElementById("Wheels");
let Engine = document.getElementById("Engine");
let color = document.getElementById("color");
let type = document.getElementById("type");
let btn = document.getElementById("btn");
let table = document.getElementById("table");

btn.onclick = () => {

    switch (type.value) {
        case "Mercedes":
            let newMercedes = new Mercedes(Wheels.value, Engine.value, color.value);
            table.innerHTML += `<tr><td>  Mercedes: </td> <td>${newMercedes.numberWheels} </td> <td>${newMercedes.engineCapacity} </td> <td>${newMercedes.color} </td> </tr>`


            break;

        case "BMW":
            let newBMW = new BMW(Wheels.value, Engine.value, color.value);
            table.innerHTML += `<tr><td>  BMW: </td> <td>${newBMW.numberWheels} </td> <td>${newBMW.engineCapacity} </td> <td>${newBMW.color} </td> </tr>`


            break;

        case "Tesla":
            let newTesla = new Tesla(Wheels.value, Engine.value, color.value);
            table.innerHTML += `<tr><td>  Tesla: </td> <td>${newTesla.numberWheels} </td> <td>${newTesla.engineCapacity} </td> <td>${newTesla.color} </td> </td></tr>`


            break;

        default:
            break;
    }
};







// ! 4 

