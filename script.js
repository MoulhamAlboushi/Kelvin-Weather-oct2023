// 293 kelvin is const
const Kelvin = 293;
// Celsius is (Kelvin - 273)
const Celsius = Kelvin - 273;
// Fahrenheit = Celsius * (9/5)+32
let Fahrenheit = Celsius * (9/5) + 32;
// console.log(Fahrnheit);
Fahrenheit = Math.floor(Fahrenheit);
console.log(`The temperature is  ${Fahrenheit} degrees`);
