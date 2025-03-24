// class Car {
//     constructor(make, model, year) {
//       this.make = make;
//       this.model = model;
//       this.year = year;
//     }
  
//     getCarInfo() {
//       return `${this.year} ${this.make} ${this.model}`;
//     }
//   }
  
//   const myCar = new Car('Toyota', 'Corolla', 2020);
//   console.log(myCar.getCarInfo()); // Output: 2020 Toyota Corolla


// encapsulation

// class Student {
//     constructor(name, age) {
//       let _name = name; // Private variable
//       let _age = age;   // Private variable
  
//       this.getName = function () {
//         return _name;
//       };
  
//       this.getAge = function () {
//         return _age;
//       };
  
//       this.setAge = function (newAge) {
//         if (newAge > 0) {
//           _age = newAge;
//         } else {
//           console.log("Invalid age");
//         }
//       };
//     }
//   }
  
//   // Creating an object
//   const student1 = new Student("John", 20);
  
//   console.log(student1.getName()); // Output: John
//   console.log(student1.getAge());  // Output: 20
  
//   student1.setAge(25);
//   console.log(student1.getAge());  // Output: 25
  
//   student1.setAge(5); // Output: Invalid age
  

// abstraction

// class Car {
//     constructor(brand) {
//       this.brand = brand;
//     }
  
//     // Private method (not directly accessible)
//     #startEngine() {
//       return "Engine started!";
//     }// 
  
//     // Public method
//     drive() {
//       return `${this.brand} is moving. ${this.#startEngine()}`;
//     }
//   }
  
//   // Creating an object
//   const myCar = new Car("Tesla");
  
//   console.log(myCar.drive());  // Output: Tesla is moving. Engine started!
  
// //   console.log(myCar.#startEngine()); // Error: Private field '#startEngine' must be declared in an enclosing class
  
  
// inheritance

// Parent Class
// class Vehicle {
//     constructor(brand, speed) {
//       this.brand = brand;
//       this.speed = speed;
//     }
  
//     move() {
//       return `${this.brand} is moving at ${this.speed} km/h.`;
//     }
//   }
  
//   // Child Class inheriting from Vehicle
//   class Car extends Vehicle {
//     constructor(brand, speed, fuelType) {
//       super(brand, speed); // Calling the parent class constructor
//       this.fuelType = fuelType;
//     }
  
//     showFuelType() {
//       return `${this.brand} runs on ${this.fuelType}.`;
//     }
//   }

//   class Car1 extends Vehicle {
//     constructor(brand,speed){
//         super(brand,speed);  
//     }

//     showcar(){
//         return`${this.brand} runs on ${this.speed}`
//     }
// }
  
//   // Creating an object of the Child Class
//   const myCar = new Car("Tesla", 120, "Electric");
//   const myCar1 = new Car1("Tesla1", 1201, "Electric1");

  
//   console.log(myCar.move());          // Output: Tesla is moving at 120 km/h.
//   console.log(myCar.showFuelType());  // Output: Tesla runs on Electric.
//   console.log(myCar1.showcar())
  
// polymorphism

// class Animal {
//     makeSound() {
//       return "Some generic animal sound";
//     }
//   }
  
//   class Dog extends Animal {
//     makeSound() {
//       return "Woof! Woof!";
//     }
//   }
  
//   class Cat extends Animal {
//     makeSound() {
//       return "Meow! Meow!";
//     }
//   }
  
//   // Creating objects
//   const myDog = new Dog();
//   const myCat = new Cat();
  
//   console.log(myDog.makeSound()); // Output: Woof! Woof!
//   console.log(myCat.makeSound()); // Output: Meow! Meow!
  

// // callback
// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greet("Ajay", sayBye);

// promises

// let myPromise = new Promise((resolve, reject) => {
//     let foodReady = false; // Change to false to simulate failure

//     setTimeout(() => {
//         if (foodReady) {
//             resolve("Food is ready! 🍕");
//         } else {
//             reject("Sorry, we can't deliver your food. ❌");
//         }
//     }, 2000);
// });

// myPromise
//     .then((message) => console.log(message)) // Runs if resolved
//     .catch((error) => console.log(error)); // Runs if rejected


// let myPromise = new Promise((resolve, reject) => {

//     let x = 0;
//     if(x==0){
//         resolve("success");
//         console.log("success"); 
//     }
//     else{
//         reject("failure");
//         console.log("failure");
//     }
// }
// );



//with out the async and await

function fetchData() {
    fetch("https://dummyjson.com/recipes")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error fetching data:", error));
}

fetchData();


// using the async and awiat

// async function fetchData() {
//     try {
//         let response = await fetch("https://dummyjson.com/recipes");
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// fetchData();