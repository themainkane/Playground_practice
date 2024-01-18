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

const myInterest = document.querySelector(".my_interest");

const calculateInterest = () => {
  let i = parseFloat(document.querySelector('input[name="savings"]').value);
  while (i < 2000) {
    i = i * 1.28;
    myInterest.innerHTML += `<li>${i}</li>`;
    if (i > 2000) break;
  }
};

// codewars bashing

function duplicateCount(text){
  for (let i = 0; i < text.length; i++) {
       text[i] ===
  }
}