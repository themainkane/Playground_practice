// let mph = prompt("Please enter the mph you wish to convert to kph");

// const mphToKph = (mph) => {
//   const conversion = 1.609344;
//   const kph = document.getElementById("kph");
//   kph.innerHTML = Math.floor(mph * conversion);
// };

// mphToKph(mph);

// sms = prompt("please enter your message here:");

// const noOfSms = (sms) => {
//   quantity = document.getElementById("quantity");
//   quantity.innerHTML = Math.ceil(sms.length / 160);
// };

// noOfSms(sms);

// const rollDice = () => {
//   result = document.getElementById("result");

//   result.innerHTML = Math.floor(Math.random() * 6) + 1;
// };

// const weather = "sunny";
// const clothing = document.getElementById("clothing");

// const whatToWear = (weather) => {
//   switch (weather) {
//     case "sunny":
//       clothing.innerHTML = "use sunscreen";
//       break;

//     case "windy":
//       clothing.innerHTML = "do not bring an umbrella";
//       break;

//     case "rainy":
//       clothing.innerHTML = " PLEASE bring an umbrella";
//       break;
//   }
// };

// const myInterest = document.querySelector(".my_interest");

// const calculateInterest = () => {
//   let i = parseFloat(document.querySelector('input[name="savings"]').value);
//   while (i < 2000) {
//     i = i * 1.28;
//     myInterest.innerHTML += `<li>${i}</li>`;
//     if (i > 2000) break;
//   }
// };

// // codewars bashing

// function duplicateCount(text){
//   for (let i = 0; i < text.length; i++) {
//        text[i] ===
//   }
// }

// console.log("Hello world");

// // alert("hello world");

// // prompt("hello world");

// const myGreeting = prompt("please enter your greeting");

// const greetConsole = (anything) => {
//   console.log(anything);
// };

// greetConsole(myGreeting);

// myBasket = [];

// const addToBasket = (obj) => {
//   myBasket.push(obj);
//   console.log(myBasket);
// };

// addToBasket("lemons");
// addToBasket("oranges");
// addToBasket("cigars");
// addToBasket("pens");

// console.log(typeof 123);
// console.log(typeof "boobies");

// console.log(typeof "false");

// console.log(typeof false);
// console.log(typeof true);

// let myUnicorn;

// console.log(typeof myUnicorn);

// myUnicorn = "Steve";

// console.log(typeof myUnicorn);

// console.log("My unicorn is called Steve. He files ever morning");

// console.log("my unicorn is called " + myUnicorn + " He files ever morning");

// console.log(`My unicorn is called ${myUnicorn}. He files ever morning`);

// console.log(1 + 1);

// console.log("Skylla" + "Charybdis");

// const oddOrEven = (n) => {
//   if (n % 2 === 0) {
//     console.log("even number");
//   } else {
//     console.log("odd number");
//   }
// };

// oddOrEven(25);
// oddOrEven(9464654);
// oddOrEven(12);
// oddOrEven(6321816545);

// const produceStatement = () => {
//   const myStatement = document.querySelectorAll("#statement");
//   myStatement.className = "statement";

//   myStatement.innerHTML = `<h2>Statement</h2>
// <p>
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ratione
//       porro consectetur eum sequi omnis repudiandae blanditiis exercitationem
//       accusamus ea aliquid aliquam, libero optio consequatur velit nostrum sit
//       molestias debitis voluptatum commodi? Perspiciatis, fuga magnam.
//     </p>`;
// };
// // produceStatement();

// const set_headline = () => {
//   const my_headline = document.getElementById("headline");

//   my_headline.innerHTML = "Javascript something";
// };

// const newFunction = (id, string) => {
//   const my_element = document.getElementById(id);

//   my_element.innerHTML = string;
// };

// newFunction("test", "We did it (maybe)");

// const urls = [];
// const altArray = [];
// const images = document.querySelectorAll(".gallery img");
// images.forEach((img) => {
//   let alt = img.getAttribute("alt");
//   let src = img.getAttribute("src");
//   urls.push(src);
//   altArray.push(alt);
// });

// console.log(altArray);

// console.log(urls);

// // const solution = (n) => {
// //   if (n > 0 && n < 4000) {
// //     if (n.length == 4) {
// //       switch (n[0]) {
// //         case 1:
// //       }
// //     }
// //   }
// // };

// // const zero = () => {};

// // const digitalRoute = (n) => {
// //   n.forEach((digit) => {});
// // };

// const isTriangle = (a, b, c) => {
//   if (a + b > c && a + c > b && b + c > a) {
//     return true;
//   } else if (a < 0 || b < 0 || c < 0) {
//     return false;
//   } else {
//     return false;
//   }
// };

const myData = [
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg",
    "London",
  ],
  ["https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg", "Paris"],
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg",
    "New York",
  ],
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg",
    "Nova Scotia",
  ],
  ["https://classes.codingbootcamp.cz/assets/classes/1428/tokyo.jpeg", "Tokyo"],
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg",
    "Venice",
  ],
];

const myGallery = document.getElementById("gallery");

const seedGallery = (arr) => {
  arr.forEach((e) => {
    myGallery.innerHTML += `<img src="${e[0]}" alt="${e[1]}" />`;
  });
};

// seedGallery(myData);

let dog = {
  name: "panda",
  tircks: ["sit", "wait", "pose", "lie"],
  age: 3,
};

// // console.log(dog.name);
// // console.log(dog.tircks[0]);

// for (let key in dog) {
//   console.log(dog[key]);
// }

// // for (let value of dog) {
// //   console.log(value);
// // }

// // console.log(Object.keys(dog));

// keys = Object.keys(dog);

// keys.forEach((key) => {
//   console.log(key);
// });

// let json_string = JSON.stringify(dog);

// console.log(json_string);

const calculator_functions = [
  (number1, number2) => {
    return number1 + number2;
  },

  (number1, number2) => {
    return number1 - number2;
  },
  //...
];

console.log(calculator_functions[1](4, 12));

const run = () => {
  return "running";
};

const move = (movement) => {
  return console.log(movement());
};

move(run);
